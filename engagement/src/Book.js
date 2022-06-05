import React from 'react';
import HTMLFlipBook from "react-pageflip";

function Book(props) {
    return (
      <HTMLFlipBook width={300} height={500}>
        <div className="demoPage">
          <h1>The adventures of Stephanie and Angel</h1>
        </div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
      </HTMLFlipBook>
    );
  }