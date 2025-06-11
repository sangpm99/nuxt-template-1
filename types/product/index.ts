export interface Product {
  id: string;
  productName: string;
  description: string | null;
  regularPrice: number;
  salePrice: number | null;
  productCategory: string | null;
  productTags: string | null;
  mainMockupURL: string;
  mockupURLs: mockupURL[];
  quantity: number | null;
}

export interface mockupURL {
  imageURL: string;
  isPrimary: boolean;
}
