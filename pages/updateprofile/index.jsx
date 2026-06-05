import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebaseclient";
import { ref, update } from "firebase/database";
import { db } from "@/firebaseclient";
import Link from "next/link";
import Head from "next/head";

export default function ProfilePage({ theme }) {
  const user = auth.currentUser;
  const router = useRouter("");
  const [name, setName] = useState("");
  const [codeforcesId, setCodeforcesId] = useState("");
  const [leetcodeId, setLeetcodeId] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim()) {
      alert('Please enter a valid name.');
      return;
    }
    
    if (user) {
      await updateUser(user.uid, {
        name: name.trim(),
        codeforcesId: codeforcesId.trim(),
        leetcodeId: leetcodeId.trim(),
      });
      router.push("/profile");
    } else {
      alert("You must be logged in to update your profile.");
    }
  };

  let style = `w-full p-2 my-2 bg-transparent border-2 border-dark__blue rounded-lg focus:border-main focus:outline-none ${theme ? 'text-white' : 'text-dark__blue'}`;

  return (
    <>
      <Head>
        <title>Update Profile | Phoenix</title>
      </Head>

      <div className="w-full p-4 h-screen justify-center items-center flex flex-col backdrop-blur-sm">
        <div className={`border-2 flex flex-col items-center justify-center p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] max-w-md w-full ${theme ? 'border-[rgba(162,61,237,0.3)] bg-[rgba(13,15,28,0.8)]' : 'border-[#e0f2fe] bg-white/80'}`}>
          <h1 className="font-bold text-3xl text-center pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#a23ded] to-[#00ffcc]">
            Update Profile
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full"
          >
            <div className="flex flex-col mb-4">
              <label className="text-main font-semibold mb-1">Full Name</label>
              <input
                className={style}
                type="text"
                placeholder="Enter your new name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-main font-semibold mb-1">Codeforces Handle</label>
              <input
                className={style}
                type="text"
                placeholder="e.g. tourist"
                value={codeforcesId}
                onChange={(event) => setCodeforcesId(event.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-main font-semibold mb-1">Leetcode Handle</label>
              <input
                className={style}
                type="text"
                placeholder="e.g. neetcode"
                value={leetcodeId}
                onChange={(event) => setLeetcodeId(event.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <Link href="/resetpassword" className="text-sm text-[#00ffcc] hover:underline">
                Reset Password
              </Link>
            </div>
            
            <button
              type="submit"
              className="w-full font-bold text-dark__blue bg-gradient-to-r from-[#a23ded] to-[#00ffcc] p-3 rounded-xl transition-transform hover:scale-[1.02]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export async function updateUser(uid, data) {
  const userRef = ref(db, "users/" + uid);
  await update(userRef, data);
}
