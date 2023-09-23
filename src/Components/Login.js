import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/Validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { profileURL } from "../utils/Constant";



const Login = () => {

    const [isSigninForm, setisSignForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const dispatch = useDispatch();


    const toggleSignupForm = () => {

        setisSignForm(!isSigninForm);
    }

    const handleClick = () => {
        //validation of the form data 

        const message = checkValidData(email.current.value, password.current.value);

        seterrorMessage(message);

        if (message) return;

        if (!isSigninForm) {
            //sign up logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: profileURL,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }));


                        }).catch((error) => {
                            // An error occurred
                            // ...
                        });

                    // console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    seterrorMessage(errorCode + "-" + errorMessage);

                });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    seterrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute flex flex-col w-4/12 mt-28 mx-96 text-white p-12 bg-black bg-opacity-80 rounded-xl">
                <h1 className="font-bold text-3xl py-4 m-2">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !isSigninForm && <input
                        type="text"
                        ref={name}
                        placeholder="UserName"
                        className="p-4 m-2 w-full  bg-gray-300"
                    />
                }
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 m-2 w-full  bg-gray-300"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 m-2 w-full  bg-gray-300"
                />
                <p className="text-red-500 font-bold text-lg py-2 m-2"> {errorMessage} </p>
                <button onClick={handleClick} className="p-4 m-2 bg-red-700 rounded-lg w-full">{isSigninForm ? "Sign In" : "Sign Up"}</button>
                <p className="m-2 cursor-pointer" onClick={toggleSignupForm} >
                    {isSigninForm ? "New to netflix? Sign Up Now" : "If Already a user sign in."}
                </p>
            </form>


        </div>
    )
};

export default Login