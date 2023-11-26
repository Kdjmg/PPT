
import { useState } from "react";
import { Card } from "../components/Card";
import { Categories } from "../components/Categories";

type listmenu = {
    title: string;
    descript: string;
    img: string;
    price: string
    tag: string
  };
export function Menu(){
    
    const [filteredMenu, setFilteredMenu] = useState<listmenu[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('pates');

    

    const filterMenuByCategory = (category?: string) => {
        if (!category || category === selectedCategory) {
            setSelectedCategory(''); 
        } else {
            setSelectedCategory(category);
            const filteredItems = listmenu.filter(item => item.tag.toLowerCase().includes(category.toLowerCase()));
            setFilteredMenu(filteredItems);
        }
    };

    

    const listmenu: listmenu [] = [
        {
            title: "Sweet Curry",
            descript: "Description des tacos: ",
            img: "public/pates.png",
            price: "6€",
            tag: "pates"
        },
        {
            title: "Carbonara",
            descript: "Description des tacos: ",
            img: "public/pates.png",
            price:"6€",
            tag: "pates"
        },
        {
            title: "Saumon",
            descript: "Description des tacos: ",
            img: "public/pates.png",
            price:"6€",
            tag: "pates"
        },
        {
            title: "Sweety Thaï",
            descript: "Description des tacos: ",
            img: "public/pates.png",
            price:"6€",
            tag: "pates"
        },
        {
            title: "Forrestière",
            descript: "Description des tacos: ",
            img: "public/pates.png",
            price:"6€",
            tag: "pates"
        },
        {
            title: "3 fromages",
            descript: "Description des tacos: ",
            img: "public/pates.png",
            price:"6€",
            tag: "pates"
            },
            {
                title: "Tacos M",
                descript: "Une Viande aux choix",
                img: "public/tacos.png",
                price: "6€",
                tag: "tacos"
            },
            {
                title: "Tacos L",
                descript: "Deux viandes aux choix ",
                img: "public/tacos.png",
                price: "7€",
                tag: "tacos"
            },
            {
                title: "Tacos XL",
                descript: "Trois viandes aux choix",
                img: "public/tacos.png",
                price: "10€",
                tag: "tacos"
            },
            {
                title: "Tacos XXL",
                descript: "quatre viandes aux choix ",
                img: "public/tacos.png",
                price: "15€",
                tag: "tacos"
            },
            {
                title: "Panini Mexicanos",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "4€",
                tag: "panini"
            },
            {
                title: " Panini Fricadelle",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "4€",
                tag: "panini"
            },
            {
                title: "Panini Tenders",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "4€",
                tag: "panini"
            },
            {
                title: "Wrap",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "5€",
                tag: "panini"
            },
            {
                title: "Croque Monsieur",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3.50€",
                tag: "panini"
            },
            {
                title: "oignons Rings x4",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3.50€",
                tag: "texmex"
            },
            {
                title: "Mozzastick x4",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3.50€",
                tag: "texmex"
            },
            {
                title: "Camembert x4",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3.50€",
                tag: "texmex"
            },
            {
                title: "Jalapenos",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3.50€",
                tag: "texmex"
            },
            {
                title: "Tenders x5 + Boissons",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "6.50€",
                tag: "texmex"
            },
            {
                title: "Wings x5 + Boissons",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "6.50€",
                tag: "texmex"
            },
            {
                title: "Nuggets x10 + Boissons ",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "6.50€",
                tag: "texmex"
            },
            {
                title: "Bucket 1kg Tenders ou Wings",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "19€",
                tag: "texmex"
            },
            {
                title: "Bubble Tea'",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "4€",
                tag: "boissons"
            },
            {
                title: "Glace",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3€",
                tag: "boissons"
            },
            {
                title: "Gaufre",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "2€",
                tag: "boissons"
            },
            {
                title: "Cookies",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "2€",
                tag: "boissons"
            },
            {
                title: "Tiramisu",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3€",
                tag: "boissons"
            },
            {
                title: "Boissons 33cl aux choix ",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "1.50€",
                tag: "boissons"
            },
            {
                title: "Boissons 2L aux choix",
                descript: "quatre viandes aux choix ",
                img: "public/panini.png",
                price: "3€",
                tag: "boissons"
            },

        
      ];
    return <>
    <div className="mt-14 justify-center">
        <Categories filteredMenu={filterMenuByCategory} />
        
    </div>


    <div className='flex flex-wrap md:flex-row'>
        
    {(filteredMenu.length > 0 ? filteredMenu : listmenu.filter(menu => menu.tag.toLowerCase() === selectedCategory.toLowerCase())).map((menu, index) => (
                    <Card key={index} {...menu} />
   
      )
      )}

    </div>

    </>
}