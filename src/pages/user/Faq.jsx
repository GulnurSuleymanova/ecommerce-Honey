import React, { useState } from 'react';
import bgImage from "../../assets/slider4.webp";
import { ChevronDown, Heart, Leaf, Shield, Sparkles } from 'lucide-react';
import bee from "../../assets/icon-footer.png"
const Faq = () => {
    const [openItem1, setOpenItem1] = useState(true);
  const [openItem2, setOpenItem2] = useState(false);
  const [openItem3, setOpenItem3] = useState(false);
  const [openItem4, setOpenItem4] = useState(false);
  return (
    <div>
         <section
              className="h-[400px] bg-cover bg-center -mt-30"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="h-full flex justify-center items-center ">
                <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">FAQ</h1>
                <img src={bee} alt="" className='w-26' />
              </div>
            </section>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        <section className="w-full lg:w-2/3">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="space-y-4">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button
              onClick={() => setOpenItem1(!openItem1)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-amber-100/50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-gray-800 text-lg">
                  Is your honey completely natural?
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                  openItem1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openItem1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <div className="pl-8  leading-relaxed">
                  Yes, our honey is 100% natural and additive-free. Our bees receive no chemical intervention and the honey reaches you without any processing. Our hives are located in organically certified flower fields.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button
              onClick={() => setOpenItem2(!openItem2)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-amber-100/50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-gray-800 text-lg">
                  How do you guarantee honey quality?
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                  openItem2 ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openItem2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <div className="pl-8  leading-relaxed">
                  Each batch of our honey undergoes laboratory testing. Pollen analysis, moisture content, HMF value and antibiotic residue tests are performed. We also have ISO 22000 quality certificates.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button
              onClick={() => setOpenItem3(!openItem3)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-amber-100/50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-gray-800 text-lg">
                  What flower honey varieties are available?
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                  openItem3 ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openItem3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <div className="pl-8  leading-relaxed">
                  We have chestnut honey, pine honey, lavender honey, acacia honey, wildflower honey and strained honey varieties. Each has its own unique taste and health benefits. We also have seasonal specialty honeys available.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button
              onClick={() => setOpenItem4(!openItem4)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-amber-100/50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-gray-800 text-lg">
                  What are the health benefits of honey?
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                  openItem4 ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${
              openItem4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <div className="pl-8  leading-relaxed">
                  Our honey contains natural antioxidants, vitamins and minerals. It strengthens the immune system, aids digestion and is a natural energy source. It also has anti-inflammatory and antibacterial properties.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

        <div className="w-full md:w-1/3">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWwzMWEwNzFobzQ0OXVsNG82dGE3aWttdXlqZjNoM3FsMmR6ZXpzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XOwupRBdM5IaDMusoD/giphy.gif"
            alt="FAQ animation"
            className="w-full max-w-md h-auto mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
