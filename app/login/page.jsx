"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
      router.push("/admin"); // Redirect to Admin page
    }
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Sign-up successful! Please login now.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Welcome</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-3 mt-2 rounded-lg w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 mt-2 rounded-lg w-80"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex gap-4 mt-4">
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold"
        >
          Login
        </button>

        <button
          onClick={handleSignUp}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold"
        >
          Sign-up
        </button>
      </div>
    </div>
  );
}
