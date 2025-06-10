import React from "react";

const WMDigital2: React.FC = () => {
  return (
    <div className="bg-gray-100 text-center text-gray-800">
      {/* Header */}
      <div className="bg-[#2B2B2B] text-white py-10 px-6">
        <h1 className="text-4xl font-bold">Digital Marketing</h1>
        <p className="text-sm mt-4 max-w-2xl mx-auto">
          Making a “Mark” in the world of Digital Marketing requires experience, expertise and enthusiasm. Our team has it all. Watermark Experience will grow your brand and sales with the Digital Marketing of 2025.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-white py-10 px-4">
        <h2 className="text-xl font-semibold mb-6">How do we help your business?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Lead Generation", "Sales", "Brand Awareness", "Engagement", "Traffic"].map(item => (
            <span key={item} className="text-sm md:text-base">{item}</span>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
            <span className="text-gray-600">[Placeholder Image]</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-10 px-4 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Us?</h2>
        <p className="mb-4">There are thousands of agencies and lakhs of professionals providing Digital Marketing services.</p>
        <p className="mb-4">Every user comes across hundreds of digital ads, social media posts/reels, google results which promise the website has what exactly what the user is looking for but how many get the engagement, clicks and conversions?</p>
        <p className="mb-4">Answer, very less.</p>
        <p className="mb-4">Why? Because Digital Marketing doesn’t start with campaigns and creatives, it starts with understanding the needs of the customers, crafting content which will solve their problems, running campaigns who reach the right audience and creatives that makes users to stop and take a look.</p>
        <p>Digital Marketing starts with psychology and ends with technology and we know it well, really well.</p>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 bg-gray-300 flex items-center justify-center mb-2">Image</div>
          <h3 className="font-semibold">10 years of experience</h3>
          <p className="text-sm">Description</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 bg-gray-300 flex items-center justify-center mb-2">Image</div>
          <h3 className="font-semibold">20+ Clients</h3>
          <p className="text-sm">Description</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 bg-gray-300 flex items-center justify-center mb-2">Image</div>
          <h3 className="font-semibold">Expert Team</h3>
          <p className="text-sm">Description</p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-24 bg-gray-300 flex items-center justify-center mb-2">Image</div>
          <h3 className="font-semibold">Proven Track Record</h3>
          <p className="text-sm">Description</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#E0F0F0] py-10 px-4">
        <h2 className="text-2xl font-semibold mb-4">What our clients feel</h2>
        <div className="bg-[#CCE0E0] py-6 px-4 max-w-3xl mx-auto rounded">
          <p>Testimonial 1</p>
        </div>
      </div>

      {/* Footer
      <footer className="bg-black text-white py-8 px-4 text-center">
        <h2 className="text-lg font-semibold">Watermark Experience</h2>
        <div className="flex justify-center gap-4 mt-4">
          <span className="text-sm">LinkedIn</span>
          <span className="text-sm">Facebook</span>
          <span className="text-sm">Instagram</span>
          <span className="text-sm">YouTube</span>
        </div>
        <p className="text-xs mt-4">©2025 Watermark. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default WMDigital2;
