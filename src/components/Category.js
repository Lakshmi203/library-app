import React, { useState } from 'react'
import Slider from "react-slick";
import { getBookData } from './BookData'
import { Link } from 'react-router-dom'

const Category = () => {
    

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   let BookData = getBookData()
   const [data, setData] = useState(BookData)
  //  let currenClass = 'active'
  //  const [activeClass, setActiveClass] = useState(currenClass)
    const showCategory = (item) => {
      const result=BookData.filter((curData) => {
        return curData.category === item
      });
      setData(result);
      // setActiveClass(currenClass)

    }
    // className={`${activeClass}`}
  return (
    <div className="category-section">
  <div className='categories'>
    <div className='category'>
      <button>All</button>
    <button onClick={()=>showCategory('Adventure')}>Adventure</button>
    <button onClick={()=>showCategory('Horror')}>Horror</button>
    <button onClick={()=>showCategory('Fantasy')}>Fantasy</button>
    <button onClick={()=>showCategory('Thriller')}>Thriller</button>
    <button onClick={()=>showCategory('Romance')}>Romance</button>

  </div>
   <div className='category-body'>
   <Slider {...settings}>
    {data.map((item)=>{
        return(
            <Link to={`/book/${item.id}`}>
        <img src={item.imgSrc} alt="" />
         </Link>
        )
    })}
       </Slider>
   </div>
   </div>

   <div className="events">
       <h1>Events</h1>
    <ul>
        <li>Art Exhibit: Quarantine the Past: Allegories of the Self by Joel Javier<span>May 14 10 am</span></li>
        <li>Art Exhibit: Quarantine the Past: Allegories of the Self by Joel Javier<span>May 14 10 am</span></li>
        <li>Art Exhibit: Quarantine the Past: Allegories of the Self by Joel Javier<span>May 14 10 am</span></li>
        <li>Art Exhibit: Quarantine the Past: Allegories of the Self by Joel Javier<span>May 14 10 am</span></li>
   
    </ul>
   </div>
   </div>
  
  )
}

export default Category