import { useState } from "react";

export default function FormBasics() {

    const[name,setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        alert(`data submitted successfully ${name}`);
        setName('');
        setEmail('');
    }

    const handleName = (event) => {
        setName(event.target.value);      
    }


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name : 
                    <input 
                        type="text"
                        value={name}
                        onChange={handleName}
                    />
                </label>
                <br/>
                <label>
                    email : 
                    <input 
                        type="email"
                        value={email}
                        onChange={handleEmail}
                    />
                </label>
                <br/>
                <button type="submit">submit</button>
            </form>
        </div>
    );

}