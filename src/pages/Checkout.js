import React from 'react'


const Checkout = ({favItem, setFavItem, removeFavourite}) => {
  
  let favItems = favItem.slice(1);
  const seen = new Set();
  const filteredArr = favItems.filter(el => {
    const duplicate = seen.has(el.name);
    seen.add(el.name);

    return !duplicate;
  });
  console.log(filteredArr)

  let userFavItem = filteredArr.map((item) => {
    return(
    
    <li>
        <div className="wishlist-item">
        <div className="wishlist-img">
          <img src={item.img} alt="" />

        </div>
          <h2>{item.name}</h2>

        </div>
        <div className="wishlist-button">
        <button onClick={() => removeFavourite(item)}>Remove</button>

        </div>

      </li>
      )
  })

  // const removeFavourite = (item) => {
  //   setFavItem([...favItem].filter((currentItem) => {
  //     return currentItem !== item
  //   }))

  // }
  

  return (
  <>
    <div className='checkout'>
      
      {/* <img src={favImage} alt="" /> */}
    </div>
    <div className='wishlist'>
    <h1>Favourites</h1>
    <ul>
      {userFavItem}
      {/* <li>
        <div className="wishlist-item">
        <div className="wishlist-img">
        <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg" alt="" />
        </div>
        <h2>Author</h2>

        </div>
        

        
        <button>Remove</button>
      </li> */}
    </ul>


    </div>
    </>
  )
}

export default Checkout