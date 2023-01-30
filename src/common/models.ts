export interface IProductCard {
  reverse: boolean;
  productName: string;
  description: string;
  imageSrcSet: imageSrcSetType;
  isNew: boolean;
  btnOnClick: () => void;
}

export interface IProductDetailsCard {
  reverse: boolean;
  productName: string;
  description: string;
  imageSrcSet: imageSrcSetType;
  isNew: boolean;
  btnOnClick: () => void;
  quantity: number;
  price: number;
}

export type imageSrcSetType = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: CategoryImage;
  cartImage: string;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: IncludedItem[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}
