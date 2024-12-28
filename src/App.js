import './App.css';
import React, { useState, useEffect } from "react";
import { FaHome, FaHeart, FaUser, FaRegHeart, FaTimes, FaSearch } from "react-icons/fa";

function NavBar() {
  const [chosen, setChosen] = useState("home");

  const switchTab = (index) => {
    setChosen(index);
  }

  return (
    <nav>
      <div class="logo">Logo</div>
      <div class={`tab ${chosen === "home" ? "chosen" : ""}`} onClick={() => switchTab("home")}>
        <FaHome />
        <h5>Home</h5>
      </div>
      <div class={`tab ${chosen === "saved" ? "chosen" : ""}`} onClick={() => switchTab("saved")}>
        <FaHeart />
        <h5>Saved</h5>
      </div>
      <div class={`tab ${chosen === "profile" ? "chosen" : ""}`} onClick={() => switchTab("profile")}>
        <FaUser />
        <h5>Profile</h5>
      </div>
    </nav>
  );
}

function Pfp(props) {

  return (
    <img
      src={props.image}
      class={`pfp ${props.size === "small" ? "small" : "large"}`}
      alt="Sample user profile"
    />
  )
}

const savedUsers = [];

function Save(props) {
  const [saved, setSaved] = useState("no");

  const switchSaved = () => {
    if (saved === "no") {
      setSaved("yes");
    } else {
      setSaved("no");
    }
  }

  useEffect(() => {
    if (saved === "yes") {
      savedUsers.push(props.name);
    } else {
      savedUsers.forEach((item, index) => {
        if (item === props.name) {
          savedUsers.splice(index, 1);
        }
      })
    }
  }, [saved]);

  return (
    <div class="save" onClick={switchSaved}>
      {saved === "yes" ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
      <h6>{saved === "yes" ? "unsave" : "save"}</h6>
    </div>
  )
}

function Card(props) {

  return (
    <div class="card">
      <div class="cardlayout">
        <Pfp image={props.image} size="large" />
        <h5>{props.name}</h5>
      </div>
      <h6>{props.note}</h6>
      <div class="cardlayout">
        <div class="label">{props.label1}</div>
        <div class="label">{props.label2}</div>
        <div class="label">{props.label3}</div>
      </div>
      <div class="cardlayout">
        <Save name={props.name} />
        <div>
          <div class="cardlayout">
            {props.mutuals.map(mutual => (
              <Pfp image={mutual} size="small" />
            ))}
          </div>
          <h6>{props.mutuals.length === 0 ? "" : "mutual"}</h6>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <div>
      <NavBar />
      <header>
        <div class="searchbar">
          <h6>Search users...</h6>
          <FaTimes />
        </div>
        <FaSearch size={28} />
        <button>Filter</button>
        <h3>Myfirstname Lastname</h3>
        <Pfp image="https://cdn-icons-png.flaticon.com/512/3093/3093496.png" size="large" />
      </header>
      <div class="cards">
        <Card image="https://cdn-icons-png.freepik.com/512/147/147141.png" name="Example User1" note="Nice to meet you!" label1="Swimming" label2="Harry Potter" label3="Hiking" mutuals={["https://cdn-icons-png.flaticon.com/512/147/147137.png"]} />
        <Card image="https://cdn-icons-png.flaticon.com/512/147/147136.png" name="Example User2" note="Click on my card to learn more about who I am!" label1="Digital art" label2="Tea" label3="Food" mutuals={["https://cdn-icons-png.freepik.com/512/147/147139.png", "https://cdn-icons-png.flaticon.com/512/147/147137.png"]} />
        <Card image="https://cdn-icons-png.freepik.com/512/147/147129.png" name="Example User3" note="Hi!" label1="Basketball" label2="Movies" label3="Photography" mutuals={[]} />
        <Card image="https://cdn-icons-png.flaticon.com/512/147/147137.png" name="Example User4" note="The weather is nice today!" label1="Jogging" label2="Movies" label3="Shopping" mutuals={["https://cdn-icons-png.freepik.com/512/147/147139.png", "https://cdn-icons-png.flaticon.com/512/147/147136.png", "https://cdn-icons-png.freepik.com/512/147/147141.png"]} />
        <Card image="https://cdn-icons-png.freepik.com/512/147/147141.png" name="Example User1" note="Nice to meet you!" label1="Swimming" label2="Harry Potter" label3="Hiking" mutuals={["https://cdn-icons-png.flaticon.com/512/147/147137.png"]} />
        <Card image="https://cdn-icons-png.flaticon.com/512/147/147136.png" name="Example User2" note="Click on my card to learn more about who I am!" label1="Digital art" label2="Tea" label3="Food" mutuals={["https://cdn-icons-png.freepik.com/512/147/147139.png", "https://cdn-icons-png.flaticon.com/512/147/147137.png"]} />
        <Card image="https://cdn-icons-png.freepik.com/512/147/147129.png" name="Example User3" note="Hi!" label1="Basketball" label2="Movies" label3="Photography" mutuals={[]} />
        <Card image="https://cdn-icons-png.flaticon.com/512/147/147137.png" name="Example User4" note="The weather is nice today!" label1="Jogging" label2="Movies" label3="Shopping" mutuals={["https://cdn-icons-png.freepik.com/512/147/147139.png", "https://cdn-icons-png.flaticon.com/512/147/147136.png", "https://cdn-icons-png.freepik.com/512/147/147141.png"]} />
      </div>
      {/* <footer>
        <h4>Made by Evangeline Gong</h4>
        <img
          src="https://cssdp.org/uploads/2019/08/white-email-icon-png-26.png"
          class="icon"
          alt="Email icon"
        />
        <div class="logo" id="bottomright">Logo</div>
      </footer> */}
    </div>
  );
}

export default App;
