import Header from "../components/Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Home({children}) {
  return (
    <>       
      <div className="md:container">
        <Header />
      </div>
      <div className="bg-gray-100">
        <div className="md:container py-4 md:py-8">
          {children}   
        </div>
      </div>
      <Footer />      
    </>   
  )
}
