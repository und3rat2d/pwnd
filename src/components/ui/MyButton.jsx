import { useState } from "react";
import "../../App.css";
function MyButton() {
  function handleClick() {
    alert("Tu as cliqué !");
  }

  return (
    <button class="btn" onClick={handleClick}>
      Mon bouton
    </button>
  );
}

export default MyButton;