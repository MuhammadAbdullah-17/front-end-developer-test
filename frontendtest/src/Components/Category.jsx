import axios from "axios";
import React, { useEffect, useState } from "react";
const Category = () => {
  const [Name, setName] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://demo2.meals4u.net/fe/api.test.php");
      for (let i = 0; i < res.data.categories.length; i++) {
        setName((arr) => [...arr, res.data.categories[i]]);
      }
    }
    getData();
  }, []);
  return (
    <>
      <div className="mt-5 mb-5">
        <h5 className="fw-bold">Popular Categories</h5>
      </div>
      <div className="app ms-3 ms-md-0 ms-lg-0">
        <ul className="hs full no-scrollbar me-3">
          {Name.map((e) => {
            return (
              <>
                <li className="item cat me-1 me-md-2 ">
                  <img
                    src="Assets/catImg1.jpg"
                    alt="ScrollBar"
                    height="110px"
                    width="190px"
                  />
                  <br />
                  <h6 className="text-center">{e}</h6>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Category;
