BEGIN;

DROP TABLE IF EXISTS notes, category CASCADE;

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    category_id INTEGER NOT NULL REFERENCES category(id),
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO category (name) VALUES
('work'),
('sport'),
('eduction'),
('important'),
('personal');

INSERT INTO notes (title, content, category_id) VALUES 
('sporting', 'This is sport content', 2),
('eduction', 'This is eduction content', 3),
('personal', 'This is personal content', 5),
('work', 'This is work content', 1),
('important', 'This is important content', 4);

COMMIT;