import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import {
  getDatabase,
  ref,
  push,
  onValue,
  query,
  limitToLast,
  serverTimestamp,
  get
} from "firebase/database";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, db, auth } from '../../firebaseclient';
import { RiSendPlaneFill } from 'react-icons/ri';

const Chat = () => {
  const [user] = useAuthState(auth);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Chatroom | Phoenix</title>
      </Head>
      <div className="App">
        <section className="min-h-screen backdrop-blur-sm flex justify-center items-center">
          {user ? <ChatRoom /> : <Link href="/signup" className="border-4 text-2xl p-4 rounded-xl">You are requested to login with your account to access Chatroom. Thank You!</Link>}
        </section>
      </div>
      <div ref={scrollRef}></div>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for messages from RTDB
    const messagesRef = query(ref(db, "messages"), limitToLast(25));
    const unsubscribeMessages = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array
        const msgList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        // Sort by timestamp just in case
        msgList.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
        setMessages(msgList);
      } else {
        setMessages([]);
      }
    });

    return () => unsubscribeMessages(); // Stop listening on unmount
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        // Fetch user data from RTDB
        const userRef = ref(db, 'users/' + authUser.uid);
        const userSnap = await get(userRef);
        if (userSnap.exists()) {
          setUser(userSnap.val());
        }
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.trim()) return;

    const { uid } = auth.currentUser;
    
    // Push message to RTDB
    await push(ref(db, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      displayName: user?.name || "Unknown",
    });

    setFormValue("");
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 px-4 py-6 min-h-screen backdrop-blur-sm">
        {messages && messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="flex items-center py-2 px-2 border-2 m-2 rounded-md bg-black/50">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message here.."
          className="w-full break-all break-words p-2 mr-2 rounded-md border text-black focus:outline-none"
          maxLength={1000}
        />

        <button type="submit" disabled={!formValue.trim()}>
          <RiSendPlaneFill size={40} className="rounded-md p-1.5 border-2 text-white hover:bg-[#a23ded] transition-colors" />
        </button>
      </form>
    </div>
  );
}

function ChatMessage({ message }) {
  const isSentByMe = message.uid === auth.currentUser.uid;
  const messageClass = isSentByMe ? "flex-row-reverse" : "flex-row";
  
  return (
    <div className={`flex ${messageClass} mb-4 items-end`}>
      <div className={`flex flex-col ${isSentByMe ? 'items-end' : 'items-start'}`}>
        <p className="text-xs text-gray-400 mb-1 mx-1">{message.displayName}</p>
        <p className={`p-3 rounded-2xl max-w-2xl break-words text-sm ${isSentByMe ? "bg-gradient-to-r from-[#a23ded] to-[#00ffcc] text-black font-medium rounded-br-none" : "bg-white/10 text-white rounded-bl-none border border-white/10"}`}>
          {message.text}
        </p>
      </div>
    </div>
  );
}

export { SignOut };
export default Chat;
