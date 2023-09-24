import { bg_url } from "../utils/Constant";
import Gptsearchbar from "./Gptsearchbar";
import Gptsuggestion from "./Gptsuggestion";

const GPTSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img src={bg_url}
                    alt="logo" />
            </div>
            <Gptsearchbar />
            <Gptsuggestion />
        </div>
    )
}

export default GPTSearch;