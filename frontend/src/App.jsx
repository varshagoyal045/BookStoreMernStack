import React from 'react';
import {Route, Routes }  from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component = {Home} />
      <Route  path='/books/create' Component ={CreateBook}/>
      <Route  path='/books/details/:id' Component ={ShowBook}/>
      <Route  path='/books/edit/:id' Component ={EditBook}/>
      <Route  path='/books/delete/:id' Component ={ DeleteBook }/> 
    </Routes>
    </>
  );
}
export default App;