fend-arcade-game
===============================
Simple JavaScript canvas game where the player has to get a key and reach the water to win the game. This project uses JavaScript Object Oriented programming.

##Basic Functionality

In this game you have a player and an enemy which moves across the screen, the player has to avoid colliding with the enemy and reach the water. In this game he has to get a key before reaching the water to win. There are also objects like a heart and a gem for the user to collect but is not needed to win the game.

##Getting started

Load the game https://rashmi-dev.github.io/fend-arcade-game/ in the browser to play the game. You can also refresh the game to re-load the game page.

##How the game works

There are three important factors to consider in order to win the game.
1. Lives :- The player has 10 lives. Each time he/she collides with the enemy, the player loses a life.
2. Key :- Player has to get the key before going to the water to win the game.
3. Water :- Reaching the water he/she finishes the game.

The player can also collect a gem and a heart and it is displayed on the screen.


##How to play the game

Each time an arrow key is pressed the player moves in the direction of the arrow. The player or any object never moves beyond the canvas space. Here are some of the scenarios to help learn how to play the game.

1. After loading the game ,the player has the option to collect a heart and a key. The player can collect it by moving the arrow key in the direction of the item. Make sure you go close enough to the item so that you can collect it.

2. After collecting the key ,the player should cross the enemy region. Every time the player-enemy collide ,the player position is reset and she loses a life. Make sure to wait for an opening to move ahead. Usually there are plenty of opputunities to do so.

3. If the player loses all the lives, the game is reset.

4. If the player reaches the water after getting the key she wins the game.

4. If the player reaches the water without the key, a warning is displayed.

Hope you enjoy playing the game!











