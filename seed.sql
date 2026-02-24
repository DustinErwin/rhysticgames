
DROP DATABASE IF EXISTS cdgDB;

CREATE DATABASE cdgDB;


USE cdgDB;

CREATE TABLE products (  
  img VARCHAR(300) NOT NULL,
  alt VARCHAR(300) NOT NULL,
  content VARCHAR(300) NOT NULL, 
  title VARCHAR(40) NOT NULL
);

CREATE TABLE events (  
  event_title VARCHAR(300) NOT NULL,
  event_date VARCHAR(300) NOT NULL,
  event_description VARCHAR(300) NOT NULL, 
  event_img VARCHAR(300)
);

CREATE TABLE features (
  title VARCHAR(300) NOT NULL,
  content VARCHAR(300) NOT NULL,
  img VARCHAR(300) NOT NULL,
  alt VARCHAR(300) NOT NULL
);

INSERT INTO products (img, alt, title, content)
VALUES ("./images/rolePlaying/pathFinder.jpg", "Pathfinder", "Role Playing Games", "Dungeon and Dragons, Pathfinder, and Aliens are only a few of the genre spanning role-playing games sold in the store and played in the community.");

INSERT INTO products (img, alt, title, content)
VALUES ("./images/magicTheGathering/Friday_Night_Magic.JPG", "Magic: The Gathering", "Magic: The Gathering", "We have a very active community with events and game nights throughout the week. Friday Night Magic happens every week starting at 6pm");

INSERT INTO products (img, alt, title, content)
VALUES ("./images/tableTop/Sigmar_Sauron.jpg", "Miniature Gaming", "Tabletop Gaming", "Come and join us for Warhammer 40k, Age of Sigmar, or Bolt Action. Organized play through the week and plenty of tables for pick up games anytime.");

INSERT INTO products (img, alt, title, content)
VALUES ("./images/boardGames/catan.jpg", "Catan", "Board Games", "Our shelves are bursting with stock of the most popular game titles. Axis and Allies, Settlers of Catan, or Gloomhaven we have them all. Stop in today and pick the next hit for game night!");

INSERT INTO products (img, alt, title, content)
VALUES ("./images/events/WW2_War_Game.jpg", "Events", "Events", "We always have events going on whether ongoing events like Friday Night Magic or Xwing on Wednsday nights, or our larger tournament style events we have scheduled. All can be seen on our Facebook page join us and check it out!");


