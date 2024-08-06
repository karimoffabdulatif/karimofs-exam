import http from "@/api/index";

const basket = {
  get: () => http.get("/user-baskets"),
  post: (product) => http.post("/basket", product),
  delete: (productId) => http.post("/basket", { productId }),
};

export default basket;

