import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { getCategoryById } from '../data/galleryData';

export default function GalleryPage() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [categoryId]);

  return <Gallery category={category} />;
}
