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

    return 'closed';
  };

  const today = currentTime.toLocaleDateString('fr-FR', { weekday: 'long' }).toUpperCase();

  return (
    <>
      <h2 className="flex justify-center uppercase text-3xl text-center mt-2 px-4">
         heures d'ouverture et contact
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
        <div className="flex flex-col w[25rem] h-[40rem] items-center">
          <div className="w-[100%] items-center m-2">
            <ul className="w-full justify-center rounded-xl overflow-hidden shadow-lg p-6 flex flex-col items-center">
              <li className="text-blue-500">Le PTT</li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=31+Rue+Roger+Salengro%2C+59800+Lille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  31 Rue Roger Salengro, 59800 Lille
                </a>
              </li>
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

          <div className=" flex flex-col md:flex-row">
            <div className="w-full max-w-xl mx-auto my-4 p-4">
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(openingHours).map(([day, hours]) => {
                  const isToday = day.toUpperCase() === today;
                  let status = 'before_open';

                  if (isToday) {
                    status = isOpen(hours);
                  }

                  return (
                    <div
                      key={day}
                      className={`p-4 rounded-md border border-gray-300 shadow-md flex flex-col items-center justify-center w-[155px] h-[6rem] ${
                        isToday
                          ? status === 'open'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                          : hours === 'Fermé'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
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

        {/* Formulaire de Contact */}
        <div className="m-4  flex flex-col w-[25rem] h-[40rem] items-center justify-between">
  <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
  <form
    action="https://formspree.io/f/your-form-id"
    method="POST"
    className="w-full relative bottom-[230px]"
  >
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Adresse Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-950 focus:border-blue-950 sm:text-sm"
        placeholder="Votre adresse email"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-950 focus:border-blue-950 sm:text-sm"
        placeholder="Votre message"
      />
    </div>
    <button
      type="submit"
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-950 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Envoyer
    </button>
  </form>
</div>

      </div>

      
    </>
  );
};
