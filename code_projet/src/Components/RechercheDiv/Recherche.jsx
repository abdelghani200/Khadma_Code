import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'

const Recherche = () => {
    return (
        <div className="rechercheDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">

            <form action="">

                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

                    <div className="flex gap-2 items-center">
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Search Khadma Here ...." />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>

                    <div className="flex gap-2 items-center">
                        <BsHouseDoor className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Search by company ...." />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>

                    <div className="flex gap-2 items-center">
                        <GrLocation className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Search by location ...." />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>

                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Rechercher</button>

                </div>
            </form>

            <div className="secDiv flex items-center gap-10 justify-center">

                <div className="singleSearch flex items-center gap-2 mt-3">
                    <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort By:</label>
                    <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                        <option value="relevance">Relevance</option>
                        <option value="relevance">Relevance</option>
                        <option value="relevance">Relevance</option>
                        <option value="relevance">Relevance</option>
                    </select>
                </div>
                
                <div className="singleSearch flex items-center gap-2 mt-3">
                    <label htmlFor="type" className="text-[#808080] font-semibold">Type:</label>
                    <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
                        <option value="relevance">Full-time</option>
                        <option value="relevance">Remote</option>
                        <option value="relevance">Contract</option>
                        <option value="relevance">Part-time</option>
                    </select>
                </div>
                <div className="singleSearch flex items-center gap-2 mt-3">
                    <label htmlFor="level" className="text-[#808080] font-semibold">Level:</label>
                    <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
                        <option value="Relevance">Senior</option>
                        <option value="Inclusive">Beginner</option>
                        <option value="Starts With">Intermediate</option>
                        <option value="Contains">Advocate</option>
                    </select>
                </div>

                <span className="text-[#a1a1a1] cursor-pointer mt-3">Clear All</span>

            </div>


        </div>
    )
}

export default Recherche     