import "./HomePage.css";
import Hero from "../components/Hero/Hero.js";
import Card from "../components/Cards/OfferingsCard/OfferingsCard.js";
import CommunityCard from "../components/Cards/Community Card/CommunityCard.js";
import IntroCard from "../components/Cards/IntroCard/IntroCard.js";
import JourneyCard from "../components/Cards/JourneyCard/JourneyCard.js";
import FooterCard from "../components/Cards/FooterCard/FooterCard.js";

function HomePage() {
  return (
    <div>
      {/*<NavBar></NavBar>*/}
      <main className="container" id="home">
        <Hero></Hero>
        <IntroCard></IntroCard>
        <Card></Card>
        <CommunityCard></CommunityCard>
        <JourneyCard></JourneyCard>
        <FooterCard></FooterCard>
      </main>
    </div>
  );
}

export default HomePage;
