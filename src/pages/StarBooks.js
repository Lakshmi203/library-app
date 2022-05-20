import React,{ useState } from 'react'
import { getBookData } from '../components/BookData'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'

const StarBooks = () => {
  
  let BookData = getBookData()
  let [currentPage, setCurrentPage] = useState(1)
    let [itemsPerPage, setItemsPerPage] = useState(6)
    let indexOfLastDish = currentPage * itemsPerPage
    let indexOfFirstDish = indexOfLastDish - itemsPerPage

    let showTheseItemsNow = BookData.slice(indexOfFirstDish, indexOfLastDish)
  let books = showTheseItemsNow.map((item, index)=>{
    if(index % 2 === 0){
      return(
        <div style={{backgroundColor: item.bg}} className="star_item">
        <div className="star_container">
        <div className="star_content">
          <p style={{paddingRight:60}}>{item.description}</p>
          <Link to={`/book/${item.id}`}>
          <button style={{color: item.bg}}>view</button>
          </Link>
        </div>
        <div className="star_img">
          <img src={item.imgSrc} alt="" />
        </div>
      </div>
      </div>
      )
    }else if(index % 2 === 1){
      return(

      <div style={{backgroundColor: item.bg}} className="star_item">
      <div className="star_container">
      
      <div className="star_img">
        <img src={item.imgSrc} alt="" />
      </div>
      <div className="star_content">
        <p style={{paddingLeft:60}}>{item.description}</p>
        <Link to={`/book/${item.id}`}>
        <button style={{color: item.bg}}>view</button>
        </Link>
      </div>
    </div>
    </div>
    )
      
    }
  })
  return (
    <>
    <div className="star_info">
        <div class="BannerTitle">
            <h1>Star books</h1>
            <p>we read a LOT of books. Here you can find a selection of our favourites, the ones that really stand out from the crowd. If you are only going to buy a few books this year, pick from this list as they are all stars! Each calendar year the books featured here become our Books of the Year.</p>
        </div>
        
        </div>
        {/* <div style={{backgroundColor:'orange'}} className="star_item">
        <div className="star_container">
        <div className="star_content">
          <p style={{paddingRight:60}}>Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations. This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.'
    </p>
          <button style={{color:'orange'}}>view</button>
        </div>
        <div className="star_img">
          <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449868701l/11127._SY475_.jpg" alt="" />
        </div>
      </div>
      </div>
      <div style={{backgroundColor:'brown'}} className="star_item">
        <div className="star_container">
        
        <div className="star_img">
          <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449868701l/11127._SY475_.jpg" alt="" />
        </div>
        <div className="star_content">
          <p style={{paddingLeft:60}}>Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations. This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.'
    </p>
          <button style={{color:'brown'}}>view</button>
        </div>
      </div>
      </div> */}
      {books}
      <Pagination BookData={BookData} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
  )
}

export default StarBooks