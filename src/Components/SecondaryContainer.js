import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {


    const movies = useSelector((store) => store.movies);

    // console.log(movies);

    return (
        movies.nowPlayingMovies && (
            <div className=" bg-black ">
                <div className="-mt-32 relative z-2 pl-12">
                    <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <Movielist title={"Trending"} movies={movies.TrendingMovies} />
                    <Movielist title={"Popular"} movies={movies.PopularMovies} />
                    <Movielist title={"Upcoming"} movies={movies.UpcomingMovies} />
                    <Movielist title={"TV Shows"} movies={movies.Tvshows} />
                </div>

            </div>
        )
    )
}

export default SecondaryContainer;