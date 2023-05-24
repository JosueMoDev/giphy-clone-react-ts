export interface CategoryInitialState {
  categories: Category[];
  subcategories: Subcategory[];
  selected: any;
}
interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  name: string;
}
