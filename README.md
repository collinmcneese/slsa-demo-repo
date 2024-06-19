# slsa-demo-repo

This repository contains a simple JavaScript application that uses the [SLSA framework](https://slsa.dev/). The main file of the application is `index.js`, which sets up an Express server and defines a default route handler.

## index.js

The `index.js` file sets up an Express server that listens on port 3000. It defines a default route (`/`) that responds with a "Hello World!" message. If any query parameters are provided in the request, they are included in the response.

Here's a simplified version of the code:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let message = 'Hello World!';
  if (Object.keys(req.query).length > 0) {
    message += ' ' + JSON.stringify(req.query);
  }
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
```

## GitHub Actions Workflows

This repository uses two GitHub Actions workflows: publish.yml and test_ci.yml.

The publish.yml workflow is triggered on a push to the main branch or when a new release is created. It builds the application and publishes it to the GitHub Package Registry.

The test_ci.yml workflow is triggered on a pull request to the main branch. It sets up a Node.js environment, installs the application's dependencies, and runs the tests.
