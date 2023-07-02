const { ApolloError } = require("apollo-server");
const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }) {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const speaker = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length;
      });
      return speaker;
    } catch (error) {
      return new ApolloError(
        "Cannot communicate with the Speaker API at this moment",
        "SPEAKER_API_ERROR",
        { token: "UNIQUE_TOKEN" }
      );
    }
  },
};
