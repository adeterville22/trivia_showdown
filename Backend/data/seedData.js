// data/seedData.js
const mongoose = require("mongoose");
const Question = require("../models/Question");
require("dotenv").config();

const sampleQuestions = [
  { 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What number comes next in the sequence: 2, 4, 6, 8, ?", 
  correctAnswer: "10", 
  incorrectAnswers: ["12", "9", "14"], 
  explanation: "The sequence increases by 2 each time." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "I speak without a mouth and hear without ears. What am I?", 
  correctAnswer: "An echo", 
  incorrectAnswers: ["A shadow", "Wind", "A thought"], 
  explanation: "An echo repeats sounds without having a mouth or ears." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "Which shape has 4 equal sides and 4 right angles?", 
  correctAnswer: "Square", 
  incorrectAnswers: ["Rectangle", "Rhombus", "Triangle"], 
  explanation: "A square has all sides equal and each angle is 90 degrees." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "If you have 3 apples and take away 2, how many do you have?", 
  correctAnswer: "2", 
  incorrectAnswers: ["1", "3", "0"], 
  explanation: "You took 2 apples, so you have 2." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What comes once in a minute, twice in a moment, but never in a thousand years?", 
  correctAnswer: "The letter M", 
  incorrectAnswers: ["Time", "An hour", "A century"], 
  explanation: "The letter M appears once in 'minute', twice in 'moment', never in 'thousand years'." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What is heavier: 1 kg of iron or 1 kg of feathers?", 
  correctAnswer: "They weigh the same", 
  incorrectAnswers: ["Iron", "Feathers", "Cannot tell"], 
  explanation: "1 kg of anything weighs the same — 1 kg." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", 
  correctAnswer: "A candle", 
  incorrectAnswers: ["A tree", "A pencil", "A shadow"], 
  explanation: "A candle burns down as it gets older." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "Which number is missing: 1, 1, 2, 3, 5, 8, ?", 
  correctAnswer: "13", 
  incorrectAnswers: ["11", "12", "15"], 
  explanation: "This is the Fibonacci sequence: each number is the sum of the previous two." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What has keys but can’t open locks?", 
  correctAnswer: "A piano", 
  incorrectAnswers: ["A door", "A map", "A treasure chest"], 
  explanation: "A piano has keys but they don’t open locks." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "If you multiply me by any other number, the answer will always be the same. What number am I?", 
  correctAnswer: "0", 
  incorrectAnswers: ["1", "10", "2"], 
  explanation: "0 multiplied by any number is always 0." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What disappears as soon as you say its name?", 
  correctAnswer: "Silence", 
  incorrectAnswers: ["Echo", "Shadow", "Secret"], 
  explanation: "Speaking breaks the silence." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "Which comes first in a race: the second or the third?", 
  correctAnswer: "Second", 
  incorrectAnswers: ["Third", "First", "None"], 
  explanation: "The second comes before the third." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "I have hands but cannot clap. What am I?", 
  correctAnswer: "A clock", 
  incorrectAnswers: ["A robot", "A doll", "A statue"], 
  explanation: "A clock has hour and minute hands but cannot clap." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "If two’s company and three’s a crowd, what are four and five?", 
  correctAnswer: "Nine", 
  incorrectAnswers: ["Crowd", "Company", "Ten"], 
  explanation: "This is a trick math question: 4 + 5 = 9." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "Which month has 28 days?", 
  correctAnswer: "All months", 
  incorrectAnswers: ["February", "January", "June"], 
  explanation: "All months have at least 28 days." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What has a face and two hands but no arms or legs?", 
  correctAnswer: "A clock", 
  incorrectAnswers: ["A watch", "A doll", "A mirror"], 
  explanation: "A clock has a face and hands but no limbs." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "I’m always in front of you but can’t be seen. What am I?", 
  correctAnswer: "The future", 
  incorrectAnswers: ["Air", "Time", "Shadow"], 
  explanation: "The future is ahead of us but invisible." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "If you have me, you want to share me. If you share me, you haven’t got me. What am I?", 
  correctAnswer: "A secret", 
  incorrectAnswers: ["Love", "Knowledge", "Money"], 
  explanation: "A secret is something you lose once you share it." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "What comes down but never goes up?", 
  correctAnswer: "Rain", 
  incorrectAnswers: ["Sun", "Temperature", "Age"], 
  explanation: "Rain falls from the sky but never rises." 
},
{ 
  category: "Mind Games", 
  difficulty: "easy", 
  type: "multiple", 
  question: "Which is heavier: a pound of bricks or a pound of feathers?", 
  correctAnswer: "They weigh the same", 
  incorrectAnswers: ["Bricks", "Feathers", "Cannot tell"], 
  explanation: "A pound is a pound regardless of the object." 
}
,
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I am always hungry, I must always be fed, the finger I touch will soon turn red. What am I?", 
  correctAnswer: "Fire", 
  incorrectAnswers: ["Blood", "Rust", "Lava"], 
  explanation: "Fire consumes fuel and burns anything it touches." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What has cities, but no houses; forests, but no trees; and water, but no fish?", 
  correctAnswer: "A map", 
  incorrectAnswers: ["A painting", "A globe", "A dream"], 
  explanation: "A map represents cities, forests, and water symbolically." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "The more you take, the more you leave behind. What am I?", 
  correctAnswer: "Footsteps", 
  incorrectAnswers: ["Memories", "Time", "Shadows"], 
  explanation: "Every step leaves footprints behind." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What has a neck but no head?", 
  correctAnswer: "A bottle", 
  incorrectAnswers: ["A guitar", "A shirt", "A vase"], 
  explanation: "A bottle has a neck but no head." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I’m lighter than a feather, but even the strongest man cannot hold me for more than 5 minutes. What am I?", 
  correctAnswer: "Breath", 
  incorrectAnswers: ["Air", "Time", "Shadow"], 
  explanation: "No one can hold their breath indefinitely." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "If you’re running a race and you pass the person in 2nd place, what place are you in?", 
  correctAnswer: "2nd", 
  incorrectAnswers: ["1st", "3rd", "4th"], 
  explanation: "Passing the second-place runner puts you in second, not first." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I have keys but open no locks. I have space but no rooms. You can enter but can’t go outside. What am I?", 
  correctAnswer: "A keyboard", 
  incorrectAnswers: ["A piano", "A map", "A computer"], 
  explanation: "A keyboard has keys, space, and enter, but none are literal." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "The more of me you take, the more you leave behind. What am I?", 
  correctAnswer: "Footsteps", 
  incorrectAnswers: ["Time", "Memories", "Shadow"], 
  explanation: "Every step leaves footprints behind." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I have towns but no houses, rivers but no water, forests but no trees. What am I?", 
  correctAnswer: "A map", 
  incorrectAnswers: ["A painting", "A globe", "A book"], 
  explanation: "A map depicts these things symbolically, not literally." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What can travel around the world while staying in a corner?", 
  correctAnswer: "A stamp", 
  incorrectAnswers: ["A plane", "A satellite", "A compass"], 
  explanation: "A stamp is placed on letters but technically stays in a corner." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What has an eye but cannot see?", 
  correctAnswer: "A needle", 
  incorrectAnswers: ["A storm", "A potato", "A hurricane"], 
  explanation: "A needle has a small hole called an eye for the thread." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I’m not alive, but I can grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?", 
  correctAnswer: "Fire", 
  incorrectAnswers: ["Rust", "Shadow", "Cloud"], 
  explanation: "Fire grows with fuel and air, but water extinguishes it." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What can fill a room but takes up no space?", 
  correctAnswer: "Light", 
  incorrectAnswers: ["Air", "Sound", "Heat"], 
  explanation: "Light can illuminate a room without occupying physical space." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I’m tall when I’m young and short when I’m old. What am I?", 
  correctAnswer: "A candle", 
  incorrectAnswers: ["A pencil", "A tree", "A shadow"], 
  explanation: "A candle burns down over time, becoming shorter." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What goes up but never comes down?", 
  correctAnswer: "Your age", 
  incorrectAnswers: ["A balloon", "Time", "Temperature"], 
  explanation: "Age always increases but never decreases." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I’m always running, but I never move. What am I?", 
  correctAnswer: "A clock", 
  incorrectAnswers: ["A river", "A fan", "A treadmill"], 
  explanation: "A clock runs (time), but it doesn’t physically move." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "I can be cracked, made, told, and played. What am I?", 
  correctAnswer: "A joke", 
  incorrectAnswers: ["A code", "An egg", "A game"], 
  explanation: "A joke can be cracked, made up, told, or played on someone." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "If you have me, you want to share me. If you share me, you don’t have me. What am I?", 
  correctAnswer: "A secret", 
  incorrectAnswers: ["A gift", "Knowledge", "A coin"], 
  explanation: "A secret is something lost once it is shared." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "What belongs to you, but everyone else uses it more than you do?", 
  correctAnswer: "Your name", 
  incorrectAnswers: ["Your phone", "Your money", "Your shadow"], 
  explanation: "Other people use your name to call or refer to you more often than you do." 
},
{ 
  category: "Mind Games", 
  difficulty: "medium", 
  type: "multiple", 
  question: "Forward I am heavy, but backward I am not. What am I?", 
  correctAnswer: "Ton", 
  incorrectAnswers: ["Stone", "Net", "Weight"], 
  explanation: "The word 'ton' backward is 'not'." 
}
,
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "A man walks into a bar and orders a drink. He then leaves the bar but returns exactly 10 minutes later. How is this possible?", 
  correctAnswer: "He was walking past a clock on a street", 
  incorrectAnswers: ["He traveled in time", "He went to another bar", "He has a twin"], 
  explanation: "It’s a lateral thinking puzzle: the 10 minutes is a play on perception of time, not literal." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?", 
  correctAnswer: "A map", 
  incorrectAnswers: ["A painting", "A book", "A puzzle"], 
  explanation: "A map symbolically shows cities, forests, and rivers." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "Two fathers and two sons walk into a store and each buys a chocolate. Only three chocolates are bought. How is this possible?", 
  correctAnswer: "They are grandfather, father, and son", 
  incorrectAnswers: ["They shared chocolates", "One didn’t buy", "Time travel"], 
  explanation: "The group consists of three people: grandfather (father), father (son), and son." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "A man dies of old age on his birthday but was born on February 29. How old was he when he died?", 
  correctAnswer: "Depends on actual years lived, birthday occurs every 4 years", 
  incorrectAnswers: ["25", "30", "50"], 
  explanation: "Born on leap day, his birthday only occurs every 4 years, but he ages normally." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What has a head, a tail, is brown, and has no legs?", 
  correctAnswer: "A penny", 
  incorrectAnswers: ["A snake", "A worm", "A coin stack"], 
  explanation: "A penny has a head (front) and tail (back) side." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "The more you take from me, the bigger I get. What am I?", 
  correctAnswer: "A hole", 
  incorrectAnswers: ["Time", "A shadow", "Knowledge"], 
  explanation: "Removing material from a hole makes it larger." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "I’m where yesterday follows today, and tomorrow is in the middle. What am I?", 
  correctAnswer: "A dictionary", 
  incorrectAnswers: ["A calendar", "Time machine", "A book"], 
  explanation: "In a dictionary, 'yesterday' comes after 'today' alphabetically, and 'tomorrow' is in between." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What occurs once in a minute, twice in a moment, and never in a thousand years?", 
  correctAnswer: "The letter M", 
  incorrectAnswers: ["Time", "Sunrise", "Event"], 
  explanation: "The letter 'M' appears once in 'minute', twice in 'moment', never in 'thousand years'." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What can you break, even if you never pick it up or touch it?", 
  correctAnswer: "A promise", 
  incorrectAnswers: ["A glass", "A code", "A heart"], 
  explanation: "A promise can be broken without physically touching anything." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "The more you take, the more you leave behind. What am I?", 
  correctAnswer: "Footsteps", 
  incorrectAnswers: ["Memories", "Time", "Shadows"], 
  explanation: "Every step leaves footprints behind." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "I am an odd number. Take away a letter and I become even. What number am I?", 
  correctAnswer: "Seven", 
  incorrectAnswers: ["Eleven", "Five", "Nine"], 
  explanation: "Remove 'S' from 'Seven' and it becomes 'Even'." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What has 88 keys but cannot open a single door?", 
  correctAnswer: "A piano", 
  incorrectAnswers: ["A typewriter", "A keyboard", "A calculator"], 
  explanation: "A piano has 88 keys but none of them open locks." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "Forward I am heavy, but backward I am not. What am I?", 
  correctAnswer: "Ton", 
  incorrectAnswers: ["Stone", "Weight", "Net"], 
  explanation: "The word 'ton' spelled backward is 'not'." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "I am always in front of you but can’t be seen. What am I?", 
  correctAnswer: "The future", 
  incorrectAnswers: ["Air", "Shadow", "Time"], 
  explanation: "The future is ahead of us but invisible." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "I can be cracked, made, told, and played. What am I?", 
  correctAnswer: "A joke", 
  incorrectAnswers: ["A code", "An egg", "A game"], 
  explanation: "A joke can be cracked, made, told, or played on someone." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What comes once in a year, twice in a week, and never in a day?", 
  correctAnswer: "The letter E", 
  incorrectAnswers: ["Sunday", "Leap year", "Time"], 
  explanation: "The letter 'E' appears once in 'year', twice in 'week', and never in 'day'." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "A man shaves several times a day, yet he still has a beard. Who is he?", 
  correctAnswer: "A barber", 
  incorrectAnswers: ["A monk", "A soldier", "A wizard"], 
  explanation: "He shaves others, not himself." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "I am taken from a mine and shut in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?", 
  correctAnswer: "Pencil lead (graphite)", 
  incorrectAnswers: ["Gold", "Coal", "Iron"], 
  explanation: "Graphite is mined, placed in a pencil (wooden case), and used for writing." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What can run but never walks, has a mouth but never talks, has a bed but never sleeps?", 
  correctAnswer: "A river", 
  incorrectAnswers: ["Time", "Wind", "Shadow"], 
  explanation: "A river runs, has a mouth (river mouth), and a riverbed, but no life." 
},
{ 
  category: "Mind Games", 
  difficulty: "hard", 
  type: "multiple", 
  question: "What begins with T, ends with T, and has T in it?", 
  correctAnswer: "A teapot", 
  incorrectAnswers: ["Tent", "Toast", "Tablet"], 
  explanation: "A teapot begins with 'T', ends with 'T', and holds tea (T) inside." 
}
,
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What planet is known as the Red Planet?",
    correctAnswer: "Mars",
    incorrectAnswers: ["Venus", "Jupiter", "Saturn"],
    explanation:
      "Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What is H2O commonly known as?",
    correctAnswer: "Water",
    incorrectAnswers: ["Hydrogen peroxide", "Salt", "Oxygen"],
    explanation:
      "H2O is the chemical formula for water, made of two hydrogen atoms and one oxygen atom.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What gas do humans exhale?",
    correctAnswer: "Carbon dioxide",
    incorrectAnswers: ["Oxygen", "Nitrogen", "Helium"],
    explanation:
      "Humans exhale carbon dioxide as a waste product of cellular respiration.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    correctAnswer: "Heart",
    incorrectAnswers: ["Liver", "Lungs", "Kidney"],
    explanation:
      "The heart is a muscular organ that pumps blood through the circulatory system.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What is the chemical symbol for oxygen?",
    correctAnswer: "O",
    incorrectAnswers: ["Ox", "O2", "Og"],
    explanation: "The chemical symbol for oxygen is 'O'.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What part of the plant conducts photosynthesis?",
    correctAnswer: "Leaf",
    incorrectAnswers: ["Root", "Stem", "Flower"],
    explanation:
      "Photosynthesis primarily takes place in the leaves using chlorophyll.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which planet is closest to the Sun?",
    correctAnswer: "Mercury",
    incorrectAnswers: ["Venus", "Earth", "Mars"],
    explanation:
      "Mercury is the closest planet to the Sun in our solar system.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "How many legs do insects have?",
    correctAnswer: "6",
    incorrectAnswers: ["4", "8", "10"],
    explanation: "All adult insects have three pairs of legs, totaling six.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What is the boiling point of water at sea level?",
    correctAnswer: "100°C",
    incorrectAnswers: ["90°C", "110°C", "80°C"],
    explanation: "At sea level, water boils at 100°C (212°F).",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which part of the human body contains the smallest bones?",
    correctAnswer: "Ear",
    incorrectAnswers: ["Hand", "Foot", "Nose"],
    explanation:
      "The ear contains the ossicles — the smallest bones in the body.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What force pulls objects toward Earth?",
    correctAnswer: "Gravity",
    incorrectAnswers: ["Magnetism", "Friction", "Inertia"],
    explanation:
      "Gravity is the force that attracts objects toward the center of the Earth.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which organ helps humans breathe?",
    correctAnswer: "Lungs",
    incorrectAnswers: ["Heart", "Liver", "Kidneys"],
    explanation:
      "The lungs are responsible for the exchange of oxygen and carbon dioxide.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What is the center of an atom called?",
    correctAnswer: "Nucleus",
    incorrectAnswers: ["Proton", "Electron", "Neutron"],
    explanation:
      "The nucleus contains protons and neutrons and is the dense center of an atom.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which celestial body orbits Earth?",
    correctAnswer: "The Moon",
    incorrectAnswers: ["The Sun", "Mars", "Venus"],
    explanation: "The Moon is Earth's natural satellite.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What vitamin do humans get from sunlight?",
    correctAnswer: "Vitamin D",
    incorrectAnswers: ["Vitamin A", "Vitamin C", "Vitamin B12"],
    explanation: "Sunlight helps the skin produce vitamin D.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which blood cells help fight infection?",
    correctAnswer: "White blood cells",
    incorrectAnswers: ["Red blood cells", "Platelets", "Plasma"],
    explanation:
      "White blood cells are part of the immune system and fight infections.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which planet has rings?",
    correctAnswer: "Saturn",
    incorrectAnswers: ["Mars", "Venus", "Mercury"],
    explanation: "Saturn is famous for its large and bright ring system.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What is the largest organ of the human body?",
    correctAnswer: "Skin",
    incorrectAnswers: ["Heart", "Liver", "Lungs"],
    explanation:
      "The skin is the body's largest organ, covering the entire external surface.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "What part of the eye controls how much light enters?",
    correctAnswer: "Pupil",
    incorrectAnswers: ["Lens", "Retina", "Cornea"],
    explanation:
      "The pupil changes size to regulate the amount of light entering the eye.",
  },
  {
    category: "Science",
    difficulty: "easy",
    type: "multiple",
    question: "Which metal has the chemical symbol Au?",
    correctAnswer: "Gold",
    incorrectAnswers: ["Silver", "Iron", "Copper"],
    explanation: "Au is from 'aurum', the Latin word for gold.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What is the powerhouse of the cell?",
    correctAnswer: "Mitochondria",
    incorrectAnswers: ["Nucleus", "Ribosome", "Chloroplast"],
    explanation:
      "Mitochondria generate most of the cell’s energy through cellular respiration.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    correctAnswer: "Nitrogen",
    incorrectAnswers: ["Oxygen", "Carbon dioxide", "Argon"],
    explanation: "About 78% of the Earth's atmosphere is nitrogen.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What is the chemical formula for table salt?",
    correctAnswer: "NaCl",
    incorrectAnswers: ["KCl", "H2O", "CO2"],
    explanation:
      "Table salt is composed of sodium (Na) and chlorine (Cl) ions.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which organ in the human body produces insulin?",
    correctAnswer: "Pancreas",
    incorrectAnswers: ["Liver", "Kidney", "Stomach"],
    explanation:
      "The pancreas produces insulin to regulate blood sugar levels.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question:
      "What phenomenon explains why we see lightning before we hear thunder?",
    correctAnswer: "Light travels faster than sound",
    incorrectAnswers: [
      "Thunder is delayed",
      "Lightning is brighter",
      "Air slows sound",
    ],
    explanation:
      "Light travels at 300,000 km/s, much faster than sound at about 343 m/s.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which part of the brain controls balance and coordination?",
    correctAnswer: "Cerebellum",
    incorrectAnswers: ["Cerebrum", "Medulla", "Thalamus"],
    explanation:
      "The cerebellum helps coordinate voluntary movements and maintain posture and balance.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which scientist proposed the three laws of motion?",
    correctAnswer: "Isaac Newton",
    incorrectAnswers: ["Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    explanation:
      "Newton’s laws describe the relationship between motion and the forces acting on objects.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What is the pH of pure water at 25°C?",
    correctAnswer: "7",
    incorrectAnswers: ["5", "6", "8"],
    explanation:
      "Pure water is neutral and has a pH of 7 at standard temperature.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which blood type is considered the universal donor?",
    correctAnswer: "O negative",
    incorrectAnswers: ["AB positive", "A positive", "B negative"],
    explanation:
      "O negative blood lacks A, B, and Rh antigens, making it compatible with any blood type.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question:
      "What is the name of the process by which plants lose water through their leaves?",
    correctAnswer: "Transpiration",
    incorrectAnswers: ["Evaporation", "Photosynthesis", "Respiration"],
    explanation:
      "Transpiration is the release of water vapor through stomata in leaves.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which particle has a negative charge?",
    correctAnswer: "Electron",
    incorrectAnswers: ["Proton", "Neutron", "Nucleus"],
    explanation:
      "Electrons are negatively charged subatomic particles orbiting the nucleus.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What is the most common element in the human body by mass?",
    correctAnswer: "Oxygen",
    incorrectAnswers: ["Carbon", "Hydrogen", "Calcium"],
    explanation: "Oxygen makes up about 65% of the human body by mass.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question:
      "What type of bond involves the sharing of electron pairs between atoms?",
    correctAnswer: "Covalent bond",
    incorrectAnswers: ["Ionic bond", "Hydrogen bond", "Metallic bond"],
    explanation:
      "Covalent bonds share electrons between atoms to form molecules.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question:
      "What is the term for animals that maintain a constant body temperature?",
    correctAnswer: "Endothermic",
    incorrectAnswers: ["Ectothermic", "Thermophilic", "Poikilothermic"],
    explanation:
      "Endothermic animals regulate their body temperature internally.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "Which planet has the largest number of moons?",
    correctAnswer: "Saturn",
    incorrectAnswers: ["Jupiter", "Mars", "Neptune"],
    explanation:
      "As of recent counts, Saturn has more confirmed moons than Jupiter.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What is the unit of electric current?",
    correctAnswer: "Ampere",
    incorrectAnswers: ["Volt", "Watt", "Ohm"],
    explanation: "The ampere (A) is the SI unit for electric current.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What type of rock is formed from cooled lava or magma?",
    correctAnswer: "Igneous",
    incorrectAnswers: ["Sedimentary", "Metamorphic", "Fossil"],
    explanation:
      "Igneous rocks form when molten material cools and solidifies.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which scientist developed the theory of evolution by natural selection?",
    correctAnswer: "Charles Darwin",
    incorrectAnswers: ["Gregor Mendel", "Louis Pasteur", "Carl Linnaeus"],
    explanation:
      "Darwin published his theory in 'On the Origin of Species' in 1859.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question: "What part of the cell contains genetic material?",
    correctAnswer: "Nucleus",
    incorrectAnswers: ["Mitochondria", "Ribosome", "Golgi apparatus"],
    explanation: "The nucleus houses DNA, which carries genetic instructions.",
  },
  {
    category: "Science",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which wave has the longest wavelength in the electromagnetic spectrum?",
    correctAnswer: "Radio waves",
    incorrectAnswers: ["Microwaves", "Infrared", "Gamma rays"],
    explanation:
      "Radio waves have the longest wavelength and lowest frequency.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What is the second most abundant element in the Earth's crust after oxygen?",
    correctAnswer: "Silicon",
    incorrectAnswers: ["Aluminum", "Iron", "Calcium"],
    explanation: "Silicon makes up about 27% of the Earth's crust by weight.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which law states that pressure of a gas is inversely proportional to its volume at constant temperature?",
    correctAnswer: "Boyle's Law",
    incorrectAnswers: ["Charles's Law", "Avogadro's Law", "Dalton's Law"],
    explanation: "Boyle's Law: P ∝ 1/V at constant temperature.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which part of the electromagnetic spectrum is used in nuclear medicine imaging like PET scans?",
    correctAnswer: "Gamma rays",
    incorrectAnswers: ["X-rays", "Infrared", "Microwaves"],
    explanation:
      "PET scans use gamma rays emitted by radioactive tracers to produce images.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What is the Heisenberg Uncertainty Principle primarily concerned with?",
    correctAnswer: "Position and momentum of particles",
    incorrectAnswers: [
      "Mass and energy",
      "Temperature and pressure",
      "Speed and direction",
    ],
    explanation:
      "The principle states that both position and momentum cannot be simultaneously measured with arbitrary precision.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "Which scientist is known for the discovery of penicillin?",
    correctAnswer: "Alexander Fleming",
    incorrectAnswers: ["Marie Curie", "Louis Pasteur", "Robert Koch"],
    explanation:
      "Fleming discovered penicillin in 1928, revolutionizing medicine.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "What is the SI unit of electric capacitance?",
    correctAnswer: "Farad",
    incorrectAnswers: ["Henry", "Ohm", "Tesla"],
    explanation:
      "The farad (F) is the SI unit for capacitance, named after Michael Faraday.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which branch of physics deals with the behavior of matter and energy on the atomic and subatomic scale?",
    correctAnswer: "Quantum mechanics",
    incorrectAnswers: ["Classical mechanics", "Thermodynamics", "Relativity"],
    explanation:
      "Quantum mechanics explains phenomena that classical physics cannot, such as wave-particle duality.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "What is the most abundant gas in the Sun?",
    correctAnswer: "Hydrogen",
    incorrectAnswers: ["Helium", "Oxygen", "Carbon"],
    explanation:
      "About 74% of the Sun's mass is hydrogen, which fuels nuclear fusion.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What is the name of the effect where light bends around obstacles or spreads as it passes through narrow slits?",
    correctAnswer: "Diffraction",
    incorrectAnswers: ["Refraction", "Reflection", "Dispersion"],
    explanation:
      "Diffraction occurs when light waves encounter obstacles comparable to their wavelength.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "Which vitamin is also known as cobalamin?",
    correctAnswer: "Vitamin B12",
    incorrectAnswers: ["Vitamin B6", "Vitamin D", "Vitamin C"],
    explanation:
      "Vitamin B12 (cobalamin) is essential for red blood cell formation and neurological function.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "What is the approximate age of the Earth?",
    correctAnswer: "4.5 billion years",
    incorrectAnswers: [
      "3.2 billion years",
      "6.0 billion years",
      "2.5 billion years",
    ],
    explanation:
      "Radiometric dating estimates Earth's age at around 4.54 billion years.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What is the process by which white blood cells engulf and digest pathogens?",
    correctAnswer: "Phagocytosis",
    incorrectAnswers: ["Endocytosis", "Osmosis", "Exocytosis"],
    explanation:
      "Phagocytosis is a key immune defense mechanism carried out by macrophages and neutrophils.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "Which element has the highest melting point?",
    correctAnswer: "Tungsten",
    incorrectAnswers: ["Carbon", "Platinum", "Osmium"],
    explanation:
      "Tungsten has a melting point of about 3422°C, the highest of all pure elements.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "In genetics, what term describes different forms of the same gene?",
    correctAnswer: "Alleles",
    incorrectAnswers: ["Chromosomes", "Genotypes", "Loci"],
    explanation:
      "Alleles are different versions of a gene found at the same locus on homologous chromosomes.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What is the name of the principle that energy cannot be created or destroyed, only transformed?",
    correctAnswer: "Law of Conservation of Energy",
    incorrectAnswers: [
      "Newton's First Law",
      "Entropy Principle",
      "Heisenberg's Principle",
    ],
    explanation:
      "The Law of Conservation of Energy is fundamental to all physics and engineering.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which subatomic particle is responsible for the strong nuclear force within an atomic nucleus?",
    correctAnswer: "Gluon",
    incorrectAnswers: ["Photon", "Neutrino", "Boson"],
    explanation:
      "Gluons mediate the strong force that binds quarks together inside protons and neutrons.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What type of seismic wave is the fastest and arrives first at seismic recording stations?",
    correctAnswer: "P-waves (Primary waves)",
    incorrectAnswers: ["S-waves", "Surface waves", "Love waves"],
    explanation:
      "P-waves travel through both solids and liquids and are the first to be detected after an earthquake.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "What is the name of the process where a liquid changes into a gas below its boiling point?",
    correctAnswer: "Evaporation",
    incorrectAnswers: ["Condensation", "Sublimation", "Boiling"],
    explanation:
      "Evaporation occurs at the surface of a liquid below its boiling temperature.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which scientist is known for formulating the laws of planetary motion?",
    correctAnswer: "Johannes Kepler",
    incorrectAnswers: ["Galileo Galilei", "Nicolaus Copernicus", "Tycho Brahe"],
    explanation:
      "Kepler's three laws describe the motion of planets around the Sun.",
  },
  {
    category: "Science",
    difficulty: "hard",
    type: "multiple",
    question: "What is the main component of natural gas?",
    correctAnswer: "Methane",
    incorrectAnswers: ["Ethane", "Propane", "Butane"],
    explanation:
      "Natural gas is primarily composed of methane (CH₄), a simple hydrocarbon.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "In which year did World War II end?",
    correctAnswer: "1945",
    incorrectAnswers: ["1939", "1918", "1950"],
    explanation: "World War II ended on September 2, 1945.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Who was the first President of the United States?",
    correctAnswer: "George Washington",
    incorrectAnswers: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    explanation:
      "George Washington served as the first U.S. President from 1789 to 1797.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Which ancient civilization built the Pyramids?",
    correctAnswer: "Egyptian",
    incorrectAnswers: ["Greek", "Roman", "Mayan"],
    explanation:
      "The ancient Egyptians built the pyramids as tombs for their pharaohs.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Which ship famously sank on its maiden voyage in 1912?",
    correctAnswer: "Titanic",
    incorrectAnswers: ["Lusitania", "Britannic", "Queen Mary"],
    explanation:
      "The RMS Titanic sank after hitting an iceberg in the North Atlantic Ocean.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Who discovered America in 1492?",
    correctAnswer: "Christopher Columbus",
    incorrectAnswers: ["Ferdinand Magellan", "Marco Polo", "Leif Erikson"],
    explanation:
      "Columbus reached the Americas in 1492 while sailing under the Spanish flag.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "The Great Wall is located in which country?",
    correctAnswer: "China",
    incorrectAnswers: ["India", "Mongolia", "Japan"],
    explanation:
      "The Great Wall of China was built to protect against invasions.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Who was known as the 'Maid of Orléans'?",
    correctAnswer: "Joan of Arc",
    incorrectAnswers: ["Marie Antoinette", "Catherine the Great", "Cleopatra"],
    explanation:
      "Joan of Arc led French troops to victory during the Hundred Years’ War.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which war was fought between the North and South regions in the United States?",
    correctAnswer: "The American Civil War",
    incorrectAnswers: ["World War I", "Revolutionary War", "Vietnam War"],
    explanation:
      "The Civil War was fought from 1861 to 1865 over slavery and states’ rights.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Who was the British monarch during World War II?",
    correctAnswer: "King George VI",
    incorrectAnswers: [
      "Queen Elizabeth II",
      "King Edward VIII",
      "King George V",
    ],
    explanation:
      "King George VI reigned from 1936 to 1952 and was monarch during WWII.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Which U.S. President issued the Emancipation Proclamation?",
    correctAnswer: "Abraham Lincoln",
    incorrectAnswers: [
      "George Washington",
      "Andrew Johnson",
      "Ulysses S. Grant",
    ],
    explanation:
      "Lincoln issued the Emancipation Proclamation in 1863, freeing enslaved people in Confederate states.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Which city was divided by a wall from 1961 to 1989?",
    correctAnswer: "Berlin",
    incorrectAnswers: ["Moscow", "Paris", "Warsaw"],
    explanation:
      "The Berlin Wall separated East and West Berlin during the Cold War.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question:
      "What was the name of the ship on which the Pilgrims traveled to America in 1620?",
    correctAnswer: "Mayflower",
    incorrectAnswers: ["Santa Maria", "Endeavour", "Beagle"],
    explanation:
      "The Mayflower carried English Pilgrims to what is now Massachusetts.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question:
      "Who was the famous Egyptian queen known for her beauty and alliances with Roman leaders?",
    correctAnswer: "Cleopatra",
    incorrectAnswers: ["Nefertiti", "Hatshepsut", "Arsinoe II"],
    explanation:
      "Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "In which city was the Declaration of Independence signed?",
    correctAnswer: "Philadelphia",
    incorrectAnswers: ["New York", "Boston", "Washington D.C."],
    explanation:
      "The Declaration was signed in Philadelphia in 1776 at Independence Hall.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "What was the name of the first man to walk on the moon?",
    correctAnswer: "Neil Armstrong",
    incorrectAnswers: ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    explanation:
      "Neil Armstrong stepped onto the lunar surface on July 20, 1969.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which country gifted the Statue of Liberty to the United States?",
    correctAnswer: "France",
    incorrectAnswers: ["Germany", "Spain", "Italy"],
    explanation:
      "France gave the Statue of Liberty to the U.S. in 1886 as a symbol of friendship.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question:
      "Who was the famous civil rights leader who delivered the 'I Have a Dream' speech?",
    correctAnswer: "Martin Luther King Jr.",
    incorrectAnswers: ["Malcolm X", "Nelson Mandela", "Rosa Parks"],
    explanation:
      "Martin Luther King Jr. delivered the speech during the March on Washington in 1963.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "The Roman Empire was centered in which modern-day country?",
    correctAnswer: "Italy",
    incorrectAnswers: ["Greece", "France", "Spain"],
    explanation: "The Roman Empire was centered in Rome, Italy.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question: "Who was the first Emperor of China?",
    correctAnswer: "Qin Shi Huang",
    incorrectAnswers: ["Kublai Khan", "Sun Yat-sen", "Han Wudi"],
    explanation:
      "Qin Shi Huang unified China in 221 BCE and became its first emperor.",
  },
  {
    category: "History",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which famous wall was built to keep out invaders from the north of England?",
    correctAnswer: "Hadrian's Wall",
    incorrectAnswers: ["Berlin Wall", "Antonine Wall", "Wall of China"],
    explanation:
      "Hadrian's Wall was built by the Romans in northern England around 122 AD.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Which treaty ended World War I?",
    correctAnswer: "Treaty of Versailles",
    incorrectAnswers: [
      "Treaty of Paris",
      "Treaty of Tordesillas",
      "Treaty of Ghent",
    ],
    explanation: "The Treaty of Versailles was signed in 1919, ending WWI.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question:
      "Who was the longest-reigning British monarch before Queen Elizabeth II?",
    correctAnswer: "Queen Victoria",
    incorrectAnswers: ["King George III", "Henry VIII", "Elizabeth I"],
    explanation: "Queen Victoria reigned from 1837 to 1901.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Who led the Soviet Union during the Cuban Missile Crisis?",
    correctAnswer: "Nikita Khrushchev",
    incorrectAnswers: ["Joseph Stalin", "Leonid Brezhnev", "Mikhail Gorbachev"],
    explanation: "Khrushchev was the Soviet leader during the 1962 crisis.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question:
      "What was the name of the first successful English colony in America?",
    correctAnswer: "Jamestown",
    incorrectAnswers: ["Plymouth", "Roanoke", "New Amsterdam"],
    explanation:
      "Jamestown, founded in 1607, was the first permanent English settlement.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "The assassination of which archduke triggered World War I?",
    correctAnswer: "Archduke Franz Ferdinand",
    incorrectAnswers: [
      "Archduke Charles",
      "Duke of Wellington",
      "Prince Alexander",
    ],
    explanation:
      "Franz Ferdinand's assassination in Sarajevo in 1914 led to WWI.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Who was the first emperor of a unified China?",
    correctAnswer: "Qin Shi Huang",
    incorrectAnswers: ["Liu Bang", "Sun Yat-sen", "Kublai Khan"],
    explanation:
      "Qin Shi Huang unified China in 221 BCE and founded the Qin Dynasty.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "What year did the French Revolution begin?",
    correctAnswer: "1789",
    incorrectAnswers: ["1776", "1799", "1804"],
    explanation:
      "The French Revolution began in 1789 with the storming of the Bastille.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Which U.S. President issued the Emancipation Proclamation?",
    correctAnswer: "Abraham Lincoln",
    incorrectAnswers: [
      "George Washington",
      "Andrew Jackson",
      "Ulysses S. Grant",
    ],
    explanation:
      "Lincoln issued it in 1863, declaring slaves in Confederate states free.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Who was the founder of the Mongol Empire?",
    correctAnswer: "Genghis Khan",
    incorrectAnswers: ["Kublai Khan", "Tamerlane", "Ogedei Khan"],
    explanation:
      "Genghis Khan founded the Mongol Empire in the early 13th century.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "The Rosetta Stone was key to deciphering which ancient script?",
    correctAnswer: "Egyptian hieroglyphs",
    incorrectAnswers: ["Cuneiform", "Linear B", "Sanskrit"],
    explanation:
      "The Rosetta Stone contained hieroglyphs, Demotic, and Greek scripts.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question:
      "What was the name of the economic plan to rebuild Europe after World War II?",
    correctAnswer: "Marshall Plan",
    incorrectAnswers: ["Truman Doctrine", "Berlin Airlift", "Molotov Plan"],
    explanation:
      "The Marshall Plan provided U.S. aid to rebuild Western Europe.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Who was the first female Prime Minister of the United Kingdom?",
    correctAnswer: "Margaret Thatcher",
    incorrectAnswers: ["Theresa May", "Angela Merkel", "Queen Elizabeth II"],
    explanation:
      "Thatcher served from 1979 to 1990 as the UK's first female PM.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "What empire was ruled by Suleiman the Magnificent?",
    correctAnswer: "Ottoman Empire",
    incorrectAnswers: ["Persian Empire", "Byzantine Empire", "Mongol Empire"],
    explanation: "Suleiman was Sultan of the Ottoman Empire from 1520 to 1566.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which country experienced the Meiji Restoration in the 19th century?",
    correctAnswer: "Japan",
    incorrectAnswers: ["China", "Korea", "Thailand"],
    explanation: "The Meiji Restoration in 1868 marked Japan's modernization.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question:
      "The Cold War was primarily a conflict between which two superpowers?",
    correctAnswer: "United States and Soviet Union",
    incorrectAnswers: [
      "United States and China",
      "Soviet Union and Germany",
      "United Kingdom and USSR",
    ],
    explanation:
      "The U.S. and USSR were the main rivals in the ideological and geopolitical struggle.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Which ancient city was the center of the Minoan civilization?",
    correctAnswer: "Knossos",
    incorrectAnswers: ["Athens", "Troy", "Babylon"],
    explanation: "Knossos, on Crete, was the center of Minoan culture.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Who painted the Sistine Chapel ceiling?",
    correctAnswer: "Michelangelo",
    incorrectAnswers: ["Leonardo da Vinci", "Raphael", "Donatello"],
    explanation: "Michelangelo painted the ceiling between 1508 and 1512.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Which African country was formerly known as Abyssinia?",
    correctAnswer: "Ethiopia",
    incorrectAnswers: ["Sudan", "Somalia", "Egypt"],
    explanation: "Ethiopia was historically referred to as Abyssinia.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "What was the primary language of the Roman Empire?",
    correctAnswer: "Latin",
    incorrectAnswers: ["Greek", "Aramaic", "Italian"],
    explanation:
      "Latin was the official language of administration and law in Rome.",
  },
  {
    category: "History",
    difficulty: "medium",
    type: "multiple",
    question: "Who was the leader of the Bolshevik Revolution?",
    correctAnswer: "Vladimir Lenin",
    incorrectAnswers: ["Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
    explanation: "Lenin led the 1917 Bolshevik Revolution in Russia.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "What was the capital city of the Aztec Empire?",
    correctAnswer: "Tenochtitlan",
    incorrectAnswers: ["Chichen Itza", "Cusco", "Teotihuacan"],
    explanation:
      "Tenochtitlan was the Aztec capital, located where modern-day Mexico City now stands.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Which treaty ended the Thirty Years' War in 1648?",
    correctAnswer: "Peace of Westphalia",
    incorrectAnswers: [
      "Treaty of Utrecht",
      "Treaty of Paris",
      "Treaty of Ghent",
    ],
    explanation:
      "The Peace of Westphalia ended the Thirty Years' War and reshaped Europe politically.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Who was the last pharaoh of Ancient Egypt?",
    correctAnswer: "Cleopatra VII",
    incorrectAnswers: ["Ramses II", "Tutankhamun", "Akhenaten"],
    explanation:
      "Cleopatra VII ruled until Egypt was annexed by Rome in 30 BCE.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "The Byzantine Empire fell to which empire in 1453?",
    correctAnswer: "Ottoman Empire",
    incorrectAnswers: ["Mongol Empire", "Persian Empire", "Holy Roman Empire"],
    explanation:
      "The Ottomans captured Constantinople in 1453, ending the Byzantine Empire.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Which medieval king signed the Magna Carta in 1215?",
    correctAnswer: "King John",
    incorrectAnswers: ["Henry II", "Richard the Lionheart", "Edward I"],
    explanation:
      "King John signed the Magna Carta at Runnymede, limiting royal power.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Who was the first Holy Roman Emperor?",
    correctAnswer: "Charlemagne",
    incorrectAnswers: ["Otto I", "Frederick I", "Charles V"],
    explanation: "Charlemagne was crowned Emperor in 800 CE by Pope Leo III.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question:
      "What dynasty ruled China during the construction of the majority of the Great Wall?",
    correctAnswer: "Ming Dynasty",
    incorrectAnswers: ["Qin Dynasty", "Tang Dynasty", "Han Dynasty"],
    explanation:
      "Most of the existing wall was built during the Ming Dynasty (1368–1644).",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Which event marked the beginning of the Protestant Reformation?",
    correctAnswer: "Martin Luther's 95 Theses",
    incorrectAnswers: ["Council of Trent", "Diet of Worms", "Edict of Nantes"],
    explanation:
      "Martin Luther nailed his 95 Theses in 1517, challenging Church practices.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Who was the leader of the Haitian Revolution?",
    correctAnswer: "Toussaint Louverture",
    incorrectAnswers: [
      "Jean-Jacques Dessalines",
      "Henri Christophe",
      "Simon Bolivar",
    ],
    explanation:
      "Toussaint Louverture led the successful slave revolt that became the Haitian Revolution.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question:
      "What was the name of the alliance formed by Germany, Italy, and Japan during World War II?",
    correctAnswer: "Axis Powers",
    incorrectAnswers: ["Central Powers", "Triple Alliance", "Entente Cordiale"],
    explanation:
      "Germany, Italy, and Japan formed the Axis Powers during WWII.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Which battle in 1066 changed the course of English history?",
    correctAnswer: "Battle of Hastings",
    incorrectAnswers: [
      "Battle of Agincourt",
      "Battle of Bosworth",
      "Battle of Bannockburn",
    ],
    explanation:
      "The Norman victory at Hastings led to William the Conqueror's rule.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Who led the Soviet Union during World War II?",
    correctAnswer: "Joseph Stalin",
    incorrectAnswers: ["Vladimir Lenin", "Leon Trotsky", "Nikita Khrushchev"],
    explanation:
      "Stalin was the General Secretary of the Communist Party during WWII.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question:
      "The Peloponnesian War was fought between which two Greek city-states?",
    correctAnswer: "Athens and Sparta",
    incorrectAnswers: [
      "Athens and Corinth",
      "Sparta and Thebes",
      "Athens and Troy",
    ],
    explanation: "Athens and Sparta fought a long war from 431 to 404 BCE.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "What year did the Berlin Wall fall?",
    correctAnswer: "1989",
    incorrectAnswers: ["1991", "1985", "1993"],
    explanation:
      "The fall of the Berlin Wall in 1989 symbolized the end of the Cold War.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Which ancient civilization developed cuneiform writing?",
    correctAnswer: "Sumerians",
    incorrectAnswers: ["Egyptians", "Hittites", "Phoenicians"],
    explanation:
      "The Sumerians invented cuneiform in Mesopotamia around 3200 BCE.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Who was the leader of the USSR during the Cuban Missile Crisis?",
    correctAnswer: "Nikita Khrushchev",
    incorrectAnswers: ["Joseph Stalin", "Mikhail Gorbachev", "Leonid Brezhnev"],
    explanation:
      "Khrushchev was Premier of the Soviet Union during the 1962 crisis.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question:
      "What was the name of the first permanent European settlement in what is now the United States?",
    correctAnswer: "St. Augustine",
    incorrectAnswers: ["Jamestown", "Plymouth", "New Amsterdam"],
    explanation:
      "Founded by the Spanish in 1565, St. Augustine is the oldest continuously occupied European settlement in the U.S.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question:
      "Who was the British commander who surrendered at Yorktown during the American Revolutionary War?",
    correctAnswer: "Charles Cornwallis",
    incorrectAnswers: ["William Howe", "John Burgoyne", "Henry Clinton"],
    explanation:
      "Cornwallis surrendered to George Washington in 1781, ending major combat.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question: "Which U.S. President served during the 1929 stock market crash?",
    correctAnswer: "Herbert Hoover",
    incorrectAnswers: [
      "Franklin D. Roosevelt",
      "Calvin Coolidge",
      "Woodrow Wilson",
    ],
    explanation:
      "Hoover was President when the Great Depression began after the crash.",
  },
  {
    category: "History",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which empire was known for creating the first known postal system?",
    correctAnswer: "Persian Empire",
    incorrectAnswers: ["Roman Empire", "Mongol Empire", "Byzantine Empire"],
    explanation:
      "The Persian Empire developed an efficient postal system under Darius I.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "How many players are in a soccer team?",
    correctAnswer: "11",
    incorrectAnswers: ["10", "12", "9"],
    explanation: "A standard soccer team has 11 players on the field.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "How long is a standard soccer match?",
    correctAnswer: "90 minutes",
    incorrectAnswers: ["60 minutes", "80 minutes", "100 minutes"],
    explanation:
      "A soccer match is played for 90 minutes, divided into two halves of 45 minutes each.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "In basketball, how many points is a free throw worth?",
    correctAnswer: "1",
    incorrectAnswers: ["2", "3", "4"],
    explanation: "A free throw in basketball is worth one point.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "What sport is known as 'America's pastime'?",
    correctAnswer: "Baseball",
    incorrectAnswers: ["Basketball", "Soccer", "Tennis"],
    explanation: "Baseball has long been referred to as 'America's pastime'.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "In tennis, what is the term for a score of zero?",
    correctAnswer: "Love",
    incorrectAnswers: ["Zero", "Null", "Blank"],
    explanation: "In tennis, a score of zero is called 'Love'.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "What color card is shown for a sending-off in soccer?",
    correctAnswer: "Red",
    incorrectAnswers: ["Yellow", "Blue", "Green"],
    explanation: "A red card in soccer means the player must leave the field.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "How many rings are on the Olympic flag?",
    correctAnswer: "5",
    incorrectAnswers: ["4", "6", "7"],
    explanation:
      "The Olympic flag has five interlocking rings representing the five continents.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "Which country won the FIFA World Cup 2018?",
    correctAnswer: "France",
    incorrectAnswers: ["Brazil", "Germany", "Argentina"],
    explanation: "France won the 2018 FIFA World Cup in Russia.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question:
      "In basketball, how many points is a shot from beyond the arc worth?",
    correctAnswer: "3",
    incorrectAnswers: ["1", "2", "4"],
    explanation:
      "A successful shot from beyond the three-point line is worth 3 points.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "Which sport uses the terms 'love', 'deuce', and 'ace'?",
    correctAnswer: "Tennis",
    incorrectAnswers: ["Badminton", "Cricket", "Basketball"],
    explanation: "These terms are all part of tennis scoring.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "Which sport is played at Wimbledon?",
    correctAnswer: "Tennis",
    incorrectAnswers: ["Soccer", "Cricket", "Golf"],
    explanation:
      "Wimbledon is one of the four major Grand Slam tennis tournaments.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "How many bases are on a baseball field?",
    correctAnswer: "4",
    incorrectAnswers: ["3", "5", "6"],
    explanation:
      "A baseball field has four bases: first, second, third, and home plate.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "In cricket, how many players are on each team?",
    correctAnswer: "11",
    incorrectAnswers: ["10", "12", "9"],
    explanation: "Each cricket team consists of 11 players.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "What is the maximum score on a single basketball shot?",
    correctAnswer: "3",
    incorrectAnswers: ["1", "2", "4"],
    explanation:
      "A three-pointer is the highest possible score for a single shot.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "Which country hosts the Tour de France?",
    correctAnswer: "France",
    incorrectAnswers: ["Italy", "Spain", "Germany"],
    explanation:
      "The Tour de France is the world’s most famous cycling race, held in France.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question:
      "In soccer, what part of the body cannot touch the ball for outfield players?",
    correctAnswer: "Hands",
    incorrectAnswers: ["Feet", "Head", "Chest"],
    explanation: "Only the goalkeeper can use hands in the penalty area.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "Which ball sport is played at the NBA?",
    correctAnswer: "Basketball",
    incorrectAnswers: ["Baseball", "Cricket", "Soccer"],
    explanation:
      "The NBA (National Basketball Association) is the top basketball league.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question:
      "How many sets must a player win to win a men's Grand Slam tennis match?",
    correctAnswer: "3",
    incorrectAnswers: ["2", "4", "5"],
    explanation:
      "Men’s Grand Slam matches are best-of-five sets, so winning 3 sets secures victory.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "What is the shape of a soccer ball?",
    correctAnswer: "Spherical",
    incorrectAnswers: ["Oval", "Square", "Hexagonal"],
    explanation: "A soccer ball is spherical in shape.",
  },
  {
    category: "Sports",
    difficulty: "easy",
    type: "multiple",
    question: "In the Olympics, how often are the Summer Games held?",
    correctAnswer: "Every 4 years",
    incorrectAnswers: ["Every 2 years", "Every 5 years", "Every 6 years"],
    explanation: "The Summer Olympics are held every four years.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which country has won the most FIFA World Cups?",
    correctAnswer: "Brazil",
    incorrectAnswers: ["Germany", "Argentina", "Italy"],
    explanation:
      "Brazil has won the FIFA World Cup 5 times, the most in history.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Who has won the most Grand Slam singles titles in tennis (men)?",
    correctAnswer: "Novak Djokovic",
    incorrectAnswers: ["Roger Federer", "Rafael Nadal", "Pete Sampras"],
    explanation:
      "Novak Djokovic holds the record for the most men's Grand Slam singles titles.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question:
      "In basketball, how many personal fouls lead to disqualification in the NBA?",
    correctAnswer: "6",
    incorrectAnswers: ["5", "7", "4"],
    explanation:
      "An NBA player is disqualified after committing six personal fouls.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which country hosted the Summer Olympics in 2012?",
    correctAnswer: "United Kingdom",
    incorrectAnswers: ["China", "Brazil", "Greece"],
    explanation:
      "The 2012 Summer Olympics were held in London, United Kingdom.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question:
      "How many players are there on a basketball court for one team during play?",
    correctAnswer: "5",
    incorrectAnswers: ["6", "4", "7"],
    explanation: "Each basketball team has 5 players on the court during play.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which tennis tournament is played on clay courts?",
    correctAnswer: "French Open",
    incorrectAnswers: ["Wimbledon", "US Open", "Australian Open"],
    explanation:
      "The French Open, held at Roland Garros, is the only Grand Slam played on clay.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Who won the 2020 NBA Championship?",
    correctAnswer: "Los Angeles Lakers",
    incorrectAnswers: ["Miami Heat", "Golden State Warriors", "Boston Celtics"],
    explanation:
      "The Lakers won the 2020 NBA Championship led by LeBron James.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "In cricket, how many runs is a 'six' worth?",
    correctAnswer: "6",
    incorrectAnswers: ["4", "5", "7"],
    explanation:
      "A 'six' is scored when the ball is hit over the boundary without touching the ground.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "What is the name of the trophy awarded to the NBA champions?",
    correctAnswer: "Larry O'Brien Trophy",
    incorrectAnswers: [
      "Stanley Cup",
      "Vince Lombardi Trophy",
      "Commissioner's Trophy",
    ],
    explanation:
      "The NBA champions receive the Larry O'Brien Championship Trophy.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which country hosted the 2014 FIFA World Cup?",
    correctAnswer: "Brazil",
    incorrectAnswers: ["Germany", "South Africa", "Russia"],
    explanation: "Brazil hosted the FIFA World Cup in 2014.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which basketball player is known as 'The King'?",
    correctAnswer: "LeBron James",
    incorrectAnswers: ["Kobe Bryant", "Michael Jordan", "Stephen Curry"],
    explanation: "LeBron James is widely known by the nickname 'The King'.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which baseball team has won the most World Series titles?",
    correctAnswer: "New York Yankees",
    incorrectAnswers: ["Boston Red Sox", "Los Angeles Dodgers", "Chicago Cubs"],
    explanation: "The New York Yankees have won 27 World Series titles.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question:
      "In tennis, how many games must a player win to win a set (standard)?",
    correctAnswer: "6",
    incorrectAnswers: ["4", "5", "7"],
    explanation:
      "A player must win at least 6 games and lead by 2 to win a standard set.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Who won the Ballon d'Or in 2021?",
    correctAnswer: "Lionel Messi",
    incorrectAnswers: [
      "Cristiano Ronaldo",
      "Robert Lewandowski",
      "Karim Benzema",
    ],
    explanation: "Lionel Messi won his 7th Ballon d'Or in 2021.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which country won the ICC Cricket World Cup 2019?",
    correctAnswer: "England",
    incorrectAnswers: ["New Zealand", "India", "Australia"],
    explanation:
      "England won their first Cricket World Cup in 2019 after a dramatic final.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which famous basketball player wore jersey number 23 for the Chicago Bulls?",
    correctAnswer: "Michael Jordan",
    incorrectAnswers: ["LeBron James", "Scottie Pippen", "Magic Johnson"],
    explanation:
      "Michael Jordan made jersey number 23 iconic during his time with the Bulls.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Which city hosted the 2008 Summer Olympics?",
    correctAnswer: "Beijing",
    incorrectAnswers: ["London", "Athens", "Sydney"],
    explanation: "The 2008 Summer Olympics were held in Beijing, China.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "In baseball, how many strikes result in a batter being out?",
    correctAnswer: "3",
    incorrectAnswers: ["2", "4", "5"],
    explanation: "Three strikes result in a strikeout in baseball.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "Who is known as the 'Lightning Bolt' in athletics?",
    correctAnswer: "Usain Bolt",
    incorrectAnswers: ["Carl Lewis", "Michael Johnson", "Tyson Gay"],
    explanation:
      "Usain Bolt is nicknamed 'Lightning Bolt' for his record-breaking sprints.",
  },
  {
    category: "Sports",
    difficulty: "medium",
    type: "multiple",
    question: "In soccer, how many minutes is extra time usually composed of?",
    correctAnswer: "30",
    incorrectAnswers: ["20", "15", "25"],
    explanation:
      "Extra time in soccer is usually 30 minutes, split into two halves of 15 minutes.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which country won the first ever FIFA World Cup in 1930?",
    correctAnswer: "Uruguay",
    incorrectAnswers: ["Brazil", "Argentina", "Italy"],
    explanation: "Uruguay hosted and won the first FIFA World Cup in 1930.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Who holds the record for the most home runs in a single MLB season?",
    correctAnswer: "Barry Bonds",
    incorrectAnswers: ["Babe Ruth", "Mark McGwire", "Sammy Sosa"],
    explanation:
      "Barry Bonds hit 73 home runs in the 2001 MLB season, setting the record.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which tennis player has won the most Grand Slam singles titles in history (as of 2025)?",
    correctAnswer: "Novak Djokovic",
    incorrectAnswers: ["Rafael Nadal", "Roger Federer", "Carlos Alcaraz"],
    explanation:
      "Novak Djokovic holds the record with 24 Grand Slam singles titles.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which country has won the most Olympic gold medals in total?",
    correctAnswer: "United States",
    incorrectAnswers: ["Russia", "China", "Germany"],
    explanation:
      "The USA has won more Olympic gold medals than any other country.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "In Formula 1, which driver has the most career race wins?",
    correctAnswer: "Lewis Hamilton",
    incorrectAnswers: ["Michael Schumacher", "Ayrton Senna", "Max Verstappen"],
    explanation:
      "Lewis Hamilton surpassed Schumacher’s record and currently holds the most race wins.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which soccer club has won the most UEFA Champions League titles?",
    correctAnswer: "Real Madrid",
    incorrectAnswers: ["Barcelona", "AC Milan", "Bayern Munich"],
    explanation: "Real Madrid has the most Champions League titles with 15.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Who was the first gymnast to score a perfect 10 at the Olympics?",
    correctAnswer: "Nadia Comăneci",
    incorrectAnswers: ["Simone Biles", "Larisa Latynina", "Olga Korbut"],
    explanation:
      "Nadia Comăneci achieved the first perfect 10 at the 1976 Montreal Olympics.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which country has won the most Rugby World Cups?",
    correctAnswer: "New Zealand",
    incorrectAnswers: ["South Africa", "England", "Australia"],
    explanation:
      "New Zealand has won the Rugby World Cup three times, tied with South Africa.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "What year did Michael Phelps win 8 gold medals in a single Olympics?",
    correctAnswer: "2008",
    incorrectAnswers: ["2004", "2012", "2016"],
    explanation:
      "Michael Phelps achieved this historic feat at the 2008 Beijing Olympics.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which NBA team holds the record for the longest winning streak in history?",
    correctAnswer: "Los Angeles Lakers",
    incorrectAnswers: [
      "Golden State Warriors",
      "Chicago Bulls",
      "Boston Celtics",
    ],
    explanation: "The Lakers won 33 straight games in the 1971–72 season.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Who was the first man to run the mile in under four minutes?",
    correctAnswer: "Roger Bannister",
    incorrectAnswers: ["Usain Bolt", "Carl Lewis", "Sebastian Coe"],
    explanation: "Roger Bannister broke the four-minute barrier in 1954.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "In cricket, who holds the record for the highest individual score in a Test match?",
    correctAnswer: "Brian Lara",
    incorrectAnswers: ["Don Bradman", "Sachin Tendulkar", "Chris Gayle"],
    explanation: "Brian Lara scored 400 not out against England in 2004.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which country hosted the first modern Olympic Games in 1896?",
    correctAnswer: "Greece",
    incorrectAnswers: ["France", "USA", "UK"],
    explanation: "The first modern Olympics were held in Athens, Greece.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which boxer famously said, 'Float like a butterfly, sting like a bee'?",
    correctAnswer: "Muhammad Ali",
    incorrectAnswers: ["Mike Tyson", "Joe Frazier", "George Foreman"],
    explanation:
      "Muhammad Ali coined this famous phrase to describe his fighting style.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which city hosted the 1952 Summer Olympics?",
    correctAnswer: "Helsinki",
    incorrectAnswers: ["London", "Rome", "Tokyo"],
    explanation: "The 1952 Summer Olympics were held in Helsinki, Finland.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Who is the only athlete to have won Olympic gold in both the decathlon and the pentathlon?",
    correctAnswer: "Jim Thorpe",
    incorrectAnswers: ["Carl Lewis", "Paavo Nurmi", "Daley Thompson"],
    explanation: "Jim Thorpe achieved this at the 1912 Olympics.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which golf major is played at the same course every year?",
    correctAnswer: "The Masters",
    incorrectAnswers: [
      "The Open Championship",
      "PGA Championship",
      "U.S. Open",
    ],
    explanation: "The Masters is always played at Augusta National Golf Club.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Who won the men's singles title at Wimbledon in 2001, defeating Pete Sampras?",
    correctAnswer: "Roger Federer",
    incorrectAnswers: ["Lleyton Hewitt", "Andy Roddick", "Goran Ivanišević"],
    explanation:
      "Federer beat Sampras in the fourth round, signaling a new era in tennis.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question: "Which country won the first Cricket World Cup in 1975?",
    correctAnswer: "West Indies",
    incorrectAnswers: ["Australia", "England", "India"],
    explanation: "The West Indies won the inaugural Cricket World Cup in 1975.",
  },
  {
    category: "Sports",
    difficulty: "hard",
    type: "multiple",
    question:
      "Who is the only NBA player to average a triple-double for an entire season more than once?",
    correctAnswer: "Oscar Robertson",
    incorrectAnswers: ["LeBron James", "Russell Westbrook", "Magic Johnson"],
    explanation:
      "Oscar Robertson first did it in 1961–62; Russell Westbrook later did it multiple times as well.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Who is the main character in the animated movie 'Shrek'?",
    correctAnswer: "Shrek",
    incorrectAnswers: ["Donkey", "Fiona", "Puss in Boots"],
    explanation:
      "Shrek is the main character in the DreamWorks animated movie 'Shrek'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which movie features the song 'Let It Go'?",
    correctAnswer: "Frozen",
    incorrectAnswers: ["Moana", "Tangled", "Cinderella"],
    explanation:
      "The song 'Let It Go' is performed by Elsa in Disney's Frozen.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Who is the famous wizard in the 'Harry Potter' series?",
    correctAnswer: "Harry Potter",
    incorrectAnswers: ["Ron Weasley", "Draco Malfoy", "Hermione Granger"],
    explanation:
      "Harry Potter is the protagonist and famous wizard in the series.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which animated movie features talking toys that come to life?",
    correctAnswer: "Toy Story",
    incorrectAnswers: ["Monsters Inc.", "Finding Nemo", "Cars"],
    explanation:
      "Toy Story features toys that magically come to life when humans aren’t around.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Who voiced the character of Simba in 'The Lion King' (1994)?",
    correctAnswer: "Matthew Broderick",
    incorrectAnswers: ["James Earl Jones", "Jeremy Irons", "Nathan Lane"],
    explanation:
      "Matthew Broderick provided the adult voice of Simba in the 1994 movie.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which superhero is known as the 'Caped Crusader'?",
    correctAnswer: "Batman",
    incorrectAnswers: ["Superman", "Iron Man", "Spider-Man"],
    explanation: "Batman is called the 'Caped Crusader' in comics and movies.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which singer is known as the 'Queen of Pop'?",
    correctAnswer: "Madonna",
    incorrectAnswers: ["Beyoncé", "Lady Gaga", "Whitney Houston"],
    explanation:
      "Madonna earned the title 'Queen of Pop' for her influential music career.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which movie franchise features the characters Elsa, Anna, and Olaf?",
    correctAnswer: "Frozen",
    incorrectAnswers: ["Moana", "Tangled", "Brave"],
    explanation: "Frozen features Elsa, Anna, and the snowman Olaf.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "In which movie would you find the character Jack Sparrow?",
    correctAnswer: "Pirates of the Caribbean",
    incorrectAnswers: ["The Hobbit", "Star Wars", "The Lord of the Rings"],
    explanation:
      "Captain Jack Sparrow is the iconic pirate in 'Pirates of the Caribbean'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which animated movie features a fish named Nemo?",
    correctAnswer: "Finding Nemo",
    incorrectAnswers: ["Shark Tale", "The Little Mermaid", "Finding Dory"],
    explanation:
      "Nemo is the main clownfish in the animated movie 'Finding Nemo'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    correctAnswer: "Robert Downey Jr.",
    incorrectAnswers: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
    explanation: "Robert Downey Jr. portrayed Tony Stark/Iron Man.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which TV show features a character named Sheldon Cooper?",
    correctAnswer: "The Big Bang Theory",
    incorrectAnswers: ["Friends", "How I Met Your Mother", "Modern Family"],
    explanation: "Sheldon Cooper is a main character in 'The Big Bang Theory'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which movie features a young boy named Kevin left home alone during Christmas?",
    correctAnswer: "Home Alone",
    incorrectAnswers: ["Elf", "The Santa Clause", "Christmas Vacation"],
    explanation: "Kevin McCallister is the main character in 'Home Alone'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Who sings the hit song 'Shake It Off'?",
    correctAnswer: "Taylor Swift",
    incorrectAnswers: ["Katy Perry", "Ariana Grande", "Selena Gomez"],
    explanation: "'Shake It Off' is a popular song by Taylor Swift.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which movie series features a character named Harry Potter?",
    correctAnswer: "Harry Potter",
    incorrectAnswers: ["Percy Jackson", "Twilight", "The Hunger Games"],
    explanation:
      "Harry Potter is the main character in the 'Harry Potter' movie series.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which animated movie features the character Moana?",
    correctAnswer: "Moana",
    incorrectAnswers: ["Frozen", "Brave", "Tangled"],
    explanation: "Moana is the main character in Disney's 'Moana'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which actor voiced Woody in the 'Toy Story' movies?",
    correctAnswer: "Tom Hanks",
    incorrectAnswers: ["Tim Allen", "Johnny Depp", "Robin Williams"],
    explanation: "Tom Hanks provided the voice for Woody in 'Toy Story'.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question:
      "Which TV series is set in the fictional town of Hawkins and features supernatural events?",
    correctAnswer: "Stranger Things",
    incorrectAnswers: ["The Walking Dead", "Riverdale", "Supernatural"],
    explanation:
      "'Stranger Things' is set in Hawkins and involves supernatural events.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Who is the superhero known as the 'Caped Crusader'?",
    correctAnswer: "Batman",
    incorrectAnswers: ["Superman", "Spider-Man", "Iron Man"],
    explanation:
      "Batman is often called the 'Caped Crusader' in comics and movies.",
  },
  {
    category: "Entertainment",
    difficulty: "easy",
    type: "multiple",
    question: "Which Disney princess loses her glass slipper?",
    correctAnswer: "Cinderella",
    incorrectAnswers: ["Snow White", "Aurora", "Belle"],
    explanation:
      "Cinderella famously loses her glass slipper at the royal ball.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which actor played Deadpool in the movies?",
    correctAnswer: "Ryan Reynolds",
    incorrectAnswers: ["Hugh Jackman", "Chris Evans", "Robert Downey Jr."],
    explanation: "Ryan Reynolds portrayed Deadpool in the Marvel movies.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    correctAnswer: "Parasite",
    incorrectAnswers: ["1917", "Joker", "Once Upon a Time in Hollywood"],
    explanation: "'Parasite' won Best Picture at the 92nd Academy Awards.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which TV show features the character Eleven with telekinetic powers?",
    correctAnswer: "Stranger Things",
    incorrectAnswers: [
      "Dark",
      "The Umbrella Academy",
      "Chilling Adventures of Sabrina",
    ],
    explanation:
      "Eleven is a main character in 'Stranger Things' with telekinetic abilities.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which movie franchise features a time-traveling DeLorean car?",
    correctAnswer: "Back to the Future",
    incorrectAnswers: ["Terminator", "Fast and Furious", "Transformers"],
    explanation:
      "The DeLorean is used as a time machine in 'Back to the Future'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Who voices the character of Elsa in 'Frozen'?",
    correctAnswer: "Idina Menzel",
    incorrectAnswers: ["Kristen Bell", "Demi Lovato", "Mandy Moore"],
    explanation:
      "Idina Menzel provides the singing voice for Elsa in 'Frozen'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which actor plays Thor in the Marvel Cinematic Universe?",
    correctAnswer: "Chris Hemsworth",
    incorrectAnswers: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
    explanation: "Chris Hemsworth portrays Thor, the Norse God of Thunder.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which movie features the song 'Circle of Life'?",
    correctAnswer: "The Lion King",
    incorrectAnswers: ["Aladdin", "Tarzan", "Pocahontas"],
    explanation:
      "'Circle of Life' is the iconic opening song of 'The Lion King'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which actor played Captain Jack Sparrow?",
    correctAnswer: "Johnny Depp",
    incorrectAnswers: ["Orlando Bloom", "Brad Pitt", "Leonardo DiCaprio"],
    explanation:
      "Johnny Depp is famous for playing Captain Jack Sparrow in 'Pirates of the Caribbean'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which animated movie features a character named Maui, a demigod?",
    correctAnswer: "Moana",
    incorrectAnswers: ["Frozen", "The Little Mermaid", "Brave"],
    explanation: "Maui is the demigod character in Disney’s 'Moana'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which Marvel superhero wields a hammer named Mjolnir?",
    correctAnswer: "Thor",
    incorrectAnswers: ["Iron Man", "Captain America", "Hulk"],
    explanation: "Thor wields the magical hammer Mjolnir in the MCU.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which actor played the Joker in 'The Dark Knight' (2008)?",
    correctAnswer: "Heath Ledger",
    incorrectAnswers: ["Jared Leto", "Joaquin Phoenix", "Jack Nicholson"],
    explanation:
      "Heath Ledger portrayed the Joker in Christopher Nolan’s 'The Dark Knight'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which TV show follows the lives of the Stark family in Westeros?",
    correctAnswer: "Game of Thrones",
    incorrectAnswers: ["Vikings", "The Witcher", "Shadow and Bone"],
    explanation: "The Starks are a central family in 'Game of Thrones'.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which Disney movie features a wooden puppet named Pinocchio?",
    correctAnswer: "Pinocchio",
    incorrectAnswers: ["Cinderella", "Sleeping Beauty", "Peter Pan"],
    explanation:
      "Pinocchio is the wooden puppet who wants to become a real boy.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question:
      "Which actor plays Doctor Strange in the Marvel Cinematic Universe?",
    correctAnswer: "Benedict Cumberbatch",
    incorrectAnswers: [
      "Tom Hiddleston",
      "Chris Hemsworth",
      "Robert Downey Jr.",
    ],
    explanation: "Benedict Cumberbatch portrays Doctor Strange.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which movie features talking cars in a racing world?",
    correctAnswer: "Cars",
    incorrectAnswers: ["Turbo", "Speed Racer", "Planes"],
    explanation: "Cars is an animated movie featuring talking cars racing.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which actor played Spider-Man in the MCU starting in 2016?",
    correctAnswer: "Tom Holland",
    incorrectAnswers: ["Tobey Maguire", "Andrew Garfield", "Chris Pratt"],
    explanation:
      "Tom Holland plays Peter Parker/Spider-Man in the Marvel movies from 2016.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which Disney princess has a raccoon friend named Meeko?",
    correctAnswer: "Pocahontas",
    incorrectAnswers: ["Aurora", "Mulan", "Rapunzel"],
    explanation:
      "Pocahontas is accompanied by her raccoon friend Meeko in the movie.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which movie features the quote, 'May the Force be with you'?",
    correctAnswer: "Star Wars",
    incorrectAnswers: ["Star Trek", "Guardians of the Galaxy", "The Matrix"],
    explanation:
      "'May the Force be with you' is a famous quote from Star Wars.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which actor plays Deadpool's love interest, Vanessa?",
    correctAnswer: "Morena Baccarin",
    incorrectAnswers: [
      "Scarlett Johansson",
      "Gwyneth Paltrow",
      "Elizabeth Olsen",
    ],
    explanation: "Morena Baccarin plays Vanessa in Deadpool.",
  },
  {
    category: "Entertainment",
    difficulty: "medium",
    type: "multiple",
    question: "Which animated movie features a snowman named Olaf?",
    correctAnswer: "Frozen",
    incorrectAnswers: ["Tangled", "Moana", "The Polar Express"],
    explanation: "Olaf is the lovable snowman in Disney’s 'Frozen'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actor plays Loki in the Marvel Cinematic Universe?",
    correctAnswer: "Tom Hiddleston",
    incorrectAnswers: [
      "Chris Hemsworth",
      "Benedict Cumberbatch",
      "Chris Evans",
    ],
    explanation:
      "Tom Hiddleston portrays Loki, the God of Mischief, in the MCU.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which movie won the Academy Award for Best Picture in 1994?",
    correctAnswer: "Forrest Gump",
    incorrectAnswers: [
      "Pulp Fiction",
      "The Shawshank Redemption",
      "Four Weddings and a Funeral",
    ],
    explanation: "'Forrest Gump' won Best Picture at the 1994 Academy Awards.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which actress played Hermione Granger in the 'Harry Potter' series?",
    correctAnswer: "Emma Watson",
    incorrectAnswers: ["Daniel Radcliffe", "Bonnie Wright", "Evanna Lynch"],
    explanation:
      "Emma Watson portrayed Hermione Granger in all the Harry Potter films.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which actor plays the Mandalorian in the Disney+ series 'The Mandalorian'?",
    correctAnswer: "Pedro Pascal",
    incorrectAnswers: ["Oscar Isaac", "Temuera Morrison", "Diego Luna"],
    explanation:
      "Pedro Pascal plays the titular character Din Djarin, the Mandalorian.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which film director created the 'Lord of the Rings' movie trilogy?",
    correctAnswer: "Peter Jackson",
    incorrectAnswers: [
      "Steven Spielberg",
      "Christopher Nolan",
      "James Cameron",
    ],
    explanation: "Peter Jackson directed the 'Lord of the Rings' trilogy.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which actor played the Genie in the 2019 live-action 'Aladdin' movie?",
    correctAnswer: "Will Smith",
    incorrectAnswers: ["Robin Williams", "Jim Carrey", "Eddie Murphy"],
    explanation:
      "Will Smith portrayed the Genie in the live-action version of 'Aladdin'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which actress voiced Princess Jasmine in the original 1992 'Aladdin' movie?",
    correctAnswer: "Linda Larkin",
    incorrectAnswers: ["Jodi Benson", "Lea Salonga", "Paige O’Hara"],
    explanation:
      "Linda Larkin provided the speaking voice for Princess Jasmine in 'Aladdin'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actor played the character of Deadpool's mentor, Weasel?",
    correctAnswer: "T.J. Miller",
    incorrectAnswers: ["Ryan Reynolds", "Ed Skrein", "Morena Baccarin"],
    explanation:
      "T.J. Miller portrayed Weasel, Deadpool’s friend and confidant.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which film studio produced the 'Shrek' movie series?",
    correctAnswer: "DreamWorks",
    incorrectAnswers: ["Pixar", "Disney", "Illumination"],
    explanation: "DreamWorks Animation produced all 'Shrek' films.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Who directed the movie 'Inception'?",
    correctAnswer: "Christopher Nolan",
    incorrectAnswers: [
      "Steven Spielberg",
      "James Cameron",
      "Quentin Tarantino",
    ],
    explanation:
      "'Inception' was directed by Christopher Nolan and released in 2010.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actor played the Joker in the movie 'Joker' (2019)?",
    correctAnswer: "Joaquin Phoenix",
    incorrectAnswers: ["Heath Ledger", "Jack Nicholson", "Jared Leto"],
    explanation: "Joaquin Phoenix won an Oscar for playing the Joker in 2019.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which animated Pixar movie features a rat who wants to become a chef?",
    correctAnswer: "Ratatouille",
    incorrectAnswers: ["Up", "Inside Out", "Coco"],
    explanation:
      "Ratatouille is about Remy, a rat who dreams of being a chef in Paris.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actor voices Maui in 'Moana'?",
    correctAnswer: "Dwayne Johnson",
    incorrectAnswers: ["Idris Elba", "Chris Hemsworth", "John Cena"],
    explanation:
      "Dwayne Johnson provides the voice for the demigod Maui in 'Moana'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which movie features a character called Jack Skellington?",
    correctAnswer: "The Nightmare Before Christmas",
    incorrectAnswers: ["Coraline", "Frankenweenie", "Corpse Bride"],
    explanation:
      "Jack Skellington is the main character in Tim Burton’s 'The Nightmare Before Christmas'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actor portrays Spider-Man in 'Spider-Man: No Way Home'?",
    correctAnswer: "Tom Holland",
    incorrectAnswers: ["Tobey Maguire", "Andrew Garfield", "Jacob Batalon"],
    explanation: "Tom Holland plays Peter Parker/Spider-Man in 'No Way Home'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which film studio produced 'Coco'?",
    correctAnswer: "Pixar",
    incorrectAnswers: ["Disney Animation", "DreamWorks", "Illumination"],
    explanation: "'Coco' was produced by Pixar Animation Studios.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actor played Deadpool's enemy Ajax?",
    correctAnswer: "Ed Skrein",
    incorrectAnswers: ["Ryan Reynolds", "T.J. Miller", "Brianna Hildebrand"],
    explanation: "Ed Skrein portrayed Ajax in the first Deadpool movie.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which film features the quote, 'I see dead people'?",
    correctAnswer: "The Sixth Sense",
    incorrectAnswers: ["The Others", "Poltergeist", "Insidious"],
    explanation:
      "The famous quote is from 'The Sixth Sense' spoken by Cole Sear.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question: "Which actress voices Elsa in the singing parts of 'Frozen'?",
    correctAnswer: "Idina Menzel",
    incorrectAnswers: ["Kristen Bell", "Demi Lovato", "Auli'i Cravalho"],
    explanation: "Idina Menzel performs Elsa’s singing voice in 'Frozen'.",
  },
  {
    category: "Entertainment",
    difficulty: "hard",
    type: "multiple",
    question:
      "Which film series features characters named Frodo, Gandalf, and Aragorn?",
    correctAnswer: "The Lord of the Rings",
    incorrectAnswers: ["The Hobbit", "Harry Potter", "Chronicles of Narnia"],
    explanation:
      "'The Lord of the Rings' trilogy features Frodo, Gandalf, and Aragorn as main characters.",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Question.deleteMany();
    console.log("Cleared existing questions");

    // Insert sample data
    await Question.insertMany(sampleQuestions);
    console.log("Sample questions inserted successfully");

    // Count questions by category
    const counts = await Question.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    console.log("\nQuestion counts by category:");
    counts.forEach((item) => {
      console.log(`${item._id}: ${item.count} questions`);
    });

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
