/**
 * The function returns a React component that displays information about a community for competitive
 * programming enthusiasts.
 * @returns The Index component is being returned, which contains a Head component for setting the
 * title of the page and a div containing information about the Phoenix community.
 */
import React from 'react'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>About | Phoenix</title>
      </Head>
    <div className='flex justify-around items-around p-2.5 pb-12 backdrop-blur-sm'>
      <div className="w-4/5">
        <h1 className='text-5xl font-bold text-center p-4 sm:text-3xl'>ABOUT US</h1>
        <p className='text-xl sm:text-base text-center'>
          Welcome to Phoenix, a centralized hub designed to elevate your software engineering journey. Phoenix acts as a unified platform bridging competitive programming, essential CS fundamentals, and interactive community features. Our mission is to help you track your progress across multiple coding platforms like LeetCode and Codeforces seamlessly in one place.<br /><br />

          Whether you&apos;re brushing up on core CS concepts, grinding algorithms, or connecting with peers in the global chatroom, Phoenix brings everything together. We believe that tracking your growth and collaborating with a community of dedicated developers is the key to rising above any technical challenge.<br /><br />

          Join Phoenix today, explore curated resources, maintain your coding streaks, and rise from the ashes to become the ultimate software engineer!
        </p>
      </div>
    </div>
    </>
  )
}

export default Index