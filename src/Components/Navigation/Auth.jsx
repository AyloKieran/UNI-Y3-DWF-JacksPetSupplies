import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth, doLogout } from "../../FirebaseAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Auth() {

    const [isAuthenticated, user] = useFirebaseAuth();

    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const login = () => {
        navigate("/auth/login");
        setModalOpen(false);
    }

    const register = () => {
        navigate("/auth/register");
        setModalOpen(false);
    }

    const signout = () => {
        navigate("/");
        doLogout();
        setModalOpen(false);
    }

    return (
        <div>
            <Link>
                <FontAwesomeIcon icon={faUser} className="flex justify-center my-auto" onClick={toggleModal} />
            </Link>
            {modalOpen &&
                <div className="absolute top-24 md:top-12 right-0 m-2 left-0 md:left-auto">
                    <div className="bg-gray-400 dark:bg-gray-600 p-2 shadow-lg rounded flex flex-col">
                        {isAuthenticated &&
                            <div className="min-w-[250px]">
                                <div className="text-center bg-gray-500 dark:bg-gray-700 py-1 px-2 rounded">
                                    <h2 className="font-semibold text-lg">Logged in as:</h2>
                                    <p className="text-sm dark:text-gray-300">{user.email}</p>
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-jack hover:bg-jack-light text-white font-bold p-1 px-3 text-sm rounded-full text-center hover:underline mt-2" onClick={signout}>Log Out</button>
                                </div>
                            </div>
                        }
                        {!isAuthenticated &&
                            <div className="flex gap-2 justify-center">
                                <Link to="/auth/login" className="flex justify-center">
                                    <button className="bg-jack hover:bg-jack-light text-white font-bold p-1 px-3 text-sm rounded-full text-center hover:underline" onClick={login}>Log In</button>
                                </Link>
                                <Link to="/auth/register" className="flex justify-center">
                                    <button className="bg-jack hover:bg-jack-light text-white font-bold p-1 px-3 text-sm rounded-full text-center hover:underline" onClick={register}>Register</button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            }
        </div >
    )
}

export default Auth