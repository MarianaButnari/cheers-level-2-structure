export interface Cocktail {
  id: string;
  name: string;
  isAlcoholic: boolean | string;
  imageUrl: string;
  instructions: string;
  ingredients: string[];
}
