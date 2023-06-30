module.exports = {
  sessions: (parent, args, context, info) => {
    const { dataSources } = context;
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parent, args, context, info) => {
    const { id } = args;
    const { dataSources } = context;
    return dataSources.sessionAPI.getSessionById(id);
  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
};
