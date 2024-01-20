import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // URL for TheCatAPI
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
    
    // Fetch images from TheCatAPI
    fetch(apiUrl, {
      headers: {
        'x-api-key': process.env.REACT_APP_CAT_API_KEY // Use your API key from .env
      }
    })
    .then(res => res.json())
    .then(data => {
      // Transform the data into the format expected by your gallery
      const transformedData = data.map(cat => ({
        id: cat.id,
        title: `Cat #${cat.id}`, // You can modify the title as you like
        url: cat.url
      }));
      setImages(transformedData);
    })
    .catch(error => {
      console.error('Error fetching data from TheCatAPI', error);
    });
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
