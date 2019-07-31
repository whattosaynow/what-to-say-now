
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE,
--     "password" VARCHAR (1000)
-- );

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (80), 
"last_name" VARCHAR (80),
"role" INT REFERENCES "role"(id),
"email" VARCHAR (256),
"password" VARCHAR (256),
"phone_number" VARCHAR,
"street_address" VARCHAR (256),
"city" VARCHAR (256),
"state" VARCHAR,
"zip" INT,
"is_admin" BOOLEAN DEFAULT 'f',

"S1_choose_receive" VARCHAR (256),
"S1_your_gender" VARCHAR (140),
"S1_your_age" VARCHAR,
"S1_years_coaching" VARCHAR,
"S1_genders_of_athletes" VARCHAR,
"S1_numbers_of_athletes" VARCHAR,
"S1_focus_ages" VARCHAR,
"S1_how_did_you_find_us" VARCHAR,
"S1_why_are_you_participating" VARCHAR,
"S1_can_we_call_after_completion" VARCHAR,

"S2_challenge_completed" VARCHAR,
"S2_participating_was_easy" VARCHAR,
"S2_learned_something_new" VARCHAR,
"S2_would_encourage" VARCHAR,
"S2_challenge_felt_relavent" VARCHAR,
"S2_challenge_impacted_behavior" VARCHAR,
"S2_understanding_importance_changed" VARCHAR,
"S2_affected_ability_interact" VARCHAR,
"S2_favorite_thing" VARCHAR,
"S2_call_more_information" VARCHAR,

"S3_continued_impact" VARCHAR,
"S3_how_impact" VARCHAR,
"S3_continued_affected_ability_interact" VARCHAR,
"S3_anything_else" VARCHAR,
"S3_call_more_information" VARCHAR
);

CREATE TABLE "content" (
"id" SERIAL PRIMARY KEY,
"role_id" INT, 
"ageGroup_id" INT REFERENCES "ageGroup"(id),
"week" INT, 
"intro" VARCHAR, 
"why_matters" VARCHAR, 
"reflection" VARCHAR,
"action_steps" VARCHAR
);

CREATE TABLE "role" (
"id" SERIAL PRIMARY KEY,
"role_title" VARCHAR
);

CREATE TABLE "user_content" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "users"(id),
"content_id" INT REFERENCES "content"(id)
);

CREATE TABLE "ageGroup" (
"id" SERIAL PRIMARY KEY,
"ages" VARCHAR 
);
