'use client';

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.post("/api/users/logout");
      console.log(response);
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log("Error on logout: ", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="grid place-items-center w-svw h-svh bg-black">
      <div className="flex flex-col justify-center items-center rounded-md shadow-[0_0_70px_rgba(255,255,255,0.5)] p-6 gap-4 bg-white">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <hr />
        <button onClick={logout} className="bg-red-500 text-white rounded-md p-4">Logout</button>
      </div>
    </div>
  );
}
