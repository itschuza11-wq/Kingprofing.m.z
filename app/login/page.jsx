"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) alert(error.message);
    else alert("Magic link sent to your email!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        className="border p-3 mt-4 rounded-lg"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg"
      >
        Send Login Link
      </button>
    </div>
  );
}
