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

function Card() {

  return (
    <div class="card">
      <div class="usercard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
          class="pfp"
          alt="Sample profile of another user"
        />
        <h3>Firstname Lastname</h3>
      </div>
      <h5>A one-sentence note that the user can add to their card.</h5>
      <div class="usercard">
        <div class="label">label</div>
        <div class="label">label</div>
        <div class="label">label</div>
      </div>
      <div class="usercard">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/083/604/non_2x/red-heart-icon-illustration-love-signs-in-red-colors-png.png"
            class="largeicon"
            alt="Heart icon"
          />
          <h6 class="heart">save</h6>
        </div>
        <div>
          <div class="usercard">
            <div class="smallpfp"></div>
            <div class="smallpfp"></div>
            <div class="smallpfp"></div>
          </div>
          <h6 class="mutual">mutual</h6>
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
        <img
          class="pfp"
          src="https://cdn-icons-png.flaticon.com/512/3093/3093496.png"
          alt="Sample profile of the viewer"
        />
      </header>
      {/* <div class="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <footer>
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
