var playerName = window.prompt("What is your robot name?");
var playerHealth = 100;
var playerAttack = 10;\
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//Fight Function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");

  // Fight or Skip

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

if (promptFight === "fight" || promptFight === "FIGHT") {

//Enemy Health after damange

enemyHealth = enemyHealth - playerAttack;

// Enemy health console log 

  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
  );

  // check enemies health 

  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
  }

  // Player Health after damage 

  playerHealth = playerHealth - enemyAttack;

  // Player health console log

  console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
);

// check player health

if (playerHealth <=0) {
  window.alert(playerName + " has died! ");
}
else {
  window.alert(playerName + " still has " + playerHealth + " health left. "); 
}

} else if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!" );
    playerMoney = playerMoney - 2;
  } else {
    fight();
  }
} else {
  window.alert("You need to choose a valid option. Try Again!");
}
};

fight();
