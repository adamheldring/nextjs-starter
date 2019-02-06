import axios from "axios";

const BASE_URL = "https://beta.stockzoom.com";

class APIHelper {
  constructor(url = BASE_URL) {
    this.client = axios.create({
      baseURL: url
    });
  }

  setToken(token) {
    // Set JWT token for client
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    console.log("Token has been set!");
  }

  refreshToken(token) {
    const url = "/api-token-refresh/";

    const onSuccess = ({ data }) => {
      this.setToken(data.token);
    };

    const onError = error => {
      console.log(error);
    };

    return this.post(url, { token })
      .then(onSuccess)
      .catch(onError);
  }

  get(url, params = {}) {
    return this.client({ method: "get", url, params });
  }

  post(url, data, params = {}) {
    return this.client({ method: "post", url, data, params });
  }

  put(url, data, params = {}) {
    return this.client({ method: "put", url, data, params });
  }

  patch(url, data, params = {}) {
    return this.client({ method: "patch", url, data, params });
  }

  delete(url, data, params = {}) {
    return this.client({ method: "delete", url, data, params });
  }
}

export default new APIHelper();
