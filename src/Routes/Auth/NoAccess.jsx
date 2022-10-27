import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generatePageTitle } from "../../Utilities";

import PageContent from "../../Components/Layout/PageContent";

function NoAccess() {

    useEffect(() => {
        document.title = generatePageTitle("403");
    });

    return (
        <PageContent>
            <div className="flex flex-col text-center mt-10">
                <h2 className="text-5xl font-black">Whoops!</h2>
                <h3 className="mt-2 font-semibold text-lg text-gray-600 dark:text-gray-300">Sorry! It looks like you don't have access to view that! 🥲</h3>
                <Link to="/" className="mt-12">
                    <button className="bg-jack hover:bg-jack-light text-white font-bold p-2 px-6 rounded-full text-center hover:underline">Go Home</button>
                </Link>
            </div>
        </PageContent>
    )
}

export default NoAccess