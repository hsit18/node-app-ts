import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

// Sample data for demonstration
export const users = [
    {
        id: "1",
        email: "alice@example.com",
        username: "alice",
        password: "hashedpassword1",
        isAdmin: false,
        createdAt: "2024-06-01T10:00:00Z",
        updatedAt: "2024-06-01T10:00:00Z",
    },
    {
        id: "2",
        email: "bob@example.com",
        username: "bob",
        password: "hashedpassword2",
        isAdmin: true,
        createdAt: "2024-06-02T11:00:00Z",
        updatedAt: "2024-06-02T11:00:00Z",
    },
    {
        id: "3",
        email: "carol@example.com",
        username: "carol",
        password: "hashedpassword3",
        isAdmin: false,
        createdAt: "2024-06-03T12:00:00Z",
        updatedAt: "2024-06-03T12:00:00Z",
    },
];

export default UserType;