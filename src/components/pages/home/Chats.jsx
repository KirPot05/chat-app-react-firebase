import Cam from "../../../assets/cam.png";
import Add from "../../../assets/add.png";
import More from "../../../assets/more.png";

function Chats() {
  return (
    <div className="chats">
      <div className="chat-info">
        <span>Jane</span>

        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Chats;
