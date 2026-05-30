import React from 'react';

export default function WorkProcess() {
  return (
    <div className="bg-[#f5f5f2] text-[#111]">
      {/* PROCESS SECTION */}
      <section className="max-w-[1200px] mx-auto py-[100px] px-5 font-sans">
        <div className="text-center mb-[60px]">
          <span className="inline-block px-[18px] py-2 border border-blue-200 rounded-full text-blue-600 bg-blue-50 text-[14px] mb-5">Process</span>
          <h2 className="text-[34px] md:text-[48px] mb-3 text-gray-900 font-normal">Website Development A to Z</h2>
          <p className="text-gray-500">Simple Process, Professional Website Delivery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Large Card */}
          <div className="md:col-span-2 bg-white rounded-[30px] p-[35px] overflow-hidden flex flex-col md:flex-row justify-between items-center gap-[30px]">
            <div className="max-w-full md:max-w-[420px]">
              <span className="text-blue-600 font-semibold text-[14px]">01</span>
              <h3 className="text-[28px] my-[15px] text-gray-900">Domain & Hosting Setup</h3>
              <p className="text-gray-500 leading-[1.7]">
                Secure your business identity with a professional domain
                and reliable hosting solution for speed, security, and uptime.
              </p>


            </div>

            <div className="w-full md:w-auto">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" alt="Hosting" className="w-full md:w-[420px] rounded-[20px] object-cover" />
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-[30px] p-[35px] overflow-hidden">
            <span className="text-blue-600 font-semibold text-[14px]">02</span>
            <h3 className="text-[28px] my-[15px] text-gray-900">UI / UX Design</h3>
            <p className="text-gray-500 leading-[1.7]">
              Wireframes, layouts, typography, colors, and user experience
              planning to create a modern and engaging interface.
            </p>

            <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600" alt="Design" className="w-full mt-[30px] rounded-[20px] object-cover" />
          </div>

          {/* Card 03 */}
          <div className="bg-white rounded-[30px] p-[35px] overflow-hidden">
            <span className="text-blue-600 font-semibold text-[14px]">03</span>
            <h3 className="text-[28px] my-[15px] text-gray-900">Development & Integration</h3>
            <p className="text-gray-500 leading-[1.7]">
              Responsive development with HTML, CSS, JavaScript, CMS,
              CRM integration, APIs, and AI-powered features.
            </p>

            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" alt="Development" className="w-full mt-[30px] rounded-[20px] object-cover" />
          </div>

          {/* Bottom Large Card */}
          <div className="md:col-span-2 bg-white rounded-[30px] p-[35px] overflow-hidden">
            <div className="max-w-full md:max-w-[420px]">
              <span className="text-blue-600 font-semibold text-[14px]">04 - 05</span>
              <h3 className="text-[28px] my-[15px] text-gray-900">Testing, SEO & Launch</h3>
              <p className="text-gray-500 leading-[1.7]">
                Performance optimization, SEO setup, security checks,
                cross-device testing, domain connection, and successful launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="bg-gray-50 p-5 rounded-[18px]">
                <span className="block mb-2.5 text-[14px] text-gray-900">SEO Setup</span>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><span className="block h-full bg-green-500 rounded-full" style={{width: '95%'}}></span></div>
              </div>

              <div className="bg-gray-50 p-5 rounded-[18px]">
                <span className="block mb-2.5 text-[14px] text-gray-900">Mobile Responsive</span>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><span className="block h-full bg-green-500 rounded-full" style={{width: '100%'}}></span></div>
              </div>

              <div className="bg-gray-50 p-5 rounded-[18px]">
                <span className="block mb-2.5 text-[14px] text-gray-900">Speed Optimization</span>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><span className="block h-full bg-green-500 rounded-full" style={{width: '92%'}}></span></div>
              </div>

              <div className="bg-gray-50 p-5 rounded-[18px]">
                <span className="block mb-2.5 text-[14px] text-gray-900">Website Launch</span>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><span className="block h-full bg-green-500 rounded-full" style={{width: '100%'}}></span></div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-[60px]">
          <p className="mb-5 text-gray-500">Trusted by modern businesses worldwide</p>
          <a href="#contact" className="inline-flex items-center gap-2.5 text-white bg-gray-900 px-7 py-4 rounded-full font-semibold transition-transform hover:-translate-y-1">
            Start Your Project →
          </a>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="pt-[110px] pb-[90px]">
        <div className="w-[90%] max-w-[1300px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-[70px]">
            <div>
              <div className="text-[12px] uppercase tracking-[1px] text-gray-500 mb-5 flex items-center gap-2.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                Benefits You'll Get
              </div>
            </div>
            <h2 className="text-[36px] md:text-[44px] lg:text-[58px] leading-[1.05] font-normal tracking-[-0.04em] text-[#161616]">
              Build Modern <br />
              Digital Presence
            </h2>
            <p className="text-gray-600 leading-[1.9] text-[16px]">
              We provide complete web solutions including domain setup,
              hosting configuration, responsive development, SEO optimization,
              and high-performance website delivery for businesses and brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[22px] items-end">
            <div className="rounded-[24px] overflow-hidden relative min-h-[280px] bg-[#161616] text-white p-[28px] flex flex-col justify-end">
              <h4 className="text-[28px] mb-[14px] leading-[1.2] font-normal tracking-[-0.04em]">Fast <br/> Loading</h4>
              <p className="text-[14px] leading-[1.8] text-gray-400">
                Optimized websites with better speed,
                performance, and smooth user experience.
              </p>
            </div>

            <div className="rounded-[24px] overflow-hidden relative min-h-[280px] bg-[#ececf2]">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df0855?q=80&w=1200&auto=format&fit=crop" alt="Coding laptop" className="w-full h-full object-cover absolute inset-0" />
            </div>

            <div className="rounded-[24px] overflow-hidden relative min-h-[280px] bg-white p-[28px] text-[#161616] flex flex-col justify-end border border-gray-200">
              <h4 className="text-[28px] mb-[14px] leading-[1.2] font-normal tracking-[-0.04em]">SEO <br/> Friendly</h4>
              <p className="text-[14px] leading-[1.8] text-gray-600">
                Structured code and optimization
                for better Google visibility.
              </p>
            </div>

            <div className="rounded-[24px] overflow-hidden relative min-h-[280px] bg-[#ececf2]">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop" alt="Code screen" className="w-full h-full object-cover absolute inset-0" />
            </div>

            <div className="rounded-[24px] overflow-hidden relative min-h-[280px] bg-[#ececf2]">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" alt="Office desk" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
