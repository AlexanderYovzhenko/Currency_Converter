import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="Navigation">
      <nav className="navigation-menu">
        <Link className="link" to="/convertor">Конвертор</Link>
        <Link className="link" to="/courses">Курсы валют</Link>
      </nav>
    </div>
  );
}

export default Navigation;
