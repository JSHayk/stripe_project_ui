import { useCallback } from "react";
import $api from "../../api/index";

const ProductItem = ({ product }) => {
  const { title, price, description, image_url } = product;
  const buyProduct = useCallback(async () => {
    try {
      const { data } = await $api.post("/products/buy", {
        name: title,
        price,
        quantity: 1,
      });
      window.location.href = data.payment_url;
    } catch (err) {
      throw new Error(err);
    }
  }, [price, title]);

  const generatePrice = useCallback(() => {
    return (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }, [price]);
  return (
    <div className="product">
      <img className="product-image" src={image_url} alt="product" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">{generatePrice(price)}</p>
      <button className="product-button" onClick={buyProduct}>
        Buy
      </button>
    </div>
  );
};

export default ProductItem;
