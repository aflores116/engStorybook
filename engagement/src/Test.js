import React from 'react';


export function Test(){
    return(
        <>
            <h1 style={styles.pageTitle} className='yo'>FilmDetails</h1>
        </>  
    );
}

const styles = {
    pageTitle:{
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '1px',
        margin: '5px',
        color: 'red',
      },
}