import React, { Component } from 'react';
import {getVenues} from './main.js';
import './App.css';
import $ from 'jquery';

// // Page Elements
const $input = $('#city');
const $submit = $('#button'); alert($submit);
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const city = $input.val();

class App extends Component {

  render() {
    return (
      <div className="App">
   <header>
      <img src="https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/wanderlust/logo.svg" alt="logo" />
   </header>
       <main>
         <h1>Where do you want to land?</h1>
             <form autoComplete="off">
               <input type="text" id="city"/>
               <button id="button" type="submit">Submit</button>
             </form>
       </main>
 <div className="container">
     <div id="destination">

     </div>
 <div className="sectiontitle">
   <h2>WEATHER</h2>
 </div>
     <section id="weather">

         <div className="weather" id="weather1">

         </div>
         <div className="weather" id="weather2">

         </div>
         <div className="weather" id="weather3">

         </div>
         <div className="weather" id="weather4">

         </div>

     </section>

           <div className="sectiontitle">
             <h2>TOP ATTRACTIONS</h2>
           </div>
           <section id="venues">
             <div className="venue" id="venue1">

             </div>
             <div className="venue" id="venue2">

             </div>
             <div className="venue" id="venue3">

             </div>
           </section>
                                     <footer>
                                     </footer>

        </div>
      </div>
    );

  }
}



export default App;
