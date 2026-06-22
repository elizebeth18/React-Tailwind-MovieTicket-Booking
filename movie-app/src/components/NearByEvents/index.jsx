
const NearByEvents = () => {

const moviesData = {
  "latestMovies": [
    {
      "id": 1,
      "title": "Mission: Impossible – The Final Reckoning",
      "genre": ["Action", "Thriller"],
      "language": "English",
      "rating": 8.5,
      duration: "2h 43m",
      releaseDate: "2026-05-18",
      image: "https://picsum.photos/300/450?random=1",
      price: 350,
      showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "9:00 PM"],
      description:
        "Ethan Hunt faces his most dangerous mission yet as a global AI threat puts the world's security at risk. He races against time to stop a catastrophe before humanity loses control."
    },
    {
      id: 2,
      title: "Superman",
      genre: ["Action", "Adventure"],
      language: "English",
      rating: 8.1,
      duration: "2h 12m",
      releaseDate: "2026-06-10",
      image: "https://picsum.photos/300/450?random=2",
      price: 300,
      showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "10:00 PM"],
      description:
        "Clark Kent struggles to balance his human identity and Kryptonian heritage while defending Earth against a powerful new enemy."
    },
    {
      id: 3,
      title: "How to Train Your Dragon",
      genre: ["Animation", "Fantasy"],
      language: "English",
      rating: 8.7,
      duration: "1h 55m",
      releaseDate: "2026-06-01",
      image: "https://picsum.photos/300/450?random=3",
      price: 250,
      showTimes: ["9:30 AM", "12:30 PM", "4:00 PM", "7:30 PM"],
      description:
        "Hiccup and Toothless set out on a new journey where dragons and humans must unite to protect their world from an unknown danger."
    },
    {
      id: 4,
      title: "F1",
      genre: ["Sports", "Drama"],
      language: "English",
      rating: 8.0,
      duration: "2h 25m",
      releaseDate: "2026-06-05",
      image: "https://picsum.photos/300/450?random=4",
      price: 400,
      showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "8:30 PM"],
      description:
        "A retired Formula One legend returns to mentor a young driver while confronting unfinished business from his past."
    }
  ],

  upcomingMovies: [
    {
      id: 5,
      title: "Avatar 4",
      genre: ["Sci-Fi", "Adventure"],
      language: "English",
      releaseDate: "2026-12-18",
      image: "https://picsum.photos/300/450?random=5",
      price: 450,
      showTimes: ["11:00 AM", "3:00 PM", "6:30 PM", "10:00 PM"],
      description:
        "Jake Sully and his family explore new regions of Pandora where unknown tribes and dangerous threats challenge their future."
    },
    {
      id: 6,
      title: "Spider-Man: Brand New Day",
      genre: ["Action", "Superhero"],
      language: "English",
      releaseDate: "2026-11-20",
      image: "https://picsum.photos/300/450?random=6",
      price: 380,
      showTimes: ["10:00 AM", "1:00 PM", "5:00 PM", "8:30 PM"],
      description:
        "Peter Parker begins a fresh chapter in life while mysterious events pull him back into action against a dangerous new villain."
    },
    {
      id: 7,
      title: "Shrek 5",
      genre: ["Animation", "Comedy"],
      language: "English",
      releaseDate: "2026-12-23",
      image: "https://picsum.photos/300/450?random=7",
      price: 280,
      showTimes: ["9:00 AM", "12:00 PM", "3:00 PM", "7:00 PM"],
      description:
        "Shrek, Fiona, and Donkey return for another hilarious adventure filled with magical surprises and unexpected twists."
    },
    {
      id: 8,
      title: "The Batman Part II",
      genre: ["Action", "Crime"],
      language: "English",
      releaseDate: "2026-10-02",
      image: "https://picsum.photos/300/450?random=8",
      price: 420,
      showTimes: ["11:30 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
      description:
        "Batman investigates a deeper conspiracy in Gotham as new enemies emerge and challenge his mission and identity."
    }
  ]
};





    return(
        <h1>NearBy Events</h1>
    )
}

export default NearByEvents;