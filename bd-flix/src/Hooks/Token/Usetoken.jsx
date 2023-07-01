import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');


    console.log(email, 'access')
    useEffect(() => {
        if (email) {
            fetch(`https://bd-flix-server-emonkumardas.vercel.app/jwt?email=${email}`)
                                .then(res => res.json())
                                .then(data => {
                                    if (data.ACCESS_TOKEN) {
                                        localStorage.setItem('accessToken', data.ACCESS_TOKEN);
                                        setToken(data.ACCESS_TOKEN);
                                    }
                                });
                        }
                    }, [email]);
                    return [token];
                }

                export default useToken;