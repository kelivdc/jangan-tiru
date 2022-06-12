import Header from "../components/Header";
import Footer from "./Footer";

export default function Home({children}) {
  return (
    <>
      <div className="md:container">
        <Header />
      </div>
      <div className="bg-gray-100">
        <div className="md:container px-3 md:px-0 py-4 py-8">
        <main className="">
            {children}   
        </main>
        </div>
      </div>
      <Footer />      
    </>   
  )
}
