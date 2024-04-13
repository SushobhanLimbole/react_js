const rend = {
    ren: true
}

function Button() {
    return (
        <button style={{ padding: 10, }}>Click me</button>
    );
}

export default function Profile() {
    if (rend.ren) {
        return (
            <>
                <h1>This is a Button</h1>
                <Button />
            </>
        );
    } else {
        return (
            <h1>Hello</h1>
        );
    }
}