import react from "react";
import { BiTime } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { BsQuestionCircle } from "react-icons/bs";
import "./styles/Header.css";
import HeaderButton from "./HeaderButton";
function Header() {
  return (
    <header>
      <div className="history">
        <HeaderButton Icon={BiTime} />
        {/* <BiTime /> */}
      </div>

      <div className="forum">
        <CgSearch className="search-icon" />
        <input type="button" className="input" />
        <span></span>
      </div>
      <div className="info-icons">
        <HeaderButton Icon={BsQuestionCircle} />
        <HeaderButton Icon={""} />
        {/* image to be put in ^^^^*/}
      </div>
    </header>
  );
}
export default Header;
