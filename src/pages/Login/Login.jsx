

// import Lottie from 'lottie-react';


// import React, { useContext, useEffect,  useState } from 'react';
// import registerLottieData from '../../assets/Lottie/Animation - 1737469739842.json';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import SocialLogin from '../../components/SocialLogin/SocialLogin';

// const Login = () => {
  
//     const [disabled,seDisabled]= useState(true);

//    const {signIn} = useContext(AuthContext);
//    const navigate =useNavigate();
//    const location =useLocation();
//    const from = location.state?.from?.pathname || "/";
//     useEffect(()=>{
//         loadCaptchaEnginge(6);
//     },[])
 
//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
      
       
      
//         signIn(email, password)
//           .then((result) => {
//             const user = result.user;
//             console.log(user);
      
//             // Show SweetAlert for successful login
//             Swal.fire({
//               title: 'User Login Successful!',
//               icon: 'success',
//               showClass: {
//                 popup: 'animate__animated animate__fadeInDown',
//               },
//               hideClass: {
//                 popup: 'animate__animated animate__fadeOutUp',
//               },
//             });
      
//             // Navigate to the intended page
//             navigate(from, { replace: true }); // Fix: Use `from` instead of `form`
//           })
//           .catch((error) => {
          
      
//             // Show SweetAlert for error
//             Swal.fire({
//               title: 'Login Failed',
//               text: error.message,
//               icon: 'error',
//               confirmButtonText: 'Try Again',
//             });
//           });
//       };
      
//     const handleValidateCaptcha = (e) =>{
//       const user_captcha_value = e.target.value;
//       if(validateCaptcha(user_captcha_value)){
//         seDisabled(false);
//       }else{
//         seDisabled(true);
//       }
//     }
//     return (
//         <div className="hero  min-h-screen card bg-base-100 shadow-2xl card-body ">
         
//         <div className="hero-content flex-col md:flex-row-reverse">
       
//           <div className="text-center md:w-1/2 lg:text-left">
           
//            <Lottie animationData={registerLottieData}></Lottie>
//           </div>
//           <div className=" md:w-1/2 max-w-sm  ">
//             <form onSubmit={handleLogin} className="">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" name='email' placeholder="email" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" name='password' placeholder="password" className="input input-bordered" required />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                  <LoadCanvasTemplate></LoadCanvasTemplate>
//                 </label>
//                 <input onBlur={handleValidateCaptcha} type="text"  name='captcha' placeholder="type the text above" className="input input-bordered" required />
//                 <button  className='btn btn-outline btn-xs mt-3'>Validate</button>
             
            
//               </div>
//               <div className="form-control mt-6">
              
//                 <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
//               </div>
//             </form>
//             <p className='py-4'><small>New here ? <Link to ="/signup">Create an account</Link></small></p>
//             <SocialLogin></SocialLogin>
//           </div>
//         </div>
       
//       </div>
//     );
// };

// export default Login;

import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState, useRef } from 'react';
import registerLottieData from '../../assets/Lottie/Animation - 1737469739842.json';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                Swal.fire({
                    title: 'User Login Successful!',
                    icon: 'success',
                    showClass: { popup: 'animate__animated animate__fadeInDown' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' },
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Login Failed',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            });
    };

    const handleValidateCaptcha = (e) => {
        if (validateCaptcha(e.target.value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    const handleAutoFill = (email, password) => {
        Swal.fire({
            title: 'Please fill up the Recaptcha For Successful Login',
            icon: 'success',
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' },
        });
        if (emailRef.current && passwordRef.current) {
            emailRef.current.value = email;
            passwordRef.current.value = password;
            setDisabled(false);
        }
    };

    return (
        <div className="hero min-h-screen card bg-base-100 shadow-2xl card-body flex flex-col items-center">
            <div className="hero-content flex-col md:flex-row-reverse w-full max-w-4xl">
                <div className="text-center md:w-1/2 lg:text-left">
                    <Lottie animationData={registerLottieData} />
                </div>
                <div className="md:w-1/2 max-w-sm">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input ref={passwordRef} type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label"><a href="#" className="label-text-alt link link-hover">Forgot password?</a></label>
                        </div>
                        <div className="form-control">
                            <label className="label"><LoadCanvasTemplate /></label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" required />
                            <button className="btn btn-outline btn-xs mt-3">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="py-4 text-3xl">
                        <small>New here? <Link to="/signup">Create an account</Link></small>
                    </p>
                    <SocialLogin />
                </div>
            </div>

            {/* Credentials Section */}
            <div className="w-full max-w-2xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl transition text-center">
                    <h3 className="text-xl font-semibold">Admin Credentials</h3>
                    <p><strong>Email:</strong> saddam1@gmail.com</p>
                    <p><strong>Password:</strong> sA@1234</p>
                    <button onClick={() => handleAutoFill("saddam1@gmail.com", "sA@1234")} className="btn btn-outline btn-xs mt-3">Use Admin Login</button>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl transition text-center">
                    <h3 className="text-xl font-semibold">Tour Guide Credentials</h3>
                    <p><strong>Email:</strong> easin1@gmail.com</p>
                    <p><strong>Password:</strong> Ea@1234</p>
                    <button onClick={() => handleAutoFill("easin1@gmail.com", "Ea@1234")} className="btn btn-outline btn-xs mt-3">Use Tour Guide Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
