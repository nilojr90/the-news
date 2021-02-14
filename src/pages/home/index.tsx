import React, { useState, useEffect } from 'react';
import getNewsBySesion from 'services/top-stories';

const Home: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewsBySesion('home').then((r) => r);

      if (response) {
        setNews(response.data.results);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>home</h1>
      <ul>
        {news.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
