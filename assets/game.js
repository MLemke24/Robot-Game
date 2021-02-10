var playerName = window.prompt("What is your robot name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length;  i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }




//Fight Function
var fight = function(enemyName) {
  while(enemyHealth > 0 && playerHealth > 0){
    
  // Fight or Skip
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  if (confirmSkip) {
    window.alert(playerName + ' has decided to skip this fight. Goodbye! ');

    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
  }
}

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

      // reward player
    playerMoney = playerMoney + 20;

    break;
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
  break;
}
else {
  window.alert(playerName + " still has " + playerHealth + " health left. "); 
}

}
  // invalid option

else {
  window.alert("You need to choose a valid option. Try Again!");
}
}
};
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}

// fight ()
