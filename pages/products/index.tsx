import React from "react";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import { cartItemsVar } from "../../src/apollo/config";

let number = 0;


const ProductsPage = (props) => {


  const handleButton = () => {
    cartItemsVar(number += 1);
  }

  return (
    <ContainerComponent>
      <h2>Reactive Variable</h2>
      <button onClick={() => {
        handleButton()
      }} >Add Data</button>
    </ContainerComponent>
  );
};






export default ProductsPage;
