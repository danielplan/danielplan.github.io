import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date
  type Reference {
    id: String
    name: String
    description: String
    slug: String
    create_date: Date
    preview_image: String
  }
  type Query {
    references: [Reference]!
  }
`;
