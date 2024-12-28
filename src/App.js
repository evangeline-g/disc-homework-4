import './App.css';
import React, { useState, useEffect } from "react";
import { FaHome, FaHeart, FaUser, FaRegHeart, FaTimes, FaSearch, FaEnvelope } from "react-icons/fa";

// The navigation bar component.
function NavBar() {
  // determines which tab the viewer is currently on
  const [chosen, setChosen] = useState("home");

  const switchTab = (index) => {
    setChosen(index);
  }

  // change the chosen state and display of tabs in response to mouse click
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

// The profile picture component.
function Pfp(props) {

  return (
    <img
      src={props.image}
      class={`pfp ${props.size === "small" ? "small" : "large"}`}
      alt="Sample user profile"
    />
  )
}

// The global array variable that keeps track of which users are saved by the viewer.
const savedUsers = [];

// The save button component.
function Save(props) {
  // determines whether this user is saved
  const [saved, setSaved] = useState("no");

  const switchSaved = () => {
    if (saved === "no") {
      setSaved("yes");
    } else {
      setSaved("no");
    }
  }

  // update the saved list of users to include or remove users when the saved state is changed
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

  // change display of elements in accordance to the saved/not saved state of the user
  return (
    <div class="save" onClick={switchSaved}>
      {saved === "yes" ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
      <h6>{saved === "yes" ? "unsave" : "save"}</h6>
    </div>
  )
}

// The card component that contains user information
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
        {/* displays the list of mutuals (friends of the user who are also friends with the viewer) */}
        <div>
          <div class="cardlayout">
            {props.mutuals.map(mutual => (
              <Pfp image={mutual} size="small" />
            ))}
          </div>
          {/* but if there's no mutual friend, display nothing */}
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
        <Card image="https://cdn-icons-png.freepik.com/512/147/147141.png" name="Example User5" note="Nice to meet you!" label1="Swimming" label2="Harry Potter" label3="Hiking" mutuals={["https://cdn-icons-png.flaticon.com/512/147/147137.png"]} />
        <Card image="https://cdn-icons-png.flaticon.com/512/147/147136.png" name="Example User6" note="Click on my card to learn more about who I am!" label1="Digital art" label2="Tea" label3="Food" mutuals={["https://cdn-icons-png.freepik.com/512/147/147139.png", "https://cdn-icons-png.flaticon.com/512/147/147137.png"]} />
        <Card image="https://cdn-icons-png.freepik.com/512/147/147129.png" name="Example User7" note="Hi!" label1="Basketball" label2="Movies" label3="Photography" mutuals={[]} />
        <Card image="https://cdn-icons-png.flaticon.com/512/147/147137.png" name="Example User8" note="The weather is nice today!" label1="Jogging" label2="Movies" label3="Shopping" mutuals={["https://cdn-icons-png.freepik.com/512/147/147139.png", "https://cdn-icons-png.flaticon.com/512/147/147136.png", "https://cdn-icons-png.freepik.com/512/147/147141.png"]} />
      </div>
      <footer>
        <h4>Made by Evangeline Gong</h4>
        <FaEnvelope size={28} color='#3d3d3d'/>
        <div class="logo">Logo</div>
      </footer>
    </div>
  );
}

export default App;
