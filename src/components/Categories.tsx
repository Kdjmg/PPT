type CategoriesProps={

    filteredMenu: (category?: string | undefined) => void
}

export const Categories: React.FC<CategoriesProps> =({filteredMenu})=>{


    return(
<>
<div className="flex justify-center ">

<button className="m-2 flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900" onClick={() => filteredMenu('Pates')}>Pâtes</button>
<button className="m-2 flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900" onClick={() => filteredMenu('Panini')}>Panini</button>
<button className="m-2 flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900" onClick={() => filteredMenu('Tacos')}>Tacos</button>


</div>

<div className="flex justify-center ">


<button className="m-2 flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900" onClick={() => filteredMenu('Texmex')}>TexMex</button>
<button className="m-2 flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900" onClick={() => filteredMenu('Boissons')}>Boissons</button>
<button className="m-2 flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900" onClick={() => filteredMenu('Dessert')}>Dessert</button>

</div>
</>
   
    
    )
}