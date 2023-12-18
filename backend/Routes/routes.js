const express = require('express')
const router = express.Router()
const User = require("../model/dataUser");
const Order = require("../model/order");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const jwtSecret = "Jafaristhegreatestandmostpowerfulmanintheworld";

router.post("/Signupuser", [
    body('email', 'invalid email').isEmail(),
    body('name', 'invalid name').isLength({ min: 5 }),
    body('password', 'invalid password').isLength({ min: 5 }),
    body('phonenumber', 'invalid number').isLength({ min: 10, max: 10 }),
], async (req, res) => {

    let email = req.body.email;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcryptjs.genSalt(10);
    let secpassword = await bcryptjs.hash(req.body.password, salt);
    try {
        let userD = await User.findOne({ email });
        if (userD) {
            return res.status(400).json({ errors: "User already exists" });
        }
        else {
            User.create({
                name: req.body.name,
                password: secpassword,
                email: req.body.email,
                phonenumber: req.body.phonenumber
            })
            res.json({ success: true });
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})




router.post("/Loginuser", [
    body('email', 'invalid email').isEmail(),
    body('password', 'invalid password').isLength({ min: 5 }),
], async (req, res) => {
    let email = req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        let userD = await User.findOne({ email });
        if (!userD) {
            return res.status(400).json({ errors: "Invalid user details" });
        }

        // comparing password from the db and the user with bcryptjs.compare
        const passCompare = await bcryptjs.compare(req.body.password, userD.password)
        if (!passCompare) {
            return res.status(400).json({ errors: "Invalid user details" });

        }
        const data = {
            user: {
                id: userD.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken: authToken });
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

// routes for displaying data

router.post("/Edata", (req, res) => {
    try {

        res.send([global.Eitems, global.eventcat])
    } catch (error) {
        console.error(error.message)
        res.send("Server error")

    }
})
router.post("/Eproduct", (req, res) => {
    try {

        res.send([global.Eproduct]);
    } catch (error) {
        console.error(error.message)
        res.send("Server error")

    }
})

router.post('/addevent', async (req, res) => {
    let data = req.body.eventdata
    await data.splice(0, 0, { eventDate: req.body.eventDate })


    let eId = await Order.findOne({ 'email': req.body.email })
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                eventdata: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { eventdata: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

router.post("/Myevents", async (req, res) => {
    try {
        let myevents = await Order.findOne({ 'email': req.body.email });
        res.json({ eventdata: myevents });
    } catch (error) {
        console.error(error.message);
        res.send("Server Error", error.message);
    }
});

// Add a new route to delete events by their ID
router.post("/deleteEvent/:eventId", async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Find the user's order containing the event
        let order = await Order.findOne({ 'email': "jafardahod7@gmail.com" });

        if (!order) {
            return res.status(404).json({ errors: "User's order not found" });
        }

        // Filter out the event with the provided eventId
        const updatedEventdata = order.eventdata.filter(event => event[1].id !== eventId);

        // Update the user's order with the filtered eventdata
        await Order.findOneAndUpdate({ 'email': "jafardahod7@gmail.com" }, { eventdata: updatedEventdata });

        res.json({ success: true });
    } catch (error) {
        console.error(error.message);
        res.send("Server Error", error.message);
    }
});


module.exports = router;