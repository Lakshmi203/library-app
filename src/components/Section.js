import React from 'react'

function Section() {
  return (
  <>
  <div className='prefooter'>
<div className='leftprefooter'>
<div className='prefooterimg'>
  <img src="https://www.oppl.org/wp-content/uploads/2018/11/mailicon.svg" alt="" />
</div>
<h2>Stay current on news and new arrivals.</h2>
</div>
<div className='rightprefooter'>
<a href="javascript:void(0)" >Subscribe</a>
</div>
</div>
    <div className='section'>
    <h1>Do You Agree?</h1>
    <div className='flex'>
        <div className="section-list">
            <ul>
                <li>“There is more treasure in books than in all the pirate’s loot on Treasure Island.” – Walt Disney</li>
                <li>“You know you’ve read a good book when you turn the last page and feel a little as if you have lost a friend.” – Paul Sweeney</li>
                <li>es us someplace to go when we have to stay where we are.” – Mason Cooley</li>
                <li>“I think it’s the books that you read when you’re young that live with you forever.” – J.K. Rowling</li>
            </ul>
        </div>
        <div className="section-img">
            <img src="https://mypustak-5.s3.ap-south-1.amazonaws.com/uploads/banner/do_you_know_.png" alt="" />
            {/* <img src="https://www.lovereading.co.uk/content/images/litfest-450x250.jpg" alt="" /> */}
        </div>
    </div>
    </div>
    </>
  )
}

export default Section