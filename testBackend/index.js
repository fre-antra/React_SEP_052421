const express = require("express");
const app = express();
const port = 3500;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello yasir");
});

app.get("/hobbies", (req, res) => {
    const sortFiled = req.query.sortby || "id";
    const hobbies = [
        {
            id: 1,
            name: "Samwise Gamgee",
        },
        {
            id: 2,
            name: "Frodo Baggins",
        },
    ];

    const response = hobbies.sort((a, b) =>
        a[sortFiled] < b[sortFiled] ? -1 : 1
    );

    res.status(200).json({
        hobbies: hobbies,
    });
});

let hobbits = [
    {
        id: 1,
        name: "Bilbo Baggins",
        age: 111,
    },
    {
        id: 2,
        name: "Frodo Baggins",
        age: 33,
    },
];
let nextId = 3;

app.post("/hobbits", (req, res) => {
    const hobbit = req.body;
    nextId++;
    hobbits.push(hobbit);

    res.status(201).json(hobbits);
});
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
