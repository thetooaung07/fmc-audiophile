export interface IProductCard {
  reverse: boolean;
  productName: string;
  description: string;
  imageSrcSet: imageSrcSetType;
  isNew: boolean;
  btnOnClick: () => void;
}
export type ButtonType = {
  onClick: () => void;
  label?: string;
  buttonStyle?: string;
  inverse?: boolean;
};
export type PlusMinusBtnType = {
  quantity: number;
  operatorStyles?: string;
  countStyle?: string;
};
export type HomePageBodyCardType = {
  imageUrl: string;
  title: string;
  goToUrl: string;
  callBackOnClick?: () => void;
  styles?: string;
};
export type InTheBoxItemType = {
  count: number;
  item: string;
};

export interface IPictureSourceComponent {
  imgClassName: string;
  imageSrcSet: imageSrcSetType;
  pictureClassName: string;
}

export interface IProductDetailsCard {
  reverse: boolean;
  product: Product;
  btnOnClick: () => void;
  quantity: number;
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
