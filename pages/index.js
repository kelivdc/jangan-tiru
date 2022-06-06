import Terbaru from "./components/Terbaru";
import Headline from "./components/Headline";
import Frontend from "./components/Frontend";

export default function Home() {
  return (
    <Frontend>
      <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
        <Headline />
        <Terbaru />
      </div>
      <div className="md:flex my-4 bg-white rounded-md">
        <div>
          Kiri
        </div>
        <div>Kanan</div>
      </div>
    </Frontend>      
  )
}
