import React, { useState } from 'react'

function Login(props) {

    
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    const login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        if (userDetails.email && userDetails.password) {
            //programatical navigate
         console.log('props', props);
         props.history.push('/home')
        }else
        {
            console.error('not valid')
        }

    }
    const handelEmailChange = (event) => {
        console.log(event);
        console.log('name :', event.target.name);
        console.log('value :', event.target.value);
        //1. take the copy of the state
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy.email = event.target.value
        setuserDetails(userDetailsCopy)
    }
    const handelPasswordChange = (event) => {
        //1.take a copy of the state
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy.password = event.target.value
        setuserDetails(userDetailsCopy)
    }

    // const handelChange = (event) => {
    //     console.log(event.taget.name);
    //     const userDetailsCopy = {...userDetails}
    //     userDetailsCopy[event.taget.name] = event.taget.value
    //     setuserDetails(userDetailsCopy)
    // }
    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input type="email" name='email' placeholder='enter email'

                        onChange={(event) => {
                            handelEmailChange(event)
                        }}
                        value={userDetails.email}
                    />
                </div>
                <div>
                    <input type="password" name='password' placeholder='enter password'

                        onChange={(event) => {
                            handelPasswordChange(event)
                        }}
                        value={userDetails.password}
                    />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login
