# Awesome Project Build with TypeORM

Steps to run this project:

Task:

1) Создать мутации на создание книги и автора в базе. 
2) Реализовать запрос на получение списка книг с авторами. 
Важно ограничиться двумя запросами к базе за один graphql запрос. 
Для author использовать fieldResolver. 
3) Тесты: -Создание автора -Создание книги -Получение книг без авторов -Получение книг с авторамиТипы 
graphql схемы:type Book {   bookId: number;   name: string;   pageCount: number;   authorId: number;   
author: Author; } type Author {   authorId: number;   name: string; }
Пример запроса к graphql:query {   books() {     name     author {       name     }   } }


1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
4. Go to `http://localhost:4000/graphql`
