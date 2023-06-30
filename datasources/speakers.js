const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }
}

module.exports = SpeakerAPI;
