import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovietrailer = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies?.TrailerVideo);

    // console.log(movieId)
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        // console.log(trailer);
    };

    // console.log(trailerVideo.key);

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);

}

export default useMovietrailer;