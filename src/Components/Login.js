import { useState } from "react";
import Header from "./Header";


const Login = () => {

    const [isSigninForm, setisSignForm] = useState(true);

    const toggleSignupForm = () => {

        setisSignForm(!isSigninForm);
    }




    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="logo" />
            </div>
            <form className="absolute flex flex-col w-4/12 mt-28 mx-96 text-white p-12 bg-black bg-opacity-80 rounded-xl">
                <h1 className="font-bold text-3xl py-4 m-2">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !isSigninForm && <input
                        type="text"
                        placeholder="UserName"
                        className="p-4 m-2 w-full  bg-gray-300"
                    />
                }
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 m-2 w-full  bg-gray-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 m-2 w-full  bg-gray-300"
                />
                <button className="p-4 m-2 bg-red-700 rounded-lg w-full">{isSigninForm ? "Sign In" : "Sign Up"}</button>
                <p className="m-2 cursor-pointer" onClick={toggleSignupForm} >
                    {isSigninForm ? "New to netflix? Sign Up Now" : "If Already a user sign in."}
                </p>
            </form>


        </div>
    )
};

export default Login