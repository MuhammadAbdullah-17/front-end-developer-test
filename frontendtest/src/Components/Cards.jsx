import { React } from "react";
import { Card, Button } from "react-bootstrap";

const Cards = (props) => {
  return (
    <div className="col-md-6 col-lg-4 col-12">
      <Card style={{ width: "25rem" }}>
        <Card.Text className="text-left mt-3">
          <img
            src="Assets/photographer.jpg"
            alt="photographer"
            height="30px"
            width="30px"
            className="rounded-pill m-2"
          />
          <span>Lily Bansen</span>
        </Card.Text>
        <Card.Img variant="top" src={props.prodImg} />
        <Card.Body>
          <Button variant="outline-secondary" className="btn">
            <i className="fa fa-solid fa-heart"></i>
          </Button>
          <Button variant="outline-secondary" className="btn">
            <i className="fa fa-solid fa-plus"></i>
          </Button>
          <span className="ms-5 ps-5">
            <Button variant="outline-secondary" className="btn ms-5">
              Download
            </Button>
            <Button variant="outline-secondary" className="btn">
              <i className="fa fa-solid fa-caret-down"></i>
            </Button>
          </span>
          <Button
            variant="secondary imgbtn text-black-50"
            style={{
              backgroundColor: "rgb(230, 230, 230)",
              border: "none",
            }}
            className="btn mt-3"
          >
            Feast
          </Button>
          <Button
            variant="secondary imgbtn text-black-50"
            style={{
              backgroundColor: "rgb(230, 230, 230)",
              border: "none",
            }}
            className="btn mt-3"
          >
            Singapore
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cards;
