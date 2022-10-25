import { useEffect } from "react";
import { generatePageTitle } from "../../Utilities";

import PageContent from "../../Components/Layout/PageContent";

function NotFound() {

    useEffect(() => {
        document.title = generatePageTitle("404");
    });

    return (
        <PageContent>
            <h2>NotFound</h2>
        </PageContent>
    )
}

export default NotFound