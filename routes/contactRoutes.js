const express = require ("express")
const router = express.Router ()

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require ("../controllers/contactController")

//get or create contact
router.route ("/").get (getContacts).post (createContact)
//get a contact or delete contact or update contact
router.route ("/:id").get (getContact).put (updateContact).delete (deleteContact)

module.exports = router