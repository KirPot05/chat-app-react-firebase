function ChatsList() {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div className="user-chat" key={idx + (Math.random() * 100).toFixed(0)}>
          <img
            src="https://images.pexels.com/photos/10909252/pexels-photo-10909252.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />

          <div className="user-chat-info">
            <span>Jane</span>
            <p>Hello there!</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatsList;
