export interface IProductCard {
  reverse: boolean;
  productName: string;
  description: string;
  imageSrcSet: imageSrcSetType;
  isNew: boolean;
  btnOnClick?: () => void;
}

type imageSrcSetType = {
  mobile: string;
  tablet: string;
  desktop: string;
};
