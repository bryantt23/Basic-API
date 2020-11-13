const fetch = require('node-fetch');

const express = require('express');
const app = express();
const port = 8000;

//mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
//https://sv443.net/jokeapi/v2/
// https://sv443.net/jokeapi/v2/joke/Any

async function getJoke(req) {
  //   fetch(url, {
  //     method: 'get'
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res.setup + ' ' + res.delivery));

  const category = { req };

  let url = `https://sv443.net/jokeapi/v2/joke/Any?${category}`;
  const res = await fetch(url, {
    method: 'get'
  });
  const joke = await res.json();
  console.log(`${joke.setup} ${joke.delivery}`);
  return `${joke.setup} ${joke.delivery}`;
}

// getJoke();

app.get('/', async (req, res) => {
  try {
    const joke = await getJoke(req);
    res.send(joke);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
