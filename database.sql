
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE,
--     "password" VARCHAR (1000)
-- );

CREATE TABLE "role" (
"id" SERIAL PRIMARY KEY,
"role_title" VARCHAR
);

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (80), 
"last_name" VARCHAR (80),
"username" VARCHAR (80) UNIQUE,
"role" INT REFERENCES "role"(id),
"email" VARCHAR (256),
"password" VARCHAR (256),
"phone_number" VARCHAR,
"street_address" VARCHAR (256),
"city" VARCHAR (256),
"state" VARCHAR,
"zip" INT,
"is_admin" BOOLEAN DEFAULT 'f',
"date_created" DATE DEFAULT CURRENT_DATE,

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

CREATE TABLE "ageGroup" (
"id" SERIAL PRIMARY KEY,
"ages" VARCHAR 
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


CREATE TABLE "user_content" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user"(id),
"content_id" INT REFERENCES "content"(id)
);

INSERT INTO "public"."ageGroup"("id", "ages") VALUES(1, '6-9') RETURNING "id", "ages";
INSERT INTO "public"."ageGroup"("id", "ages") VALUES(2, '10-13') RETURNING "id", "ages";
INSERT INTO "public"."ageGroup"("id", "ages") VALUES(3, '14-18') RETURNING "id", "ages";

INSERT INTO "role" ("role_title")
VALUES ('Coach');


