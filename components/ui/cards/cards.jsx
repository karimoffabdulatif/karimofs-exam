"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Bag from "@/public/Bag.svg";
import Case from "@/public/Shopping_Icon.svg";
import { getProductApi } from "@/sevice/product.service";
import { Box } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";
import { like } from "@/sevice/wishlist.sevice";
import basket from "@/sevice/basket.prosuct";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [likedItems, setLikedItems] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleLike = async (productId) => {
    try {
      const updatedData = data.map((item) =>
        item.product_id === productId ? { ...item, liked: !item.liked } : item
      );

      setData(updatedData);

      const isLiked = updatedData.find(
        (item) => item.product_id === productId
      )?.liked;
      const updatedLikedItems = isLiked
        ? [...likedItems, productId]
        : likedItems.filter((itemId) => itemId !== productId);

      setLikedItems(updatedLikedItems);
      localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));

      const response = await like(productId);
      console.log("Like Response:", response);

      if (response.data === true) {
        setSnackbarMessage("Product liked successfully.");
        setSnackbarSeverity("success");
      } else {
        setSnackbarMessage("Failed to like product.");
        setSnackbarSeverity("error");
      }

      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error liking product:", error);
      const revertData = data.map((item) =>
        item.product_id === productId ? { ...item, liked: !item.liked } : item
      );
      setData(revertData);

      const revertLikedItems = likedItems.filter(
        (itemId) => itemId !== productId
      );
      setLikedItems(revertLikedItems);
      localStorage.setItem("likedItems", JSON.stringify(revertLikedItems));

      setSnackbarMessage("An error occurred while liking product.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const getData = async () => {
    try {
      const response = await getProductApi(4, 1);
      if (response.status === 200) {
        const productsWithLikeState = response.data.products.map((product) => ({
          ...product,
          liked: false,
        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket = async (product_id) => {
    try {
      const product = { productId: product_id, quantity: 1 };
      const response = await basket.post(product);
      console.log("Basket Response:", response);

      if (response.data === true) {
        setSnackbarMessage("Product added to basket successfully.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      } else {
        console.error("Failed to add product to basket:", response);
        setSnackbarMessage("Failed to add product to basket.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.log(error);
      setSnackbarMessage("An error occurred while adding product to basket.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <section className="pl-2 lg:pl-0 mb-[18px]">
      <div className="flex flex-wrap justify-between gap-4">
        {data.map((product) => (
          <div
            key={product.product_id}
            className="w-[270px] bg-white rounded-t-md relative pt-4 mb-4"
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(product.product_id);
              }}
              className="absolute top-2 right-2 p-1"
              style={{
                minWidth: "unset",
                padding: "0",
                color: product.liked ? "red" : "white",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {product.liked ? (
                <FavoriteIcon style={{ color: "red", fontSize: 24 }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "black", fontSize: 24 }} />
              )}
            </Button>
            <div className="flex justify-center">
              <Box
                sx={{
                  mt: "15px",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <div className="relative w-[200px] h-[170px]">
                  <Link href={`/products/${product.product_id}`}>
                    <Image
                      src={product.image_url[1] || Bag}
                      alt="Product Image"
                      className="object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                      layout="fill"
                    />
                  </Link>
                </div>
              </Box>
            </div>
            <div className="ml-[20px] mt-[10px]">
              <p className="text-[17px] h-[50px] mb-[20px] font-sans w-[216px] font-medium">
                {product.product_name}
              </p>
              <p className="text-[20px] mb-[20px] text-[#FF1313] font-sans font-bold mt-[5px]">
                {product.cost}{" "}
                <span className="text-[18px] font-medium">uzs</span>
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToBasket(product.product_id);
              }}
              className="korzinka flex w-[270px] p-4 rounded-b-md bg-[#FBD029] items-center justify-center font-normal hover:bg-[#dcbb4e]"
            >
              <Image src={Case} alt="Shop_Icon" />
              Корзина
            </button>
          </div>
        ))}
        {loading && <div className="flex justify-center mt-4">Loading...</div>}
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Index;
