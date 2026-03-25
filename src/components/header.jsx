import "./header.scss";

function HomeHeader() {
  return (
    <div className="home-header">
      <div className="home-header__top">
        <div className="logo">LOGO</div>
        <div className="actions">
          <span className="icon">🔍</span>
          <span className="icon">🛒</span>
        </div>
      </div>

      <div className="home-header__banner">
        <img
          src="https://via.placeholder.com/375x150"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default HomeHeader;