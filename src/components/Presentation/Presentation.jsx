import s from "./style.module.css";
import Logo from "../Logo/Logo";
import logo from "/Users/damien/Desktop/plants-at-home/src/assets/img/logo.png";
import background_img from "/Users/damien/Desktop/plants-at-home/src/assets/img/Capture d’écran 2023-04-27 à 21.38.46.png";

export function Presentation() {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={background_img} alt="" />
      </div>
      <div className={s.presentation}>
        <div className={s.list}>
          De nombreuses éspeces et plantes à découvrir...
        </div>
        <div className={s.logo}>
          <Logo image={logo} title="Flowra" />
        </div>
        <div className={s.list}>Lorem ipsum dolor, sit amet consectetur</div>
      </div>
      <div className={s.line_span}>
        <span className={s.line}></span>
      </div>
    </>
  );
}
