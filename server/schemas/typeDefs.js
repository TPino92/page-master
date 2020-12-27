const { gql } = require('apollo-server-express');
// const { typeDefs } = require('.');

typeDefs = gql`

    type User {
        _id: String
        username: String
        email: String
        bookCount: Int
        savedBooks: [book]
    }
    type Book {
        bookId: String
        authors:[String]
        description: String
        title: String
        img: String
        link: String
    }
    type Query {
        me: String
    }
    type Auth {
        user: String
        token: Id
    }

`;

module.exports = typeDefs;