import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    a: A
  }

  type A {
    foo: String
  }
`;

const resolvers = {
  Query: {
    a: () => ({}),
  },
  A: {
    foo: () => 'hello from a',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen(4000);
console.log(`Server running ${url}`);
