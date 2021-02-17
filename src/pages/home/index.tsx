import React, { useState, useEffect } from 'react';
import getNewsBySesion from 'services/top-stories';
import { Article } from 'models/top-stories.model';
import NewsCard from 'components/news-card';

const Home: React.FC = () => {
  const [news, setNews] = useState<Article[] | undefined>(undefined);
  const [limit, setLimit] = useState(3);

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
        {news
          ?.filter((item, index) => index < limit)
          .map((item: Article) => {
            return <NewsCard key={item.short_url} article={item} />;
          })}
      </ul>
      <button
        type="button"
        onClick={() => {
          setLimit(limit + 3);
        }}
      >
        Mais...
      </button>
    </div>
  );
};

export default Home;
