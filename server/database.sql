CREATE DATABASE permatodolist;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    task varchar(255)
);

CREATE TABLE completedlist(
    todo_id SERIAL PRIMARY KEY,
    task varchar(255)
);
