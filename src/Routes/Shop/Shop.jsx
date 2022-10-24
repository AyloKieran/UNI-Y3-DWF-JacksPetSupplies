import { useEffect } from "react";
import { generatePageTitle } from "../../Utilities";

import PageContent from "../../Components/Layout/PageContent";

function Shop() {

  useEffect(() => {
    document.title = generatePageTitle("Shop");
  });

  return (
    <PageContent>
      <h2>Shop</h2>
    </PageContent>
  )
}

export default Shop