import { ImageCarousel } from "../components/ImageCarousel";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";



export function Home() {

  return (
    <>
    <div className="relative w-full mb-4">
      <img src="/ppt2.jpeg" alt="" className=" w-full h-96 object-cover rounded-b-lg" />
      <button className="absolute bg-blue-950 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out  hover:bg-blue-900 hover:scale-105 hover:shadow-xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    Commander
  </button>

      </div>
      <Section1 />
      <ImageCarousel />
      <Section2 />
    </>
  );
}
