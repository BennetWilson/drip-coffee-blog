import TopBar from "./components/topbar/Topbar";
import "./App.css";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Contact from "./pages/contact/Contact";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Brew from "./pages/brew/Brew.jsx";
import Recipe from "./pages/recipe/Recipe";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpdatePost from "./pages/updatePost/updatePost";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
     
      <Router>
      <TopBar />
        <Route exact path="/" >
        <Home />
        </Route>
        <Route path="/register" >
        <Register />
        </Route>
        <Route path="/login" >
        <Login />
        </Route>
        <Route path="/write"  > 
        <Write />
        </Route>
        <Route path="/contact"  > 
        <Contact />
        </Route>
        <Route path="/brew" >
        <Brew />
        </Route>
        <Route path="/recipes" >
        <Recipe />
        </Route>
        <Route path="/settings"  >
        <Settings />
        </Route>
        <Route path="/post/:postId">
        <Single />
        </Route>
        <Route path="/update/:postId">
        <UpdatePost />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
