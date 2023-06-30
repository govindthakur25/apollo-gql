const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      track: String
      level: String
      format: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }
  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }
  type Speaker {
    id: ID!
    name: String!
    bio: String
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    track: String
    level: String
    format: String
    favorite: Boolean
    speakers: [Speaker]
  }
  input SessionInput {
    id: ID
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    track: String
    level: String
    format: String
    favorite: Boolean
  }
`;
