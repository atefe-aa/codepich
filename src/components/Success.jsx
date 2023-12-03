import styles from "../styles/Success.module.css";

function Success() {
    return (
       <div className={`"col-12 col-md-10 offset-0 offset-md-1 mt-5  mb-5" ${styles.formContactUsPage}`}>
        <div className="text-top mt-0">
          <h1>اطلاعات ثبت شد!</h1>
          <p>اطلاعات شما با موفقیت ثبت شد و به زودی همکاران ما با شما تماس خواهند گرفت</p>
        </div>
      </div> 
    )
}

export default Success
