//mediacard from mui

useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchNowPlaying();
      setMovies(movies);
    };
    fetchMovies();
  }, []);