export type TDish = {
  id: string;
  name: string;
  description: string;
  price: number;
  thumbnail?: string;
  recommended?: boolean;
  vegan?: boolean;
  spicy?: boolean;
};

export type TCategory = {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string;
  dishes: TDish[];
};
