import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BookDetail from './components/BookDetail';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import ErrorPage from './pages/ErrorPage';
import StarBooks from './pages/StarBooks';
import Home from './pages/Home';
import {useState} from 'react'
// import { BookData } from './BookData'

function App() {

  let [favItem, setFavItem] = useState([{img:'', name:''}])
  // let [favAuthor, setFavAuthor] = useState([])

  function getFavImg(imgSrc, author){
    // setFavImage([...favImage, imgSrc])
    // setFavAuthor([...favAuthor, author])
    setFavItem([...favItem, {img: imgSrc, name: author}])

  }
  const removeFavourite = (item) => {
    setFavItem([...favItem].filter((currentItem) => {
      return currentItem !== item
    }))

  }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout favItem={favItem} setFavItem={setFavItem} removeFavourite={removeFavourite} />} />
          {/* {BookData.map((book) => (<Link to={'books/' + book.id} />)} */}
  
          <Route path='/book/:id' element={<BookDetail getFavImg={getFavImg} />} />
          <Route path='/starbooks' element={<StarBooks />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
