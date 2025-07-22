'use client'

import Link from "next/link";
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import {fadeInDown, pageTransition, slideInLeft, slideInRight } from "../utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name:"",
    email:"",
    message:""
  })

  const[status, setStatus]= useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData( prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async(e: React.FormEvent) =>{
    e.preventDefault();
    setStatus("loading");
    try {
      const response= await fetch("https://formspree.io/f/mgvzojjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok){
        throw new Error("Failed to send message!")
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  }

  return (
    <motion.div {...pageTransition} className="container max-w-7xl mx-auto py-20">
      <motion.h1 {...fadeInDown} transition={{delay:0.5}} className="text-4xl text-center font-bold mb-20">
        Let&apos;s get in touch!
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div {...slideInRight} transition={{delay:0.8}} className="space-y-8">
          <h2 className="text-2-xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-secondary md:w-2/3">I&apos;m open to discussing creative ideas,
            or opportunities to contribute to your goals!</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">
                  Email:
                </h3>
                <Link href="mailto:jkwork02@gmail.com" className="text-secondary hover:text-primary">
                  jkwork02@gmail.com</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">
                  Whatsapp:
                </h3>
                <Link href="tel:+60168078535" className="text-secondary hover:text-primary">
                  +6016-807-8535</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationArrow className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">
                  Location:
                </h3>
                <p className="text-secondary hover:text-primary">
                  Malaysia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div {...slideInLeft} transition={{delay:0.8}} className="bg-indigo-200 dark:border-0 dark:bg-black/50 p-6 rounded-lg shadow-md">
          <div className='bg-white dark:border-0 dark:bg-black/30 rounded-lg shadow-md p-10'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input value={formData.name} onChange={handleChange} required type="text" id="name" name="name" placeholder="Enter your name" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                bg-white dark:bg-black/50 focus:ring-2 placeholder:text-dark/50 dark:placeholder:text-white/50 focus:ring-primary focus:border-0"/>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input value={formData.email} onChange={handleChange} required type="email" id="email" name="email" placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                bg-white dark:bg-black/50 focus:ring-2 placeholder:text-dark/50 dark:placeholder:text-white/50 focus:ring-primary focus:border-0"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea value={formData.message} onChange={handleChange} rows={4} required id="message" name="message"  placeholder="Drop a message..." 
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                bg-white dark:bg-black/50 focus:ring-2 placeholder:text-dark/50 dark:placeholder:text-white/50 focus:ring-primary focus:border-0"/>
              </div>

              <button type="submit" className="w-full btn btn-primary">
                {status === "loading" ? "Sending ..." : "Send Message"}
              </button>

              {
                status === "success" && (
                  <p className="text-green-500 text-center">Message sent!</p>
                )
              }

              {
                status === "error" && (
                  <p className="text-red-500 text-center">Failed to send message, please try again.</p>
                )
              }
            </form>
          </div>
        </motion.div>
      </div>


    </motion.div>
  )
}

export default ContactPage;