type CategoriesProps={

    filteredMenu: (category?: string | undefined) => void
}

export const Categories: React.FC<CategoriesProps> =({filteredMenu})=>{


    return(

    <div className="flex justify-center ">

            <button className="m-2 hover:text-gray-300" onClick={() => filteredMenu('Pates')}>Pâtes</button>
            <button className="m-2 hover:text-gray-300" onClick={() => filteredMenu('panini')}>Panini</button>
            <button className="m-2 hover:text-gray-300" onClick={() => filteredMenu('Tacos')}>Tacos</button>
            <button className="m-2 hover:text-gray-300" onClick={() => filteredMenu('Texmex')}>TexMex</button>
            <button className="m-2 hover:text-gray-300" onClick={() => filteredMenu('Boissons')}>Dessert & Boissons</button>

        </div>
    
    )
}