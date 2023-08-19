const express = require("express")
const router = express.Router()
const {
  getPeople,
  createPerson,
  createPersonPostman,
  getPerson,
  updatePerson,
  deletePerson
} = require("../controllers/people")


/*
* url /api/people
*/

// get method
router.get("/", getPeople)

// get person
router.get("/:id", getPerson)

// insert method
router.post("/", createPerson)

// insert
router.post("/postman", createPersonPostman) 

// put method
router.put("/:id", updatePerson)

// delete method
router.delete("/:id", deletePerson)


// alternative way
// router.route("/").get(getPeople).post(createPerson)
// router.route("/postman").post(createPersonPostman)
// router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson)

module.exports = router
