import { Author } from "./entity/Author";
import { Book } from "./entity/Book";

// Provide resolver functions for your schema fields
export const resolvers = {
    Query: {
        getBook: async (_:any, args: any) => {
            const { id } = args;

            return await Book.findOne({ where: {book_id: id} });
        },

        getBooks: async (_:any) => {
            return await Book.query(`select * from book;`);
        },

        getAuthor: async (_:any, args: any) => {
            const { id } = args;

            return await Author.findOne({ where: {author_id: id} });
        },

        getAuthors: async (_:any) => {
            return await Author.query(`select * from author;`);
        }
    },
    Mutation: {
        addBook: async (_: any, args: any) => {
            const { label, author_id } = args;

            try {
                const book = Book.create({
                    author_id,
                    label
                });

                await book.save();

                return true;
            } catch (error) {
                console.log('Error! ', error);
                return false;
            }
        },

        addAuthor: async (_: any, args: any) => {
            const { name } = args;

            try {
                const author = Author.create({
                    name
                });

                await author.save();

                return true;
            } catch (error) {
                console.log('Error! ', error);
                return false;
            }
        }
    }
};
