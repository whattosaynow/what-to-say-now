
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "users" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (80) NOT NULL, 
"last_name" VARCHAR (80) NOT NULL,
"role" INT REFERENCES "role"(id) NOT NULL,
"email" VARCHAR (256) NOT NULL,
"password" VARCHAR (256) NOT NULL,
"phone_number" VARCHAR NOT NULL,
"street_address" VARCHAR (256) NOT NULL,
"city" VARCHAR (256) NOT NULL,
"state" VARCHAR NOT NULL,
"zip" INT NOT NULL,
"is_admin" BOOLEAN DEFAULT 'f',

"S1_choose_receive" VARCHAR (256) NOT NULL,
"S1_your_gender" VARCHAR (140) NOT NULL,
"S1_your_age" VARCHAR NOT NULL,
"S1_years_coaching" VARCHAR NOT NULL,
"S1_genders_of_athletes" VARCHAR NOT NULL,
"S1_numbers_of_athletes" VARCHAR NOT NULL,
"S1_focus_ages" VARCHAR NOT NULL,
"S1_how_did_you_find_us" VARCHAR NOT NULL,
"S1_why_are_you_participating" VARCHAR NOT NULL,
"S1_can_we_call_after_completion" VARCHAR NOT NULL,

"S2_challenge_completed" VARCHAR NOT NULL,
"S2_participating_was_easy" VARCHAR NOT NULL,
"S2_learned_something_new" VARCHAR NOT NULL,
"S2_would_encourage" VARCHAR NOT NULL,
"S2_challenge_felt_relavent" VARCHAR NOT NULL,
"S2_challenge_impacted_behavior" VARCHAR NOT NULL,
"S2_understanding_importance_changed" VARCHAR NOT NULL,
"S2_affected_ability_interact" VARCHAR NOT NULL,
"S2_favorite_thing" VARCHAR NOT NULL,
"S2_call_more_information" VARCHAR NOT NULL,

"S3_continued_impact" VARCHAR NOT NULL,
"S3_how_impact" VARCHAR NOT NULL,
"S3_continued_affected_ability_interact" VARCHAR NOT NULL,
"S3_anything_else" VARCHAR NOT NULL,
"S3_call_more_information" VARCHAR NOT NULL
);

CREATE TABLE "content" (
"id" SERIAL PRIMARY KEY,
"role_id" INT NOT NULL, 
"ageGroup_id" INT REFERENCES "ageGroup"(id)NOT NULL,
"week" INT NOT NULL, 
"intro" VARCHAR NOT NULL, 
"why_matters" VARCHAR NOT NULL, 
"reflection" VARCHAR NOT NULL,
"action_steps" VARCHAR NOT NULL
);

CREATE TABLE "role" (
"id" SERIAL PRIMARY KEY,
"role_title" VARCHAR NOT NULL
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
