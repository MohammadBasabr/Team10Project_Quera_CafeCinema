import img1 from "./assets/posters/1-hacksawRidge.jpg";
import img2 from "./assets/posters/2-room.jpg";
import img3 from "./assets/posters/3-jaiBhim.jpg";
import img4 from "./assets/posters/4-capernaum.jpg";
import img5 from "./assets/posters/5-logan.jpg";
import img6 from "./assets/posters/6-darkKnightRises.jpg";
import img7 from "./assets/posters/7-joker.jpg";
import img8 from "./assets/posters/8-1917.jpg";
import img9 from "./assets/posters/9-greenBook.jpg";
import img10 from "./assets/posters/10-interstellar.jpg";

import poster1 from "./assets/sliders/1-hacksawRidge.jpg";
import poster2 from "./assets/sliders/2-room.jpg";
import poster3 from "./assets/sliders/3-jaiBhim.jpg";
import poster4 from "./assets/sliders/4-capernaum.jpg";
import poster5 from "./assets/sliders/5-logan.jpg";
import poster6 from "./assets/sliders/6-darkKnightRises.jpg";
import poster7 from "./assets/sliders/7-joker.jpg";
import poster8 from "./assets/sliders/8-1917.jpg";
import poster9 from "./assets/sliders/9-greenBook.jpg";
import poster10 from "./assets/sliders/10-interstellar.jpg";

const movies = [
  {
    id: "1",
    price: 299,
    poster: img1,
    slider: poster1,
    title: "Hacksaw Ridge",
    year: "2016",
    genre: ["Drama", "Biography", "History"],
    rate: "8.1",
    director: "Mel Gibson",
    stars: [
      "Andrew Garfield",
      "Sam Worthington",
      "Luke Bracey",
      "Teresa Palmer",
    ],
    summary:
      "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
  },
  {
    id: "2",
    price: 299,
    poster: img2,
    slider: poster2,
    title: "Room",
    year: "2015",
    genre: ["Drama", "Thriller"],
    rate: "8.1",
    director: "Lenny Abrahamson",
    stars: ["Brie Larson", "Jacob Tremblay", "Sean Bridgers", "Wendy Crewson"],
    summary:
      "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
  },
  {
    id: "3",
    price: 299,
    poster: img3,
    slider: poster3,
    title: "Jai Bhim",
    year: "2021",
    genre: ["Crime", "Drama", "Mystery"],
    rate: "8.8",
    director: "T.J. Gnanavel",
    stars: ["Suriya", "Lijo Mol Jose", "Manikandan K.", "Rajisha Vijayan"],
    summary:
      "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
  },
  {
    id: "4",
    price: 299,
    poster: img4,
    slider: poster4,
    title: "Capernaum",
    year: "2018",
    genre: ["Drama"],
    rate: "8.4",
    director: "Nadine Labaki",
    stars: [
      "Zain Al Rafeea",
      "Yordanos Shiferaw",
      "Boluwatife Treasure Bankole",
      "Kawsar Al Haddad",
    ],
    summary:
      "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
  },
  {
    id: "5",
    price: 299,
    poster: img5,
    slider: poster5,
    title: "Logan",
    year: "2017",
    genre: ["Action", "Drama", "Sci-Fi"],
    rate: "8.1",
    director: "James Mangold",
    stars: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen", "Boyd Holbrook"],
    summary:
      "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
  },
  {
    id: "6",
    price: 299,
    poster: img6,
    slider: poster6,
    title: "The Dark Knight Rises",
    year: "2012",
    genre: ["Action", "Drama"],
    rate: "8.4",
    director: "Christopher Nolan",
    stars: ["Christian Bale", "Tom Hardy", "Anne Hathaway", "Gary Oldman"],
    summary:
      "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.",
  },
  {
    id: "7",
    price: 299,
    poster: img7,
    slider: poster7,
    title: "Joker",
    year: "2019",
    genre: ["Crime", "Drama", "Thriller"],
    rate: "8.4",
    director: "Todd Phillips",
    stars: [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz",
      "Frances Conroy",
    ],
    summary:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
  },
  {
    id: "8",
    price: 299,
    poster: img8,
    slider: poster8,
    title: "1917",
    year: "2019",
    genre: ["Action", "Drama", "War"],
    rate: "8.2",
    director: "Sam Mendes",
    stars: [
      "Dean-Charles Chapman",
      "George MacKay",
      "Daniel Mays",
      "Colin Firth",
    ],
    summary:
      "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
  },
  {
    id: "9",
    price: 299,
    poster: img9,
    slider: poster9,
    title: "Green Book",
    year: "2018",
    genre: ["Biography", "Comedy", "Drama"],
    rate: "8.2",
    director: "Peter Farrelly",
    stars: [
      "Viggo Mortensen",
      "Mahershala Ali",
      "Linda Cardellini",
      "Sebastian Maniscalco",
    ],
    summary:
      "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
  },
  {
    id: "10",
    price: 299,
    poster: img10,
    slider: poster10,
    title: "Interstellar",
    year: "2014",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rate: "8.6",
    director: "Christopher Nolan",
    stars: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Mackenzie Foy",
    ],
    summary:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
];

export default movies;
