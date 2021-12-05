create schema blog;

create table blog.postagem (
    id serial primary key,
    titulo text not null,
    conteudo text not null,
    data timestamp default now()
);

insert into blog.postagem (titulo, conteudo) values ('Postagem teste', '...');
