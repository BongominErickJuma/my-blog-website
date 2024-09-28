import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let blogs = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    body: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    body: "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    body: "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
  },
];

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//CHALLENGE 1: GET All posts
app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blogs: blogs });
});

//CHALLENGE 2: POST a new post

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/blogs", (req, res) => {
  const { title, body } = req.body;
  const newBlog = {
    id: blogs.length + 1,
    title: title,
    body: body,
  };
  blogs.push(newBlog);
  res.redirect("/blogs");
});
//CHALLENGE 3: GET a specific post by id
app.get("/blogs/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).send("blog not found");
  res.render("details.ejs", { blog: blog });
});
//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.get("/blogs/:id/edit", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).send("blog not found");

  res.render("edit.ejs", { blog: blog });
});

app.post("/blogs/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === id);
  if (!blog) return res.status(404).send("blog not found");

  const blogIndex = blogs.findIndex((b) => b.id === id);
  const { title, body } = req.body;

  const updatedBlog = {
    id: id,
    title: title || blog.title,
    body: body || blog.body,
  };

  blogs[blogIndex] = updatedBlog;
  res.redirect("/blogs");
});
//CHALLENGE 5: DELETE a specific post by providing the post id.

app.post("/blogs/:id/delete", (req, res) => {
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(req.params.id));
  if (blogIndex === -1) return res.status(404).send("blog not found");
  blogs.splice(blogIndex, 1);
  res.redirect("/blogs");
});

app.listen(port, () => {
  console.log(`Listening for request at http://localhost:${port}`);
});

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let blogs = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    body: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    body: "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    body: "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
  },
];

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//CHALLENGE 1: GET All posts
app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blogs: blogs });
});

//CHALLENGE 2: POST a new post

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/blogs", (req, res) => {
  const { title, body } = req.body;
  const newBlog = {
    id: blogs.length + 1,
    title: title,
    body: body,
  };
  blogs.push(newBlog);
  res.redirect("/blogs");
});
//CHALLENGE 3: GET a specific post by id
app.get("/blogs/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).send("blog not found");
  res.render("details.ejs", { blog: blog });
});
//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.get("/blogs/:id/edit", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).send("blog not found");

  res.render("edit.ejs", { blog: blog });
});

app.post("/blogs/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === id);
  if (!blog) return res.status(404).send("blog not found");

  const blogIndex = blogs.findIndex((b) => b.id === id);
  const { title, body } = req.body;

  const updatedBlog = {
    id: id,
    title: title || blog.title,
    body: body || blog.body,
  };

  blogs[blogIndex] = updatedBlog;
  res.redirect("/blogs");
});
//CHALLENGE 5: DELETE a specific post by providing the post id.

app.post("/blogs/:id/delete", (req, res) => {
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(req.params.id));
  if (blogIndex === -1) return res.status(404).send("blog not found");
  blogs.splice(blogIndex, 1);
  res.redirect("/blogs");
});

app.listen(port, () => {
  console.log(`Listening for request at http://localhost:${port}`);
});
