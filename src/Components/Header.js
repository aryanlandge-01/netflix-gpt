import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from "../utils/Constant";



const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

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


    return (
        <div className="absolute w-full px-24 py-2 bg-gradient-to-b flex justify-between from-black z-10">
            <img className="w-44" src={Logo}
                alt="netflix_logo" />

            {user && (<div className="my-5 p-2 flex gap-3 ">
                <img className="w-12 h-12 rounded-full" alt="usericon" src={user?.photoURL} />
                <button onClick={handlesignOut} className="bg-red-500 p-2 hover:bg-red-600 text-white font-bold  px-2 rounded-lg border border-red-500 hover:border-red-600">
                    Sign Out
                </button>
            </div>)}
        </div>
    )
};

export default Header;