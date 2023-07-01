import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../Components/Context/AuthContext';

const ConnectedUser = () => {
    const { user } = useContext(userContext);
    const [dbuser, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://golden-glimmers-server-emonkumardas.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(result => {
                setAllUsers(result)
                setLoading(false)
            });
    }, [])

    return [dbuser, loading];
};

export default ConnectedUser;