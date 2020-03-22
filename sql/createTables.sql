-- \c quizlearning_diary;

CREATE TABLE IF NOT EXISTS topic(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    timetomaster DECIMAL,
    timespent DECIMAL,
    source VARCHAR(255),
    startlearningdate date,
    inprogress bit,
    finishlearningdate date
);