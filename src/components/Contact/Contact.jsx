import React from 'react'
import "./Contact.css"
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import useForm from '../../hook/useForm'
import Sucess from '../Sucess/Sucess'


const Contact = ({sucess}) => {

  const { handleSubmit, isLoading} = useForm()

  return (
    <section className='height' id='contact'>
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
        
            <span>
              <Sucess text='Message sent successfully' show={sucess}/>
              <form onSubmit={handleSubmit}>
                  <input type="text" name='name' placeholder='Your Name' required />
                  <input type="email" name='email' placeholder='Your Email' required />
                  <textarea name="message" rows="7" placeholder='Doubts, Suggestions, Requests, ...' required></textarea>
                  <input type="hidden" name='_next' value="http://localhost:3000/#contact" />
                  <button
                      className='btn btn-primary'
                      type='submit'>
                          {isLoading ? "Sending": "Send" }
                  </button>
                  <input type="hidden" name='_subject' value={`novo contato DO MEU PORTIFOLIO`} />
                  <input type="text" name='_honey' style={{ display: "none" }} /> {/* evitar span */}
                  <input type="hidden" name='_captcha' value="false" /> {/* desabilitar o captcha */}
              </form>
            </span>

      </div>
    </section>
  )
}

export default Contact