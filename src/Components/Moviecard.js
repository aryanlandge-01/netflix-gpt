import { ImgURL } from "../utils/Constant";


const Moviecard = ({ posterPath }) => {

    if (!posterPath) return null;

    return (
        <div className="w-40 pr-2">
            <img src={ImgURL + posterPath} alt="moviecard" />
        </div>
    )
}

export default Moviecard;