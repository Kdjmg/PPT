import { Section } from "../components/Section";


type SectionProps = {
  title: string;
  descript: string;
  img: string;
};

export function Home() {
  const sectionsData: SectionProps[] = [
    {
      title: "Nos pâtes",
      descript: "Plongez dans une expérience gustative inégalée avec nos délicieuses pâtes fraîches. Préparées avec soin et une sélection des meilleurs ingrédients, nos pâtes sont l'incarnation parfaite du goût authentique et de la fraîcheur. Chaque bouchée vous transporte dans un voyage culinaire exaltant, vous offrant une explosion de saveurs et une texture parfaite. Que ce soit nos pâtes Carbonara crémeuses, nos pâtes au Saumon délicatement assaisonnées ou nos pâtes Forrestière riches en saveurs, chaque plat est une symphonie pour vos papilles. Découvrez nos pâtes et laissez-vous emporter par un festin divin.",
      img: "public/pates.png",
    },
    {
      title: "Nos paninis",
      descript: "Amateurs de saveurs exquises ! Nous sommes ravis de vous présenter nos tout nouveaux panini qui vont révolutionner votre expérience gustative. Imaginez-vous déguster des créations incroyables enveloppées dans du pain moelleux et doré à la perfection. Nos panini Mexicanos épicés, nos panini Fricadelle savoureux ou nos panini Tenders croustillants sont des chefs-d'œuvre gastronomiques à ne pas manquer. Chaque bouchée est une fusion de textures et de saveurs qui éveillera vos sens. Osez l'originalité, vivez une expérience délicieusement différente avec nos panini !",
      img: "public/panini.png",
    },
    {
      title: "Nos tacos",
      descript: "Amateurs de cuisine mexicaine authentique ? Cassez vous de là et faite place au Tacos bien frenchi, Venez Découvrir nos tacos, une explosion de saveurs et de couleurs pour vos papilles. Nos tacos sont un festival de sensations, mêlant des viandes savoureuses, des légumes frais, des sauces épicées et des fromages fondants. Que vous choisissiez nos tacos M avec une viande au choix, nos tacos XL avec trois viandes différentes ou nos tacos XXL avec une variété exquise de quatre viandes, chaque bouchée est une fête pour vos sens. Plongez dans un monde de délices et de saveurs avec nos tacos, pour une expérience culinaire incomparable.",
      img: "public/tacos.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap center">
        <section>
          <h1 className="flex justify-center text-xl font-bold">
            Le PPT c'est quoi ?
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            provident reprehenderit quis laborum eum accusantium minima eos
            repellendus cum amet?
          </p>
        </section>

        {sectionsData.map((section, index) => (
        <Section key={index} {...section}/>
        
      )
      )}
      </div>


    </>
  );
}
