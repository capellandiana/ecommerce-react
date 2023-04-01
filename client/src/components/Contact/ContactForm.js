import Info from './Info';
import '../../styles/ContactForm.css'

function ContactForm() {
    return (
        <div className="formcontainer">
            <Info />
            <form className="formitem">
                <div className="formform">
                <label className="label">YOUR NAME</label>
                <input className="textform" type="text" placeholder="Enter Your Name"></input>
                <label className="label">EMAIL</label>
                <input className="textform" type="text" placeholder="Email"></input>
                <label className="label">PHONE NUMBER</label>
                <input className="textform" type="text" placeholder="(###) ###-####"></input>
                <label className="label">MESSAGE</label>
                <textarea className="textform" placeholder="Type Your Message Here"></textarea>
                <button className="submit">Submit</button>
                </div>
            </form>

        </div>
    )
        
                    
}

export default ContactForm;