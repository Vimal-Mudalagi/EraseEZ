import React, { useState } from 'react'

export default function RemoveBG() {
    const [image, setImage] = useState(null);
    const [bgRemove, setBgRemove] = useState(null);


    const handleRemoveBG = async () => {
        const apiKey = "dcHYSHVnt9py2hsoRyB4YdSN"
        const apiUrl = "https://api.remove.bg/v1.0/removebg"

        const formData = new FormData();
        formData.append("image_file", image, image.name);
        formData.append("size", 'auto');

        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'X-Api-Key': apiKey
                },
                body: formData
            })

            const data = await res.blob();

            const reader = new FileReader();
            reader.onloadend = () => setBgRemove(reader.result)
            reader.readAsDataURL(data);
        } catch (error) {
            console.log(error)
        }
    }

    console.log(image)

    return (
        <div>
            <div className='flex justify-center p-9'>
                <div className="">
                    {/* Input  */}
                    <div className="input">
                        {/* Input Tag  */}
                        <div className="input border border-gray-700 px-5 py-5 rounded-lg bg-[#2C3E50] mb-5">
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="text-xl p-6 text-white file:mr-8 file:py-3 file:px-3  file:text-xl file:font-medium file:border-0 file:rounded-lg file:bg-black file:text-white hover:file:cursor-pointer hover:file:bg-[#FFA07A] lg:w-[40em]"
                            />
                        </div>


                        <div className="flex justify-center mb-5">
                            <button
                                type="button"
                                onClick={handleRemoveBG}
                                className="text-white bg-[#2C3E50] font-semibold text-xl  rounded-lg  
                                px-5 py-5 text-center hover:bg-[#FFA07A]"
                            >
                                Remove Background
                            </button>
                        </div>
                    </div>

                    {/* Output  */}
                    <div className="flex gap-1 mb-5 ">
                        {image && <div className="border-2 border-gray-500 rounded-l-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
                            <img className="w-90 h-90" src={image ? URL.createObjectURL(image) : ""} alt="" />
                        </div>}

                        {bgRemove && <div className="border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
                            <img className="w-90 h-90" src={bgRemove} alt="img" />
                        </div>}
                    </div>

                    {bgRemove && <div className="flex justify-center">
                        <a className='w-full' href={bgRemove} download={'save.png'}>
                            <button className='text-white w-full bg-[#2C3E50] font-semibold text-xl  rounded-lg  
                                px-5 py-5 text-center hover:bg-[#FFA07A]'>Download</button>
                        </a>
                    </div>}

                </div>

            </div>
        </div>
    )
}

