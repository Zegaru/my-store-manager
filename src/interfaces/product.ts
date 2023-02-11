export interface IImage {
  name: string;
  url: string;
}

export interface ITag {
  _id: string;
  name: string;
  slug: string;
}

export interface IColor {
  _id: string;
  name: string;
  color: string;
  code: string;
}

export interface IDetail {
  name: string;
  value: string;
}

export interface IFilter {
  _id: string;
  name: string;
  options: string[];
}

export interface IProductFilter {
  filter: {
    _id: string;
    name: string;
    options: string[];
  };
  options: string[];
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  images: IImage[];
  tags: ITag[];
  colors: IColor[];
  details_list: IDetail[];

  created_by: {
    _id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}
