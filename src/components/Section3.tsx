import { useEffect, useState } from "react";

export const Section3: React.FC = () => {
  const openingHours = {
    Lundi: '11h30 - 14h30 / 18h - 23h',
    Mardi: '11h30 - 14h30 / 18h - 23h',
    Mercredi: '11h30 - 14h30 / 18h - 23h',
    Jeudi: '11h30 - 14h30 / 18h - 23h',
    Vendredi: '18h - 23h',
    Samedi: '18h - 23h',
    Dimanche: '18h - 23h',
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const parseTime = (time: string) => {
    const [hour, minute] = time.split('h').map(Number);
    const now = new Date();
    now.setHours(hour, minute, 0, 0);
    return now.getTime();
  };

  const isOpen = (hours: string) => {
    if (hours === 'Fermé') return 'closed';

    const [dayPart, nightPart] = hours.split(' / ');

    const checkTimeRange = (timeRange: string) => {
      const [start, end] = timeRange.split(' - ').map(parseTime);
      const now = currentTime.getTime();
      return now >= start && now <= end;
    };

    
    if (checkTimeRange(dayPart) || (nightPart && checkTimeRange(nightPart))) {
      return 'open';
    }

    
    const [firstStart] = dayPart.split(' - ').map(parseTime);
    return currentTime.getTime() < firstStart ? 'before_open' : 'closed';
  };

  
  const today = currentTime.toLocaleDateString('fr-FR', { weekday: 'long' }).toUpperCase();

  return (
    <>
      <h2 className="flex justify-center uppercase text-3xl text-center mt-2 px-4">
        Où nous retrouver et heure d'ouvertures ?
      </h2>
      <h1 className="flex justify-center font-bold uppercase text-blue-900 mt-4">
        Ici ou là, mais surtout là-bas !!
      </h1>


      <div className="flex justify-center items-center mt-6">
        <div className="h-px w-52 bg-blue-500 mr-2"></div>
        <img src="/ppt.png" className="h-full w-[42px]" alt="Logo PPT" />
        <div className="h-px w-52 bg-blue-500 ml-2"></div>
      </div>

      
      <div className="m-4 flex flex-col items-center md:flex-row md:justify-center">
      <div className=" flex flex-col items-center">

      <div className="  w-[100%] items-center m-2">

<ul className="w-full justify-center rounded-xl overflow-hidden hover: shadow-lg  p-6 flex flex-col items-center">
    <li className=" text-blue-500">Le PTT</li>
    <li><a
    href="https://www.google.com/maps/search/?api=1&query=31+Rue+Roger+Salengro%2C+59800+Lille"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    31 Rue Roger Salengro, 59800 Lille
  </a></li>
    <li>
      <a
    href="tel:0988330912"
    className="text-blue-500 hover:underline"
  >
    Tel : 09 88 33 09 12
  </a>
  </li>
</ul>
</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full max-w-xl mx-auto my-4 p-4">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(openingHours).map(([day, hours]) => {
                let status = 'closed';

                if (day.toUpperCase() === today) {
                  status = isOpen(hours);
                } else if (hours !== 'Fermé') {
                  status = 'before_open';
                }

                console.log(`Day: ${day}, Status: ${status}, Hours: ${hours}`);

                return (
                  <div
  key={day}
  className={`p-4 rounded-md border border-gray-300 shadow-md flex flex-col items-center justify-center w-[155px] h-[6rem] ${
    status === 'open'
      ? 'bg-green-100 text-green-800'
      : status === 'before_open'
      ? 'bg-gray-100 text-gray-800'
      : 'bg-red-100 text-red-800'
  }`}
>
  <div className="font-semibold text-lg text-center truncate">{day}</div>
  <div className="text-center text-xs truncate">{hours}</div>
</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>



        <div className="w-[25rem] m-2 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8827396526194!2d3.1024042!3d50.6292951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d7e548f79079%3A0x8c4fa06479ce937b!2sLe%20PPT!5e0!3m2!1sfr!2sus!4v1722718312485!5m2!1sfr!2sus"
            width="416"
            height="392"
            className="border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};
