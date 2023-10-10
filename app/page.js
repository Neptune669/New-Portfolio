import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Technology from "./components/Technology"
import Solutions from "./components/Solutions"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />

      <Hero />
      <main className="flex flex-col mx-auto max-w-7xl gap-14" >
        <Cards />
        <Technology />
        <Solutions />
      </main>
    </>
  )
}
