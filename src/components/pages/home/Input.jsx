import Img from "../../../assets/img.png";
import Attach from "../../../assets/attach.png";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />

      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" id="send-file" style={{ display: "none" }} />

        <label htmlFor="send-file">
          <img src={Img} alt="" />
        </label>

        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
