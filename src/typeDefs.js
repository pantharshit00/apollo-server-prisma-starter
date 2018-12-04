const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

module.exports = typeDefs;
