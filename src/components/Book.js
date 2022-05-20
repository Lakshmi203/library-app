import React,{ useState } from 'react'
import { getBookData } from './BookData'
import * as BiIcons from "react-icons/bi"
import { Link, useSearchParams } from 'react-router-dom'
import Form from './Form';



function Book() {
   //  Search Params
    let [searchParams, setSearchParams] = useSearchParams();
    let BookData = getBookData()
    let books = BookData.slice(0, 8).filter((item)=>{
        let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = item.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
    }).map((item)=>{
            return(
            
                <li>
                    <Link to={`/book/${item.id}`}>
                    <img src={item.imgSrc} className="br" />
                    <h3>{item.name}</h3>
                    </Link>
                </li>
            
        )
        }
        
    )
    let [classState, setclassState] = useState("")
    function setSearch(){
        setclassState((prevClass)=>{
            if(prevClass == ""){
                return "active"
            }
            else{
                return ""
            }
        })
       }
    let [showPopup, setshowPopup] = useState(false)
    function showPopupHandler(){
        setshowPopup(true)
    }
    function closePopupHandler(){
        setshowPopup(false)
    }

  return (
    <div className='book'>
        <h1>Featured Books</h1>
        <div className="icons">
            <div className="form-container">
            <BiIcons.BiBookAdd onClick={showPopupHandler} />
    {showPopup && <Form closePopupHandler={closePopupHandler} />}
            </div>
            <div className={`search-container ${classState}`}>
            <BiIcons.BiSearch  className='search' onClick={setSearch}/>
            <div className="input">
                <input type="text" value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              filter ? setSearchParams({ filter }) : setSearchParams({});
            }}
             placeholder='Search books' />
            </div>


            </div>
        </div>
        <ul className="flex flex-wrap gap book-list">
            
            {books}
        </ul>
    </div>
  )
}

export default Book