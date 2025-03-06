export default async function Docs ({
    params,
}:{
    params:Promise<{slug:string[]}>;
}){
    const {slug}=await params;
    if(slug?.length === 2){
        return(
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        );
    }else if(slug?.length === 1){
        return <h1> Viewing docs for feature {slug[0]}</h1>;
    }
    return <h1>Docs home page</h1>;
}
//Catch all segment routes 
// [...slug]>> this would mean just viewing the docs page would not work only shows parms alone.
// [[...slug]] makes it optional so you can  view  docs alone which will return the last return statement or
// the other paths 