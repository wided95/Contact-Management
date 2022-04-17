const express = require("express");
const contactRouter = express.Router();
const Contact = require("../models/Contact");
//Post Contact
contactRouter.post("/add", async (req, res) => {
    try {
      const newContact = new Contact(req.body);
      let result = await newContact.save();
      res.send({ contact: result, msg: "contact added successfulyyy!!!!" });
    } catch (error) {
      console.log(error);
    }
  });
  //GET ALL Contacts
contactRouter.get("/", async (req, res) => {
    try {
      let result = await Contact.find();
      res.send({ contacts: result });
    } catch (error) {
      console.log(error);
    }
  });
  //UPDATE Contact
contactRouter.put("/:id", async (req, res) => {
    try {
      let result = await Contact.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ msg: "contact updated" });
    } catch (error) {
      console.log(error);
    }
  });
  //DELETE Contact
contactRouter.delete("/:id", async (req, res) => {
    try {
      let result = await Contact.findByIdAndDelete({ _id: req.params.id });
      res.send({ msg: "contact deleted" });
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = contactRouter;