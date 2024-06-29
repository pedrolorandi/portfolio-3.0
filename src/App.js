import "./App.css";

function App() {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="https://wallpapercave.com/wp/wp3255752.jpg" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="https://wallpapercave.com/wp/wp3255771.jpg" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="https://wallpapercave.com/wp/wp3255713.jpg" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="https://wallpapercave.com/wp/wp3255783.jpg" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="https://wallpapercave.com/wp/wp3255811.jpg" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="https://wallpapercave.com/wp/wp3255736.jpg" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="https://wallpapercave.com/wp/wp3255733.jpg" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="https://wallpapercave.com/wp/wp3255394.jpg" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="https://wallpapercave.com/wp/wp3255333.jpg" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="https://wallpapercave.com/wp/wp3255831.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
