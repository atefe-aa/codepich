function AboutPerson() {
  return (
    <section className="overflow-x-hidden bg-about-person">
      <div className="person-ability container mt-5">
        <div className="row">
          <div className="col-12 col-md-3 p-2 mb-4">
            <div className="rounded p-4">
              <div className="mb-4">
                <div className="d-flex justify-content-center name">
                  زهرا علی عسگریان
                </div>
                <div className="job d-flex justify-content-center">گرافیست</div>
              </div>
            </div>
            <div className="rounded p-4 mt-5 glass-bg-2">
              <b>درباره من:</b>
              <p className="my-3">
                زهرا علی عسسگریا ن گرافیست زهرا علی عسسگریا ن گرافیست زهرا علی
                عسسگریا ن گرافیست زهرا علی عسسگریا ن گرافیست زهرا علی عسسگریا ن
                گرافیست
              </p>
            </div>

            <div className="rounded-5 p-2 mt-4 glass-bg-2">
              <img src="/assets/img/phone.svg" alt="phone" className="w-10" />
              <span className="float-end">شماره تماس</span>
            </div>
            <div className="rounded-5 p-2 mt-4 glass-bg-2">
              <img src="/assets/img/linkdin.svg" alt="phone" className="w-10" />
              <span className="float-end">ادرس</span>
            </div>
            <div className="rounded-5 p-2 mt-4 glass-bg-2">
              <img
                src="/assets/img/instagram.svg"
                alt="phone"
                className="w-10"
              />
              <span className="float-end">آدرس</span>
            </div>
            <div className="rounded-5 p-2 mt-4 glass-bg-2">
              <img
                src="/assets/img/telegram.svg"
                alt="phone"
                className="w-10"
              />
              <span className="float-end">ادرس</span>
            </div>
          </div>
          <div className="col-12 col-md-9 p-2">
            <div
              className="rounded p-4 position-relative"
              style={{ background: "rgba(214, 214, 214, 0.95)" }}
            >
              <div className="education">
                <h6 className="title p-2 rounded-3 d-inline ability-title">
                  تحصیلات
                </h6>
                <div className="ability-person">تحصیلات وارد شود</div>
              </div>
              <div className="sabeghe">
                <h6 className="title-2 p-2 rounded-3 d-inline ability-title">
                  سابقه کاری
                </h6>
                <div className="ability-person">سابقه کاری وارد شود</div>
              </div>
              <div className="my-skill">
                <h6 className="title-3 p-2 rounded-3 d-inline ability-title">
                  مهارت های من
                </h6>
                <div className="ability-person">مهارت ها وارد شود</div>
              </div>
              <div className="alayegh">
                <h6 className="title-4 p-2 rounded-3 d-inline ability-title">
                  علایق من
                </h6>
                <div className="ability-person" style={{ minHeight: "200px" }}>
                  وارد شود
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPerson;
