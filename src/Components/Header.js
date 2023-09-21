import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";





const Header = () => {

    const navigate = useNavigate();

    const user = useSelector(store => store.user);

    const handlesignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");

        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    return (
        <div className="absolute w-full px-24 py-2 bg-gradient-to-b flex justify-between from-black z-10">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="netflix_logo" />

            {user && (<div className="my-5 p-2 flex">
                <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
                <button onClick={handlesignOut} className="bg-red-500 p-2 hover:bg-red-600 text-white font-bold  px-2 rounded-lg border border-red-500 hover:border-red-600">
                    Sign Out
                </button>
            </div>)}
        </div>
    )
};

export default Header;