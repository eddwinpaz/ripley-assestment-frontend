import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import EmptyProductList from '../EmptyProductList';
import ProductItem from "../ProductItem";

const ProductList = () => {

  const { products } = useContext(AppContext);

  const displayProductList = (products: Array<any>) =>
    products.map((p) => <ProductItem key={p.id} {...p} />);

  return (
    <>
      <div className="main-container">
        <h2 className="product-results">Product Results</h2>
      </div>
      {products !== null && products.length === 0 && <EmptyProductList />}
      {products !== null && products.length > 0 && <section className="products">{displayProductList(products)}</section>}
    </>
  );
};

export { ProductList as default };
