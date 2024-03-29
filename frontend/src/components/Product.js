import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Rating.propTypes = {
  value: propTypes.number.isRequired,
  text: propTypes.number.isRequired,
};

export default Product;
