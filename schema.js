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
  }
`;
