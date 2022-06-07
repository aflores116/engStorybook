import './App.css';
import HTMLFlipBook from "react-pageflip";
import { AudioPlayer } from './AudioPlayer.js';

function MyBook(props) {
  return (
    <>
    <HTMLFlipBook width={600} height={800} showCover={true}>
      
      <div className="page page--cover">
        <h1 className="book-title">
          <span className='new-line'>An</span>
          <span className='new-line'>Angel & Stephanie</span>
          <span className='new-line'>Story</span>
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
           Page 2........Chapter 1: In the beginning
             </li>
             <li className='index-item'>
             Page 3........Chapter 2: Trappped in A Shell
             </li>
             <li className='index-item'>Page 4........Chapter 3: Breaking the Shell
             
             </li>
             <li className='index-item'>
             Page 5........Chapter 4: Traveling Over Earth and Water
             </li>
             <li className='index-item'>
             Page 6........Chapter 5: In Dreams
             </li>
             <li className='index-item'>
             Page 7........Chapter 6: the hard parts
             </li>
             <li className='index-item'>
             Page 8........Chapter 7: To Do List With You
             </li>
             <li className='index-item'>
             Page 9+........Chapter 8: The End and a Beginning
             </li>
         </ul>
         <AudioPlayer />
          <div className="pagination">
            <p>Page 1</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <ul className='image-listing'>
            <li className="image-item"><img src={require('./assets/img/image0.jpeg')} alt="fdf"/></li>
            <li className="image-item"><img src={require('./assets/img/image4.jpeg')} alt="fdf"/></li>
          
          </ul>
         
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <div className='hero'>
          <ul className='image-listing'>
            <li className="image-item"><img src={require('./assets/img/image1.jpeg')} alt="fdf"/></li>
            <li className="image-item"><img src={require('./assets/img/IMG_1271.jpg')} alt="fdf"/></li>
          </ul>
          </div>
         
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <ul className='image-listing'>
            <li className="image-item"><img src={require('./assets/img/image2.jpeg')} alt="fdf"/></li>
            <li className="image-item"><img src={require('./assets/img/image3.jpeg')} alt="fdf"/></li>
          </ul>
          <div className="pagination">
            <p>Page 1</p>
          </div>
        </div>
      </div>
      <div className="page">
      <div className="page__inner">
        <h2>CH1: In the Beginning...</h2>
       
        <p>
            On July 1st, I encountered a post that would later change my life on r/foreveralone. 
        </p>
        <p> I remember being capivated by your post and quickly sent you a message on reddit, surprisingly you replied the same day. </p>
        <p>The very next day, we switched over to discord after asking you for your username. When I saw your profile picture my heart skipped a few beats.</p>
        {/* <img src={require('./assets/img/background.jpg')} /> */}
        
       
        <div className="pagination">
            <p>Page 2</p>
          </div>
      </div>
      </div>
      <div className="page">
        <div className="page__inner">
        <h2>CH2: Trapped in A Shell</h2>
        
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
        <div className="pagination">
            <p>Page 3</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH3: Breaking the Shell</h2>
          <p>
            After a while, I got you out of your shell. Not only did I get your number at a later point but we also started dating, got to voice call and video chat on both discord and/or phones. I got to know you more and more
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
          <div className="pagination">
            <p>Page 4</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>CH4: Traveling Over Earth and Water</h2>
          <p>At a later time we would travel to see each other. When I went to pick you up at the airport for the first time, I felt butterflies in my stomach.
           I've realized something that day, having you in my arms, waking up next to you, being able to kiss you, being able to look into your eyes and tell you that I love are my favorite things in life</p>
          <p>
            the next time I saw you, I flew over to you. While boarding my plane, I was excited, nervous and I felt a few butterflies. When I stepped outside the airport, I felt a whorde of butterflies in my stomach.
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
            One night, we were laying on your bed talking about what type of food we would do for our wedding venue, where we would have it at, for how many people, and we both 
            decided that we would have a small venue outside with few guests, after we would go to a brazilian steakhouse with our attendees.
          </p>
          <p>
              We then talked about proposal rings, you described to me what kind of ring you wanted, and I completely blundered by not taking notes on the ring. Instead, I was thinking
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
          <p>In my opinion,no relationship is easy. Relationships are not supposed to be too easy, why? because we learn a lot about each other through the nice times, and the difficult times.
          </p>
          <p>Remember February? I do, it was one of the scariest moments in my life because I almost lost the person I love, you.
          </p>
          <p>I'm glad I didn't because life without you would suck. We just need to grow and learn together!</p>
          <div className="pagination">
            <p>Page 7</p>
          </div>
        </div>
      </div>
      
      <div className="page">
        <div className="page__inner">
        <h2>CH7: To Do List With You</h2>
         <ul>
           <li>have late night drive dates around the city</li>
           <li>cuddle</li>
           <li>Cosplay</li>
           <li>have date nights at restaurants, concerts (ghost, the weeknd, the midnight), or even date nights at home where we watch anime, the office, or dinner</li>
           <li>travel to Korea, Japan, the UK, and other places with you</li>
           <li>Have moments where we listen to music together and sing along</li>
           <li>Take turns playing Skyrim</li>
           <li>Play games together</li>
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
            We've been through a ton of things together and I hope to go through more with you. Thank you for always being there and never giving up.
          </p>
          <div className='divider'>
            <p>
              <strong>Babe, can you please turn to look at me right now?</strong>
            </p>
          </div>
          <div className="pagination">
            <p>Page 9</p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
          <h2>Seriously, turn around</h2>
        
          <div className='divider'>
            <p>
              <strong>Seriously, turn around</strong>
            </p>
          </div>
        
        </div>
      </div>
      <div className="page">
        <div className="page__inner">
         
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
