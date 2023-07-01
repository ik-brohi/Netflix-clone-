import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Authprovider';
import { toast } from 'react-toastify';
import useTitle from '../../../../Hooks/UseTitle/UseTitle';
import jugle from '../../../../images/jugle.jpg';

const Login = () => {
  const [error, setError] = useState('')
  const [loading, setloading] = useState(false)
  const [deviceId, setDeviceId] = useState("");
  useTitle('Login')

  const { signIn, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const form = location?.state?.from?.pathname || '/';

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setDeviceId(data.ip);
      });
  }, []);



  const handlelogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setloading(true)
    signIn(email, password).then(result => {
      form.reset();
      setError('')
      // --------------------------------------------------
      const LoggedEmail = result._tokenResponse.email;
      fetch(`https://bd-flix-server-emonkumardas.vercel.app/check-user?email=${LoggedEmail}&&deviceId=${deviceId}`)
        .then(res => res.json())
        .then(result => {
          console.log(result.userExists)
          if (!result.userExists) {
            logout()
            toast("You can not login from multiple devices. One email per device")
            setloading(false)
              .then(() => {
                window.location.replace('/signup')
              }).catch(error => console.error(error))
          }
          else {
            getUserToken(email)
            navigate(form, { replace: true })
            setloading(false)
          }
        })
      // -----------------------------------------------------

    }).catch(error => {
      console.log(error)
      setError(error.message)
      if (error === 'Firebase: Error (auth/user-not-found).') {
        toast.error('WRONG EMAIL')
      }
      else if (error === 'Firebase: Error (auth/wrong-password).') {
        toast.error('WRONG  Password')
      }
    })

  }
  const { providerLogin, Resetpass } = useContext(AuthContext)

  const reset = () => {
    Resetpass()
  }

  const googleProvider = new GoogleAuthProvider();

  const handlegoogle = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result?.user;
        saveUser(user?.displayName, user?.photoURL, user?.email)
        navigate('/')
      })
      .catch(error => console.error(error))
  }

  const saveUser = (name, photoURL, email) => {
    const user = { name, photoURL, email };
    fetch(`https://bd-flix-server-emonkumardas.vercel.app/allUsers/${email}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        getUserToken(email)
      })
  }

  const getUserToken = email => {
    console.log(email, 'getuser')
    fetch(`https://bd-flix-server-emonkumardas.vercel.app/jwt?email=${email}`)
      .then(res => res.json())
      .then(data => {
        if (data.ACCESS_TOKEN) {
          localStorage.setItem('accessToken', data.ACCESS_TOKEN);
          navigate('/')
        }
      });
  }

  return (
    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${jugle})` }}>
      <div className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse ">
        <div className="hidden lg:block w-1/2 h-full bg-black opacity-25"></div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <form  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}  onSubmit={handlelogin} className="card-body  p-12 rounded-md bg-opacity-10 sticky top-0 z-10 shadow  backdrop-filter backdrop-blur-sm ">
            <h2 className="text-3xl font-bold mb-6">Login to BDFLIX</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name="email" placeholder="email" className="input input-bordered bg-transparent border-2 border-green-400 focus:outline-none focus:border-green-600" />
            </div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered border-2 bg-transparent border-green-400 focus:outline-none focus:border-green-600" />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn bg-transparent text-white hover:bg-green-800 focus:outline-none" value={loading ? "loading..." : 'Login'} />
            </div>
            <p className='text-center mt-6 text-sm'>
              New to BDFLIX? <Link className="link-hover text-green-600 font-bold" to='/signup'>Sign Up</Link>
            </p>
            <div className="form-control mt-6">
              <input onClick={handlegoogle} type="submit" className="btn bg-transparent text-white hover:bg-green-800 focus:outline-none" value="🌐 Google Login" />
            </div>
            <div>
              {/* <h1 className='text-red-400 font-bold'>{error}</h1> */}
              {/* Firebase: Error (auth/email-already-in-use) */}
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;