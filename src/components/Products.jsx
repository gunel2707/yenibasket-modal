import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import "../components/Product.css";
import Context from "../context/Context";
import ShoppingCard from './ShoppingCard'

const Products = () => {
  const {
    productsData,
    count,
    array,
    setarray,
    setCount,
    modalshow,
    setmodalshow,
  } = useContext(Context);
  console.log(productsData);

  function basket(obj) {
    if (!array.find((item) => obj.id == item.id)) {
      obj.counter = 1;
      console.log(array);
      localStorage.setItem("array", JSON.stringify([...array, obj]));
      setarray([...array, obj]);
      setCount(count + 1);
    } else {
      obj.counter += 1;
      localStorage.setItem("array", JSON.stringify(array));
    }
  }
  function ModalCart() {
    console.log("gbhjnm");
    setmodalshow(true);
  }

  return (
    <>
      {" "}
      <p className="shopping-cart" onClick={ModalCart}>
        <HiOutlineShoppingCart className="fs-1 " />
        <sup className="fs-4 bg-danger text-white rounded-circle w-50">
          {count}
        </sup>
      </p>
      <div className="row  m-auto gap-5  ">
        {productsData.map((item, index) => (
          <Card
            key={index}
            className="col-md-2 zoom d-flex flex-column justify-content-center align-item-center  "
            style={{ width: "16rem", height: "25rem" }}
          >
            <Card.Img
              className=" image d-block m-auto"
              variant="top"
              src={item.image}
            />
            <Card.Body className=" row d-flex  align-items-center justify-content-around">
              <Card.Title> {item.price}</Card.Title>
              <Card.Text>{item.title}</Card.Text>
              <Button
                className="AddtoCart"
                variant="primary"
                onClick={() => {
                  basket(item);
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {modalshow && (
        <div
          //className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <ShoppingCard />
        </div>
      )}
    </>
  );
};

export default Products;
