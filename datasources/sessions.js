const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    try {
      const session = _.filter(sessions, { id: parseInt(id) });
      return session[0];
    } catch (error) {
      return {
        code: "SESSIONBYID",
        message: "There is some error while getting the response",
        token: "abscdef",
      };
    }
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addSession(session) {
    session.id = 25;
    sessions.push(session);
    return session;
  }
}

module.exports = SessionAPI;
