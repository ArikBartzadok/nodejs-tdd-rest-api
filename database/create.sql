create schema blog;

create table blog.post (
    id serial primary key,
    titulo text not null,
    conteudo text not null,
    data timestamp default now()
);

insert into blog.post (titulo, conteudo) values ('Postagem teste', '...');
