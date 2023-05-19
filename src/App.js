import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Login from "./firebase/Login";
import Signup from "./firebase/Signup";
import Home1 from "./firebase/Home1";
import { auth } from "./firebase/firebase";
import Header from "./component/Header";
import Home from "./pages/Home";
import Wishlist from "./component/Wishlist";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import store from "./store/store";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tv from "./component/Tv";
import Airdopes from "./component/Airdopes";
import Iphone from "./component/Iphone";

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Wishlist />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/airdopes" element={<Airdopes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home1 name={userName} />} />
          </Routes>
          <Cart />
        </Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
