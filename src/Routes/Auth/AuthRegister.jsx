import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../FirebaseAuth";

function AuthRegister() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/secure");
    }, [user, loading]);

    return (
        <div className="flex justify-center">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex flex-col gap-4 min-w-[400px]">
                <div className="">
                    <h2 className="text-center font-bold text-xl">Register</h2>
                </div>
                <form className="flex flex-col gap-4" onSubmit={register}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="username" className="text-sm ml-2 font-semibold text-gray-800 dark:text-gray-300">Name</label>
                        <input id="username" className="bg-gray-300 border-gray-500 dark:bg-gray-600 dark:border-gray-800 border rounded-lg p-1 px-3" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm ml-2 font-semibold text-gray-800 dark:text-gray-300">Email</label>
                        <input id="email" className="bg-gray-300 border-gray-500 dark:bg-gray-600 dark:border-gray-800 border rounded-lg p-1 px-3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm ml-2 font-semibold text-gray-800 dark:text-gray-300">Password</label>
                        <input id="password" className="bg-gray-300 border-gray-500 dark:bg-gray-600 dark:border-gray-800 border rounded-lg p-1 px-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-jack hover:bg-jack-light text-white font-bold text-sm p-2 px-6 rounded-full text-center hover:underline">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthRegister