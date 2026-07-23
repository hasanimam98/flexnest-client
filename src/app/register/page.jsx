"use client";

import Link from "next/link";
import { FaGoogle, FaDumbbell } from "react-icons/fa";


export default function RegisterPage() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">


      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white">


        {/* Logo */}

        <div className="flex justify-center mb-5">

          <div className="bg-blue-500 text-white p-4 rounded-full">

            <FaDumbbell size={28}/>

          </div>

        </div>



        <h1 className="text-3xl font-bold text-center text-gray-800">

          Join FlexNest 🚀

        </h1>
 <p className="text-center text-gray-500 mt-2 mb-8">

          Start your healthy lifestyle today

        </p>




        <form className="space-y-4">


          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />



          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />



          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />



          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />




          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
          >

            Create Account

          </button>


        </form>




        <div className="divider">
          OR
        </div>



        <button
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-50 transition"
        >

          <FaGoogle className="text-red-500"/>

          Sign up with Google

        </button>




        <p className="text-center mt-6 text-gray-600">

          Already have an account?

          <Link
            href="/login"
            className="text-blue-600 font-semibold ml-2"
          >
            Login
          </Link>


        </p>



      </div>


    </div>

  );

}