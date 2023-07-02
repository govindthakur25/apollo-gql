const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakers() {
    const data = await this.get("/");
    return data;
  }

  async getSpeakerById(id) {
    try {
      const data = await this.get(`/${id}`);
      return data;
    } catch (error) {
      return {
        code: "SPEAKERBYID",
        message: "There is some error while getting the response",
        token: "agdf4642vasvf27355",
      };
    }
  }
}

module.exports = SpeakerAPI;
