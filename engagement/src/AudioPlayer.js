import React from 'react';
const soundfile = require("./untilIFoundYou.mp3");

export function AudioPlayer(){
    return(
        <>

        <div>
            <audio controlsList="nodownload" controls loop>
            <source src={soundfile} type="audio/mpeg" />
            </audio>
        </div>


     
        </>  
    );
}
