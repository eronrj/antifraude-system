CREATE TABLE teams (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100),

    league VARCHAR(50),

    attack_rating NUMERIC,

    defense_rating NUMERIC

);

CREATE TABLE matches (

    id SERIAL PRIMARY KEY,

    home_team_id INTEGER,

    away_team_id INTEGER

);
