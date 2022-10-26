import { useEffect } from "react";
import { generatePageTitle } from "../../Utilities";
import { PageContent, Section } from "../../Components/Layout";
import { Products } from "./";

function Shop() {

  useEffect(() => {
    document.title = generatePageTitle("Shop");
  });

  return (
    <PageContent className="w-full">
      <Section title="Shop" subtitle="Take a look around at some of the best treats and toys that you know your little one will love!">
        <Products />
      </Section>
    </PageContent>
  )
}

export default Shop