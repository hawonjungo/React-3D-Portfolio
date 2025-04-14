import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";


const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
        </>
    )
}
export default App
