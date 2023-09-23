import { useDispatch } from "react-redux";
import { addTvshows } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";


const useTVshow = () => {
    const dispatch = useDispatch();

    const getTVshow = async () => {

        const data = await fetch(
            'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addTvshows(json.results));
    };

    useEffect(() => {

        getTVshow();
    }, []);
}

export default useTVshow;