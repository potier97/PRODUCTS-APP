![React Logo](https://github.com/vercel/vercel/blob/master/packages/frameworks/logos/react.svg)

# React Example

This directory is a brief example of a [React](https://reactjs.org/) app with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction) that can be deployed with Vercel and zero configuration.

## Deploy Your Own

Deploy your own React project, along with Serverless Functions, with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/master/examples/create-react-app-functions)

_Live Example: https://create-react-app.now-examples.now.sh/_

### How We Created This Example

To get started with React, along with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction), with Vercel, you can use the [Create-React-App CLI](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to initialize the project:

```shell
$ npx create-react-app my-app
```


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adminProducts:<password>@productscluster.3vlon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});