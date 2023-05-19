import axios from "axios";
import React, { useState, useEffect } from "react";
// import ProductsData from "../data/ProductsData";
import ProductsCard from "../component/ProductsCard";

const Home = () => {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    const api = await axios.get(
      "https://63be7b18585bedcb36ae3316.mockapi.io/apidata"
    );
    setdata(api.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {data.map((item) => (
              <ProductsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
