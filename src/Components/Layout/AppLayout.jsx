import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Header, Footer } from "./";

function AppLayout() {

    return (
        <div className="flex-grow flex flex-col">
            <Header />
            <div className="flex-grow flex flex-col max-w-screen dark:bg-gray-900 dark:text-white">
                <main className="flex-grow mb-4 p-4 max-w-4xl mx-auto">
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout