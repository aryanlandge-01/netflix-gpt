import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import MainBackground from "./MainBackground";


const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;
    const Mainmovie = movies[13];
    console.log(Mainmovie);

    const { original_title, overview, id } = Mainmovie;


    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <MainBackground movieId={id} />
        </div>
    )
}

export default MainContainer;