import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from "react-pageflip";
import { Test } from './Test.js';

function MyBook(props) {
  return (
    <>
    <HTMLFlipBook width={600} height={800}>
      <div className="page page--table">
    
      </div>
      <div className="page page--cover">
        <h1 className="book-title">
          <span className='new-line'>And ever After</span>
          <span className='new-line'>Angel & Stephanie</span>
         </h1>
         
      </div>
      <div className="page">
      <div className="page__inner">
        <h2>In the Beginning...</h2>
        <p>
            On July 1st, I encountered a post that would later change my life on r/foreveralone. 
        </p>
        <p> I remember being capivated by your post and quickly sent you a message on reddit, surprisingly you replied the same day. </p>
        <p>The very next day, we switched over to discord after asking you for your username</p>
        
      </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <h2>Discord</h2>
        <p>Once we moved to discord, we shared our names which each other and I remember looking at your profile picture and thinking to myself that you were very pretty and you called me handsome.</p>
        <p>
          We talked everyday and revealed so much about each other. During that period, you were very sad and inside your shell.
        </p>
        <p>
          I also couldn't read you at all so I wasn't sure if you were interested in me or not. but the more we excahnged in conversation, the more I was into you and I also discovered your love for skyrim.
        </p>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>Breakthrough</h2>
          <p>
            After a while, I got you out of your shell. Not only did I get your number at a later point but we also started dating, got to voice call and video chat on discord or facetime. I got to know you more and more
          </p>
          <p>During this time, you sent me a quote by Mark Anthony,</p>
          <blockquote>
            <span className='new-line'>" I waited for you </span>
            <span className='new-line'>My entire life</span>
            <span className='new-line'>and you </span>
            <span className='new-line'>were worth </span>
            <span className='new-line'>every minute "</span>
            <span className='new-line'>- Mark Anthony</span>
          </blockquote>
          <p>After a while, you came to visit me and I went to visit you at a later point!</p>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <h2>Romance</h2>
          <p>
            After getting to know each other more, you flew over to see me. I took you to see downtown, we got KBBQ, and the whole time we spent it making out with each other, secually charged and frustrated. Embarrasingly enough, I cut myself while I manscaping a day or two before you flew in and you had your issues too.
          </p>
          <p>
           when it was then my turn to fly to you, and I was a total bitch when I was with you. I was somewhere new and didn't feel like I was in my element to be me. One thing that I did love, is that I met our little Boba. The funny thing is that you cut yourself that time
          </p>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <h2>Things I want to do with you</h2>
         <ul>
           <li>have late night drive dates around the city</li>
           <li>cuddle</li>
           <li>Cosplay</li>
           <li>have date nights at restaurants, concerts (ghost, the weeknd, the midnight), or even daten ights at home where we watch anime, the office, or dinner</li>
           <li>travel to Korea, Japan, the UK, and other places with you</li>
           <li>Have moments where we listen to music together and sing along</li>
           <li>Take turns playing Skyrim</li>
           <li>Play games together</li>
           <li>Go on walks with you and Boba</li>
           <li>Go grocery shopping together</li>
           <li>.....and more</li>
         </ul>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>The End...</h2>
          <p>
          Babe, can you please turn to look at me right now?
          </p>
        </div>
      </div>
    </HTMLFlipBook>
    
    </>
  );
}

export default MyBook;
