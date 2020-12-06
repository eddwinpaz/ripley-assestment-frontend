const ProductItem = ({
  id,
  marca,
  nombre,
  imagen,
  precio,
  descuento,
}: {
  id: string;
  marca: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  descuento: number;
}): JSX.Element => {

  const calDiscount = (precio: number, descuento: number) => {
    const now = descuento > 0 ? precio - descuento : 0;
    if (now === 0) {
      return "";
    }
    return <div className="price-discount">${now.toLocaleString()}</div>;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="" src={imagen} />
      </div>
      <div className="product-info">
        <h5>
          <a href={`/product/${id}`}>{nombre} / {marca}</a>
        </h5>
        <h6>
          $ {precio.toLocaleString()}
          {calDiscount(precio, descuento)}
        </h6>
      </div>
    </div>
  );
};

export { ProductItem as default };
