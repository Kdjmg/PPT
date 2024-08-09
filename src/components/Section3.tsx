export const Section3: React.FC = () => {
    return ( <>
          <h2 className="flex justify-center uppercase text-3xl text-center mt-2 px-4">Où nous retrouvez ?</h2>
          <h1 className="flex justify-center font-bold uppercase text-blue-900 mt-4">ici où là mais surtout là bas !!</h1>

 <div className="flex justify-center items-center mt-6">
        <div className="h-px w-52 bg-blue-500 mr-2"></div>
        <img src="/ppt.png" className="h-full w-[42px]" alt="Logo PPT" />
        <div className="h-px w-52 bg-blue-500 ml-2"></div>
      </div>

<div className=" m-4 flex flex-col items-center md:flex-row md:justify-center">

<div className=" flex flex-col">
    <div className=" items-center m-2">

        <ul className="w-full justify-center rounded-xl overflow-hidden hover: shadow-lg  p-6 flex flex-col items-center">
            <li className="">Le PTT</li>
            <li>31 Rue Roger Salengro</li>
            <li> 59800 Lille</li>
            <li>Tel : 09 88 33 09 12</li>
        </ul>
    </div>
    <div className=" items-center m-2 ">

        <ul className="w-full justify-around rounded-xl overflow-hidden hover: shadow-lg  p-6 flex flex-col items-center">
            <li>Lundi: <span>18h - 23h</span> </li>
            <li>Mardi: <span>11h - 23h / 18h - 23h </span> </li>
            <li>Mercredi: <span>11h - 15h / 18h - 23h </span></li>
            <li>Jeudi: <span>11h - 15h / 18h - 23h </span> </li>
            <li>Vendredi: <span>18h - 23h</span> </li>
            <li>Samedi: <span>18h - 23h</span> </li>
            <li>Dimanche: <span>11h - 15h</span> </li>

        </ul>
    </div>


</div>

<div className=" m-2 flex items-center justify-center">
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8827396526194!2d3.1024042!3d50.6292951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d7e548f79079%3A0x8c4fa06479ce937b!2sLe%20PPT!5e0!3m2!1sfr!2sus!4v1722718312485!5m2!1sfr!2sus"
        width="600"
        height="450"
        className="border-0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
</div>
</div>

   
    </>);
}

