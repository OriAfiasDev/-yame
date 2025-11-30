export type TDish = {
  id: string;
  name: LangObject;
  description: LangObject;
  price: number;
  thumbnail?: string;
  recommended?: boolean;
  vegan?: boolean;
  spicy?: boolean;
  order?: number;
};

export type TCategory = {
  id: string;
  name: LangObject;
  description?: LangObject;
  thumbnail?: string;
  dishes: TDish[];
  order?: number;
};

type LangObject = {
  he: string;
  en: string;
  ru: string;
  fr: string;
  ar: string;
};
