import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center">
                      <h5>Added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h6>{title}</h6>
                      <h5 className="text-muted">price: ${price}</h5>
                      <h6>go to</h6>
                      <div className="d-flex justify-content-between">
                        {" "}
                        <Link to="/">
                          <ButtonContainer onClick={() => closeModal()}>store</ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer cart onClick={() => closeModal()}>
                            to cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainColorBackground);
    color: var(--secondColor);
    h5 {
      font-family: "Anton", sans-serif;
      font-size: 2rem;
    }
  }
`;
