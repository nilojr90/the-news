import { Multimedia } from 'models/top-stories.model';
import React from 'react';

interface INewsCardProps {
  source: Multimedia[];
}

const MultiImage: React.FC<INewsCardProps> = ({ source }: INewsCardProps) => {
  const srcSet = source
    .filter((item) => item.format !== 'superJumbo')
    .map((item) => {
      return `${item.url} ${item.width}w`;
    })
    .join(', ');

  return (
    <figure>
      <img
        src={source.filter((item) => item.format === 'Normal')[0].url}
        srcSet={srcSet}
        alt=""
      />
      <figcaption>{source[0].caption}</figcaption>
    </figure>
  );
};

export default MultiImage;
