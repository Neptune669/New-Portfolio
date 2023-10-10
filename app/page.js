import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Technology from "./components/Technology"

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-14" >
        <Hero />
        <Cards />
        <Technology />

      </main>
    </>
  )
}
