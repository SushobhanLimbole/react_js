export default function Nest(props) {
    console.log('Nest component called');
    return (
        <>
            <h1>{props.name}</h1>
        </>
    );
}