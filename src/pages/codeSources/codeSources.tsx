import { AllCodeSources } from "./allCodeSources"

export const CodeSources = () =>{
    return(
        <div>
            <h1 className="text-3xl font-medium">Kod manbalari</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {new Array(12).fill(4).map((_,index)=>(
                <AllCodeSources key={index} />
            ))}
        </div>
        </div>
    )
}