import React from "react";
// GLOBAL STYLE
import GlobalStyle from "./components/GlobalStyle";
// IMPORT PAGES
import Home from "./containers/Home";
import AboutHome from "./components/AboutHome"
import ServicesHome from "./components/ServicesHome"
import FaqHome from "./components/FaqHome"
import MovieList from "./components/Movie/MovieList"
import MovieDetails from "./components/Movie/MovieDetails"
import Posts from "./containers/Posts/Posts"
import Post from "./components/Post/Post"
import AddPost from "./components/Post/AddPost"
import UpdatePost from "./components/Post/UpdatePost"
import {Route} from "react-router-dom"
import { Navbar } from "./components/navbar";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      
      <div className='container'>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/movies' component={MovieList}/>
        <Route path='/details' component={MovieDetails}/>
        <Route path='/services' component={ServicesHome}/>
        <Route path='/faq' component={FaqHome}/>
        <Route path='/aboutus' component={AboutHome}/>
        <Route path='/posts' component={Posts}/>
        <Route exact path="/addPost" component={AddPost} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/updatePost/:id" component={UpdatePost} />
      </div>
    </div>
  );
}

export default App;
