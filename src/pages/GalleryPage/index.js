import React, { useState, useEffect } from 'react';
import catNamesData from '../../assets/cat_names.json';
import locations from '../../assets/locations.json';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
    
    fetch(apiUrl, {
      headers: {
        'x-api-key': process.env.REACT_APP_CAT_API_KEY // Use your API key from .env
      }
    })
    .then(res => res.json())
    .then(data => {
      const transformedData = data.map(cat => {
        // Randomly select a cat name
        const randomCatName = catNamesData.cat_names[Math.floor(Math.random() * catNamesData.cat_names.length)];

        // Randomly select a province
        const provinces = Object.keys(locations.Canada);
        const randomProvince = provinces[Math.floor(Math.random() * provinces.length)];

        // Randomly select a city within the selected province
        const cities = locations.Canada[randomProvince];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];

        // Generate a random donation amount
        const donationAmount = Math.round(Math.random() * (1700 - 20) + 20);

        // Construct the title with the cat name, donation amount, city, and province
        const title = `${randomCatName} has donated $${donationAmount} from ${randomCity}, ${randomProvince}`;

        return {
          id: cat.id,
          title: title,
          url: cat.url
        };
      });
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
