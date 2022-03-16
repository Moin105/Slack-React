import react from "react";
import "./styles/SideNav.css";
import Options from "./Options";
import { BiChevronDown, BiMessageRoundedDetail } from "react-icons/bi";
import { RiWechatLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { BsCaretRightFill, BsCareDownFill } from "react-icons/bs";

function SideNav() {
  return (
    <div className="aside">
      <div className="work-space">
        <h1>
          Dexter Clan <BiChevronDown />
        </h1>
      </div>
      <Options Icon={BiMessageRoundedDetail} name="Threads" />
      <Options Icon={RiWechatLine} name="All DMs" />
      <Options charr="@" name="Mentions & reactions" />
      <Options Icon={FiMoreVertical} name="More" />
      <Options Icon={BsCaretRightFill} name="Channels " />
      <Options Icon={BsCaretRightFill} name="Direct messages" />
    </div>
  );
}
export default SideNav;
