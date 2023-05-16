import AddAvatar from "../assets/addAvatar.png";

function Login() {
  return (
    <section className="form-container">
      <div className="form-wrapper">
        <span className="logo"> XYZ Chat </span>
        <span className="title">Login</span>

        <form>
          <input type="email" placeholder="sample@example.com" />
          <input type="password" placeholder="*******" />

          <button type="submit"> Sign In </button>
        </form>

        <p>Don't have an account? Register </p>
      </div>
    </section>
  );
}

export default Login;