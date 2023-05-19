import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";

const Tv = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://63be7b18585bedcb36ae3316.mockapi.io/apidata/?category=tv")
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    getData();
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

export default Tv;
