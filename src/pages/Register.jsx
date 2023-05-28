import { useEffect, useState } from "react";
import AddAvatar from "../assets/addAvatar.png";
import Input from "../components/global/Input";
import { signUp } from "../services/auth";
import { handleImageUpload } from "../services";
import { updateProfile } from "firebase/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signUp(email, password, name);
      await handleImageUpload(file, name, setPercentage, setImgUrl);

      updateProfile(user, {
        displayName: name,
        photoURL: imgUrl,
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <section className="form-container">
      <div className="form-wrapper">
        <span className="logo"> Aur Batao </span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter your name.."
            value={name}
            setValue={setName}
          />
          <Input
            type="email"
            placeholder="sample@example.com"
            value={email}
            setValue={setEmail}
          />
          <Input
            type="password"
            placeholder="*******"
            value={password}
            setValue={setPassword}
          />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            accept="image/*"
            value={file.fileName || ""}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={imgUrl || AddAvatar} alt="Add Avatar" />
            {!imgUrl && <span>Add an avatar</span>}
          </label>

          <button type="submit"> Sign Up </button>
        </form>

        <p>Have an account already? Login </p>
      </div>
    </section>
  );
}

export default Register;
