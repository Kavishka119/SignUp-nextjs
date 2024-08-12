import Image from "next/image";
import React from "react";

// images
import loginimg from "@/public/login-animate.gif";

export default function Signup() {
  return (
    <div className="flex min-h-screen bg-white">
      <main className="flex-1 p-5 hidden lg:block bg-white">
        <div className="col-span-12">
          <div className="grid grid-cols-12">
            <div className="col-span-12 flex justify-center items-center h-[90vh]">
              <Image
                src={loginimg}
                priority={true}
                placeholder="empty"
                quality={100}
                sizes="(max-width: 80%) 100vw, (max-width: 80%) 50vw, 33vw"
                alt="loginimage"
              />
            </div>
          </div>
        </div>
      </main>
      <main className="flex-1 p-5 bg-blue-500 lg:rounded-l-[15%]">
        <div className="col-span-12">
          <div className="grid grid-cols-12">
            <div className="col-span-12 flex justify-center items-center h-[90vh]">
              <div className="w-[80%]">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12 text-center">
                    <span className="text-white text-4xl font-bold">
                      New User Registration
                    </span>
                  </div>
                  <form
                    action=""
                    method="post"
                    className="col-span-12 text-center mt-3"
                  >
                    <div className="col-span-12 text-center mt-3">
                      <input
                        type="text"
                        className="bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-[100%]"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-span-12 text-center mt-3">
                      <input
                        type="text"
                        className="bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-[100%]"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="col-span-12 text-center mt-3">
                      <input
                        type="text"
                        className="bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-[100%]"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-span-12 text-center mt-3">
                      <input
                        type="password"
                        className="bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-[100%]"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-span-12 w-[100%] grid grid-cols-12 gap-4">
                      <div className="col-span-6 text-start mt-3 ml-3 inline-flex gap-2">
                        <button
                          type="submit"
                          className="uppercase rounded-[50px] w-[100%] bg-gray-200 border hover:bg-gray-300 border-black text-black text-lg font-medium p-3"
                        >
                          Sign UP
                        </button>
                      </div>
                      <div className="col-span-6 text-end mt-3 mr-3">
                        <button
                          type="submit"
                          className="uppercase rounded-[50px] w-[100%] bg-gray-200 border hover:bg-gray-300 border-black text-black text-lg font-medium p-3"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
