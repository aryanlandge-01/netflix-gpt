import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/Language.";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { addgptmovieresult } from "../utils/gptSlice";
// import openai from "../utils/Openai";




const Gptsearchbar = () => {
    const langkey = useSelector((store) => store.config?.lang);

    const searchText = useRef(null);

    const dispatch = useDispatch();

    const searchMovieTMDB = async (movieName) => {

        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1", API_OPTIONS)

        const json = await data.json();

        return json.results;

    }

    // const handlegptsearch = async () => { 
    //     const gptQuery = "Act as a movie recommendation system suggest some movies for the query:"
    //         + searchText.current.value +
    //         ".only give me names of 5 movies,comma seperated like the example result given ahead. Example Result: Gadar,Sholhy,Don,Nun,Silver lining playbook";
    //     console.log(gptQuery);
    //     const movieArray = [
    //         "Fifty Shades Darker",
    //         "Fifty Shades Freed",
    //         "Secretary",
    //         "Blue Is the Warmest Color",
    //         "9½ Weeks"
    //     ];
    //     const promiseArray = movieArray.map(movie => searchMovieTMDB(movie));
    //     const Tmdbmovies = Promise.all(promiseArray);
    //     console.log(Tmdbmovies);
    // }
    const handlegptsearch = async () => {
        const query = searchText.current.value;

        const gptQuery = `Act as a movie recommendation system suggest some movies for the query: ${query}. Only give me names of 5 movies, comma separated.`;

        console.log(gptQuery);

        const movieArray = [
            "Fifty Shades Darker",
            "Fifty Shades Freed",
            "Secretary",
            "Blue Is the Warmest Color",
            "9½ Weeks"
        ];

        const promiseArray = movieArray.map(async (movie) => {
            try {
                const result = await searchMovieTMDB(movie);
                return result;
            } catch (error) {
                console.error(`Error searching for ${movie} on TMDb:`, error);
                return [];
            }
        });

        try {
            const Tmdbmovies = await Promise.all(promiseArray);
            console.log(Tmdbmovies);
            dispatch(addgptmovieresult({ movieNames: movieArray, Tmdbresult: Tmdbmovies }));
        } catch (error) {
            console.error("Error fetching movie recommendations:", error);
        }
    };


    return (
        <div className="pt-[10%] w-1/2 mx-[25%]">
            <form className=" bg-black p-12 rounded-xl grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    className="mx-3 p-4 col-span-9 rounded-lg"
                    placeholder={lang[langkey]?.gptSearchPlaceholder}
                />
                <button onClick={handlegptsearch} className="px-2 py-1 ml-1 col-span-3 bg-red-700 rounded-lg text-white" >
                    {lang[langkey]?.search}
                </button>
            </form>
        </div>
    );
};




export default Gptsearchbar;



// make an api call to gpt api and get the result.
// const Gptresult = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: gptQuery }],
//     model: 'gpt-3.5-turbo',
// });

// console.log(Gptresult.choices?.[0]?.message?.content.split(","));