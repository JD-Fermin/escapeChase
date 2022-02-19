export const Puzzle = function _Puzzle(player) {
    Puzzle.player = player;
  return `
    <div id="puzzle">
              <div class="letter-input" index=0>${_Puzzle.state.code[0]}</div>
              <div class="letter-input" index=1>${_Puzzle.state.code[1]}</div>
              <div class="letter-input" index=2>${_Puzzle.state.code[2]}</div>
              <div class="letter-input" index=3>${_Puzzle.state.code[3]}</div>
              <div class="letter-input" index=4>${_Puzzle.state.code[4]}</div>
              <div class="letter-input" index=5>${_Puzzle.state.code[5]}</div>

            </div>`;
};

Puzzle.state = {
  // code: ["R", "5", "Y", "0", "A", "4"],
    code: ["A", "A", "A", "A", "A", "A"],
  changeCode: (index, value) => {
    setState(() => {
      Puzzle.state.code[index] = value; 
    });
  },
  checkCode: () => {
    if (Puzzle.state.code.join("") === "R5Y0J4") {
        Puzzle.player.hasKey = true;
      document.getElementById("puzzle").style.display = "none";
    }
  },
};

const addListen = () => {
  const chars = document.querySelectorAll(".letter-input");
  const alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  chars.forEach((char) => {
    char.addEventListener("click", (event) => {
      const nextChar =
        alphaNum.indexOf(char.innerHTML) + 1 < 36
          ? alphaNum[alphaNum.indexOf(char.innerHTML) + 1]
          : alphaNum[0];
      Puzzle.state.changeCode(event.target.getAttribute("index"), nextChar);
      Puzzle.state.checkCode();
    });
  });
};

export const update = (player) => {
  document.getElementById("puzzle-container").innerHTML = Puzzle(player);
  addListen();
};

const setState = (callback) => {
  callback();
  update(Puzzle.player);
};
