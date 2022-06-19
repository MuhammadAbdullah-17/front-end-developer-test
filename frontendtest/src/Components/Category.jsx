import axios from "axios";
import React, { useEffect, useState } from "react";
const Category = () => {
  const [Name, setName] = useState({
    n1: "",
    n2: "",
    n3: "",
    n4: "",
    n5: "",
    n6: "",
    n7: "",
    n8: "",
    n9: "",
    n10: "",
    n11: "",
  });
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://demo2.meals4u.net/fe/api.test.php");
      //console.log(res.data.categories[4])
      setName({
        n1: res.data.categories[0],
        n2: res.data.categories[1],
        n3: res.data.categories[2],
        n4: res.data.categories[3],
        n5: res.data.categories[4],
        n6: res.data.categories[5],
        n7: res.data.categories[6],
        n8: res.data.categories[7],
        n9: res.data.categories[8],
        n10: res.data.categories[9]
      });
      console.log(res)
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
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg1.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n1}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg2.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n2}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg3.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n3}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg4.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n4}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg5.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n5}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg6.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n6}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg7.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n7}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg8.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n8}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg9.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n9}</h6>
          </li>
          <li className="item cat me-1 me-md-2 ">
            <img
              src="Assets/catImg10.jpg"
              alt="ScrollBar"
              height="110px"
              width="190px"
            />
            <br />
            <h6 className="text-center">{Name.n10}</h6>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Category;
