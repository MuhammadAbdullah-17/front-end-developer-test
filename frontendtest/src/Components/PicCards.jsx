import React, { useState } from "react";
import PicData from "./PicData";
import Cards from "./Cards";
const PicCards = () => {
  const [Elements, setElements] = useState(6);
  const Slice = PicData.slice(0, Elements);
  const loadMore = () => {
    setElements(Elements + Elements);
  };
  return (
    <>
      <div className=" mt-5">
        <h5 className="fw-bold">Download Free Food Images</h5>
        <div className="row">
          <div className="row gy-5">
            {Slice.map((prod, id) => {
              return <Cards prodImg={prod.img} />;
            })}
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <button className="btn btn-outline-secondary" onClick={loadMore}>
          Load More Photos
        </button>
      </div>
    </>
  );
};

export default PicCards;
