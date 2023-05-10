import React from "react";
import { BiTimeFive } from 'react-icons/bi'

import image_1 from '../../Assets/image_1.jpg'
import image_2 from '../../Assets/image_2.jpg'
import image_3 from '../../Assets/image_3.jpg'


const Data = [
    {
        id: 1,
        image: image_1,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "EuraFric",
        time: 'Now'
    },
    {
        id: 2,
        image: image_2,
        title: "UI designer",
        location: "Maroc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "Cegedim",
        time: '2hours'
    },
    {
        id: 3,
        image: image_3,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "ECA Assurances",
        time: '14hours'
    },
    {
        id: 4,
        image: image_2,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "ECA Assurances",
        time: '14hours'
    },
    {
        id: 5,
        image: image_1,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "ECA Assurances",
        time: '14hours'
    },
    {
        id: 6,
        image: image_3,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "ECA Assurances",
        time: '14hours'
    },
    {
        id: 7,
        image: image_1,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "ECA Assurances",
        time: '14hours'
    },
    {
        id: 8,
        image: image_2,
        title: "Web Devoloper",
        location: "Canada",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta minus impedit suscipit, voluptatem corporis iste nobis dolorum quae et expedita accusantium modi doloribus quis laudantium fugit quidem aliquam delectus.",
        company: "ECA Assurances",
        time: '14hours'
    }
]


const Khadma = () => {
    return (
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

            {
                Data.map(({ id, image, title, location, description, company, time }) => {
                    return (
                        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                            <span className="flex justify-between items-center gap-4">
                                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                                <span className="flex items-center text-[#ccc] gap-1">
                                    <BiTimeFive />{time}
                                </span>
                            </span>
                            <h6 className="text-[#ccc]">{location}</h6>
                            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                               {description}
                            </p>

                            <div className="company flex items-center gap-2">
                                <img src={image_1} alt="company logo" className="w-[10px]" />
                                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                            </div>

                            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:">
                                Apply Now
                            </button>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default Khadma 