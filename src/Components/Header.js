import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANGUAGES } from "../utils/Constant";
import { togglegptsearchview } from "../utils/gptSlice";
import { changeLanguage } from "../utils/ConfigSlice";



const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    const showgptsearch = useSelector(store => store.gpt.showGptSearch);


    const handlesignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;

                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                }));

                navigate("/browse");

            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();

    }, []);


    const handleGptsearchclick = () => {
        //toggele gpt search
        dispatch(togglegptsearchview());
    }

    const handlelanguagechange = (e) => {

        dispatch(changeLanguage(e.target.value));
    }


    return (
        <div className="absolute w-full px-24 py-2 bg-gradient-to-b flex justify-between from-black z-10 ">
            <img className="w-44" src={Logo}
                alt="netflix_logo" />
            {user && (
                <div className="my-5 p-2 flex gap-3 ">
                    {showgptsearch && <select onChange={handlelanguagechange} className="px-4 rounded-lg bg-gray-500 text-white">
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select>}

                    <button
                        onClick={handleGptsearchclick}
                        className="py-3 px-6 mx-4 rounded-xl bg-purple-800 text-white font-bold hover:opacity-80"
                    >
                        {showgptsearch ? "Home Page" : "GPT Search"}
                    </button>
                    <img className="w-12 h-12 rounded-full" alt="usericon" src={user?.photoURL} />
                    <button onClick={handlesignOut} className="bg-red-500 p-2 hover:bg-red-600 text-white font-bold  px-2 rounded-lg border border-red-500 hover:border-red-600">
                        Sign Out
                    </button>
                </div>)}
        </div>
    )
};

export default Header;