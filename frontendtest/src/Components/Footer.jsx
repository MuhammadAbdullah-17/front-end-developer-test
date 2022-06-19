import React from "react";

const Footer = () => {
  return (
    <>
      {
        //Footer with 4 Columns -------------------------------
      }
      <div className="container-fluid mt-5">
        <div className="row foo col-12">
          <div className="fooc1 col-md-5 col-12 mb-3">
            <h6 className="fw-bold mb-3">Unsplash</h6>
            <p className="col-12 col-md-10">
              Beautiful,<span className="text-black-50"> free images </span>
              gifted by the world’s most generous community of photographers.
              Better than any royalty free or stock photos.
            </p>
            <ul className="text-black-50 fooli">
              <li>About</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Join the Team</li>
              <li>Developers|API</li>
              <li>Press</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="fooc2 col-md-2 col-12 mb-3">
            <h6 className="fw-bold mb-3"> Product</h6>
            <ul className="text-black-50 fooli">
              <li>Explore</li>
              <li>Unsplash Awards</li>
              <li>Unsplash for Education</li>
              <li>Unsplash for IOS</li>
              <li>Apps And Plugins</li>
            </ul>
          </div>
          <div className="fooc2 col-md-2 col-12mb-3">
            <h6 className="fw-bold mb-3"> Popular</h6>
            <ul className="text-black-50 fooli">
              <li>Backgrounds</li>
              <li>Free Images</li>
              <li>Free Stock Photos</li>
              <li>Happy Birthday Images</li>
              <li>Cool photos</li>
              <li>Free Images</li>
              <li>Free Stock Photos</li>
              <li>Happy Birthday Images</li>
              <li>Cool photos</li>
            </ul>
          </div>
          <div className="fooc2 col-md-2 col-12 mb-3">
            <h6 className="fw-bold mb-3"> Wallpapers</h6>
            <ul className="text-black-50 fooli">
              <li>Backgrounds</li>
              <li>Free Wallpapers</li>
              <li>Free Stock Wallpapers</li>
              <li>Happy Birthday Wallpapers</li>
              <li>Cool Wallpapers</li>
              <li>Cute Wallpapers</li>
              <li>Live Wallpapers</li>
              <li>PC Wallpapers</li>
              <li>Black Wallpapers</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="text-black-50  col-md-6 col-12">
            <p>
              Privacy Policy<span className="mx-3 mx-md-5">Terms</span>
              <span>Security</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-black col-md-6 col-12">
            <p>
              Download free
              <span className="text-black-50 ">(Do whatever you want)</span>
              <span>high-resolution photos.</span>
              <span className="text-black-50">Learn More.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
