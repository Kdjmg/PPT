type ParamsProps = {
    title : string,
    descript: string,
    img: string
};


export const Section: React.FC<ParamsProps> = ({ title, descript,  }) => {
    return (

     <>
    {
    <section className=" w-[100%] flex flex-col md:flex-row md:w-[50%]">
        <div className="w-[100%] h-[300px] snap-y flex flex-col m-2 p-8">
            <h1 className="flex text-3xl mb-2 font-bold">{title}</h1>
            <p className="text-xl  overflow-auto">{descript}</p>

        </div>
    </section> }
    </>
    )
}