const { gql } = require('apollo-server-express');
// const { typeDefs } = require('.');

typeDefs = gql`

    type user {
        _id: String
        username: String
        email: String
        bookCount: Int
        savedBooks: [book]
    }
    type book {
        bookId: String
        authors:[String]
        description: String
        title: String
        img: String
        link: String
    }

`;

module.exports = typeDefs;