import Cards from "./components/Cards"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-14" >
        <Hero />
        <Cards />
      </main>
    </>
  )
}
