import Nest from "./nest";

export default function Test(props) {
    console.log('Test component called');
    return (
        <>
            <h1>{props.name}</h1>
            <Nest name={props.name}/>
        </>
    );
}

