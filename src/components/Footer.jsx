import Form from "./Form";

function Footer() {
  return (
    <footer className="section container-fluid content-header bg-contact-us">
      <div className="row">
        <div className="col-12 col-md-6 mt-md-5">
          <Form />
        </div>
      </div>
      <div className="m-5 d-flex flex-column">
        <span className="form-title">راه های ارتباط با ما : </span>
        <div>
            <a className=" ms-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" style={{width:'3rem'}} src="/assets/img/telegram-logo.svg" />
        </a>
        <a className=" ms-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" style={{width:'3rem'}} src="/assets/img/instagram-logo.svg" />
        </a>
        <a className=" ms-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" style={{width:'3rem'}} src="/assets/img/x-logo.svg" />
        </a>
        <a className=" ms-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" style={{width:'3rem'}} src="/assets/img/linkedin-logo.svg" />
        </a>
        <a className=" ms-1" href="http://t.me/tobeconfi">
          <img className="img-fluid" style={{width:'3rem'}} src="/assets/img/facebook-logo.svg" />
        </a>
        </div>
      
      </div>
    </footer>
  );
}

export default Footer;
