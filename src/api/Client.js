export default class Client {
  // Todo seperate backend or temporary backend here
  constructor() {
    this.apiUrl = 'https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug'
    this.apiKey = 'AIzaSyCefJfjoi6Qx4o9UL7ruz8gaQ_MH71e7Ck'
  }

  async get(resource="", params=null) {
    //&q=forritun&searchType=image&key=APIKEY'

    try {
      let url = this.apiUrl;

      if (params) {
        const urlParams = new URLSearchParams();
        params.forEach(param => urlParams.append(param[0], param[1]));
        
        urlParams.append('key', this.apiKey);
        url += `&${urlParams.toString()}`
      }

      console.log(`url = ${url}`)

      const response = await fetch(url);

      const ok = response.ok;
      const data = await response.json();
      return { ok, data };
    } catch (e) {
      console.error(e);
    }
  }
}