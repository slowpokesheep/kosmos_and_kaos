export default class Client {
  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  async get(resource="", params=null) {
    try {
      let url = this.apiUrl;

      if (params) {
        const urlParams = new URLSearchParams();
        params.forEach(param => urlParams.append(param[0], param[1]));
        
        urlParams.append('key', this.apiKey);
        url += `&${urlParams.toString()}`
      }

      const response = await fetch(url);

      const ok = response.ok;
      const data = await response.json();
      return { ok, data };
    } catch (e) {
      console.error(e);
    }
  }
}