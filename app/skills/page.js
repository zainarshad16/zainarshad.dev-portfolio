import React from 'react'
import { HiChip } from 'react-icons/hi'
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaBoxesStacked } from "react-icons/fa6";

const skills = () => {
  return (
    <>
      <div className="container text-white md:w-[60%] mx-1 md:mx-auto mt-10 md:mt-20">
        <div className='flex justify-center items-center gap-2'>

          <HiChip className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">
            Skills & Technologies
          </span>
        </div>

        <div className="text-white text-center md:w-[80%] mx-auto">
          <h2 className="text-4xl font-bold mt-5">Technical Proficiency</h2>
          <div className="text-lg font-normal my-4">A comprehensive overview of my technical expertise across various development domains and tools.</div>
        </div>
      </div>

      <div className="logo flex items-center my-10 mx-5 gap-4 text-white">
        <IoCodeSlashSharp className="w-8 h-8 text-white" />
        <div className='flex flex-col  gap-1'>
          <span className='font-bold text-2xl'>Full Stack Development</span>
          <span className='text-gray-400'>Modern web interfaces</span>
        </div>
      </div>

      <div className="cards text-white grid grid-cols-1 md:grid-cols-2 gap-2 mx-5">
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">MERN</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line1 h-1.5 bg-blue-500 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Advance</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">REACT</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line1 h-1.5 bg-blue-500 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Advanced</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">DSA</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line h-1.5 bg-blue-500 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Intermediate</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">OOP</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line3 h-1.5 bg-blue-500 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Expert</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">My-SQL</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line h-1.5 bg-blue-500 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Intermediate</span>
          </div>
        </div>
        
      </div>

      <div className="logo flex items-center my-10 mx-5 gap-4 text-white">
        <FaBoxesStacked className="w-8 h-8 text-white" />
        <div className='flex flex-col  gap-1'>
          <span className='font-bold text-2xl'>Programs & Tools</span>
          <span className='text-gray-400'>Development & Productivity Tools</span>
        </div>
      </div>

      <div className="cards text-white grid grid-cols-1 md:grid-cols-2 gap-2 mx-5">
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">Git</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line3 h-1.5 bg-yellow-600 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Advanced</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">Visual Studio Code</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line3 h-1.5 bg-yellow-600 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Advanced</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">Postman</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line3 h-1.5 bg-yellow-600 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Advanced</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">Adobe Photoshop</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line h-1.5 bg-yellow-600 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Intermediate</span>
          </div>
        </div>
        <div className="card p-3 bg-gray-800 rounded-lg">
          <div className="skill my-2 font-bold">Adobe Lightroom</div>
          <div className="level h-1 bg-gray-700 rounded-b-lg overflow-hidden">
            <div className="blue-line h-1.5 bg-yellow-600 w-0"></div>
          </div>

          <div className="bottom flex justify-between text-gray-400">
            <span className="text-sm">Proficiency</span>
            <span className="text-sm">Intermediate</span>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default skills
