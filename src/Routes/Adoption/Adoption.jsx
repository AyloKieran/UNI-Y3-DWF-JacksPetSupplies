import { useEffect } from "react";
import { generatePageTitle } from "../../Utilities";

import PageContent from "../../Components/Layout/PageContent";

function Adoption() {

  useEffect(() => {
    document.title = generatePageTitle("Adoption");
  });

  return (
    <PageContent>
      <h2>Adoption</h2>
    </PageContent>
  )
}

export default Adoption