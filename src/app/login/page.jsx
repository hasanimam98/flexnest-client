"use client";

import Link from "next/link";
import { FaGoogle, FaDumbbell } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-blue-100 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="bg-green-500 text-white p-4 rounded-full">
            <FaDumbbell size={28}/>
          </div>
        </div>


        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back 💪
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to continue your fitness journey
        </p>

          <form className="space-y-5">


          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
            />

          </div>



          <div>

            <label className="text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
            />

          </div>

           <button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>


        </form>



        <div className="divider">
          OR
        </div>



        <button
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-50 transition"
        >

          <FaGoogle className="text-red-500"/>
          Continue with Google

        </button>



        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <Link
            href="/register"
            className="text-green-600 font-semibold ml-2"
          >
            Register
          </Link>

        </p>


      </div>

    </div>
  );
}