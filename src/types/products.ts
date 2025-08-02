export type ProductType = {
  id: string;
  product_code: string;
  name: string;
  category_id: string;
  unit: string;
  min_quantity: number;
  current_quantity: number;
  price: number;
  owner_id: string;
  supplier_id: string;
  status: "active" | "inactive" | "out_of_stock";
  suppliers: {
    name: string;
  };
  categories: {
    name: string;
  };
};
