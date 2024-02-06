// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Random Dice Roll & Total
  let die1 = randomInt(1, 7);
  let die2 = randomInt(1, 7);
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);

  return total;
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  for (let n = 1; n <= 5; n++) {
   rollOnce();
  }
}

function rollNTimes() {
  // Prompt for # of rolls
  let numRolls = +prompt("Enter # of rolls:");

  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";

  for (let n = 1; n <= numRolls; n++) {
    rollOnce();
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let count = 0;
  let loop = true;
  while (loop) {
    count++;
    let rollTotal = rollOnce();
    
    if (rollTotal === 2) {
      outputEl.innerHTML += `<p>SNAKE EYES! It took ${count} rolls to get snake eyes.`;
      loop = false;
    }
  }
}
