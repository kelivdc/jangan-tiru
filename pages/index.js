import Header from "./components/Header";
import Terbaru from "./components/Terbaru";
import Headline from "./components/Headline";

export default function Home() {
  return (
    <>
    <div className="md:container">
        <Header />
    </div>
    <div className="bg-gray-100">
      <div className="md:container px-3 md:px-0 py-4 py-8">
        <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
          <Headline />
          <Terbaru />          
       </div>
      </div>
    </div>
    </>   
  )
}
