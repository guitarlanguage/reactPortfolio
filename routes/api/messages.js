//what is this file for?
//name, email, message for Message model
const express = require("express");
const router = express.Router();

//load Messagemodel
const Message = require("../../models/Message");

// @route               GET api/Message/test
// @What this does?     Tests Message route
// @access              Public
router.get("/test", (req, res) =>
    res.json({
        msg: "Message Works"
    })
);

// @route               POST api/Message/message
// @What this does?     Sends Message message info route
// @access              Public
router.post("/message", (req, res) => {

    // Assuming this is from a POST request and the body of the
    // request contained the JSON of the new "Message" item to be saved
    const newMessage = new Message(req.body);
    newMessage.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newMessage);
    });
})



module.exports = router;