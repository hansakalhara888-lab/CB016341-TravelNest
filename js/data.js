// Travel Destinations Data

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    type: "luxury",
    budget: "high",
    image: "images/dubai.jpeg",
    description:
      "Dubai is famous for modern buildings, shopping, desert safaris and luxury hotels.",
    attractions: [
      "Burj Khalifa",
      "Dubai Mall",
      "Desert Safari"
    ],
    cost: { low: 70, medium: 160, high: 350 }
  },

  {
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    type: "cultural",
    budget: "high",
    image: "images/london.jpeg",
    description:
      "London offers history, museums, shopping streets and famous landmarks.",
    attractions: [
      "Big Ben",
      "London Eye",
      "British Museum"
    ],
    cost: { low: 75, medium: 160, high: 320 }
  },

  {
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "cultural",
    budget: "medium",
    image: "images/rome.jpeg",
    description:
      "Rome is known for ancient history, architecture, food and beautiful streets.",
    attractions: [
      "Colosseum",
      "Trevi Fountain",
      "Vatican City"
    ],
    cost: { low: 60, medium: 130, high: 260 }
  },

  {
    name: "New York",
    country: "United States",
    continent: "North America",
    type: "city",
    budget: "high",
    image: "images/newyork.jpeg",
    description:
      "New York is a busy city with skyscrapers, parks, shopping and entertainment.",
    attractions: [
      "Times Square",
      "Central Park",
      "Statue of Liberty"
    ],
    cost: { low: 90, medium: 200, high: 400 }
  },

  {
    name: "Brisbane",
    country: "Australia",
    continent: "Australia",
    type: "city",
    budget: "medium",
    image: "images/Brisbane.jpeg",
    description:
      "Brisbane is a sunny city known for riverside views, parks, and a relaxed lifestyle.",
    attractions: [
      "South Bank Parklands",
      "Story Bridge",
      "Lone Pine Koala Sanctuary"
    ],
    cost: { low: 60, medium: 130, high: 260 }
  },

  {
    name: "Los Angeles",
    country: "United States",
    continent: "North America",
    type: "city",
    budget: "high",
    image: "images/losangeles.jpeg",
    description:
      "Los Angeles is famous for Hollywood, beaches, and entertainment.",
    attractions: [
      "Hollywood Sign",
      "Santa Monica Pier",
      "Venice Beach"
    ],
    cost: { low: 90, medium: 180, high: 350 }
  },

  {
    name: "Ella",
    country: "Sri Lanka",
    continent: "Asia",
    type: "nature",
    budget: "low",
    image: "images/ella.jpeg",
    description:
      "Ella is a peaceful hill country destination with waterfalls, tea fields and hikes.",
    attractions: [
      "Nine Arches Bridge",
      "Little Adam's Peak",
      "Ravana Falls"
    ],
    cost: { low: 25, medium: 60, high: 120 }
  },

  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    type: "cultural",
    budget: "high",
    image: "images/paris.jpeg",
    description:
      "Paris is a cultural capital known for fashion, museums and romantic streets.",
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame"
    ],
    cost: { low: 70, medium: 150, high: 300 }
  },

  {
    name: "Melbourne",
    country: "Australia",
    continent: "Australia",
    type: "city",
    budget: "high",
    image: "images/melbourne.jpeg",
    description:
      "Melbourne is known for its vibrant arts scene, coffee culture, and diverse neighborhoods.",
    attractions: [
      "Federation Square",
      "Great Ocean Road",
      "Queen Victoria Market"
    ],
    cost: { low: 90, medium: 180, high: 350 }
  },

  {
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    type: "cultural",
    budget: "medium",
    image: "images/buenosaires.jpeg",
    description:
      "Buenos Aires is known for tango, architecture, and rich culture.",
    attractions: [
      "La Boca",
      "Recoleta Cemetery",
      "Plaza de Mayo"
    ],
    cost: { low: 45, medium: 100, high: 200 }
  },

  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    type: "nature",
    budget: "medium",
    image: "images/capetown.jpeg",
    description:
      "Cape Town is known for mountains, beaches, and wildlife.",
    attractions: [
      "Table Mountain",
      "Cape Point",
      "Boulders Beach"
    ],
    cost: { low: 50, medium: 100, high: 200 }
  },

  {
    name: "McMurdo Station",
    country: "Antarctica",
    continent: "Antarctica",
    type: "adventure",
    budget: "high",
    image: "images/mcmurdo.jpeg",
    description:
      "McMurdo Station is the largest research base in Antarctica with extreme adventure.",
    attractions: [
      "Ice Shelves",
      "Research Stations",
      "Wildlife Viewing"
    ],
    cost: { low: 200, medium: 500, high: 1000 }
  },

  {
    name: "South Pole",
    country: "Antarctica",
    continent: "Antarctica",
    type: "adventure",
    budget: "high",
    image: "images/southpole.jpeg",
    description:
      "The South Pole is one of the most remote places on Earth.",
    attractions: [
      "Geographic South Pole",
      "Amundsen-Scott Station",
      "Ice Fields"
    ],
    cost: { low: 300, medium: 700, high: 1500 }
  },

  {
    name: "Zanzibar",
    country: "Tanzania",
    continent: "Africa",
    type: "relaxation",
    budget: "medium",
    image: "images/zanzibar.jpeg",
    description:
      "Zanzibar is famous for beaches, clear waters, and rich culture.",
    attractions: [
      "Stone Town",
      "Nungwi Beach",
      "Prison Island"
    ],
    cost: { low: 60, medium: 120, high: 250 }
  },

  {
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    type: "nature",
    budget: "medium",
    image: "images/riodejaneiro.jpeg",
    description:
      "Rio is famous for beaches, carnival, and scenic views.",
    attractions: [
      "Christ the Redeemer",
      "Copacabana Beach",
      "Sugarloaf Mountain"
    ],
    cost: { low: 50, medium: 110, high: 220 }
  }
];
