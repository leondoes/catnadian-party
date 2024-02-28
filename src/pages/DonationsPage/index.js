import React, { useState, useEffect } from 'react';
import catNamesData from '../../assets/cat_names.json';
import locations from '../../assets/locations.json';
import { DonationsContainer, DonationsItem, ImageTitle, CatImage } from './styled.js';

const Donations = () => {
  const [images, setImages] = useState([]);

  const fetchImage = () => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=1'; // Fetching one image at a time

    fetch(apiUrl, {
      headers: {
        'x-api-key': process.env.REACT_APP_CAT_API_KEY // Use your API key from .env
      }
    })
    .then(res => res.json())
    .then(data => {
      const cat = data[0]; // Assuming one image is fetched
      const randomCatName = catNamesData.cat_names[Math.floor(Math.random() * catNamesData.cat_names.length)];
      const provinces = Object.keys(locations.Canada);
      const randomProvinceIndex = Math.floor(Math.random() * provinces.length);
      const randomProvince = provinces[randomProvinceIndex];
      const cities = locations.Canada[randomProvince];
      const randomCityIndex = Math.floor(Math.random() * cities.length);
      const randomCity = cities[randomCityIndex];
      const donationAmount = Math.round(Math.random() * (1700 - 20) + 20);
      const title = `${randomCatName} has donated $${donationAmount} from ${randomCity}, ${randomProvince}`;

      const newImage = {
        id: cat.id,
        title: title,
        url: cat.url
      };

      // Add the new image to the start of the array and remove the last one if necessary
      setImages(prevImages => [newImage, ...prevImages.slice(0, 9)]);
    })
    .catch(error => {
      console.error('Error fetching data from TheCatAPI', error);
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchImage();
    }, Math.random() * 9000 + 1000); // Between 1 and 10 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <DonationsContainer>
      {images.map((image, index) => (
        <DonationsItem key={image.id} style={{ transform: `translateX(-${index * 100}%)` }}>
          <ImageTitle>{image.title}</ImageTitle>
          <CatImage src={image.url} alt={image.title} />
        </DonationsItem>
      ))}
    </DonationsContainer>
  );
};

export default Donations;
