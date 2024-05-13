// Objects arrays used in random generator for story
const animals = ['ducks', 'sparrows', 'geese', 'pigeons', 'doves', 'starlings'];
const place = ['pond', 'park', 'garden'];
const moreAnimals = ['raccoons', 'opposums', 'rabbits', 'skunks', 'squirrels'];
const moreMoreAnimals = ['deer', 'hedgehogs', 'foxes', 'moles', 'ferrets'];

// Story with random generator for objects
const generateMessage = () => {
    const randObject = (object) => {
        return object[Math.floor(Math.random() * object.length)]
    }
    return `Karen, the neighborhood's strict enforcer, discovered a family of ${randObject(animals)} had made their home in her meticulously landscaped ${randObject(place)}. Determined to uphold the rules, she tried to shoo them away. But the animals, unfazed by her efforts, simply came closer, followed by a procession of other critters - ${randObject(moreAnimals)}, ${randObject(moreMoreAnimals)}, and all of their babies! Surrendering to the absurdity, Karen found herself surrounded by an impromptu animal gathering, learning that sometimes, nature has its own way of bending the rules.`
}

console.log(generateMessage());