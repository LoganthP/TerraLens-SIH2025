'use client';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  FirestoreError,
} from 'firebase/firestore';
import { db } from './firebase';
import type { MiningSite } from '../types';

const SITES_COLLECTION = 'sites';

export function subscribeToSites(
  onUpdate: (sites: MiningSite[]) => void,
  onError: (error: FirestoreError) => void
) {
  const q = query(collection(db, SITES_COLLECTION), orderBy('name'));

  const unsubscribe = onSnapshot(
    q,
    (querySnapshot) => {
      const sites: MiningSite[] = [];
      querySnapshot.forEach((doc) => {
        sites.push({ id: doc.id, ...doc.data() } as MiningSite);
      });
      onUpdate(sites);
    },
    (error) => {
      console.error('Error fetching sites:', error);
      onError(error);
    }
  );

  return unsubscribe;
}

export function addSite(site: Omit<MiningSite, 'id'>) {
  addDoc(collection(db, SITES_COLLECTION), site).catch(error => {
    console.error('Error adding document: ', error);
    // We can add more robust error handling here, like a global toast.
  });
}

export function updateSite(site: MiningSite) {
  if (!site.id) {
    throw new Error('Site ID is required to update.');
  }
  const { id, ...siteData } = site;
  const siteRef = doc(db, SITES_COLLECTION, id);
  updateDoc(siteRef, siteData).catch(error => {
    console.error('Error updating document: ', error);
  });
}

export async function deleteSite(siteId: string): Promise<void> {
  try {
    const siteRef = doc(db, SITES_COLLECTION, siteId);
    await deleteDoc(siteRef);
  } catch (error) {
    console.error('Error deleting document: ', error);
    throw new Error('Failed to delete site.');
  }
}
