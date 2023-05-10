import React from "react";

import image_2 from '../../Assets/image_2.jpg'
import image_1 from '../../Assets/image_1.jpg'
import image_3 from '../../Assets/image_3.jpg'

const Valeur = () => {
    return (
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[800px] block">
                The value that holds us true and to account.
            </h1>
            <div className="grid gap-[10rem] grid-cols-3 items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] flex items-center justify-center">
                            <img src={image_2} alt="" className="w-[890px] h-[90px]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[25px] text-textColor opacity-[.7] py-[.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laborum placeat, aut ipsa nesciunt quis, in non vel labore assumenda sunt nihil debitis explicabo? Dolorum quis rerum nisi optio reiciendis.
                    </p>
                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] flex items-center justify-center">
                            <img src={image_1} alt="" className="w-[890px] h-[90px]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[25px] text-textColor opacity-[.7] py-[.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laborum placeat, aut ipsa nesciunt quis, in non vel labore assumenda sunt nihil debitis explicabo? Dolorum quis rerum nisi optio reiciendis.
                    </p>
                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7]">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] flex items-center justify-center">
                            <img src={image_3} alt="" className="w-[890px] h-[90px]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[25px] text-textColor opacity-[.7] py-[.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laborum placeat, aut ipsa nesciunt quis, in non vel labore assumenda sunt nihil debitis explicabo? Dolorum quis rerum nisi optio reiciendis.
                    </p>
                </div>
            </div>

            <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
                <div>
                    <h1 className="text-blueColor text-[30px] font-bold">Ready to switch a career</h1>
                    <h2 className="text-textColor text-[25px] font-bold">Let's get started!</h2>
                </div>
                <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
                    Get Started
                </button>

            </div>

        </div>
    )
}

export default Valeur