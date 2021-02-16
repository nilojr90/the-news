import { Multimedia } from 'models/top-stories.model';
import React from 'react';

interface INewsCardProps {
  source: Multimedia[];
}

const MultiImage: React.FC<INewsCardProps> = ({ source }: INewsCardProps) => {
  const srcSet = source
    .map((item) => {
      return `${item.url} ${item.width} w`;
    })
    .join(',\r\n');

  return (
    <figure>
      <img srcSet={srcSet} src={source[0].url} alt="" />
      <figcaption>{source[0].caption}</figcaption>
    </figure>
  );
};

export default MultiImage;
