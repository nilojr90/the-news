import React, { useState, useEffect } from 'react';
import getNewsBySesion from 'services/top-stories';
import { Article } from 'models/top-stories.model';

const Home: React.FC = () => {
  const [news, setNews] = useState<Article[] | undefined>(undefined);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewsBySesion('')
        .then((sucess) => sucess)
        .catch((error) => error);

      if (response !== null) {
        setCount(response.data.num_results);
        const array: Article[] = response.data.results;
        setNews(array);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1> home - {count}</h1>
      <ul>
        {news?.map((item) => {
          return (
            <li key={item.short_url}>
              <h2>{item.title}</h2>
              <p>{item.abstract}</p>
              <a href={item.short_url}>Ver mais...</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
