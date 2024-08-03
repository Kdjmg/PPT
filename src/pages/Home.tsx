import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";



export function Home() {

  return (
    <>
      <Section1 />
      <div className="w-full mb-4 mt-4 ">
      <img src="../public/ppt2.jpeg" alt="" className=" w-full h-96 object-cover rounded-lg" />

      </div>
      <Section2 />
      <Section3 />
    </>
  );
}
