import { useEffect } from "react";
import { generatePageTitle } from "../../Utilities";
import { PageContent, Section, Carousel } from "../../Components/Layout";
import { Adoptions, Tips, Services, Join, Products } from "./";

function Home() {

  useEffect(() => {
    document.title = generatePageTitle("Home");
  });

  return (

    <PageContent>
      <Carousel />

      <Section title="Your Furry Friend's Favourites 🥩" subtitle="Your little one will love our range of high quality treats and toys at Jack's">
        <Products />
      </Section>

      <Section title="Take me home too? 🦴" subtitle="Sherlock Rescue have a range of beautiful pawed creatures waiting for their forever home">
        <Adoptions />
      </Section>

      <Section title="Did you know? 🙋‍♀️" subtitle="Here are some of the top tips to get your new pup settled in your home" >
        <Tips />
      </Section>

      <Section className="bg-jack/30 -m-4 -my-4 flex justify-center align-middle p-8 text-center">
        <Join />
      </Section>

      <Section title="What we do ✏️">
        <Services />
      </Section>
    </PageContent>
  )
}

export default Home