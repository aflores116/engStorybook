import React from 'react';
const soundfile = require("./untilIFoundYou.mp3");

export function AudioPlayer(){
    return(
        <>

        <div className='divider'>
        <h3>Play me before reading</h3>
            <audio controlsList="nodownload" controls loop>
            <source src={soundfile} type="audio/mpeg" />
            </audio>
        </div>
        </>  
    );
}
