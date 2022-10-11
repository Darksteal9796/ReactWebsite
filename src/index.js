import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var typed = new Typed(".auto-type", {
  strings: ["HAHA I told you , YoU WiLl Be SuRpRiSed :X", "Hello and welcome to the clock", "I was made using vanila HtML , CSS and JS", "Now you all will be wondering how am I different from the rest , right?", "well well well let me tell you , you are in for a surprise", "I can tell time of four different regions at a same time", "And on top of that i even remind you to breathe in between :)", "So am i any good ? if yes please contact Mr.Gautam", "He made me , you can contact him at ", "gautamjoshi.dev@gmail.com", "Thanks for your time , have a wonderful day !!"],
  typeSpeed: 40,
  backSpeed: 8,
  loop: true
})