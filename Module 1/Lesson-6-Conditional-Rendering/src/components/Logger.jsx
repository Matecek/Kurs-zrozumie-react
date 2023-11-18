export function Logger(props){
    const date = new Date();
    console.log(`Komponenet stworzony o: ${date.getHours()}:${date.getMinutes()}`);
    return <>{props.children}</>
}