type HeroFactory = {
    fighter: (name: string) => Fighter;
    mage: (name: string) => Mage;
}

type Fighter = {
    name: string;
    health: number;
    stamina: number;
    fight: () => void;
};

type Mage = {
    name: string;
    health: number;
    mana: number;
    cast: (spell: string) => void;
};

function solve(): HeroFactory {

    const heroFactory: HeroFactory = {
        fighter: function (name: string): Fighter {

            return {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        },

        mage: function (name: string): Mage {

            return {
                name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        }
    }

    return heroFactory;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);