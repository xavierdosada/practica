import { useContext } from "react";
import { userContext } from "../context/userContext";
import { useEffect } from "react";
import axios from "axios"


const Profile = () => {
    // const {user} = useContext(userContext);
    useEffect(() => {
        axios("http://localhost:8000/user/data/63ec2a7fba9af88bd3d8ce4c", {withCredentials: true}).then((res) => {
            console.log(res);
        })
    },[]) 
    return <div>
        {/* <div>{user.name + " " + user.lastName}</div> */}
    </div>
}

export default Profile;