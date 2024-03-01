import React, { useState, useEffect } from 'react';
import catNamesData from '../../assets/cat_names.json';
import locations from '../../assets/locations.json';
import YarnBall from '../../assets/YarnBall.svg';
import { DonationsContainer, DonationsItem, ImageTitle, CatImage, LoadingIndicator } from './styled.js';

const Donations = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const fetchImage = () => {
    setIsLoading(true); // Start loading
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=1';

    fetch(apiUrl, {
      headers: {
        'x-api-key': process.env.REACT_APP_CAT_API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      const cat = data[0];
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

      setImages(prevImages => [newImage, ...prevImages.slice(0, 9)]);
      setIsLoading(false); // End loading
    })
    .catch(error => {
      console.error('Error fetching data from TheCatAPI', error);
      setIsLoading(false); // End loading even if there's an error
    });
  };

  useEffect(() => {
    fetchImage(); // Fetch the first image immediately on mount
    const intervalId = setInterval(() => {
      fetchImage();
    }, Math.random() * 5000 + 5000); // Between 1 and 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DonationsContainer>
      {isLoading ? (
       <LoadingIndicator>
       <img src={YarnBall} alt="Loading..." />
     </LoadingIndicator>
      ) : (
        images.map((image, index) => (
          <DonationsItem key={image.id} style={{ transform: `translateX(-${index * 100}%)` }}>
            <ImageTitle>{image.title}</ImageTitle>
            <CatImage src={image.url} alt={image.title} />
          </DonationsItem>
        ))
      )}
    </DonationsContainer>
  );
};

export default Donations;
