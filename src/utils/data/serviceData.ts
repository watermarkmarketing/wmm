// data/serviceData.ts
interface ServiceDataEntry {
  content?: string[];
  imageUrl?: string;
  videoUrl?: string;
  desc?: string;
}

interface ServiceData {
  [key: string]: ServiceDataEntry;
}

export const serviceData: ServiceData = {
  "Planning And Strategy": {
    content: [
      "Fundamentally, strategy is a series of plans, executed seamlessly one after another to get the desired result. So, in an interpolated world, where every data point, touchpoint and emotional point are interpolated – Planning and Strategy becomes Strategic Planning.",
      "And that’s what we practice. Designing Customer Journey Maps, identifying emotional touchpoints and then interpolating all the touchpoints with Customer Experience Maps form the basis of our Strategic Planning.",
      "Depending on your individual requirement, our goals might include increasing revenue, growing your brand awareness, increasing your competitive advantage, or launching new products and services.",
    ],
    imageUrl:
      "https://watermarkexperience.in/wp-content/uploads/2024/01/WMM-Planning-Strategy_header_image.png",
  },
  "Customer Success": {
    content: [
      "Is just another word for a great customer experience. Exceptional user experiences feel intuitive. We get close to your customers to find out what they need. Then design an experience service for maximum adoption, engagement and enjoyment.",
      "Our customer success team will go to great lengths to strengthen the harmony between you, your partners & customers, artists and vendors to create richer experiences, time and again, thereby causing ripple effects of awe and impact.",
      "We believe in a give-and-take-learning-oriented relationship with you.",
      "Always open to raising the bar and colouring outside the lines, we believe in the need to be different. It’s not just our way of working, it’s a culture that we live by.",
      "Watermark experience is now leaning towards creating effective ROI led experiences using marketing innovation and breakthrough communication in the digital age. We use a three-pronged combination approach of talent, technology and creative power to transform brands and organisations.",
      "So, whether you’re a seasoned pro or just starting out, we would be happy to connect with you.",
      "Drop us a line at contact@watermarkexperience.com",
    ],
    desc: "Client Acquisition, Client Servicing, Relationship Management",
    videoUrl:
      "https://registrationexpress.in/Watermark_Animation_Videos/Air_Baloon_2d_Animation.mp4",
  },
  "Content And Creative": {
    content: [
      "Dreamers, challengers, risk-takers. Nothing about what we do or who we are is ordinary.",
      "Every campaign begins with a great story and this behind-the-scenes crew is always on the clock to make it a reality.",
    ]
  },
  "Wm Digital": {
    content: [
      "Did you know? 48% of consumers say they’re happy to interact with AI if it creates a better customer experience. Seven out of ten consumers believe AI has the potential to improve customer experience.",
      "Watermark AI (WAI) is exploring ways to bring to life AI-related concepts to transform your brand-experience landscape in hybrid environments.",
      "AI in Design | AI-Driven Consumer Insights | Personalized Experiences | Dynamic Content Creation | Augmented, Virtual Reality, Mixed Reality Experiences | Chatbots and Conversational Interfaces | Interface free experiences | AI matchmaking | The Learning",
      "We will work shoulder-to-shoulder with you, to uncover, build & execute, and leverage AI ",
    ],
  },
  "Database And Contact Centre Management": {
    desc: "We help our clients better understand their target audience, measure the success of their events, and identify new business opportunities with our Database and Centre offerings.",
  },
  "Experiential And Events": {
    desc: "The events industry has undergone a sea of change, from being solely execution-based to now strategy-driven and outcome-based. We've got news for you! Watermark has been preparing for this for well over two years now. We are not only geared to go but have already been dabbling in executing outcome-led campaigns and events for our clients, with great success.",
  },
  "Default Title": {
    content: [
      "Welcome to our services page. Please select a service to see more details.",
    ],
    imageUrl:
      "https://watermarkexperience.in/wp-content/uploads/2024/01/default-service-image.png",
  },
};
