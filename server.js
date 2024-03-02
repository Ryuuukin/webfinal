const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blogModel');
const blogsRouter = require('./routes/blogs');
const methodOverride = require('method-override');

const app = express();


// Connect to MongoDB
const connect = mongoose.connect('mongodb://0.0.0.0:27017/myblog');

connect.then(() => {
    console.log("Database connected Successfully!");
}).catch((error) => {
    console.error("Database connection failed:", error.message);
});


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    const blogs = await Blog.find().sort({
        date: 'desc'
    });
    res.render('blogs/index', {blogs: blogs});
});

app.use('/blogs', blogsRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.error("Error starting the server:", error.message);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});