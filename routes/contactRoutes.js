const express = require ("express")
const router = express.Router ()
//get contacts
router.route ("/").get ((req,res) => {
  res.status (200).json ({message: "Get all contacts..."})
})
//create contact
router.route ("/").post ((req,res) => {
  res.status (200).json ({message: "Create contacts..."})
})
//get a contact
router.route ("/:id").get ((req,res) => {
  res.status (200).json ({message: `Get contact for ${req.params.id}.`})
})
//update contacts
router.route ("/:id").put ((req,res) => {
  res.status (200).json ({message: `Update contact for ${req.params.id}.`})
})
//delete contact
router.route ("/:id").delete ((req,res) => {
  res.status (200).json ({message: `Delete contact for ${req.params.id}.`})
})

module.exports = router