import './App.css';
import HTMLFlipBook from "react-pageflip";
import { AudioPlayer } from './AudioPlayer.js';
import {Helmet} from "react-helmet";

function MyBook(props) {
  return (
    <>
     <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>An Angel & Stephanie Story</title>
            </Helmet>
     </div>
    <HTMLFlipBook width={600} height={700} showCover={true}>
      
      <div className="page page--cover">
        <h1 className="book-title">
          <span className='new-line'>An</span>
          <span className='new-line'>Angel & Stephanie</span>
          <span className='new-line'>Story</span>
          <span className='new-line new-line--small'>
          Tap on the right to turn the page 
          <br></br>
          Tap on the left to go back 
          </span>
         </h1>
         
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>Index</h2>
         <ul className="index-listing">
           <li className='index-item'>
            Page 1........Index
           </li>
           <li className='index-item'>
           Page 2........Chapter 1: In the Beginning
             </li>
             <li className='index-item'>
             Page 3........Chapter 2: Slowly Falling for you
             </li>
             <li className='index-item'>Page 4........Chapter 3: You Were Worth Every Minute
             
             </li>
             <li className='index-item'>
             Page 5........Chapter 4: Traveling Over Land and Water
             </li>
             <li className='index-item'>
             Page 6........Chapter 5: In Dreams
             </li>
             <li className='index-item'>
             Page 7........Chapter 6: The Hard Parts
             </li>
             <li className='index-item'>
             Page 8........Chapter 7: To Do List With You
             </li>
             <li className='index-item'>
             Page 9........Chapter 8: The End and a Beginning
             </li>
         </ul>
         <AudioPlayer />
          <div className="pagination">
            <p>Page 1</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner page__inner--centered">
          <ul className='image-listing'>
            <li className="image-item">
              <img className="image-item__image" src={require('./assets/img/image0.jpeg')} alt="white board"/>
              <p className="image-description">You wrote this on my white board</p>
            </li>
            <li className="image-item">
            <img src={require('./assets/img/image4.jpeg')} alt="fdf"/>
            <p className="image-description">One of the very first selphies you sent</p>
            </li>
            
          </ul>
          <div className="pagination">
            <p>Gallery</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner page__inner--centered">
          <ul className='image-listing'>
            <li className="image-item">
            <img className="image-item__image" src={require('./assets/img/image1.jpeg')} alt="fdf"/>
              <p className="image-description">
                Boba chilling on my lap
              </p>
            </li>
            <li className="image-item">
            <img className="image-item__image" src={require('./assets/img/IMG_1271.jpg')} alt="fdf"/>
            <p className="image-description">Bobaroo and I</p>
            </li>
          </ul>
          <div className="pagination">
            <p>Gallery</p>
          </div>
         
        </div>
      </div>
      <div className="page">
        <div className="page__inner page__inner--centered">
        <ul className='image-listing'>
            <li className="image-item">
              <img className="image-item__image" src={require('./assets/img/image2.jpeg')} alt="fdf"/>
              <p className="image-description">Us!</p>
            </li>
            <li className="image-item">
              <img className="image-item__image" src={require('./assets/img/image3.jpeg')} alt="fdf"/>
              <p className="image-description">Even more us!</p>
            </li>
          </ul>
          <div className="pagination">
            <p>Gallery</p>
          </div>
        </div>
      </div>
      <div className="page">
      <div className="page__inner">
        <h2>CH1: In the Beginning...</h2>
        <p>
            On July 1st, I encountered a post on r/foreveralone, that would later change my life. 
        </p>
        <p> 
          I remember being capivated by your post and quickly sent you a message on reddit, surprisingly you replied the same day.
         </p>
        <p>The very next day, we switched over to discord after asking you for your username. When I saw your profile picture my heart skipped a few beats.
        </p>
        <div className="pagination">
            <p>Page 2</p>
          </div>
      </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <h2>CH2: Slowly falling for you</h2>
        
        <p>During the next few days and weeks on discord, I would eagerly await your messages because I honestly had a great time talking to you. </p>
        <p>With each passing day, I learned more and more about you, such as:</p>
        <ul>
          <li>Your dark humor</li>
          <li>A few of your favorite games</li>
          <li>Your goals in life</li>
          <li>How much of a total goth you are</li>
          <li>How much of a chef's kiss you are</li>
          <li>How much of a sweet woman you are</li>
          <li>...how I was falling for you</li>
          <li>...and more.</li>
        </ul>
        <p>At the time I wasn't sure if you felt the same way about me.</p>
        <div className="pagination">
            <p>Page 3</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH3: You Were Worth Every Minute</h2>
          <p>
            After a while, we got comfortable with each other. Not only did I get your number at a later point in time but we also started dating, got to voice call and video chat on both discord/phone.
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

          <p>...and this is how I also felt about you.</p>
          <div className="pagination">
            <p>Page 4</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH4: Traveling Over Land and Water</h2>
          <p>At a later time we would travel to see each other. When I went to pick you up at the airport for the first time, I felt butterflies in my stomach.
           I realized something that day: having you in my arms, waking up next to you, being able to kiss you, being able to look into your eyes and tell you that I love are my favorite things in life.</p>
          <p>
            The next time I saw you, I flew over to you. While boarding my plane, I was excited, nervous and I felt a few butterflies. As I stepped outside the airport, I felt a whorde of butterflies in my stomach.
            When I finally saw you, I just wanted to get you out of the car and kiss the hell out of you.
          </p>
          <p>I was very timid that time I saw you because it was a completely new area for me. I even got to meet the cute little Boba the corgi!</p>
          <div className="pagination">
            <p>Page 5</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH5: In Dreams</h2>
          <p>
            One night, we were laying on your bed talking about what type of food we would do for our wedding venue, where we would have it and for how many people.  We both 
            decided that we would have a small venue outside with few guests and afterwards we would go to a brazilian steakhouse with our attendees.
          </p>
          <p>
              We then talked about proposal rings and you described to me what kind of ring you wanted. I completely blundered by not taking notes on the ring. Instead, I was thinking
              that you are the woman I want to be with forever.
          </p>
          <div className="pagination">
            <p>Page 6</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH6: The hard parts</h2>
          <p>
            Relationships are not supposed to be too easy, why? because we learn a lot about each other through the nice times, and the difficult times.
          </p>
          <p>Life without you would suck so let's grow and learn together.</p>
          <div className="pagination">
            <p>Page 7</p>
          </div>
        </div>
      </div>
      
      <div className="page">
        <div className="page__inner">
        <h2>CH7: To Do List With You</h2>
         <ul>
           <li>Have late night drive dates around the city</li>
           <li>Cuddle</li>
           <li>Cosplay</li>
           <li>Have date nights at restaurants, concerts (ghost, the weeknd, the midnight), or even date nights at home where we watch anime, the office, or dinner</li>
           <li>Travel to Korea, Japan, the UK, and other places with you</li>
           <li>Have moments where we listen to music together and sing along</li>
           <li>Take turns playing Skyrim</li>
           <li>Play games together</li>
           <li>Get another corgi brother for Boba</li>
           <li>Go on walks with you and Boba</li>
           <li>Go grocery shopping together</li>
           <li>Meet your Grandparents</li>
           <li>Meet your family</li>
           <li>Watch the Office and or Demon Slayer together</li>
           <li>Propose</li>
           <li>Marry</li>
           <li>.....and more</li>
         </ul>
         <div className="pagination">
            <p>Page 8</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH8: The End and a Beginning</h2>
          <p>
            We've been through a ton of things together and I hope to go through many more with you. Thank you for always being there and never giving up.
          </p>
          <h2 className="end">To be continued...</h2>
          <div className='divider'>
            <h3>
              <strong>Babe, can you please turn to look at me right now?</strong>
            </h3>
            <p>Psst... This is your cue to turn around babe....</p>
          </div>
          
          <div className="pagination">
            <p>Page 9</p>
          </div>
        </div>
      </div>
      <div className="page page--backcover">
        <div className="page__inner">
        
        </div>
      </div>
    </HTMLFlipBook>
    </>
  );
}

export default MyBook;