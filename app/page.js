import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Technology from "./components/Technology"
import Solutions from "./components/Solutions"
import NavBar from "./components/NavBar"
import LogoSlider from "./components/LogoSlider"
import Software from "./components/Software"
export default function Home() {
  return (
    <>

      <Hero />
      <main className="flex flex-col gap-12 ">
        <Cards />
        <Technology />
        <Solutions />
        <Software />
        <LogoSlider />
      </main>


    </>
  )
}
