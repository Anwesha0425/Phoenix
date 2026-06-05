import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { BsArrowRightCircle } from "react-icons/bs";
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Head from 'next/head';

import { db, auth } from '../../firebaseclient';

const SignupForm = ({ theme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [codeforcesId, setCodeforcesId] = useState('');
  const [leetcodeId, setLeetcodeId] = useState('');
  
  const [errormessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const router = useRouter();

  const App = () => {
    setTimeout(() => router.push('/'), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password || !confirmpassword) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (password !== confirmpassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
      const user = userCredential.user;

      await set(ref(db, 'users/' + user.uid), {
        name: trimmedName,
        email: trimmedEmail,
        codeforcesId: codeforcesId.trim(),
        leetcodeId: leetcodeId.trim(),
      });

      setName('');
      setEmail('');
      setPassword('');
      setConfirmpassword('');
      setCodeforcesId('');
      setLeetcodeId('');

      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success('Successfully signed up!');
      App();
    } catch (error) {
      setErrorMessage(error.message);
    }        
  };

  const redirecting__alert = () => {
    if (confirm("Warning: You'll be redirected to another page, all the data on this form will reset and cannot be recovered.")) {
      router.push('/terms_and_conditions');
    }
  };

  const inputStyle = `p-2.5 my-1.5 w-full bg-transparent border-2 border-dark__blue rounded-lg focus:border-main focus:outline-none transition-colors ${theme ? 'text-white' : 'text-dark__blue'}`;

  return (
    <>
      <Head>
        <title>Sign up | Phoenix</title>
      </Head>
      <div className={`pt-24 pb-20 px-6 backdrop-blur-sm min-h-screen flex justify-center items-center`}>
        <div className={`flex flex-col justify-center border-2 backdrop-blur-md p-8 sm:p-5 w-full max-w-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${theme ? 'border-[rgba(162,61,237,0.3)] bg-[rgba(13,15,28,0.8)]' : 'border-[#e0f2fe] bg-white/80'}`}>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a23ded] to-[#00ffcc] text-center mb-4">
            Sign Up
          </h1>
          <p className={`text-center mb-8 ${theme ? 'text-white/70' : 'text-dark__blue/80 font-medium'}`}>Join Phoenix and start your competitive programming journey today.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm" onClick={() => setErrorMessage("")}>
            <div className='flex flex-col'>
              <label className='text-main font-semibold mb-1'>Full Name *</label>
              <input className={inputStyle} placeholder={`e.g. John Doe`} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className='flex flex-col'>
              <label className='text-main font-semibold mb-1'>Email *</label>
              <input className={inputStyle} placeholder={`Your Email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row gap-4">
              <div className='flex flex-col w-full'>
                <label className='text-main font-semibold mb-1'>Codeforces Handle</label>
                <input className={inputStyle} placeholder={`e.g. tourist`} type="text" value={codeforcesId} onChange={(e) => setCodeforcesId(e.target.value)} />
              </div>
              <div className='flex flex-col w-full'>
                <label className='text-main font-semibold mb-1'>Leetcode Handle</label>
                <input className={inputStyle} placeholder={`e.g. neetcode`} type="text" value={leetcodeId} onChange={(e) => setLeetcodeId(e.target.value)} />            
              </div>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row gap-4">
              <div className="relative flex flex-col w-full">
                <label className='text-main font-semibold mb-1'>Password *</label>
                <input className={inputStyle} placeholder={`New password`} type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className={`absolute top-[42px] right-4 cursor-pointer transition-colors ${theme ? 'text-white/50 hover:text-white' : 'text-dark__blue/50 hover:text-dark__blue'}`} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </div>
              </div>

              <div className="relative flex flex-col w-full">
                <label className='text-main font-semibold mb-1'>Confirm Password *</label>
                <input className={inputStyle} placeholder={`Confirm password`} type={showconfirmPassword ? "text" : "password"} value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required />
                <div className={`absolute top-[42px] right-4 cursor-pointer transition-colors ${theme ? 'text-white/50 hover:text-white' : 'text-dark__blue/50 hover:text-dark__blue'}`} onClick={() => setShowconfirmPassword(!showconfirmPassword)}>
                  {showconfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </div>
              </div>
            </div>

            <div className={`text-xs mt-2 p-3 rounded-lg border ${theme ? 'text-white/60 bg-white/5 border-white/10' : 'text-dark__blue/80 bg-dark__blue/5 border-dark__blue/10'}`}>
              By clicking &apos;Sign Up&apos;, you agree to our <span onClick={() => redirecting__alert()} className='text-[#00ffcc] hover:underline cursor-pointer font-medium'> Terms of Service</span>.
            </div>

            {errormessage && <div className='text-[#ff4d4d] bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 p-3 rounded-lg text-center font-medium'>{errormessage}</div>}

            <button type="submit" className='w-full font-bold text-dark__blue bg-gradient-to-r from-[#a23ded] to-[#00ffcc] mt-4 p-3.5 flex justify-center items-center rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(162,61,237,0.4)]'>
              Sign up &nbsp;<BsArrowRightCircle className='inline text-lg' />
            </button>

            <p className={`text-center mt-4 ${theme ? 'text-white/70' : 'text-dark__blue/80 font-medium'}`}>Already a User? <Link href='/signin' className='text-[#00ffcc] font-bold hover:underline'>Sign In</Link></p>
            
            <ToastContainer theme="dark" />
          </form>
        </div> 
      </div>
    </>
  );
};

export default SignupForm;
