CREATE TABLE "toxic plants"
(
    id          BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    common_name VARCHAR(255),
    toxicity    VARCHAR(255),
    flower      VARCHAR(255),
    leaf        VARCHAR(255),
    fruit       VARCHAR(255),
    CONSTRAINT pk_toxic_plants PRIMARY KEY (id)
);