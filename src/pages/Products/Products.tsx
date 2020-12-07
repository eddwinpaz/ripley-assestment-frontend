import React, { useEffect, useState } from "react";
import ProductAPI from "../../Apis/ProductAPI";
import ProductList from "../../components/ProductList";
import SearchInput from "../../components/SearchInput";
import AppContext from "../../context/AppContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = async (): Promise<void> => {
    const resp = await ProductAPI.getProducts();

    setLoading(false);
    if(resp === null) {
      setProducts([]);
    } else {
      setProducts(resp.products);
    }

  };

  const searchQuery = async (query: string): Promise<void> => {
    setLoading(true);
    const resp = await ProductAPI.searchProducts(query);
    setLoading(false);
    if(resp === null) {
      setProducts([]);
    } else {
      setProducts(resp.products);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          products: products,
          search: searchQuery,
          isLoading: isLoading,
        }}
      >
        <SearchInput />
        {isLoading && (
          <div className="loading-message">Loading Products...</div>
        )}
        {!isLoading && <ProductList />}
      </AppContext.Provider>
    </div>
  );
};

export { Products as default };
