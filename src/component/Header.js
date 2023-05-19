import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/slices/cartSlices";
import { toggleWish } from "../store/slices/wishlistSlices";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishItems } = useSelector((state) => state.wish);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const handleOpenWish = (open) => {
    dispatch(toggleWish(open));
  };

  const cartQuantity = cartItems.length;
  const wishQuantity = wishItems.length;
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h4>Electronic Store</h4>
            <Link to="/">Home</Link>

            {/* LINK */}

            <Link to="tv">Tv</Link>
            <Link to="iphone">Mobile</Link>
            <Link to="airdopes">Airdopes</Link>
            <Link to="/login">Log in</Link>

            {/* Wishlist */}

            <div className="nav_menu">
              <div className="wish_icon">
                <div onClick={() => handleOpenWish(true)}>
                  <BsHeart />
                  <sup>
                    <span className="badge">{wishQuantity}</span>
                  </sup>
                </div>
              </div>

              {/* Cart */}

              <div
                title="Cart"
                className="cart_icon"
                onClick={() => handleOpenCart(true)}
              >
                <img src="/images/bag-icon.svg" alt="bag-icon" />
                <sup>
                  <span className="badge">{cartQuantity}</span>
                </sup>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
