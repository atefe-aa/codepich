function Header() {
    return (
      
        <header className="w-100 pt-4">
          <div className="container header-container">
            <div className="row h-100">
              <div className="col-12 d-flex justify-content-between h-100 align-items-center">
                <nav>
                  <ul className="menu h-100 d-flex align-items-center p-0 pb-3 m-0">
                    <li className="item-menu">خدمات</li>
                    <li className="item-menu">فرآیند</li>
                    <li className="item-menu">چرا ما؟</li>
                  </ul>
                </nav>
                <img src="assets/img/logo-white.svg" alt="logo-codepich" />
                <a className="ctn team-cv pb-3">رزومه تیم</a>
              </div>
            </div>
          </div>
     
        </header>
    )
}

export default Header
