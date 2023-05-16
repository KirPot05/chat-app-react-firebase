import AddAvatar from "../assets/addAvatar.png";

function Register() {
  return (
    <section className="form-container">
      <div className="form-wrapper">
        <span className="logo"> XYZ Chat </span>
        <span className="title">Register</span>

        <form>
          <input type="text" placeholder="Enter your name.." />
          <input type="email" placeholder="sample@example.com" />
          <input type="password" placeholder="*******" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={AddAvatar} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>

          <button type="submit"> Sign Up </button>
        </form>

        <p>Have an account already? Login </p>
      </div>
    </section>
  );
}

export default Register;
