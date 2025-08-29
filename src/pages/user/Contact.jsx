import React from 'react';
import bgImage from "../../assets/slider4.webp";
import {FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import bee from "../../assets/icon-footer.png"

const Contact = () => {
  return (
    <div>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center ">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">Contact Us</h1>
          <img src={bee} alt="" className='w-26' />

        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-5">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHQ2OTI2eTJnMTd4eGswZGpqdXUyOHQ1cWlwNmtobzF4NTJkZnQzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XysxVxrjeZTF5C2fBY/giphy.gif"
            alt="Contact gif animation"
            className="w-full max-w-md mx-auto h-auto rounded-md"
          />
        </div>

        <form className="space-y-6  p-6 ">
          <div>
            <label htmlFor="name" className="text-sm ">Full Name</label>
            <input id="name" type="text" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm ">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm ">Message</label>
            <textarea id="message" rows="4" className="w-full p-3 rounded border border-gray-300"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3a1e0d] hover:bg-[#5b2f1a] text-white p-3 font-bold tracking-wide uppercase rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row gap-8 mb-9">


        <iframe
          title="Google Maps location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354429.2434464622!2d-74.60338656028703!3d40.69598321508018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e1!3m2!1str!2saz!4v1753288728503!5m2!1str!2saz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg shadow-lg md:w-1/2"
        />
        <div className="flex flex-col space-y-4  md:w-1/2 px-8">
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-[#3a1e0d]" size={18} />
            <span>123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</span>
          </p>
          <p className="flex items-start gap-2">
            <FaEnvelope className="text-[#3a1e0d]" size={18} />
            <span>support@domain.com</span>
          </p>
          <p className="flex items-start gap-2">
            <FaPhone className="text-[#3a1e0d]" size={18} />
            <span>(012)-345-67890</span>
          </p>
          <p className="flex items-start gap-2">
            <FaClock className="text-[#3a1e0d]" size={18} />
            <span>Open daily: 11:00 AM – 7:00 PM</span>
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]">
              <FaXTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
