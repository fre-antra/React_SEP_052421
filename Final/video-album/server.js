const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// user log in
app.post('/login', (req, res) => {
    res.send({
        token: {
            uid: 10,
            email: req.body.email,
            password: req.body.password
        },
        role: 1
    });
});

// user sign up
app.post('/signup', (req, res) => {
    res.send({
        token: {
            uid: 11,
            email: req.body.info.email,
            password: req.body.info.password
        },
        role: 1
    });
});

// fetch user profile
app.post('/profile', (req, res) => {
    res.send({
        uid: 12,
        email: req.body.token.email,
        name: 'abccd',
        gender: 'MALE',
        age: 28
    });
});

// fetch user albums list
app.post('/album', (req, res) => {
    const albums = [
        {
            aid: "1",
            cover: "cover1",
            title: "title1",
            size: "size1",
            createtime: "createtime1"
        },
        {
            aid: "2",
            cover: "cover2",
            title: "title2",
            size: "size2",
            createtime: "createtime2"
        }
    ];
    res.send(albums);
});

// fetch album data without children
app.get('/album/:aid', (req, res) => {
    const aid = req.params.aid;
    const album = {
        aid: aid,
        title: "This is a fake album.",
        cover: "fake cover url",
        size: "55",
        createtime: "aabbcc",
        intro: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        uid: "1",
        username: "first fake user"
    }
    res.send(album);
});

app.listen(8080, () => console.log('API is running at port 8080'));