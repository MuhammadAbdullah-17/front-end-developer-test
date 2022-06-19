import React from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import Category from "./Category";
import Footer from "./Footer";
import Header from "./Header";
import PicCards from "./PicCards";

const Main = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        {
          //Breadcrumb without CSS-------------------
        }
        <Breadcrumb className="mt-5 ms-1">
          <Breadcrumb.Item className="links" href="unsplash.com">
            Explore
          </Breadcrumb.Item>
          <Breadcrumb.Item className="links" href="unsplash.com">
            Images
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Food</Breadcrumb.Item>
        </Breadcrumb>
        {
          //Main Content-----------------------------
        }
        <h1 className="fw-bolder col-md-6 col-12 ms-2">
          Food Images and pictures
        </h1>
        <h5 className="fw-light ms-2 col-md-6 col-lg-6 col-12">
          Stunningly delicious street food, magnificent banquets, quiet family
          dinners: each is beautiful in it's own right. Unsplash captures that
          beauty, and lets you choose from a curated selection of the finest
          food images on the web (and always free).
        </h5>

        {
          //Options Scrollbar------------------------
        }
        <div className="app ms-3 ms-md-0  ms-lg-0">
          <ul className="hs-b full no-scrollbar">
            <li className="item-b me-1 me-md-2 ">
              <Button
                variant="secondary"
                className="text-black-50 sb fs-6"
                style={{
                  backgroundColor: "rgb(230, 230, 230)",
                  border: "none",
                }}
              >
                <p>Nature Images</p>
              </Button>
              <Button
                variant="secondary"
                className="text-black-50 sb fs-6"
                style={{
                  backgroundColor: "rgb(230, 230, 230)",
                  border: "none",
                }}
              >
                App Images & Photos
              </Button>
              <Button
                variant="secondary"
                className="text-black-50 sb fs-6"
                style={{
                  backgroundColor: "rgb(230, 230, 230)",
                  border: "none",
                }}
              >
                Stock Images & Photos
              </Button>
              <Button
                variant="secondary"
                className="text-black-50 sb fs-6"
                style={{
                  backgroundColor: "rgb(230, 230, 230)",
                  border: "none",
                }}
              >
                Food Backgrounds
              </Button>
              <Button
                variant="secondary"
                className="text-black-50 sb fs-6"
                style={{
                  backgroundColor: "rgb(230, 230, 230)",
                  border: "none",
                }}
              >
                Religion Images
              </Button>
            </li>
          </ul>
        </div>

        <Category />
        <PicCards />
        <Footer />
      </div>
    </>
  );
};

export default Main;
