import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./components/LogoSection.jsx";


const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
        </>
    )
}
export default App
