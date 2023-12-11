import { useState } from "react";
import ConnectForm from "./Connexion.styled";
import axios from "axios";

    const Connexion = () => {
    const ConnectFormData = {
        username: "",
        password: "",
    };

    const [formData, setFormData] = useState(ConnectFormData);

    const { username, password } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/demo/connect', formData);

            console.log("Username : ", formData.username);

            console.log("Password : ", formData.password);

            // Assuming the server sends back a JWT token in the response
            const token = response.data.token;

            // Store the token in localStorage or a secure storage mechanism
            localStorage.setItem('jwtToken', token);

            // TODO: Redirect to the authenticated route or update app state accordingly
            } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            // TODO: Handle authentication failure, show error message, etc.
            }

        // Clear the password field in the state for security
            setFormData((prevState) => ({
                ...prevState,
                password: "",
            }));
    };

    return (
        <ConnectForm onSubmit={onSubmit}>
        <label className='SubLabel' htmlFor="username">Username :</label>
        <input
            className="CoInput"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
        />
        <br />
        <label className='SubLabel' htmlFor="password">Password :</label>
        <input
                className="CoInput"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
            />
            <br />

            <button className="connect" type="submit">
                Envoyer
            </button>
            <br />
        </ConnectForm>
    );
};

export default Connexion;
