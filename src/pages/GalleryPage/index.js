import React, { useState, useEffect } from 'react';
import catNamesData from '../../assets/cat_names.json';
import locations from '../../assets/locations.json';
import { GalleryContainer, GalleryItem, ImageTitle, CatImage } from './styled.js';

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
        const randomCatName = catNamesData.cat_names[Math.floor(Math.random() * catNamesData.cat_names.length)];
        const provinces = Object.keys(locations.Canada);
        const randomProvinceIndex = Math.floor(Math.random() * provinces.length);
        const randomProvince = provinces[randomProvinceIndex];
        const cities = locations.Canada[randomProvince];
        const randomCityIndex = Math.floor(Math.random() * cities.length);
        const randomCity = cities[randomCityIndex];
        const donationAmount = Math.round(Math.random() * (1700 - 20) + 20);
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
    <GalleryContainer>
      {images.map((image) => (
        <GalleryItem key={image.id}>
          <ImageTitle>{image.title}</ImageTitle>
          <CatImage src={image.url} alt={image.title} />
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
