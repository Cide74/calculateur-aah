BEGIN;

DROP TABLE IF EXISTS 
"aah",
"user",

"quiz_has_tag";

CREATE TABLE IF NOT EXISTS "aah" (
    "id" serial PRIMARY KEY,
    "date" text NOT NULL,
    "montant_aah" text NOT NULL,
    "taux_couple" text NOT NULL,
    "taux_enfant" text NOT NULL,
);



CREATE TABLE IF NOT EXISTS "user" (
    "id" serial PRIMARY KEY,
    "firstname" text NULL,
    "lastname" text NULL,
    "email" text NOT NULL,
    "password" text NOT NULL
);

