export default interface TopStoriesApiResponse {
  status: string;
  copyright: string;
  section: string;
  last_updated: any;
  num_results: number;
  results: Article[];
}

export interface Article {
  section: Abstract;
  subsection: Abstract;
  title: Abstract;
  abstract: Abstract;
  url: Abstract;
  short_url: string;
  byline: Abstract;
  thumbnail_standard: Abstract;
  item_type: Abstract;
  source: Abstract;
  updated_date: Abstract;
  created_date: Abstract;
  published_date: Abstract;
  material_type_facet: Abstract;
  kicker: Abstract;
  headline: Abstract;
  des_facet: Facet;
  org_facet: Abstract;
  per_facet: Facet;
  geo_facet: Facet;
  blog_name: Abstract;
  related_urls: RelatedUrls;
  multimedia: [Multimedia];
}

export interface Abstract {
  type: Type;
}

export enum Type {
  String = 'string',
}

export interface Facet {
  type: string;
  items: Abstract;
}

export interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export interface RelatedUrls {
  type: string;
  items: RelatedUrlsItems;
}

export interface RelatedUrlsItems {
  type: string;
  properties: FluffyProperties;
}

export interface FluffyProperties {
  suggested_link_text: Abstract;
  url: Abstract;
}
