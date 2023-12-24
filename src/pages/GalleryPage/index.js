import React, { useState, useEffect } from 'react';

// Dummy data - replace with real API or data source
const catImages = [
  { id: 1, title: "Cat Prime Minister", url: "path/to/cat1.jpg" },
];

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from an API or use static data
    setImages(catImages);
    // In a real app, you might fetch from an API like this:
    // fetch('/api/cat-images').then(res => res.json()).then(setImages)
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <h2>{image.title}</h2>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
