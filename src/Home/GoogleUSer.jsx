import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const GoogleUser = () => {
    const {GoogleUser} = useContext(AuthContext);
    console.log(GoogleUser);
    return (
        <div>
            <h1>{GoogleUser.displayName}</h1>
        </div>
    );
};

export default GoogleUser;