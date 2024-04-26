import { useParams } from 'react-router-dom';
import { useTitle } from '../index';
const UserProfile = () => {
    const params = useParams();
    const username = params.username;
    useTitle(username);
    console.log(username);
    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
        </div>
    );
};


export default UserProfile;