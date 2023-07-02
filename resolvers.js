const Query = require("./resolvers/query");
const Session = require("./resolvers/session");
const Mutation = require("./resolvers/mutation");

module.exports = {
  Query,
  Session,
  Mutation,
  SessionOrError: {
    __resolveType(obj) {
      if (obj.code) {
        return "Error";
      }
      return "Session";
    },
  },
  SpeakerOrError: {
    __resolveType(obj) {
      if (obj.code) {
        return "Error";
      }
      return "Speaker";
    },
  },
};
