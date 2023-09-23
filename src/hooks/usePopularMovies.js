import { useDispatch } from "react-redux";
import { addPopularmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";


const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {

        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularmovies(json.results));
    };

    useEffect(() => {

        getPopularMovies();
    }, []);
}

export default usePopularMovies;