import styles from "./Header.module.scss";
import logo from "../../assets/img/cookchef.png";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenuXs/HeaderMenuXs";
function Header() {
  console.log(styles);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={logo} alt="logo cookchef" />
      </div>
      <ul className={styles.headerList}>
        <button className={"mr-5 btn btn-reverse-primary"}>
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Whishlist</span>
        </button>
        <button className={"btn btn-primary"}>connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars m-15 ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div
            onClick={() => {
              setShowMenu(false);
            }}
            className={"calc"}
          ></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
