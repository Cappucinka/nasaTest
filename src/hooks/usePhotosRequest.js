import { useState, useEffect } from 'react';

export const usePhotosRequest = ({ url }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const newImages = result.photos.map((photo) => {
          return { id: photo.id, src: photo.img_src };
        });
        setImages(newImages);
        setLoading(false);
      });
  }, [url]);
  return { images, loading };
};
