import React, { useState } from 'react'
import "./Contact.css"
import AppWrapp from '../../wrapp/AppWrapp'
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"


const Contact = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    await fetch('https://formsubmit.co/denisson.graca3@gmail.com', {
      method: 'POST',
      body: formData,
    });

    setIsSubmitted(true);
  };

  return (
    <section className='height'>
      <h5>Say Something</h5>
      <h2 className='contact__h2'>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>denisson.graca3@gmail.com</h5>
            <a href="mailto:denisson.graca3@gmail.com" target={"_blank"} rel='noreferrer'>Enviar Messagem</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon' />
            <h4>Whatsapp</h4>
            <h5>+55 (79) 99845-9078</h5>
            <a href="https://api.whatsapp.com/send?phone=7998459078" target={"_blank"} rel='noreferrer'>WhatsApp message</a>
          </article>
        </div>
        {isSubmitted ? (
          <div>
            <h3>Thanks for Contact Me, Wait for My Email Message :)</h3>
          </div>
        ) : (

          <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Doubts, Suggestions, Requests, ...' required></textarea>
            <input type="hidden" name='_next' value="http://localhost:3000/#contact" />
            <button className='btn btn-primary' type='submit'>Send</button>

            <input type="hidden" name='_subject' value={`novo contato DO MEU PORTIFOLIO`} />
            <input type="text" name='_honey' style={{ display: "none" }} /> {/* evitar span */}
            <input type="hidden" name='_captcha' value="false" /> {/* desabilitar o captcha */}
          </form>
        )
        }
      </div>
    </section>
  )
}

export default AppWrapp(Contact, 'contact')