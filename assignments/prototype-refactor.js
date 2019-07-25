/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor (character) {
    this.createdAt = character.createdAt;
    this.name = character.name;
    this.dimensions = character.dimensions;
    }

    destroy() {return `${this.name} was removed from the game.`}
};

class CharacterStats extends GameObject {
    constructor (figure){
        super (figure);
        this.healthPoints = figure.healthPoints;
    }
    takeDamage () {return `${this.name} took damage.`}
};

class Humanoid extends CharacterStats {
    constructor (tools) {
        super (tools);
        this.team = tools.team;
        this.weapons = tools.weapons;
        this.language = tools.language;
    }

    greet () {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}




/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  class Villain extends Humanoid {
      constructor (villain) {
          super (villain);
      }
      stab (victim) {
        victim.healthPoints = victim.healthPoints - 5;
        if(victim.healthPoints <= 0) {
          return victim.destroy();
        }
     }
  }



  
  const ken = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Ken',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(ken.stab(mage));
console.log(mage.healthPoints);
  


  class Hero extends Humanoid {
      constructor (hero) {
          super (hero);
      }

      kamehameha (victim) {
        victim.healthPoints = victim.healthPoints -10;
        if (victim.healthPoints <= 0) {
          return victim.destroy();
        } else {
          return victim.healthPoints;
            }
      }
  }
 
  const jessy = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Jessy',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  console.log(jessy.kamehameha(ken));
  
  