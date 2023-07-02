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
    sessionById(id: ID): SessionOrError
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
  type Error {
    code: String
    message: String
    token: String
  }
  union SessionOrError = Session | Error

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
