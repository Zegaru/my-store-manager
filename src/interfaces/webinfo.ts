import {IImage} from './product';

export interface IInfo {
  name: string;
  slug: string;
  kind?: 'text' | 'image' | 'both';
  imageMax?: number;
  description?: string;
}

export interface IWebInfo {
  name: string;
  slug: string;
  value?: string;
  images?: IImage[];
}
