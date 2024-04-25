const { Router } = require("express");
const List = require("../models/GlobalListNames");

const router = Router();


router.get("/", (req, res) => {
    res.json({ test: " name message!" });
});

router.post("/", (req, res) => {
    res.json({ test: " name post!" });
});

router.get('/list', async (req, res) => {
    try {
        const { id } = req.query;


        const list = await List.findOne({ id });
        if (list) {
            res.json({ list });
        } else {
            return res.status(400).json({ message: "There is no list with ID" });
        }


    }
    catch (e) {
        console.log(e);
    }
});


router.post("/create", async (req, res) => {
    try {
        const { id, children } = req.body;
        const candidate = await List.findOne({ id });

        if (candidate) {
            return res.status(400).json({ message: "This list is already exists" });
        }

        const list = new List({
            id: id,
            children: children,
        });

        await list.save();
        res.status(201).json({ message: 'list criated' });
    } catch (e) {
        res.status(500).json({ message: "Some problems with create list" });
    }

});



module.exports = router;