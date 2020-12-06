import { useState, useEffect } from "react";
import ProductAPI from "../Apis/ProductAPI";

const initialProduct = {
  id: "",
  marca: "",
  nombre: "",
  imagen: "",
  descripcion: "",
  precio: 0,
  descuento: 0,
};

const ProductDetail = ({ match }: { match: any }) => {
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState(initialProduct);
  const { productId } = match.params;

  const fetchProduct = async (id: string): Promise<void> => {
    setLoading(true);
    const resp = await ProductAPI.getProductById(id);
    setProduct(resp.product);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <div>Loading Product</div>}
      {!isLoading && product && product !== undefined && (
        <div className="product-single">
          <div className="product-image-side">
            <img alt={product.nombre} src={product.imagen} />
          </div>
          <div className="cart-side">
            <div className="product-title">{product.nombre}</div>
            <div className="product-price">
              $ {product.precio} - $ {product.descuento}
            </div>
            <div className="product-description">{product.descripcion}</div>
            <div className="button-buy">Comprar</div>
          </div>
        </div>
      )}
    </>
  );
};

export { ProductDetail as default };
