import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className="header-img">
            {/* <img src="https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG9wJTIwb2YlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V6EonA4WezGErlKBoD540dGSB_2JxNQL2NblFh-adp1aJ5Oqo9wwJ2bu3C1rRU1lkl8&usqp=CAU" alt="" />
            {/* <img src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" /> */}
        </div>
        <div className="header-info">
          <h1>The Wonderful world of Reading</h1>
        </div>
    </div>
  )
}

export default Header