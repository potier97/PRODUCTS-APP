import React from 'react';
//import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  // const [date, setDate] = useState(null);
  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch('/api/date');
  //     const newDate = await res.text();
  //     setDate(newDate);
  //   }
  //   getDate();
  // }, []);
  return (
    <main>
      <h1>
        Mini-App de productos {' '}
        <a
          href="https://nutrabiotics.info/productos/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Nutrabiotics
        </a> 
      </h1> 
    </main>
  );
} 
