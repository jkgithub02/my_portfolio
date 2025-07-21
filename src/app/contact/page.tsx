import Link from "next/link";
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl text-center font-bold mb-20">
        Let's get in touch!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <h2 className="text-2-xl font-semibold mb-4">
          Get in Touch
        </h2>
        <p className="text-secondary md:w-2/3">I'm open to discussing creative ideas,
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
      </div>

      {/* Contact Form */}
      <div className="bg-indigo-200">
        <div className="bg-white">
          
        </div>

      </div>
    </div>
  )
}

export default ContactPage;