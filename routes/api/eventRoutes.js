const router = require("express").Router();
const db = require("../../models");
const bulkCards = require("../../utilities/oracle-cards-20210324090419.json");
const seedCards = require("../../utilities/seedCards");

router.route("/seed").post((req, res) => {
  console.log(cardBundle);
  const cardBundle = seedCards(bulkCards);

  db.Card.insertMany({ cardBundle })
    .then(() => {
      console.log("Seeded");
      res.json();
    })
    .catch((err) => res.json(err));
});

module.exports = router;
