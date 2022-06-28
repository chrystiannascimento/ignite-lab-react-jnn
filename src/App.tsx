import {useEffect} from 'react';
import {ApolloProvider, gql, useQuery} from '@apollo/client';
import { Event } from './pages/Event';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { client } from './lib/apollo';


interface Lesson{
  id: string;
  title: string;
}

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
