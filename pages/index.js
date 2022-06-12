import Terbaru from "./components/Terbaru";
import Headline from "./components/Headline";
import Frontend from "./components/Frontend";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/outline"

export default function Home() {
  return (
    <Frontend>
      <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
        <Headline />
        <Terbaru />
      </div>      
      <div className="md:flex my-4 bg-white rounded-md">
          <div className="md:w-[70%]">            
            {[...Array(3)].map((x, i) =>
            <div className="md:flex p-4 space-x-4" key={i}>
              <div className="md:w-[40%] relative">                
                <Image src="https://img.okezone.com/content/2022/06/11/57/2609818/6-langkah-mudah-login-facebook-lewat-hp-untuk-pemula-SihSXNhUEe.jpg" 
                  layout="responsive" className="rounded-md"
                  width={450} height={235}
                />
                <div className="absolute bottom-0 left-0 bg-red-700 text-white m-4 p-1 rounded text-xs tracking-wider">Wisata</div>
              </div>
              <div className="md:w-[60%] text-gray-700">
                <h2 className="font-bold text-2xl">Judulnya</h2>
                <div className="py-2 flex text-sm text-gray-500"><ClockIcon className="w-5 h-5" /> <span className="pl-2">5 hours ago</span></div>
                <p className="line-clamp-2">Non occaecat commodo aliquip officia incididunt consequat veniam ad aute deserunt cillum veniam. Irure ut mollit magna enim consequat occaecat tempor velit duis duis. Ut sint ex fugiat nostrud nostrud sunt. Ut esse id eu officia minim. Anim minim et occaecat ut duis in velit enim.
                </p>
              </div>
            </div>
            )}
          </div>
        <div className="w-[30%] p-4 bg-gray-200">
          <h2 className="font-bold text-2xl text-gray-700">Menarik</h2>
        </div>
      </div>
    </Frontend>      
  )
}
