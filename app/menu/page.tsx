import { LangObject, TCategory } from "./types";
import MenuClient from "./MenuClient";
import { supabase } from "../supabase";

async function getFullMenuData(): Promise<TCategory[]> {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
      id,
      thumbnail,
      order,
      category_translations (
        language_code,
        name,
        description
      ),
      dishes (
        id,
        price,
        thumbnail,
        recommended,
        vegan,
        spicy,
        order,
        dish_translations (
          language_code,
          name,
          description
        )
      )
    `
    )
    .order("order", { ascending: true });

  if (error) throw error;

  return data.map((category) => ({
    id: category.id,
    thumbnail: category.thumbnail,
    order: category.order,
    name: category.category_translations.reduce((acc, t) => {
      acc[t.language_code as keyof LangObject] = t.name;
      return acc;
    }, {} as LangObject),
    description: category.category_translations.reduce((acc, t) => {
      acc[t.language_code as keyof LangObject] = t.description || "";
      return acc;
    }, {} as LangObject),
    dishes: category.dishes.map((dish) => ({
      id: dish.id,
      price: dish.price,
      thumbnail: dish.thumbnail,
      recommended: dish.recommended,
      vegan: dish.vegan,
      spicy: dish.spicy,
      order: dish.order,
      name: dish.dish_translations.reduce((acc, t) => {
        acc[t.language_code as keyof LangObject] = t.name;
        return acc;
      }, {} as LangObject),
      description: dish.dish_translations.reduce((acc, t) => {
        acc[t.language_code as keyof LangObject] = t.description || "";
        return acc;
      }, {} as LangObject),
    })),
  }));
}

export default async function Menu() {
  const menuData: TCategory[] = await getFullMenuData();

  return <MenuClient menuData={menuData} />;
}
