
import React from 'react';

import './ContactMe.css';


const contactMe = function(props){
  return (
    <div className="ContactMe">
      <p>Contact Me</p>
      <div>
        <form action="/action_page.php">
        <label>First Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email"/>

        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Your text here.."></textarea>
        <input type="submit" value="Submit"/>
        </form>
        </div>
    </div>
  );
}

export default contactMe
