function Search() {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find user..." />
      </div>

      <div className="user-chat">
        <img
          src="https://images.pexels.com/photos/10909252/pexels-photo-10909252.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />

        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
