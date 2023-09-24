import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTVshow from "../hooks/useTVshow";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    useNowPlaying();

    usePopularMovies();

    useUpcomingMovies();

    useTrendingMovies();

    useTVshow();


    return (
        <div>
            <Header />
            {showGptSearch ? (<GPTSearch />) :
                (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )


            }
        </div>
    )
}

export default Browse;