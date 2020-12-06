class ProductAPI {
  url: string;

  constructor() {
    this.url = process.env.REACT_APP_API_URI || "https://ripley-backend-server.herokuapp.com/api/product";
  }

  async getProducts() {
    const req = await fetch(`${this.url}`);
    const resp = await req.json();
    return resp;
  }

  async getProductById(id: string) {
    const req = await fetch(`${this.url}/${id}`);
    const resp = await req.json();
    return resp;
  }

  async searchProducts(query: string) {
    const req = await fetch(`${this.url}/search/?query=${query}`);
    const resp = await req.json();
    return resp;
  }
}

const product = new ProductAPI();
export default product;
