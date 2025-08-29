import React from "react";
import bgImage from "../../assets/slider4.webp";
import gif1 from "../../assets/about.gif";
import gif2 from "../../assets/about2.gif";
import quo from '../../assets/quote.webp'
import quote from '../../assets/icon_quote.webp'
import bee from "../../assets/icon-footer.png"

const About = () => {
  return (
    <div>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center ">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">About Us</h1>
          <img src={bee} alt="" className='w-26' />

        </div>
      </section>
      <section className="bg-[#F1F1F1] rounded-3xl flex flex-row items-center justify-center gap-4 px-6 py-10 max-w-5xl mx-auto my-16 shadow-md text-center -mt-9">
        <img src={quo} alt="quote decoration" className="w-16 h-auto" />
        <img src={quote} alt="quote icon" className="w-10 h-auto" />
        <p className="text-[#3a1e0d] text-lg font-medium tracking-wide leading-relaxed">
          Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy!
          Went from NYC to Miami without ever taking it off. Super cute!!
        </p>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6  max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-medium tracking-wide text-[#3a1e0d]">Why Choose Us?</h3>
          <p className="text-lg font-medium tracking-wide leading-relaxed">
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id
            scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non
            tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris
            risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum
            varius tristique.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={gif1} alt="About us gif" className="" />
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img src={gif2} alt="About us gif" className="" />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-medium tracking-wide text-[#3a1e0d]">Trusted online shopping
          </h3>
          <p className="text-lg font-medium tracking-wide leading-relaxed">
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
          </p>
        </div>

      </section>
    </div>
  );
};

export default About;
