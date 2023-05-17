function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Aur Batao</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/10909252/pexels-photo-10909252.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
