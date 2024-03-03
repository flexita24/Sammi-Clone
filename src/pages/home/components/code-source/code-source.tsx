import { Link } from "react-router-dom"
import { Card } from "./components"



export const CodeSourse=()=>{
    return (
        <section className="mt-6">
            <div className="flex space-x-2 group items-center">
                <Link to="/source-codes" className="text-2xl font-medium">Kod manbalari</Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
                {new Array(3).fill(3).map((_,index)=>(
                    <Card key={index} />
                ))}
            </div>
        </section>
    )
}