const { ApolloServer, ApolloError } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");
const SpeakerAPI = require("./datasources/speakers");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: false,
  formatError: (error) => {
    if (error.extensions.code == "INTERNAL_SERVER_ERROR") {
      return new ApolloError(
        "Something went wrong, we're looking into it",
        "ERROR",
        { token: "uniquetoken" }
      );
    }
    return error;
  },
});
server.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log({ url });
});
