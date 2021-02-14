import React, { useState, useEffect } from 'react';
import getNewsBySesion from 'services/top-stories';

const Home: React.FC = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewsBySesion('home')
        .then((r) => r)
        .catch((error) => console.log(error));

      console.log(response);
      if (response) {
        console.log(response.data.results);
        setNews(response.data);
      }
    };

    fetchData();
  }, []);

  return <h1>home</h1>;
};

export default Home;
