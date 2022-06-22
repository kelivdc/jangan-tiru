import React from "react"
import { 
  HomeIcon, 
  DuplicateIcon, 
  DocumentIcon,
  PhotographIcon,
  ChartBarIcon,
  ColorSwatchIcon,
  CogIcon,
  CollectionIcon
} from "@heroicons/react/solid"

function Leftnav() {
  return (
    <div className="px-4"> 
      <div className="h-[4.374rem] border-b border-gray-400">
          <div className="text-white text-center text-2xl p-4">C M S</div>      
          <div className="text-gray-200 antialiased text-sm py-4 border-b border-gray-400">
              <div className="flex">
                <div className="pr-2"><HomeIcon className="w-5 h-5"/></div>
                <div>Dashboard</div>
              </div>               
          </div>  
          <div className="pt-4 text-gray-400 uppercase text-sm">Content</div>
          <div className="text-gray-200 antialiased text-sm py-4 border-b border-gray-400 grid grid-rows-1 gap-y-4">
            <div className="flex">
                <div className="pr-2"><CollectionIcon className="w-5 h-5"/></div>
                <div>Carousel</div>
            </div> 
            <div className="flex">
                <div className="pr-2"><DuplicateIcon className="w-5 h-5"/></div>
                <div>Categories</div>
            </div>  
            <div className="flex">
              <div className="pr-2"><DocumentIcon className="w-5 h-5"/></div>
              <div>Posts</div>
            </div>  
            <div className="flex">
              <div className="pr-2"><PhotographIcon className="w-5 h-5"/></div>
              <div>Galeries</div>
            </div> 
            <div className="flex">
              <div className="pr-2"><ChartBarIcon className="w-5 h-5"/></div>
              <div>Trends</div>
            </div>
            <div className="flex">
              <div className="pr-2"><ColorSwatchIcon className="w-5 h-5"/></div>
              <div>Choices</div>
            </div>
          </div>       
          <div className="text-gray-200 antialiased text-sm py-4 border-b border-gray-400">
              <div className="flex">
                <div className="pr-2"><CogIcon className="w-5 h-5"/></div>
                <div>Settings</div>
              </div>               
          </div>   
      </div>
    </div>
  )
}

export default Leftnav