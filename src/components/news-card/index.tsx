import React from 'react';
import { Article } from 'models/top-stories.model';
import MultiImage from 'components/multi-image';

interface INewsCardProps {
  article: Article;
}

const NewsCard: React.FC<INewsCardProps> = ({ article }: INewsCardProps) => {
  const { subsection, short_url: url, title, abstract, multimedia } = article;
  return (
    <li key={url} className="news-card">
      <h5>{subsection}</h5>
      <h2>{title}</h2>
      <MultiImage source={multimedia} />
      <p>{abstract}</p>
      <a href={url}>Ver mais...</a>
    </li>
  );
};

export default NewsCard;
