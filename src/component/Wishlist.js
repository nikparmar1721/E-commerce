import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWish, removeItem } from "../store/slices/wishlistSlices";

const Wishlist = () => {
  const { isWishOpen, wishItems } = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  const handleCloseWish = (close) => {
    dispatch(toggleWish(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const wishQuantity = wishItems.length;
  return (
    <>
      {isWishOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
                Wishlist <small>({wishQuantity})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleCloseWish(false)}
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="cart_body">
              {wishQuantity === 0 ? (
                <h2>Wish is empty</h2>
              ) : (
                wishItems.map((item) => {
                  const { id, img, title } = item;

                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        <img src={img} alt="product-img" />
                      </figure>

                      <div className="cart_items_img">
                        <h4>{title}</h4>
                      </div>

                      <div
                        title="Remove Item"
                        className="cart_items_delete"
                        onClick={() => handleRemove(id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
