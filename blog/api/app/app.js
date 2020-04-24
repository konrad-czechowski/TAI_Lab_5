import express from 'express';

const app = express();

// app.use(express.json());

app.use(express.static('public'));

const posts = [
  {
    id: 1, title: 'tytuł1', text: 'Text1',
  },
  {
    id: 2, title: 'tytuł2', text: 'Text2',
  },
  {
    id: 3, title: 'tytuł3', text: 'Text3',
  },
];

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    res.status(404).send('Post not found');
  }

  res.send(post);
});

app.listen(3000, function () {
  console.log('Server is running!');
});
