import http from "@/api/index";

export const getWishlistLike = async (page, limit) => {
  try {
    const response = await http.get(`/wishlist?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};


export const like = async (productId) => {
  try{
    await http.post(`/like/${productId}`);
  }catch (error) {
    console.log("Error liking the product:", error);
  }
};
