export const setAuthToken = user => {
    const currentUser = {

        email: user.email,


        email: user?.email,
    }

    //save user in db & get token
    fetch(`https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/user/${user?.email}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentUser),
        })
        .then(res => res.json())
        .then(data => {





            //save token in localstorage
            localStorage.setItem('aircnc-token', data.token)
        })
}