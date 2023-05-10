import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                        <strong>Khadma_</strong>Coders
                    </h1>
                </div>
                <p className="text-white pb-[13px] opacity-70 leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium assumenda necessitatibus veniam culpa perspiciatis delectus obcaecati ipsam doloremque, illum consequuntur repellendus recusandae iste inventore adipisci molestias vel non placeat velit!
                </p>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Company
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:apcity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Features</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">News</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">FAQ</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Resources
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Account</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Support Center</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Feedback</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Contact Us</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Support
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Events</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Promo</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Req Demo</li>
                    <li className="text-white opacity-[.7] hover:apcity-[1]">Careers</li>
                </div>
            </div>
            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Contact Info
                </span>
                <div>
                    <small className="text-[14px] text-white">
                        jelouani_youcode@gmail.com
                    </small>
                    <div className="icons flex gap-4 py-[1rem]">
                        <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        <AiOutlineWhatsApp className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                    </div>
                    <div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                        <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path>
                        </svg>
                        <div class="pl-4 text-sm font-normal"><input type="text" placeholder="Send Message." /></div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Footer