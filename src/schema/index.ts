import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import UserType, { users } from './user';
import prisma from '../config/prismaClient';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Query to get all users
    users: {
      type: UserType,
      resolve: async () => {
        try {
          await prisma.user.findMany({
            select: {
              id: true,
              username: true,
              email: true,
              createdAt: true,
            },
          });
          return users;
        } catch (error) {
          throw error;
        }
      },
    },

    // Query to get a user by ID
    // user: {
    //   type: UserType,
    //   args: { id: { type: GraphQLNonNull(GraphQLString) } },
    //   resolve: async (_, args) => {
    //     try {
    //       const user = await User.findById(args.id);
    //       return {
    //         ...user.toObject(),
    //         id: user._id,
    //         createdAt: user.createdAt.toISOString(),
    //         updatedAt: user.updatedAt.toISOString(),
    //       };
    //     } catch (error) {
    //       throw new Error(error.message);
    //     }
    //   },
    // },
  },
});

export default new GraphQLSchema({ query: RootQuery });
