import '../../styles/Footer.css'


function Footer () {
  return (
    <div>
    <footer class="footer">
            <form className="mailinglist">
              <label id="Email">Join our mailing list</label>
              <input type="text" placeholder="Email" /><button type="button">Submit</button>
            </form>
            <div className="item-social">
              <a href="https://www.facebook.com"><i className="icon ion-social-facebook" aria-label="facebook link"></i></a>
              <a href="https://www.twitter.com"><i className="icon ion-social-twitter" aria-label="twitter link"></i></a>
              <a href="https://www.snapchat.com"><i className="icon ion-social-snapchat" aria-label="snapchat link"></i></a>
              <a href="https://www.instagram.com"><i className="icon ion-social-instagram" aria-label="instagram link"></i></a>
            <p class="copyright">Meowmazon © 2023</p>
        </div>
          </footer>
    </div>
  )
}
export default Footer;