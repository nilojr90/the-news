import React, { useState, useEffect } from 'react';
import getNewsBySesion from 'services/top-stories';
import { Article } from 'models/top-stories.model';
import NewsCard from 'components/news-card';

const Home: React.FC = () => {
  const [news, setNews] = useState<Article[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewsBySesion('')
        .then((sucess) => sucess)
        .catch((error) => error);

      if (response !== null) {
        const array: Article[] = response.data.results;
        setNews(array);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {news?.map((item: Article) => {
          return <NewsCard article={item} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
