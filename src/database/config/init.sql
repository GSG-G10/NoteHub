BEGIN;

DROP TABLE IF EXISTS  notes ,category ,category_notes CASCADE;

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT ,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE category_notes (
    category_id INTEGER REFERENCES category(id),
    notes_id INTEGER REFERENCES notes(id)
);


INSERT INTO category (name) VALUES
('sport'),
('eduction'),
('personal'),
('work'),
('important');

INSERT INTO notes (title,content) VALUES
('football', 'This is a sport'),
('school', 'This is a  eduction'),
('home', 'This is a personal '),
('developer', 'This is a  work'),
('important work', 'This is a important ');

INSERT INTO category_notes (notes_id,category_id) VALUES
(1,2),
(1,5),
(2,3),
(4,5);

COMMIT;