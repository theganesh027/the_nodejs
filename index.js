// console.log('the ganesh kanawade is here');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const githubData =
  {
  "login": "theganesh027",
  "id": 250482530,
  "node_id": "U_kgDODu4PYg",
  "avatar_url": "https://avatars.githubusercontent.com/u/250482530?v=4",
  "gravatar_id": " ",
  "url": "https://api.github.com/users/theganesh027",
  "html_url": "https://github.com/theganesh027",
  "followers_url": "https://api.github.com/users/theganesh027/followers",
  "following_url": "https://api.github.com/users/theganesh027/following{/other_user}",
  "gists_url": "https://api.github.com/users/theganesh027/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/theganesh027/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/theganesh027/subscriptions",
  "organizations_url": "https://api.github.com/users/theganesh027/orgs",
  "repos_url": "https://api.github.com/users/theganesh027/repos",
  "events_url": "https://api.github.com/users/theganesh027/events{/privacy}",
  "received_events_url": "https://api.github.com/users/theganesh027/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-12-19T06:29:49Z",
  "updated_at": "2026-06-22T12:49:02Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter',(req, res) =>{
    res.send('twitter the');
})

app.get('/login',(req, res)=> {
  res.send('<h1>login the in code step by step</h1>')
})

app.get('/youtube',(req, res)=>{
  res.send('<h1><mark>my youtube channel is here</></h1>')
})

app.get('/github',(req ,res) => {
  res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
})

