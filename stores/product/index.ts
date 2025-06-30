import type { SearchQuery } from "@/types/product";

export const useProductStore = defineStore("product", () => {
  const filter = ref<SearchQuery>({
    searchValue: "",
    category: "",
    sort: "",
    price: {
      min: 0,
      max: 0,
    },
    pageIndex: 1,
    pageSize: 20,
  });

  const getProducts = async () => {};

  const getProduct = async (id: string) => {};
  return { filter, getProducts, getProduct };
});
