import { useSelector } from "react-redux";
import Movielist from "../Components/Movielist";





const Gptsuggestion = () => {

    const { Tmdbresult, movieNames } = useSelector(store => store.gpt);

    if (!movieNames) return null;

    return (
        <div className="m-4 p-4 bg-black opacity-90">
            <div>
                {movieNames.map((movieName, index) =>
                    <Movielist
                        key={movieName}
                        title={movieName}
                        movies={Tmdbresult[index]}
                    />
                )}

            </div>

        </div>
    )
}

export default Gptsuggestion;