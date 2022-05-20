import React, { useState } from 'react'

const Pagination = ({BookData, itemsPerPage, setCurrentPage, currentPage }) => {
    
    
    let numberOfPages = []
    for (let i=1; i<=Math.ceil(BookData.length/ itemsPerPage); i++){
        numberOfPages.push(i);
    }
    function showNextDishesHandler(pages){
        // console.log(pages.target.id)
        setCurrentPage(pages.target.id)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    let pages = numberOfPages.map((item)=>{
        // console.log("item",item) 
        
        let activePage = currentPage == item ? "active" : ""
        return(
            <>
            <li id={item} className={`${activePage}`} onClick={showNextDishesHandler}>{item}</li>
            </>
        )
    })
  return (
    <ul className='pagination'>
        {pages}
    </ul>
  )
}

export default Pagination