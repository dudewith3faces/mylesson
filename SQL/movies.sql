CREATE TABLE "public"."Movies" (
    "id" integer GENERATED ALWAYS AS IDENTITY,
    "title" text NOT NULL,
    "director" text NOT NULL,
    "plot" text NOT NULL,
    "poster" text NOT NULL,
    PRIMARY KEY ("id"),
    UNIQUE ("title")
);
