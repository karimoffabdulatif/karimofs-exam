import http from "@/api/index";

export const getProductApi = ()=>{
    return http.get(`/products?page=1&limit=10`)
}

export const getProductId = async (product_id) => {
    try {
      const response = await http.get(`/product/${product_id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw error;
    }
  };