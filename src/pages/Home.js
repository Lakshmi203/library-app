import React from 'react'
import Book from '../components/Book'
import Category from '../components/Category'
import Header from '../components/Header'
import Section from '../components/Section'
// import BookDetail from '../components/BookDetail'

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className="container">
        <Book />
        <Category />
      </div>
      {/* <div id="prefooter">
<div id="prefooteralert">
<div id="leftprefooter">
<div id="prefooterimg"><img src="/mailicon/" alt=""></div>
<h2>Stay current on news and new arrivals.</h2>
</div>
<div id="rightprefooter">
<a href="/subscribe-to-library-newsletters" class="button" id="prefooterbutton">Subscribe »</a>
</div>
</div>
</div> */}
      <Section />
    </div>
  )
}

export default Home