let board = "";
size = 8;

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if (y % 2 === 0) {
      board += "# ";
    } else {
      board += " #";
    }
  }
  board += "\n";
}

console.log(board);
