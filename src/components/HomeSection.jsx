function HomeSection({children}) {
  return (
    <section className="section container-fluid content-header bg-main-page">
        <div className="row h-100">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column h-100">
            <h1 className="header-title" data-aos="zoom-in-down" data-aos-duration="600">کدپیچ | طراحی وبسایت کارآمد مثل پیچ</h1>
            <span className="header-description" data-aos="fade-up" data-aos-duration="1000">با کدپیچ وبسایت پرفروش و کارآمد مانند پیچ را تجربه کنید</span>
          </div>
        </div>
        {children || null}
      </section>
  );
}

export default HomeSection;
