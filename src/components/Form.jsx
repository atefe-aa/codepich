function Form() {
  return (
    <>
      <span className="form-title">یک قدم تا وبسایت رویاهایتان مانده است</span>
      <form  autoComplete="off" className="form">
        <div className="input-group input-div">
          <input
            type="text"
            id="name-input"
            name="name-input"
            placeholder="نام و نام خانوداگی :"
          />
        </div>
        <div className="input-group input-div">
          <input
            type="email"
            id="email-input"
            name="email-input"
            placeholder="پست الکترونیکی : "
            style={{direction: 'rtl'}}
          />
        </div>
        <div className="input-group input-div">
          <input
            type="text"
            id="phone-input"
            name="phone-input"
            placeholder="شماره همراه : "
          />
        </div>
        <div className="input-group input-div">
          <input
            type="text"
            id="amount-of-money-input"
            name="amount-of-money-input"
            placeholder="بودجه موردنظر : "
          />
        </div>

        <button className="btn-custom mt-2">درخواست مشاوره</button>
      </form>
    </>
  );
}

export default Form;
