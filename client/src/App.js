import './App.css';
import logo from './SpaceX_logo.png';
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import Launches from '../src/components/Launches';
import Launch from '../src/components/Launch';

const client = new ApolloClient({
  uri: '/graphql',
  //uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

/*function Launches() {
  const { loading, error, data } = useQuery(gql`
  query LaunchesQuery {
    launches{
        flight_number
        mission_name
        launch_date_local
        launch_sucess
    }
}
  `);
  <h1 className="display-4 my-3">Launches</h1>
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({console.log(error)}</p>; 

    console.log(data)
    return <h1>test</h1>

}*/

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          
          <img src={logo} alt="SpaceX" style={{width: 300, display:"block", margin:"auto"}}></img>
          <Route exact path="/" component={Launches}/>
          <Route exact path="/launch/:flight_number" component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
