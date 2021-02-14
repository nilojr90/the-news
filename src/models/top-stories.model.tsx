export default interface TopStoriesApiResponse {
  status: string;
  copyright: string;
  section: string;
  "last_updated": Date;
  "num_results": number;
  results: Article[];
}

export interface Article {
  type: string;
  properties: ArticleProperties;
}

export interface ArticleProperties {
  section: Abstract;
  subsection: Abstract;
  title: Abstract;
  abstract: Abstract;
  url: Abstract;
  short_url: Abstract;
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
  multimedia: Multimedia;
}

export interface Abstract {
  type: Type;
}

export enum Type {
  Integer = 'integer',
  String = 'string',
}

export interface Facet {
  type: string;
  items: Abstract;
}

export interface Multimedia {
  type: string;
  items: MultimediaItems;
}

export interface MultimediaItems {
  type: string;
  properties: PurpleProperties;
}

export interface PurpleProperties {
  url: Abstract;
  format: Abstract;
  height: Abstract;
  width: Abstract;
  type: Abstract;
  subtype: Abstract;
  caption: Abstract;
  copyright: Abstract;
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
