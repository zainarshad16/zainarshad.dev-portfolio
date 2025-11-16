"use client"
import React from 'react'
import { MdConnectWithoutContact } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const contact = () => {

  const handlechange = (e) => {
    e.preventDefault();

    const form = e.target;

    // Show loading
    const id = toast.loading("Sending...");

    emailjs
      .sendForm(
        "service_bxry766",
        "template_gr3r0d4",
        form,
        "jA_-WJkAoss6pzSIx"
      )
      .then(
        (result) => {
          toast.update(id, {
            render: "Message sent successfully!",
            type: "success",
            isLoading: false,
            autoClose: 2500,
          });

          form.reset();
        },
        (error) => {
          toast.update(id, {
            render: "Failed to send! Try again.",
            type: "error",
            isLoading: false,
            autoClose: 2500,
          });
        }
      );
  };


  return (
    <>
      <div className="container text-white w-screen md:w-[70%] mx-auto mt-10 md:mt-20">
        <div className='flex justify-center items-center gap-1'>
          <MdConnectWithoutContact className="w-15 h-10 text-primary" />
          <h2 className="text-4xl font-bold">Get In Touch</h2>

        </div>

        <div className="text-white  text-center md:w-[70%] mx-auto">
          <div className="text-lg font-normal my-4">Have a project in mind? Looking to collaborate? Drop me a message, and let's create something amazing together.</div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:justify-between md:w-[90%] ">
        <form
          onSubmit={handlechange}
          method="get"
          className="flex flex-col md:w-[60%]  w-[90%] mx-auto text-white gap-4 mt-10 mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-2">

            <div className="flex flex-col md:w-1/2">
              <label className='my-2' htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                className="border border-gray-600 rounded-3xl px-2 py-2 text-white"
                type="text"
                name="firstName"
                id="firstName"
                required
              />
            </div>

            <div className="flex flex-col md:w-1/2">
              <label className='my-2' htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                className="border border-gray-600 rounded-3xl px-2 py-2 text-white"
                type="text"
                name="lastName"
                id="lastName"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              className="border border-gray-600 rounded-3xl px-2 py-2 text-white"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className='my-2' htmlFor="subject">Subject</label>
            <input
              placeholder="Subject"
              className="border border-gray-600 rounded-3xl px-2 py-2 text-white"
              type="text"
              name="subject"
              id="subject"
            />
          </div>

          <div className="flex flex-col">
            <label className='my-2' htmlFor="message">Message</label>
            <textarea
              placeholder="Enter your message..."
              className="border border-gray-600 rounded-3xl px-3 py-2 h-28 text-white"
              name="message"
              id="message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-3 bg-white rounded-3xl cursor-pointer text-black font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="contactinfo text-white container w-[90%] mx-auto md:mt-10 md:w-[35%]">
          <h2 className="text-3xl mb-5 font-bold">Contact Information</h2>
          <div className="github mb-3 items-center text-lg flex gap-2">
            <FaGithub className='h-5 w-5 text-medium' />
            <div className="flex flex-col">

              <span className='text-gray-500 text-medium'>Github</span>
              <span>@zainarshad16</span></div>
          </div>
          <div className="email flex items-center text-lg gap-2">
            <CgMail className='h-5 w-5 text-medium' />
            <div className="flex flex-col ">

              <span className='text-medium text-gray-500'>Gmail</span>
              <span>zainarshad110@gmail.com</span> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
