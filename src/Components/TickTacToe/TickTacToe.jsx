import React, { useState, useRef } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assests/circle.png";
import cross_icon from "../Assests/cross.png";
import profile_photo from "../Assests/profilee.png"; // add this

let data = ["", "", "", "", "", "", "", "", ""];

const TickTackToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    // Stop if game is locked
    if (lock) return;

    // Prevent overwriting a filled box
    if (data[num] !== "") return;

    // Player turn logic
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
    }

    setCount(count + 1);
    checkWin();

    // Stop accepting moves after 9 clicks if no one won
    if (count + 1 === 9 && !lock) {
      setLock(true);
      titleRef.current.innerHTML = "Match Draw!";
    }
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations : <img src=${cross_icon}>`;
    } else {
      titleRef.current.innerHTML = `Congratulations : <img src=${circle_icon}>`;
    }
  };

  const reset = () => {
    setLock(false);
    setCount(0); // reset move counter
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe in <span>React</span>";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <img
        className="profile-avatar"
        src={profile_photo}
        alt="Your Name"
      />
      <h1 className="title" ref={titleRef}>
        Tick Tac Toe Game in <span> React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>

      {/* About Me */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name]. I built this Tic Tac Toe app with React to practice state
          and UI logic. I enjoy [your interests or stack].
        </p>
        <div className="about-me__links">
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:you@example.com">Email</a>
        </div>
      </section>
    </div>
  );
};

export default TickTackToe;

