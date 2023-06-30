module.exports = {
  Query: {
    sessions: (parent, args, context, info) => {
      const { dataSources } = context;
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, args, context, info) => {
      const { id } = args;
      const { dataSources } = context;
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};
