import React, { useState } from 'react'
import { useParams } from "react-router";
import { getBookData } from './BookData'
import heart from '../assets/heart-solid.svg'
import Slider from "react-slick";
import { Link } from 'react-router-dom'

function BookDetail(props) {
  
  // console.log("props", props)
  let params = useParams();
  // let book = getBook(parseInt(params.id, 10));
  
  let BookData = getBookData()
  let books = BookData.find(item=>
    item.id === params.id)
  let [btnText, setbtnText] = useState("Add to favourite");
    let [classState, setclassState] = useState("")

    function setFavourite(imgSrc, author){
        setbtnText((prevState) => {
            if(prevState === "Add to favourite" ){
              props.getFavImg(imgSrc, author);
              // console.log('imgSrc', imgSrc)
            return "Added to favourite";
            }else{
            return "Add to favourite";
             }
         });
         setclassState((prevClass)=>{
             if(prevClass == ""){
                 return "active"
             }
             else{
                 return ""
             }
         })
        };

        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 8,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
        };
        let currentCategory = books.category
        const result=BookData.filter((curData) => {
          return curData.category === currentCategory
        });
        const idToRemove = books.id;
        const filteredPeople = result.filter((item) => item.id !== idToRemove);
       console.log(books.id)
  return (
    <div>
      
      <section class="banner_img">
      <div className="banner_container">
        <div class="BannerTitle">
            <h1>{books.name}</h1>
            <br />
            <h2>by {books.author}</h2>
        </div>
        </div>
    </section>
    <div className="container detail">
      <div className={`img ${classState}`}>
      <img src={heart} className="heart" />

        <img src={`${books.imgSrc}`} alt="" />

        <button onClick={() => {
          setFavourite(books.imgSrc, books.author);
        }}>{btnText}</button>
      </div>
      <h3>{books.description}</h3>
    </div>
    
    <div style={{maxWidth:1200, margin:'auto', paddingBottom:30}} className="like-this">
      <h1>More like this</h1>
    <Slider {...settings}>
    {filteredPeople.map((item)=>{
        return(
            <Link to={`/book/${item.id}`}>
        <img src={item.imgSrc} alt="" />
         </Link>
        )
    })}
       </Slider>
    </div>
    </div>
    
  )
}

export default BookDetail