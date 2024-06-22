"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function VerifyEmailPage() {

    const[token, setToken] = useState("");
    const[verified, setVerified] = useState(false);
    const [error, setError] = useState(false);


    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyEmail", {token})
            setVerified(true);
        } catch (error) {
            setError(true);
            console.log("erreur dans le fichier page de verifyemail : ", error);
            
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, [token]);

    useEffect(() => {
        if (token.length>0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <div className="grid place-items-center w-svw h-svh bg-black">
            <div className="flex flex-col justify-center items-center rounded-md shadow-[0_0_70px_rgba(255,255,255,0.5)] p-12 gap-4 bg-white">
                <h1 className="text-4xl"> Verify email</h1>
                <h2 className="text-2xl">{token ? `${token}` : "token not found" }</h2>
                {
                    verified && (
                        <div>
                            <h2>Verified</h2>
                            <Link className="text-2xl p-6 rounded-md bg-slate-600 text-white" href={"/login"}>Login</Link>
                        </div>
                    )
                }
                {
                    error && (
                        <div>
                            <h2>{error}</h2>
                            <Link className="text-2xl p-6 rounded-md bg-slate-600 text-white" href={"/login"}>Login</Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}