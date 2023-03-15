import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://react-http-e5bda-default-rtdb.firebaseio.com/movies.json"
            );

            if (!response.ok) {
                throw new Error("Something went Wrong!");
            }

            const data = await response.json();

            console.log(data);

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }

            console.log(loadedMovies);

            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const addMovieHandler = async (movie) => {
        const response = await fetch(
            "https://react-http-e5bda-default-rtdb.firebaseio.com/movies.json",
            {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
    };

    let content = (
        <p className="text-2xl font-medium text-zinc-800">Found no Movies.</p>
    );

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    if (error) {
        content = <p className="text-2xl font-medium text-zinc-800">{error}</p>;
    }
    if (isLoading) {
        content = (
            <p className="text-2xl font-medium text-zinc-800">Loading...</p>
        );
    }

    return (
        <React.Fragment>
            <section className="my-4 mx-auto w-[992px] text-center bg-white p-8 rounded-xl">
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section className="my-4 mx-auto w-[992px] text-center bg-white p-8 rounded-xl">
                <button
                    onClick={fetchMoviesHandler}
                    className="cursor-pointer bg-[#230052] text-white py-3 px-8 rounded-lg focus:outline-none hover:bg-[#460897]"
                >
                    Fetch Movies
                </button>
            </section>
            <section className="my-4 mx-auto w-[992px] text-center bg-white p-8 rounded-xl">
                {content}
            </section>
        </React.Fragment>
    );
};

export default App;
