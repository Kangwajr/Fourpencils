import { useState, useEffect } from 'react';
import { collection, query, QueryConstraint, getDocs, enableIndexedDbPersistence } from 'firebase/firestore';
import { db } from '../config/firebase';

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  console.warn('Firebase offline persistence error:', err);
});

interface UseFirestoreOptions {
  collectionName: string;
  queryConstraints?: QueryConstraint[];
}

export function useFirestore<T>({ collectionName, queryConstraints = [] }: UseFirestoreOptions) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, collectionName), ...queryConstraints);
        const querySnapshot = await getDocs(q);
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        
        setData(fetchedData);
        setError(null);
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
        setError('Unable to fetch data. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, queryConstraints]);

  return { data, loading, error };
}