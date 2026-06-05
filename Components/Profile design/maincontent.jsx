/**
 * This is a React component that displays user information, including their Codeforces and Leetcode
 * IDs, and allows the user to toggle between viewing their Codeforces submissions, rating changes, and
 * Leetcode submissions.
 */
import React, { useState, useEffect } from 'react'
import Submission from '../Submission/index'
import Rating from '../Rating/index'
import Leetcode_data from '../Leetcode Data/leetcode_data'
import Image from 'next/image'
import Link from 'next/link'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Maincontent = ({user,theme}) => {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  const [open1, setopen1] = useState(true);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [data,setdata]= useState([
{
"lastName": "Waiting for server",
"country": "India",
"lastOnlineTimeSeconds": 0,
"city": "Waiting for server",
"rating": 0,
"friendOfCount": 0,
"titlePhoto": "https://userpic.codeforces.org/no-title.jpg",
"handle": "Waiting for server",
"avatar": "https://userpic.codeforces.org/2370846/avatar/8e3aeab60928f315.jpg",
"firstName": "Waiting for server",
"contribution": 0,
"organization": "NIT Rourkela",
"rank": "Waiting for server",
"maxRating": 0,
"registrationTimeSeconds": 0,
"email": "Waiting for server",
"maxRank": "Waiting for server"
}
]);
    function fetchData(){
      if (!user?.codeforcesId) return;
      
      fetch(`https://codeforces.com/api/user.info?handles=${user.codeforcesId}`)
        .then(response => {
          if(response.status >= 400) {
            console.log("Server responds with error!");
          }
          return response.json()
        })
        .then((data) => {
          if(data.status== "FAILED"){
            console.log("Fetching failed for Codeforces API");
          }
          else{
            setdata(data.result);
          }
        })
        .catch(err => console.error(err));
    }
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 60000);
      }
    },[counter]);
    
    useEffect(() => {
      if (counter <= 0 && user?.codeforcesId) {
        fetchData();
        setCounter(15);
      }
    },[counter, user?.codeforcesId]);
  return (
  <>
    <div className='border-2 border-[rgba(162,61,237,0.3)] bg-[rgba(13,15,28,0.8)] shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-2xl m-4 flex justify-between items-center p-10 sm:flex-col-reverse'>
      <div className="flex flex-col gap-2" data-aos="fade-right" data-aos-duration="3000">
        <p className="text-4xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#a23ded] to-[#00ffcc] mb-2">{user.name}</p>
        <p className="text-base text-white/80"><a href={`mailto:${user.email}`} className='hover:text-[#00ffcc] transition-colors'>{user.email}</a></p>
        
        {user.codeforcesId ? (
          <li>Codeforces ID: <a href={`https://codeforces.com/profile/${user.codeforcesId}`} className='text-[#00ffcc] hover:underline font-semibold'>{user.codeforcesId}</a></li>
        ) : (
          <li className="text-white/50">Codeforces ID: Not Provided</li>
        )}

        {user.leetcodeId ? (
          <li>Leetcode ID: <a href={`https://leetcode.com/${user.leetcodeId}/`} className='text-[#00ffcc] hover:underline font-semibold'>{user.leetcodeId}</a></li>
        ) : (
          <li className="text-white/50">Leetcode ID: Not Provided</li>
        )}

        {user.codeforcesId && data[0] && data[0].rating !== 0 && (
          <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
            <h3 className="font-bold text-[#a23ded] mb-2">Codeforces Stats</h3>
            <li>Current CF Rank: <span className="font-semibold text-white">{data[0].rating}</span>, {data[0].rank} (max. {data[0].maxRank}, {data[0].maxRating})</li>
            <li>CF Contributions: <span className="font-semibold text-white">{data[0].contribution}</span></li>
            <li>Friend of: <span className="font-semibold text-white">{data[0].friendOfCount}</span> users</li>
          </div>
        )}
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src={data[0]?.titlePhoto || "https://userpic.codeforces.org/no-title.jpg"}
          alt="Profile Photo"
          className={"w-32 h-32 object-cover border-4 border-[#a23ded] rounded-full shadow-[0_0_20px_rgba(162,61,237,0.4)] mb-4"}
          width={150}
          height={150}
          data-aos="fade-left" data-aos-duration="3000"
        />
        <Link href="/updateprofile" className='font-bold text-dark__blue bg-gradient-to-r from-[#a23ded] to-[#00ffcc] px-6 py-2 rounded-xl transition-all hover:scale-105' data-aos="fade-left" data-aos-duration="3000">
          Edit Profile
        </Link>
      </div>
    </div>
    <div className=''>
        <div className='w-full flex items-center border-y-2' data-aos="fade-up" data-aos-duration="3000">
            <div className={` m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm sm:text-sm ${open1 ? ("text-dark__blue bg-main") : "m-0"}`} onClick={() => {
              setopen1(true);
              setopen2(false);
              setopen3(false);
            }}>CF Submissions</div>
            <div className={`border-x-[1px] m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm sm:text-sm ${open2 ? ("text-dark__blue bg-main") : "m-0"}`} onClick={() => {
              setopen1(false);
              setopen2(true);
              setopen3(false);
            }}>CF Rating Changes</div>
            <div className={` m-0 p-0 w-1/2 flex items-center justify-center backdrop-blur-sm sm:text-sm ${open3 ? ("text-dark__blue bg-main") : "m-0"}`} onClick={() => {
              setopen1(false);
              setopen2(false);
              setopen3(true);
            }}>LC Submissions</div>
        </div>
        <div className=''>
            {open1 && <Submission name={user.codeforcesId}/>}
            {open2 && <Rating name={user.codeforcesId}/>}
            {open3 && <Leetcode_data name={user.leetcodeId}/>}
        </div>
        <p className="text-2xl sm:text-lg xl:text-center lg:text-center xl:p-14 lg:p-14 sm:p-4 md:p-36 italic font-medium">
            "Success is the sum of small efforts, repeated day in and day out. Keep coding, keep building, and never give up."
        </p>
    </div>
  </>
  )
}

export default Maincontent