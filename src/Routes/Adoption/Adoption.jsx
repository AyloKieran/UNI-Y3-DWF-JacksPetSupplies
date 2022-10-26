import { useEffect } from "react";
import { generatePageTitle } from "../../Utilities";
import { PageContent, Section } from "../../Components/Layout";
import { Adoptions } from "./";

function Adoption() {

  useEffect(() => {
    document.title = generatePageTitle("Adoption Centre");
  });

  return (
    <PageContent>
      <Section title="Adoption Centre" subtitle="Have a look at some of the most beautiful and playful pups just waiting for you to take them home with you!">
        <Adoptions />
      </Section>
    </PageContent>
  )
}

export default Adoption