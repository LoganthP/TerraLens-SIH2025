'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  analyzeSatelliteImage,
  AnalyzeSatelliteImageOutput,
} from '@/ai/flows/satellite-image-anomaly-detection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AlertCircle, CheckCircle, Loader2, Satellite, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Input } from '../ui/input';
import { subscribeToSites } from '@/lib/firebase/sites';
import type { MiningSite } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  miningSiteId: z.string().optional(),
  siteDescription: z.string().min(1, 'Site description is required.'),
  image: z.instanceof(File).optional(),
});

// Helper to convert File to data URI
function toDataURI(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function SatelliteImageAnalyzer() {
  const [analysis, setAnalysis] = useState<AnalyzeSatelliteImageOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [sites, setSites] = useState<MiningSite[]>([]);
  const [sitesLoading, setSitesLoading] = useState(true);
  const { toast } = useToast();
  const placeholderImage = PlaceHolderImages.find((img) => img.id === 'satellite-view-1')!;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      miningSiteId: '',
      siteDescription: 'An open-pit lithium mine in a semi-arid region, adjacent to a small reservoir and sparse vegetation.',
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

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
  
  const selectedSiteId = form.watch('miningSiteId');

  useEffect(() => {
    if (selectedSiteId) {
      const selectedSite = sites.find(site => site.id === selectedSiteId);
      if (selectedSite) {
        form.setValue('siteDescription', `An open-pit mine in ${selectedSite.location}. Operated by ${selectedSite.operator}.`);
      }
    }
  }, [selectedSiteId, sites, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.image) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please upload an image to analyze.',
      });
      return;
    }

    setIsLoading(true);
    setAnalysis(null);
    try {
      const dataUri = await toDataURI(values.image);
      const result = await analyzeSatelliteImage({
        imageUrl: dataUri,
        siteDescription: values.siteDescription,
      });
      setAnalysis(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to analyze satellite image.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue('image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Satellite Image Analyzer</CardTitle>
        <CardDescription>Detect environmental anomalies using satellite imagery.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="flex-grow space-y-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <Image
                src={imagePreview || placeholderImage.imageUrl}
                alt={imagePreview ? "Uploaded satellite view" : placeholderImage.description}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                data-ai-hint={placeholderImage.imageHint}
              />
            </div>
             <FormField
                control={form.control}
                name="image"
                render={() => (
                    <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl>
                           <div className="flex w-full items-center gap-2">
                                <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                                    <Upload className="mr-2 h-4 w-4" />
                                    Choose File
                                </Button>
                                <Input
                                    type="file"
                                    accept="image/png, image/jpeg, image/webp"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <span className="text-sm text-muted-foreground">
                                    {form.watch('image')?.name || 'No file selected'}
                                </span>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
              control={form.control}
              name="miningSiteId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mining Site (Optional)</FormLabel>
                   {sitesLoading ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a site to pre-fill data" />
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
              name="siteDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the mining site..." className="resize-none" {...field} />
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
                  Analyzing...
                </>
              ) : (
                <>
                  <Satellite className="mr-2 h-4 w-4" />
                  Analyze Image
                </>
              )}
            </Button>
            {analysis && (
              <Alert variant={analysis.anomalyDetected ? 'destructive' : 'default'}>
                {analysis.anomalyDetected ? (
                  <AlertCircle className="h-4 w-4" />
                ) : (
                  <CheckCircle className="h-4 w-4" />
                )}
                <AlertTitle>
                  {analysis.anomalyDetected ? 'Anomaly Detected' : 'No Anomalies Detected'}
                </AlertTitle>
                <AlertDescription>
                  {analysis.anomalyDescription}
                </AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
