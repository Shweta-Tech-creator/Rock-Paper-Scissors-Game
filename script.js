function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('userChoice').textContent = emoji(userChoice);
  document.getElementById('computerChoice').textContent = emoji(computerChoice);

  const winner = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = winner;
}

function getWinner(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return '🎉 You Win!';
  } else {
    return '😢 You Lose!';
  }
}

function emoji(choice) {
  switch (choice) {
    case 'rock': return '✊';
    case 'paper': return '🖐️';
    case 'scissors': return '✌️';
  }
}
