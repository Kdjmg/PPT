
import { useState} from "react";
import { Card } from "../components/Card";
import { Categories } from "../components/Categories";
import Basket from "../components/Basket";


type listmenu = {
    title: string;
    descript: string;
    img: string;
    price: string;
    requiresMeatChoice?: boolean;
    requiredSauceChoice?: boolean;
    meatChoiceCount?: number;
    meatOptions?: string[];
    sauceOptions?: string[];
    tag: string;
    meatSelections?: string[] ;
    sauceSelections?: string[];
  };

 
export function Menu(){
    
    const [filteredMenu, setFilteredMenu] = useState<listmenu[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('Pates');
    const [cartItems, setCartItems] = useState<listmenu[]>([]);
    const removeFromCart = (index:number) =>{
        setCartItems(cartItems.filter((_, i) => i !== index));
    }
    const [isBasketOpen, setIsBasketOpen] = useState(false);
  
    const toggleBasket = () => {
      setIsBasketOpen(!isBasketOpen);
    };

    const filterMenuByCategory = (category?: string) => {
        if (!category || category === selectedCategory) {
            setSelectedCategory('Pates'); 
        } else {
            setSelectedCategory(category);
            const filteredItems = listmenu.filter(item => item.tag.toLowerCase().includes(category.toLowerCase()));
            setFilteredMenu(filteredItems);
        }
    };

    const addToCart = (item: listmenu, meatSelections: string[], sauceSelections: string[]) => {
        const newItem = { ...item, meatSelections, sauceSelections };
        setCartItems([...cartItems, newItem]);
      };

    const listmenu: listmenu [] = [
        {
            title: "Sweet Curry",
            descript: "Pates au poulet accompagné d'une douce sauce curry: ",
            img: "/pates.jpg",
            price: "6€",
            tag: "Pates"
        },
        {
            title: "Carbonara",
            descript: "Pates Carbonara gourmande sauce fromagère et lardons: ",
            img: "/pates.jpg",
            price:"6€",
            tag: "Pates"
        },
        {
            title: "Saumon",
            descript: "Pates au saumon ",
            img: "/pates.jpg",
            price:"6€",
            tag: "Pates"
        },
        {
            title: "Sweety Thaï",
            descript: "pates accompagne de ça sauce chili taï: ",
            img: "/pates.jpg",
            price:"6€",
            tag: "Pates"
        },
        {
            title: "Forrestière",
            descript: "Description des tacos: ",
            img: "/pates.jpg",
            price:"6€",
            tag: "Pates"
        },
        {
            title: "3 fromages",
            descript: "Pates aux trois fromages: ",
            img: "/pates.jpg",
            price:"6€",
            tag: "Pates"
            },
            {
                title: "Tacos M",
                descript: "Une Viande aux choix",
                img: "/tacos.png",
                price: "6€",
                requiresMeatChoice: true,
                requiredSauceChoice: true,
                meatChoiceCount:1,
                meatOptions: ["Poulet", "Boeuf", "Agneau"],
                sauceOptions: ["samourai", "ketchup", "mayonnaise"],
                tag: "Tacos"
            },
            {
                title: "Tacos L",
                descript: "Deux viandes aux choix ",
                img: "/tacos.png",
                price: "7€",
                requiresMeatChoice: true,
                requiredSauceChoice: true,
                meatChoiceCount:2,
                meatOptions: ["Poulet", "Boeuf", "Agneau"],
                sauceOptions: ["samourai", "ketchup", "mayonnaise"],
                tag: "Tacos"
            },
            {
                title: "Tacos XL",
                descript: "Trois viandes aux choix",
                img: "/tacos.png",
                price: "10€",
                requiresMeatChoice: true,
                requiredSauceChoice: true,
                meatChoiceCount:3,
                meatOptions: ["Poulet", "Boeuf", "Agneau"],
                sauceOptions: ["samourai", "ketchup", "mayonnaise"],
                tag: "Tacos"
            },
            {
                title: "Tacos XXL",
                descript: "quatre viandes aux choix ",
                img: "/tacos.png",
                price: "15€",
                requiresMeatChoice: true,
                requiredSauceChoice: true,
                meatChoiceCount:4,
                meatOptions: ["Poulet", "Boeuf", "Agneau"],
                sauceOptions: ["samourai", "ketchup", "mayonnaise"],
                tag: "Tacos"
            },
            {
                title: "Panini Mexicanos",
                descript: "quatre viandes aux choix ",
                img: "/panini.jpg",
                price: "4€",
                tag: "Panini"
            },
            {
                title: " Panini Fricadelle",
                descript: "quatre viandes aux choix ",
                img: "/panini.jpg",
                price: "4€",
                tag: "Panini"
            },
            {
                title: "Panini Tenders",
                descript: "quatre viandes aux choix ",
                img: "/panini.jpg",
                price: "4€",
                tag: "Panini"
            },
            {
                title: "Wrap",
                descript: "quatre viandes aux choix ",
                img: "/panini.png",
                price: "5€",
                tag: "Panini"
            },
            {
                title: "Croque Monsieur",
                descript: "quatre viandes aux choix ",
                img: "/panini.png",
                price: "3.50€",
                tag: "Panini"
            },
            {
                title: "oignons Rings x4",
                descript: "quatre viandes aux choix ",
                img: "/panini.png",
                price: "3.50€",
                tag: "Texmex"
            },
            {
                title: "Mozzastick x4",
                descript: "quatre viandes aux choix ",
                img: "/panini.png",
                price: "3.50€",
                tag: "Texmex"
            },
            {
                title: "Camembert x4",
                descript: "quatre viandes aux choix ",
                img: "/panini.png",
                price: "3.50€",
                tag: "Texmex"
            },
            {
                title: "Jalapenos",
                descript: "quatre viandes aux choix ",
                img: "/panini.png",
                price: "3.50€",
                tag: "Texmex"
            },
            {
                title: "Tenders x5 + Boissons",
                descript: "Cinq délicieux tenders accompagné d'une boisson ",
                img: "/tenders.jpg",
                price: "6.50€",
                tag: "Texmex"
            },
            {
                title: "Wings x5 + Boissons",
                descript: "Cinq délicieux wings accompagné d'une boisson ",
                img: "/panini.png",
                price: "6.50€",
                tag: "Texmex"
            },
            {
                title: "Nuggets x10 + Boissons ",
                descript: "Dix délicieux nuggets accompagné d'une boisson ",
                img: "/panini.png",
                price: "6.50€",
                tag: "Texmex"
            },
            {
                title: "Bucket 1kg Tenders ou Wings",
                descript: "Un bucket de 1 kg de tenders ou de wings ",
                img: "/tenders.jpg",
                price: "19€",
                tag: "Texmex"
            },
            {
                title: "Bubble Tea'",
                descript: "Un bubble tea a consommer sans modération",
                img: "/bubbletea.jpg",
                price: "4€",
                tag: "Boissons"
            },
            {
                title: "Glace",
                descript: "Choclat ou vanille dans tout les cas ça reste de la glace ",
                img: "/icecream.jpg",
                price: "3€",
                tag: "Dessert"
            },
            {
                title: "Gaufre",
                descript: "délicieuse gaufre liégoise ",
                img: "/waffle.jpg",
                price: "2€",
                tag: "Dessert"
            },
            {
                title: "Cookies",
                descript: "Un petit Cookies ",
                img: "/cookies.jpg",  
                price: "2€",
                tag: "Dessert"
            },
            {
                title: "Tiramisu",
                descript: "Ici c'est pas le tiramisu traditionel faite place au tiramisu galette breton kinder bueno ou encore oréo ",
                img: "/tiramisu.jpg",
                price: "3€",
                tag: "Dessert"
            },
            {
                title: "Boissons 33cl aux choix ",
                descript: "Un peu de gazouz un peut de limonade  ",
                img: "/boissons.jpg",
                price: "1.50€",
                tag: "Boissons"
            },
            {
                title: "Boissons 2L aux choix",
                descript: "là même chose pour les 33cl mais en bouteille ",
                img: "/boissons.jpg",
                price: "3€",
                tag: "Boissons"
            },

        
      ];
    return <>
    <div className="mt-4">
        <Categories filteredMenu={filterMenuByCategory} />
        
    </div>


    <div className='flex flex-wrap justify-around md:flex-row'>
        
    {(filteredMenu.length > 0 ? filteredMenu : listmenu.filter(menu => menu.tag.toLowerCase() === selectedCategory.toLowerCase())).map((menu, index) => {
  const newItem = { ...menu, meatSelections: [], sauceSelections: [] }; // Create a new item with empty meatSelections and sauceSelections arrays
  return (
    <Card
      key={index}
      item={newItem}
      addToCart={(meatSelections: string[], sauceSelections: string[]) => {
        addToCart(newItem, meatSelections, sauceSelections);
      }}
    />
  );
})}

    </div>
    <Basket isBasketOpen={isBasketOpen} toggleBasket={toggleBasket} cartItems={cartItems} removeFromCart={removeFromCart}/>


    
    </>
}



