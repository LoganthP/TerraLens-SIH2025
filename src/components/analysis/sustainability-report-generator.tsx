'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  generateSustainabilityReport,
  GenerateSustainabilityReportOutput,
} from '@/ai/flows/automated-sustainability-reports';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';
import { subscribeToSites } from '@/lib/firebase/sites';
import type { MiningSite } from '@/lib/types';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  miningSiteId: z.string().min(1, 'Please select a mining site.'),
  reportFormat: z.enum(['PDF', 'CSV']),
  environmentalData: z.string().optional(),
  siteMetrics: z.string().optional(),
});

export default function SustainabilityReportGenerator() {
  const [report, setReport] = useState<GenerateSustainabilityReportOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sites, setSites] = useState<MiningSite[]>([]);
  const [sitesLoading, setSitesLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = subscribeToSites(
      (sites) => {
        setSites(sites);
        setSitesLoading(false);
      },
      (error) => {
        console.error('Error fetching sites:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to fetch mining sites.',
        });
        setSitesLoading(false);
      }
    );
    return () => unsubscribe();
  }, [toast]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      miningSiteId: '',
      reportFormat: 'PDF',
      environmentalData: 'Air Quality: 45 AQI, Water pH: 7.2',
      siteMetrics: 'Extraction Rate: 1200 tons/day, Energy Use: 150 MWh/day',
    },
  });

  const selectedSiteId = form.watch('miningSiteId');

  useEffect(() => {
    if (selectedSiteId) {
      const selectedSite = sites.find(site => site.id === selectedSiteId);
      if (selectedSite) {
        form.setValue('siteMetrics', `Extraction Rate: ${selectedSite.operationalData.extractionRate} tons/day, Energy Use: ${selectedSite.operationalData.energyConsumption} MWh/day, Water Usage: ${selectedSite.operationalData.waterUsage} m³/day`);
      }
    }
  }, [selectedSiteId, sites, form]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setReport(null);
    try {
      const result = await generateSustainabilityReport(values);
      setReport(result);
    } catch (error) {
      console.error('Error generating report:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate sustainability report.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Sustainability Report Generator</CardTitle>
        <CardDescription>Automatically generate reports for existing sites.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="flex-grow space-y-4">
            <FormField
              control={form.control}
              name="miningSiteId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mining Site</FormLabel>
                  {sitesLoading ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a site" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {sites.map((site) => (
                           <SelectItem key={site.id} value={site.id!}>
                            {site.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reportFormat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Format</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="PDF">PDF</SelectItem>
                      <SelectItem value="CSV">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="environmentalData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Environmental Data (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter environmental data..." className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="siteMetrics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Metrics (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter site metrics..." className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Report'
              )}
            </Button>
            {report && (
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <FileText className="h-4 w-4" />
                    Generated Report ({report.reportFormat})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-48 w-full rounded-md border p-4 font-mono text-xs">
                    <pre className="whitespace-pre-wrap">{report.reportContent}</pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
