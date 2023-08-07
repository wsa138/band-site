import { useEffect } from 'react';
import '../styling/contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = 'Super Sonic Octopus Contact';
  });

  return (
    <div id="contact-container">
      <h1>Contact</h1>
      <div id="test">
        Email us at <strong>supersonicoctopus@gmail.com</strong>
      </div>
    </div>
  );
};

export default Contact;
