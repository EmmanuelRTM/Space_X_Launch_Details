//simple setup

const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema =require ('./schema');
const app = express();

//app.use(cors());


/*const corsOptions = {
    origin: 'http://localhost:3000/',
    credentials: true,
    };*/

    app.use(cors());

//allow cross-origin
app.use( '/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    }),
);


const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log(
    `Server started on port ${PORT}`)
);

