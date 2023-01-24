CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(28) NOT NULL UNIQUE,
    passhash VARCHAR NOT NULL
);

CREATE TABLE medications(
    id SERIAL PRIMARY KEY,
    name VARCHAR(28) NOT NULL,
    dosage_units VARCHAR(10) NOT NULL,
    dosage INTEGER NOT NULL,
    notes VARCHAR(200),
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO users(username, passhash) values($1,$2);