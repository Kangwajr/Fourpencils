import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: Date;
}

export const useArtworks = (category?: string) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const q = category
          ? query(collection(db, 'artworks'), where('category', '==', category))
          : collection(db, 'artworks');
        
        const querySnapshot = await getDocs(q);
        const fetchedArtworks = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Artwork[];
        
        setArtworks(fetchedArtworks);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [category]);

  return { artworks, loading };
};