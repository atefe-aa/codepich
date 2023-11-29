import styles from "./Footer.module.css";
import Form from "./Form";

function Footer() {
  return (
    <footer className="section container-fluid content-header bg-contact-us">
      <div className="row">
        <div className="col-12 col-md-6 mt-md-5 mx-5 mx-md-5">
          <Form />
        </div>
      </div>
      <div
        className="m-5"
      >
      <span className="form-title">راه های ارتباط با ما : </span>
        <a className="mb-md-1 me-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" src="/assets/img/telegram-logo.svg" />
        </a>
        <a className="mb-md-1 me-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" src="/assets/img/instagram-logo.svg" />
        </a>
        <a className="mb-md-1 me-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" src="/assets/img/x-logo.svg" />
        </a>
        <a className="mb-md-1 me-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" src="/assets/img/linkedin-logo.svg" />
        </a>
        <a className="mb-md-1 me-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" src="/assets/img/facebook-logo.svg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
