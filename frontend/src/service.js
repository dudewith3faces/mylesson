const movies = [
  {
    id: 3,
    title: 'Lloyd in Space',
    director: 'N/A',
    plot: 'A Disney show centered around Lloyd, an alien, living in space and going through "ordinary" life with family and friends as a 12 year old.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZTg0ZWQxNjctOGI3Ny00NmUxLWI1OGUtNzU1ZmFlMTlmMDA1XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_SX300.jpg',
  },
  {
    id: 4,
    title: 'Race to Space',
    director: 'Sean McNamara',
    plot: 'In the 1960s a young woman works at NASA as an animal trainer responsible for the chimpanzee who will go into space.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTczNDUwMDA1NV5BMl5BanBnXkFtZTcwNTA5MTAwMQ@@._V1_SX300.jpg',
  },
  {
    id: 5,
    title: 'Gore from Outer Space',
    director: 'Hirohisa Sasaki',
    plot: 'A woman is sent to execution for the murder of her daughter, who she believes is kidnapped. When she tells her story to a nun, we learn her story through a series of encounters with a psychic, a dirty politician, and two FBI agents who love Jell-O and believe there are aliens are responsible for bewildering the woman.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTk2Nzg3NDEtMjQ4NC00Nzk4LWE0YmYtZTdmODYzYjIxOTljXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg',
  },
  {
    id: 6,
    title: 'ONE: A Space Odyssey',
    director: 'Tim Drage, Tony Mines',
    plot: "ONE: A Space Odyssey is a minute-long animated LEGO parody of Stanley Kubrick's Sci-Fi masterpiece.",
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2E1MGY1ZjEtNzVhYS00MTcyLThmNWUtZDM0MGY1Y2Y4YzEwXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_SX300.jpg',
  },
  {
    id: 7,
    title: 'Star Trek: Deep Space Nine - Dominion Wars',
    director: 'N/A',
    plot: 'Tactical combat game set in the Star Trek Next Generation era. Similar in style to the starfleet command games.',
    poster: 'N/A',
  },
  {
    id: 8,
    title: 'Space Banda',
    director: 'Kieron Estrada',
    plot: 'N/A',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTc1NTE1NTEyMF5BMl5BanBnXkFtZTcwNzgzOTEzMQ@@._V1_SX300.jpg',
  },
  {
    id: 9,
    title: 'Kung Fu Werewolf from Outer Space',
    director: 'James Rolfe',
    plot: 'A blend of sci-fi, horror and martial arts.',
    poster: 'N/A',
  },
  {
    id: 10,
    title: 'Sexy Space Sirens from Siberon',
    director: 'Lee Waters',
    plot: "Two sexy space sirens come down to earth from the distant planet Siberon. We watch their journey as they make their way up the ladder of power and prestige till they reach the top! The Siren's goal - to destroy the Human race. Their Weapon - the Hollywood hype machine. Sexy Space Sirens from Siberon is a dark twisted comedy that takes a jab at Hollywood and all it has to sell.",
    poster: 'N/A',
  },
  {
    id: 11,
    title: 'Space Zoo',
    director: 'Werner Kranwetvogel',
    plot: "2030. A push at the wrong button on the hyper space module has unexpected conse-quences for the two astronauts Franz Daxenberger and Dirk Mandelbrot. They find themselves on Aldebaran 9, a planet around 23,000 light years from earth, where they are put into a zoo together with their spaceship 'Stoiber'. While the two humans beings are trying to repair their spaceship the zoo director believes to have found a rare sample of a male and a female and tries to stimulate their reproduction...",
    poster: 'N/A',
  },
  {
    id: 12,
    title: '2001: A Space Road Odyssey',
    director: 'N/A',
    plot: 'Natasha &amp; Steve (the voice of Space) hit the road traveling accross Canada searching for the paranormal.',
    poster: 'N/A',
  },
  {
    id: 13,
    title: 'Space Millenium',
    director: 'N/A',
    plot: 'N/A',
    poster: 'N/A',
  },
  {
    id: 14,
    title: 'Space Oddity',
    director: 'Robert Beaucage',
    plot: "Trapped for twelve years within the claustrophobic confines of a spaceship, astronaut Tom Gray is getting close to the destination he's dreamt of all his life: Prote, the first known habitable planet outside the solar system, a primordial Eden. Tom's sole companion is Robert -- the ship's computer, and the downloaded brain of the C.E.O. of Neuroscape, the company that is financing the mission and that will claim ownership of Prote upon Tom's arrival. Their only link to life on Earth is a transmission they receive every five days -- and when that transmission stops coming, it's the beginning of Tom and Robert's descent out of their fragile equilibrium into paranoia, madness... and destruction.",
    poster: 'N/A',
  },
  {
    id: 15,
    title: 'Lloyd in Space: The Lloyd Bonus Minute',
    director: 'N/A',
    plot: 'Check out the lost parts of the hit Disney show about Lloyd Nebulon and his friends.',
    poster: 'N/A',
  },
  {
    id: 16,
    title: 'Space Rescue',
    director: 'N/A',
    plot: 'N/A',
    poster: 'N/A',
  },
  {
    id: 17,
    title: 'Sex in Space',
    director: 'Jesper Fleng',
    plot: 'Music video for the Mofus song Sex in Space. A love affair is shown taking place over the course of human evolution.',
    poster: 'N/A',
  },
  {
    id: 18,
    title: 'Space Needle',
    director: 'Dane Picard',
    plot: 'N/A',
    poster: 'N/A',
  },
  {
    id: 19,
    title: 'Around Space',
    director: 'N/A',
    plot: 'Around Space is a talk show, produced under the auspices of the DC-L5 chapter of the National Space Society, dealing with space-related topics. Around Space seeks to foster the vision of communities in space through educating people in the technology of space exploration and settlement. Through education, we endeavor to create a climate in which people will believe that communities in space are possible. We believe that space exploration is and will be a benefit to humanity. We seek to inspire people to journey to the undiscovered country-space.',
    poster: 'N/A',
  },
  {
    id: 20,
    title: 'Space Medicine',
    director: 'Denise Withers',
    plot: 'N/A',
    poster: 'N/A',
  },
  {
    id: 21,
    title: 'Space Case',
    director: 'Ty Varszegi, Virginia Wilkos',
    plot: "Based on the children's book by Edward Marshall, Space Case is about an alien that arrives on Earth on Halloween night where it is mistaken for a trick-or-treater. The alien befriends a young boy who teaches it about human holidays.",
    poster: 'N/A',
  },
  {
    id: 22,
    title: 'Crawl Space',
    director: 'Amy Klitsner',
    plot: 'N/A',
    poster: 'N/A',
  },
  {
    id: 23,
    title: 'In Space',
    director: 'Karma Clarke-Davis',
    plot: 'N/A',
    poster: 'N/A',
  },
];

export const MovieSearchService = () => {
  return { movies };
};
