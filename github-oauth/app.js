const express = require('express')
const request = require('request')
const app = express()
const port = 3002
const clientID= ""
const clientSecret= ""

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})

app.get('/oauth/callback', (req, res) => {
  const code = req.query.code;
  const options = {
      url: 'https://github.com/login/oauth/access_token',
      method: 'POST',
      headers: {
          'Accept': 'application/json'
      },
      form: {
          client_id: clientID,
          client_secret: clientSecret,
          code: code
      }
  };

  request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
          const accessToken = JSON.parse(body).access_token;
          console.log(accessToken)
          
          // Use the access token to access the GitHub API or redirect the user
        
          const userInfoOptions = {
            url: 'https://api.github.com/user',
            method: 'GET',
            headers: {
                'Authorization': 'token ' + accessToken,
                'User-Agent': 'YourApp'
            }
          };
        
          request(userInfoOptions, (error, response, body) => {
              if (!error && response.statusCode == 200) {
                  const user = JSON.parse(body);
                  console.log(user)
                  // Handle the GitHub user information
              }
          });
      
      }
  });







});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})