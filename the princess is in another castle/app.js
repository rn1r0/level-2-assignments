class Player {
  constructor() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Powered Up";
    this.hasStar = false;
  }

  setName(namePicked) {
    if (namePicked === "Mario" || namePicked === "Luigi") {
      this.name = namePicked;
    } else {
      console.log('Invalid name! Please choose either "Mario" or "Luigi".');
    }
  }

  gotHit() {
    switch (this.status) {
      case "Powered Up":
        this.status = "Big";
        break;
      case "Big":
        this.status = "Small";
        break;
      case "Small":
        this.status = "Dead";
        break;
      default:
        console.log("Invalid status!");
    }
  }

  gotPowerup() {
    switch (this.status) {
      case "Small":
        this.status = "Big";
        break;
      case "Big":
        this.status = "Powered Up";
        break;
      case "Powered Up":
        this.hasStar = true;
        break;
      default:
        console.log("Invalid status!");
    }
  }

  addCoin() {
    this.totalCoins++;
  }

  print() {
    console.log("Name:", this.name);
    console.log("Total Coins:", this.totalCoins);
    console.log("Status:", this.status);
    console.log("Star", this.hasStar ? "Yes" : "No");
  }
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const player = new Player();
player.setName('Mario');

const intervalId = setInterval(() => {
  const randomValue = getRandomInRange(0, 2);
  switch (randomValue) {
    case 0:
      player.gotHit();
      break;
    case 1:
      player.gotPowerup();
      break;
    case 2:
      player.addCoin();
      break;
    default:
      console.log('Invalid value!');
  }

  player.print();

  if (player.status === 'Dead') {
    clearInterval(intervalId);
    console.log('Game Over!');
  }
}, 1000);