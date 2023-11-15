import { Card } from "../components/Card";
import { Categories } from "../components/Categories";

export function Menu(){

    return <>
    <div className="justify-center">
        <Categories/>
    </div>

    <div className='flex flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
}