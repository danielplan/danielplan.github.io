import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Reference {
    id: String
    name: String
    description: String
    slug: String
    create_date: Int
    preview_image: String
  }
  type Query {
    references: [Reference]!
  }
`;
