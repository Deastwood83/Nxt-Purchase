import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen(props) {
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>name</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating />
            </ListGroup.Item>
            <ListGroup.Item>Description:Description</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>
                    <strong>Price:</strong>
                  </Col>
                  <Col>
                    <strong>$Price</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <strong>Status:</strong>
                  </Col>
                  <Col>
                    <strong>Status</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className="btn-block" type="button">
                  Addt To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>{" "}
      </Row>
    </>
  );
}

export default ProductScreen;
