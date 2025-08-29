"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import GoogleIcon from "./googleIcon";
import AppleIcon from "./apple";
import EmailIcon from "./emailIcon";
// import OTPInput from "./OTPInput";
import PasswordIcon from "./passwordIcon";
import ButtonLoaders from "@/app/components/Loaders/buttonloaders";
// import WalletConnectV2Button from "@/app/Components/WalletConnectV2Button";
import { signInWithPopup } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth,googleProvider, db } from "@/lib/firebase";


export default function Authenication() {
  const router = useRouter();
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
  


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

const handleGoogleLogin = async () => {
  setLoading(true);
  setMessage("");

  try {
    await setPersistence(auth, browserLocalPersistence);
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;
    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", user.email || "");
      router.push("/dashboard");
    }
  } catch (error: any) {
    if (error.code === "auth/popup-blocked") {
      console.warn("Popup was blocked. User may need to click again.");
      setMessage("Popup was blocked. Please click again.");
    } else {
      console.error("Google Sign-in Error:", error);
      setMessage("Google Sign-in failed.");
    }
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Signed in as:", user.email);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  });

  return () => unsub();
}, []);


const handleEmailAuth = async () => {
  setLoading(true);
  setMessage("");

  if (!validateEmail(email) || password.length < 6) {
    setMessage("Enter valid email and password (min 6 characters)");
    setLoading(false);
    return;
  }

  try {
    // Ensure session stays on reload
    await setPersistence(auth, browserLocalPersistence);

    // 🔐 Try signing in first
    const login = await signInWithEmailAndPassword(auth, email, password);
    const user = login.user;

    // ✅ Check if Firestore doc exists
    const docRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(docRef);

    if (!userSnap.exists()) {
      // First login, create profile
      await setDoc(docRef, {
        email: user.email,
        createdAt: new Date(),
        onboardingComplete: false,
      });
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", user.email || "");

    router.push("/dashboard");
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      // ✨ User not found → create new account
      try {
        const signup = await createUserWithEmailAndPassword(auth, email, password);
        const user = signup.user;

        // ✅ Create profile in Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
          onboardingComplete: false,
        });

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", user.email || "");

        router.push("/dashboard");
      } catch (signupErr) {
        console.error("Signup failed:", signupErr);
        setMessage("Signup failed. Try again.");
      }
    } else if (error.code === "auth/wrong-password") {
      setMessage("Wrong password. Try again.");
    } else {
      console.error("Login failed:", error);
      setMessage("Login failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section className="bg-white ">
        <div className=" flex h-screen gap-10 items-center justify-between p-2">
          <div className="relative w-[40%] h-[98vh] bg-[#f0eae3] rounded-[2rem] overflow-hidden hidden md:block lg:block ">
            <Image
              src="/login-pic-1.webp"
              alt="login-pic"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* Left side image for larger screens */}
          {/* with profile update */}
           <div className="sm:w-full md:w-[50%] lg:w-[50%] w-full flex flex-col justify-center md:pl-8  md:pr-24 px-4 -mt-8">
                <div className="text-right text-sm mb-8">
                  {/* <p className="font-bold text-[#6f767e] absolute top-12 right-12 text-base-1s text-theme-secondary 2xl:top-10 2xl:right-10 xl:top-6 xl:right-6 lg:top-12 lg:right-12 md:top-8 md:right-6">
                  Dont have an account?{" "}
                  <Link
                    href="#"
                 
                    className="text-[#000] "
                  >
                    Sing Up
                  </Link>
                </p> */}

                  {/* <p className="font-bold text-[#6f767e] absolute top-12 right-12 text-base-1s text-theme-secondary 2xl:top-10 2xl:right-10 xl:top-6 xl:right-6 lg:top-12 lg:right-12 md:top-8 md:right-6">
                    Account Created{" "}
                    <Link href="#" className="text-[#000] ">
                      Update Profile
                    </Link>
                  </p> */}
                </div>

                <h1 className="relative font-bold text-[#000] text-[28px] md:text-[62px] mb-4 md:mb-8">
                  Signin
                </h1>
              
            
                    <div className=" flex gap-4 ">
                      <button className="flex items-center justify-center gap-2 border border-2  w-full py-3 rounded-xl text-sm  border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold"
                      onClick={handleGoogleLogin}>
                        <GoogleIcon /> Google

                      </button>
                      <button className="flex items-center justify-center gap-2 border border-2  w-full py-3 rounded-xl text-sm  border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold">
                        <AppleIcon /> Apple ID
                      </button>
                    </div>
                    <div
                      className={`border-b border-[#efefef] my-6 `}
                      style={{ borderBottomWidth: "3px" }}
                    ></div>
                    <p className={` mb-6 font-semibold `}>
                      Or continue with email address
                    </p>
               

                <div className={` space-y-2 space-y-4`}>
                 
                      <div className="flex items-center gap-3 border border-2 hover:border-1 rounded-xl hover:border-blue-700 border-[#efefef] hover:bg-white bg-[#efefef] cursor-pointer font-bold px-4 py-4">
                        <EmailIcon />
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Enter your email"
                          className="w-full outline-none bg-transparent placeholder-gray-500 text-sm autofill:!bg-none focus:!bg-none"
                        />
                      </div>
                 

                  {/* Message Output */}
                  {message && (
                    <p className="font-bold text-[#000] text-[14px] text-center">
                      {message}
                    </p>
                  )}
                   <div className="flex items-center gap-3 border border-2 hover:border-1 rounded-xl border-[#efefef] hover:border-blue-700 hover:bg-white bg-[#efefef] cursor-pointer font-bold px-4 py-4">
                  <PasswordIcon />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full outline-none bg-transparent placeholder-gray-500 text-sm"
                  />
                </div>
                 

                
                      <button
                        className="cursor-pointer bg-blue-600 text-white w-full py-4 rounded-full mt-2 text-sm font-semibold hover:bg-blue-700 transition flex justify-center items-center gap-2"
                          onClick={handleEmailAuth}
                      >
                        {loading ? (
                          <>
                            <ButtonLoaders /> Processing
                          </>
                        ) : (
                          <>Continue</>
                        )}
                      </button>
                  
                </div>

                <>
                  
                    <p className="text-xs text-gray-500 mt-6">
                      By signing up, you agree to the{" "}
                      <span className="underline cursor-pointer">
                        Terms of Use
                      </span>
                      ,{" "}
                      <span className="underline cursor-pointer">
                        Privacy Notice
                      </span>
                      , and{" "}
                      <span className="underline cursor-pointer">
                        Cookie Notice
                      </span>
                      .
                    </p>
                
                </>
              </div>
         {/* <div className="sm:w-full md:w-[50%] lg:w-[50%] w-full flex flex-col justify-center md:pl-8 md:pr-24 px-4 -mt-8">
               

                <div className="flex md:flex-row flex-col w-full gap-4 mt-16">
            
                  <input
                    className="md:w-1/2 h-[60px] pl-3 flex items-center justify-center gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                 
                </div>
                <div className="flex w-full mt-4">
                 
                </div>
                <div className="w-full flex flex-col gap-2">
                  <button
                 
                    className="mt-6 cursor-pointer bg-blue-600 text-white w-full py-4 rounded-full mt-2 text-sm font-semibold hover:bg-blue-700 transition flex justify-center items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <ButtonLoaders /> Saving
                      </>
                    ) : (
                      <>Save Profile</>
                    )}
                  </button>

               
                </div>
              </div> */}
        </div>
      </section>
    </>
  );
}
