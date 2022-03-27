import contactStyles from '../styles/Contact.module.css'
import TopText from './TopText'

const ContactForm = () => {

  const submitForm = (e) => {
      e.preventDefault();
      console.log('Clicked')
  }

  return (
    <section className={contactStyles.contactsection}>
        <div className="container">
            <TopText headertext = 'CONTACT US' paragraphtext = 'Fill in your details, so that we can contact you' />

            <section className={contactStyles.contactformsection}>
                <article className={contactStyles.contactformtext}>
                    <h1> Ask us Anything </h1>
                    <p className="underline"> </p>
                    <p> Email: info@rapartments.com </p>
                    <p> Phone No: +112123123 </p>
                </article>

                <form className={contactStyles.contactform}>
                  <input type="text" placeholder="Enter Full Name" required/>
                  <input type="email" placeholder="Enter Email Address" required/>
                  <textarea cols="30" rows="10"></textarea>
                  <button type="submit"> SEND MESSAGE </button>
                </form>
            </section>
        </div>
    </section>
  )
}

export default ContactForm