-- age 1,2 week 1-(4)5 inserts
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(1, 1, 1, 1, '"Healthy, athletic bodies come in all shapes and sizes."', '"At this age, young athletes are quietly comparing themselves to those around them, forming their own self image. Comparison is natural, but when it happens, kids stop focusing on their own strengths and abilities and risk internalizing unhealthy body images. As a coach, you have a powerful voice at this early stage of the young child developing self-concept when among peers. Your influence right now is really important, so remind them that they don’t have to look a certain way to be a great athlete. Their shape and size is exactly how they should be."', 'Take a moment to think about how well you accept the shape and size of your own body and its abilities. Research has shown that the way adults talk about their own appearance, weight and body shape can strongly influence a child’s feelings about their own body. How might you be communicating your own beliefs with your athletes?', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one, try them all – it’s up to you. Do what feels right for you and feels relatable to the ages you coach.
•       Model positive self-talk with your athletes. Avoid saying negative things about your own body, your appearance, or others’ bodies in front of your athletes. 
•    Listen for comments your athletes may make about their bodies, such as negative comments about their own size or shape, or teasing others (even as “good-natured” fun). Step in to say “healthy bodies come in all shapes and sizes; think of ways your body helps you play [your sport] well.” (Depending on the setting and the athletes involved, you may decide to say it to a group, or more quietly to an individual.)
•    At the beginning or the end of practice, bring your athletes together and tell them that you want them to know appreciating their own bodies is an important part of being a good athlete. You could start by saying how you value that they each are unique, and that healthy athletes come in all shapes and sizes. You could acknowledge that maybe they’ve seen images of athletes or watched a professional sporting event and compared themselves to an athlete that they think is “perfect.” Encourage them to focus on appreciating their own bodies, and invite them to think about or share how their body helps them play their sport well. You can remind them that overemphasizing appearance or trying to change their body shape/size ultimately will detract from their performance.') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(2, 1, 1, 2, '“Food is the fuel that powers your mind and body to perform at their best.”', '"Making a positive connection between food and energy is important for young athletes. Focusing on how food helps our brains and bodies grow, think, move and keep us fueled throughout the day helps athletes see food as beneficial for playing their sport. It also helps take the focus off food in relation to body size or weight and keep it on how food creates energy for our minds and bodies to play well.  Different foods, all in moderation, have different nutritional benefits that our minds and bodies need to feel balanced and healthy, thereby allowing us to perform at our best. Research suggests that adults’ beliefs and judgements about food can impact a child’s thoughts and eating behaviors. If adults are labeling food choices as “good/bad” or “clean/unhealthy”, it can equate food with stress or anxiety about being right or wrong. It also can cause stress for kids who live with food insecurity. When we focus on communicating about variety and balance, it helps athletes see different foods as positive to their growth, their strength and their performance, and value what it can do for them."', 'Think about your own relationship to food. Do you think of food as fuel and energy for getting through your day, or do you think more about food in relation to body size or weight? Do you label or judge foods often? Do you talk about foods in extremes (“never eat this” or “always eat this”)? Think about how your attitudes might be reflected in communication with your athletes.', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one or both. Do what feels right for you and feels relatable to the ages you coach."
·   	Model non-judgmental thoughts and beliefs towards food with your athletes. Avoid talking about food in terms such as good/bad, clean/junk, healthy/unhealthy. Emphasize that balance and variety are what’s needed, not restriction. If you or someone else brings snacks for practice or a game, don’t refer to them as rewards. 
·   	Listen to how your athletes talk about food, whether they’re talking about their favorite snack, what they had for lunch, or what they’re having for dinner. If you hear them make comments about food in relation to body size or weight, try to redirect them. You can tell them that “All food is fuel, and your body needs fuel to perform its best during practice or a game” or “Food is energy. You’ll play better when you have energy.”
·   	At the end of practice, bring your athletes together and ask them how they felt during practice. Tired? Energized? Hungry? Remind them that food helps them grow and gives their bodies energy to play their best. Everyone is different, so different foods might fuel athletes in different ways. Ask them to think about what foods help them feel best for playing their sport, but don’t make judgement comments about their responses as right/wrong or good/bad.') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(3, 1, 2, 1, '“Healthy, athletic bodies come in all shapes and sizes."', 'At this age, most young athletes compare themselves to others and to the athletic, too-often unrealistic body images portrayed in media. Comparison is natural, but when it happens, kids stop focusing on their own strengths and abilities and risk internalizing unhealthy body images. As a coach, you have a powerful voice in reminding them that they don’t have to look a certain way to be a great athlete. Their shape and size is exactly how they should be. ', 'Take a moment to think about how well you accept the shape and size of your own body and its abilities. Research has shown that the way adults talk about their own appearance, weight and body shape can strongly influence a child’s feelings about their own body. How might you be communicating your own beliefs with your athletes?', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one, try them all – it’s up to you. Do what feels right for you and feels relatable to the ages you coach.

Model positive self-talk with your athletes. Avoid saying negative things about your own body, your appearance, or others’ bodies in front of your athletes. 

Listen for comments your athletes may make about their bodies, such as negative comments about their own size or shape, or teasing others (even as “good-natured” fun). Step in to say “healthy bodies come in all shapes and sizes; think of ways your body helps you play [your sport] well.” (Depending on the setting and the athletes involved, you may decide to say it to a group, or more quietly to an individual.)

At the beginning or the end of practice, bring your athletes together and tell them that you want them to know appreciating their own bodies is an important part of being a good athlete. You could start by saying how you value that they each are unique, and that healthy athletes come in all shapes and sizes. You could acknowledge that maybe they’ve seen images of athletes or watched a professional sporting event and compared themselves to an athlete that they think is “perfect.” Encourage them to focus on appreciating their own bodies, and invite them to think about or share how their body helps them play their sport well. You can remind them that overemphasizing appearance or trying to change their body shape/size ultimately will detract from their performance.') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro") VALUES(4, 1, 3, 1, '“Healthy, athletic bodies come in all shapes and sizes."') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(6, 1, 1, 3, '“Your brain and body need a variety of activities to be strong.”', 'Last week we focused on food as fuel and the value of eating a variety of foods. This week our focus is on activity and the value of balance. Even young athletes may feel the pressure to obsess about or overdo a certain type of exercise in order to achieve their potential or meet expectations. It’s beneficial to remind them that variety, moderation and off-days are crucial for them to perform at their best.', 'Reflect on how much variety and balance you have in your own activity. Do you overdo it? Do you give yourself off-days? Then think about your practices with your athletes. How much variety and balance do you incorporate and encourage?', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one or more. Do what feels right for you and feels relatable to the ages you coach.
 
Let your athletes know that you think a good balance of activities is valuable. Model it by talking to your athletes about how you rest and recharge.
 
Mix it up at practice! Incorporate some different workout routines into your practices. Try a different warmup or add a new drill. Use these changes to explain to your athletes the importance of variety and balance in being great athletes.
 
Mix it up outside of practice! Challenge your athletes to move their bodies in new, different, or fun ways on their next day off from practice/competition. Maybe that means going biking or trying rollerblading, taking a dance class or doing a video-based dance game, trying yoga or simply going on a walk on a new path. Then have them share their experiences and how it felt to do something different than their regular sport.
') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(7, 1, 1, 4, ' “You are unique. Your ability to [insert specific attribute] makes us a better team.”', 'Research has shown that coaches’ assessments of ability and intention in young athletes are important factors in the development of positive self-esteem. In relation to healthy food and body attitudes, kids who are confident and feel good about themselves are less likely to develop unhealthy eating patterns and body dissatisfaction. You can build self-esteem in your athletes by praising their uniqueness, work ethic and skills. This helps take the focus off appearance, weight or other factors that can be harmful to how they view themselves.', 'Think about your athletes and the unique qualities they each have that you admire and/or respect. Think about what each athlete adds to your team/sport. Also, this is good moment to ask yourself if your expectations for their level of skill or focus are aligned with their age and developmental stage.', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one or both. Do what feels right for you and feels relatable to the ages you coach.
•        	Celebrate each athlete on your team by telling them what you appreciate about them and/or why they are unique to the team. You could do this individually with them (“You’re really good at passing the ball, which is important for us to play well as a team.”), or call it out when you see it happening. (“Great effort on that play – I love how you always try so hard!”)
•        	Engage your team in an uplifting, encouraging team-bonding activity. Have each athlete write their name on the top of a sheet of paper and then have your athletes pass their paper around to everyone else. Each athlete will write one positive thing they value about the athlete whose name is written at the top. Once everyone has had a chance to write something about everyone on the team, collect the sheets and pass them out to the athletes they belong to.  At the conclusion of the activity, reemphasize how each athlete is unique and how everyone’s strengths make this team great.') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(8, 1, 1, 5, 'This week’s “What to Say” phase - is not a phrase.  This week, focus on listening to the conversation between your athletes. Listen for “body talk” - and gently shut it down.  Listen for when they are talking about their own, or another’s appearance or body/shape size--and then gently shut it down.  Remind your team that how other’s look is not our business, and how we look doesn’t make us our best self, athletically or otherwise. ', 'At this age, young athletes are quietly comparing themselves to those around them, forming their own self-image. Comparison is natural, but when it happens, kids stop focusing on their own strengths and abilities and risk internalizing unrealistic (i.e. not possible , unhealthy body images. As a coach, you have a powerful voice at this early stage of the young child developing self-concept when among peers. Your influence right now is really important, so remind them that they don’t have to look a certain way to be a great athlete. Their shape and size are exactly how they should be.', 'Take a moment to think about how well you accept the shape and size of your own body and its abilities. Research has shown that the way adults talk about their own appearance, weight and body shape can strongly influence a child’s feelings about their own body. How might you be communicating your own beliefs with your athletes?', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one, try them all – it’s up to you. Do what feels right for you and feels relatable to the ages you coach.

·   	Model positive self-talk with your athletes. Talk about how much you appreciate your own arms and legs and what they help you do.   
 
·   	Listen for comments your athletes may make about their bodies or about other teammates bodies—even as “good-natured” fun.
 
o   Step in to say “healthy bodies come in all shapes and sizes; think of ways your body helps you play [your sport] well.” (Depending on the setting and the athletes involved, you may decide to say it to a group, or more quietly to an individual.)
o   Remind your athletes that their bodies are their own, and not other people’s business to judge or comment on.') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(9, 1, 2, 2, '“Food is the fuel that powers your mind and body to perform at their best.”', 'Making a positive connection between food and energy is important for young athletes. Focusing on how food helps our brains and bodies grow, think, move and keep us fueled throughout the day helps athletes see food as beneficial for playing their sport. It also helps take the focus off food in relation to body size or weight and keep it on how food creates energy for our minds and bodies to play well. 
Different foods, all in moderation, have different nutritional benefits that our minds and bodies need to feel balanced and healthy, thereby allowing us to perform at our best. Research suggests that adults’ beliefs and judgements about food can impact a child’s thoughts and eating behaviors. If adults are labeling food choices as “good/bad” or “clean/unhealthy”, it can equate food with stress or anxiety about being right or wrong. It also can cause stress for kids who live with food insecurity. When we focus on communicating about variety and balance, it helps athletes see different foods as positive to their growth, their strength and their performance, and value what it can do for them. ', 'Think about your own relationship to food. Do you think of food as fuel and energy for getting through your day, or do you think more about food in relation to body size or weight? Do you label or judge foods often? Do you talk about foods in extremes (“never eat this” or “always eat this”)? Think about how your attitudes might be reflected in communication with your athletes. ', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one or both. Do what feels right for you and feels relatable to the ages you coach.

•	Model non-judgmental thoughts and beliefs towards food with your athletes. Avoid talking about food in terms such as good/bad, clean/junk, healthy/unhealthy. Emphasize that balance and variety are what’s needed, not restriction. If you or someone else brings snacks for practice or a game, don’t refer to them as rewards.  
•	Listen to how your athletes talk about food, whether they’re talking about their favorite snack, what they had for lunch, or what they’re having for dinner. If you hear them make comments about food in relation to body size or weight, try to redirect them. You can tell them that “All food is fuel, and your body needs fuel to perform its best during practice or a game” or “Food is energy. You’ll play better when you have energy.”

•	At the end of practice, bring your athletes together and ask them how they felt during practice. Tired? Energized? Hungry? Remind them that food helps them grow and gives their bodies energy to play their best. Everyone is different, so different foods might fuel athletes in different ways. Ask them to think about what foods help them feel best for playing their sport, but don’t make judgement comments about their responses as right/wrong or good/bad.') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(10, 1, 2, 3, '“Your brain and body need a variety of activities to be strong.”', 'Last week we focused on food as fuel and the value of eating a variety of foods. This week our focus is on activity and the value of balance. Even young athletes may feel the pressure to obsess about or overdo a certain type of exercise in order to achieve their potential or meet expectations. It’s beneficial to remind them that variety, moderation and off-days are crucial for them to perform at their best. ', 'Reflect on how much variety and balance you have in your own activity. Do you overdo it? Do you give yourself off-days? Then think about your practices with your athletes. How much variety and balance do you incorporate and encourage? ', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one or more. Do what feels right for you and feels relatable to the ages you coach.

Let your athletes know that you think a good balance of activities is valuable. Model it by talking to your athletes about how you rest and recharge. 

Mix it up at practice! Incorporate some different workout routines into your practices. Try a different warmup or add a new drill. Use these changes to explain to your athletes the importance of variety and balance in being great athletes. 

Mix it up outside of practice! Challenge your athletes to move their bodies in new, different, or fun ways on their next day off from practice/competition. Maybe that means going biking or trying rollerblading, taking a dance class or doing a video-based dance game, trying yoga or simply going on a walk on a new path. Then have them share their experiences and how it felt to do something different than their regular sport. ') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
INSERT INTO "public"."content"("id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps") VALUES(11, 1, 2, 4, '“You are unique. Your ability to [insert specific attribute] makes us a better team.”', 'Research has shown that coaches’ assessments of ability and intention in young athletes are important factors in the development of positive self-esteem. In relation to healthy food and body attitudes, kids who are confident and feel good about themselves are less likely to develop unhealthy eating patterns and body dissatisfaction. You can build self-esteem in your athletes by praising their uniqueness, work ethic and skills. This helps take the focus off appearance, weight or other factors that can be harmful to how they view themselves.', 'Think about your athletes and the unique qualities they each have that you admire and/or respect. Think about what each athlete adds to your team/sport. Also, this is good moment to ask yourself if your expectations for their level of skill or focus are aligned with their age and developmental stage.', 'Below are suggested action steps you can take with your athletes as you coach them this week. Try one or both. Do what feels right for you and feels relatable to the ages you coach.
•	Celebrate each athlete on your team by telling them what you appreciate about them and/or why they are unique to the team. You could do this individually with them (“You’re really good at passing the ball, which is important for us to play well as a team.”), or call it out when you see it happening. (“Great effort on that play – I love how you always try so hard!”)
•	Engage your team in an uplifting, encouraging team-bonding activity. Have each athlete write their name on the top of a sheet of paper and then have your athletes pass their paper around to everyone else. Each athlete will write one positive thing they value about the athlete whose name is written at the top. Once everyone has had a chance to write something about everyone on the team, collect the sheets and pass them out to the athletes they belong to. At the conclusion of the activity, reemphasize how each athlete is unique and how everyone’s strengths make this team great. ') RETURNING "id", "role_id", "ageGroup_id", "week", "intro", "why_matters", "reflection", "action_steps";
