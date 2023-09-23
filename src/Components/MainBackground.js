import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovietrailer";




const MainBackground = ({ movieId }) => {


    const trailerVideo = useSelector((store) => store.movies?.TrailerVideo);


    useMovietrailer(movieId);

    // console.log(trailerVideo.key);


    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>

        </div >
    )
}

export default MainBackground;

// "f3cWlKIA2r8"
// uYPbbksJxIg




