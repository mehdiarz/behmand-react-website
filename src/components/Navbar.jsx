import React, { useState } from 'react'
const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between '>
            <div className="flex items-center gap-4 tex-2xl font-bold">
                <img src="./behmand-logo-high-quality.png" className="w-16 h-16"></img>
                <span>موسسه حسابرسی بهمند (حسابداران رسمی)</span>
            </div>
            <div className="md:hidden">
                <div  className="cursor-pointer text-4xl font-sans" onClick={() => setOpen((prev) => !prev)}>
                    {open ? 'X' : '☰'}
                </div>
                <div className='w-full h-screen flex flex-col items-center justify-center absolute top-16 background-red-700 '>
                    menu
                </div>
            </div>
            <div className="hidden md:flex">D</div>
        </div>
    )
  }
  
  export default Navbar