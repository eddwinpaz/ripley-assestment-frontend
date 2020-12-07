class ProductAPI {
  url: string;

  constructor() {
    this.url =
      process.env.REACT_APP_API_URI ||
      "https://ripley-backend-server.herokuapp.com/api/product";
  }

  async getProducts() {
    try {
      const req = await fetch(`${this.url}`);
      const resp = await req.json();
      return resp;
    } catch (err) {
      return null;
    }
  }

  async getProductById(id: string) {
    try {
      const req = await fetch(`${this.url}/${id}`);
      const resp = await req.json();
      return resp;
    } catch (err) {
      return null;
    }
  }

  async searchProducts(query: string) {
    try {
      const req = await fetch(`${this.url}/search/?query=${query}`);
      const resp = await req.json();
      return resp;
    } catch (err) {
      return null;
    }
  }
}

const product = new ProductAPI();
export default product;
