import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlices";
import { addId } from "../store/slices/wishlistSlices";
import { BsHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const ProductsCard = (props) => {
  const { img, title, price, rating, color } = props;

  const [isAdded, setIsAdded] = useState(false);
  const [heart, setHeart] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleAddToWish = () => {
    const item1 = { ...props };
    dispatch(addId(item1));
    setHeart(true);
    setTimeout(() => {
      setHeart(false);
    }, 1000);
  };

  return (
    <>
      <div className="product_card">
        <figure>
          <img src={img} alt="item-img" id="set-image" />
          {heart ? (
            <AiFillHeart
              style={{ color: "red" }}
              className="heart-icon"
              onClick={handleAddToWish}
            />
          ) : (
            <BsHeart className="heart-icon" onClick={handleAddToWish} />
          )}
        </figure>
        <h3 className="rating">{rating}</h3>
        <h3 className="title">{title}</h3>
        <h3 className="color">{color}</h3>
        <h3 className="price">₹{price}</h3>
        <button type="button" className="btn" onClick={handleAddToCart}>
          {isAdded ? "Added" : "Add to cart"}
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
