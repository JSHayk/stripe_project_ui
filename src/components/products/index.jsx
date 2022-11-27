import "./index.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import $api from "../../api";
import ProductItem from "./ProductItem";
import { addProducts } from "../../store/slices/products-slice/productsSlice";

const Products = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await $api.get("/products");
        dispatch(addProducts(data));
      } catch (err) {
        throw new Error(err);
      }
    };
    getProducts();
  }, [dispatch]);

  return (
    <section className="products">
      {!data ? (
        <p>No product</p>
      ) : (
        data.map((item) => {
          return <ProductItem key={item._id} product={item} />;
        })
      )}
    </section>
  );
};

export default Products;
