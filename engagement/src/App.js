import './App.css';
import HTMLFlipBook from "react-pageflip";
import { AudioPlayer } from './AudioPlayer.js';

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
        <p>The very next day, we switched over to discord after asking you for your username. When I saw your profile picture my heart skipped a few beats.</p>
        
      </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <h2>Discord</h2>
        <p>During the next few days and weeks on discord, I would eagerly await for your messages because I honestly had a great time talking to you. </p>
        <p>With each passing day, I learned more and more about you such as:</p>
        <ul>
          <li>Your dark humor</li>
          <li>Your fears in relationships</li>
          <li>A few of your favorite games</li>
          <li>your goals in life</li>
          <li>The reason for your depression at the time</li>
          <li>How much of a total goth you are</li>
          <li>How much of a chef's kiss you are</li>
          <li>Your ex and a few issues with him</li>
          <li>How much of a sweet woman you are</li>
          <li>...how I was falling for you</li>
        </ul>
        <p>At the same time, I wasn't sure if you felt the same way about me due to your short responses, to which you apologized and told me that you were inside your shell and sad.</p>

        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>Breaking the Shell</h2>
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
          <p>At a later time we would travel to see each other. When I went to pick you up at the airport for the first time, I felt butterflies in my stomach.
          Having you in my arms, waking up next to you, being able to kiss you, being able to look into your eyes and tell you that I love are my favorite things in life</p>
          <p>
            Flying over to you left me a bit timid because I was staying at your place, somewhere new for me. There was so much I wanted to say, but I couldn't bring myself to say them or ask.
          </p>

        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>The hard parts</h2>
          <p>In my opinion,no relationship is easy. Relationships are not supposed to be too easy, why? because we learn a lot about each other through the nice times, and the difficult times.
          </p>
          <p>Remember February? I do, it was one of the scariest moments in my life because I almost lost the I love.
          </p>
          <p>I'm glad I didn't because life without you would suck. tedsad</p>

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
    <AudioPlayer />
    </>
  );
}

export default MyBook;
