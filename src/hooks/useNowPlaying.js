import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";


const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {

        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlaying(json.results));
    };

    useEffect(() => {

        getNowPlayingMovies();
    }, []);
}

export default useNowPlaying;