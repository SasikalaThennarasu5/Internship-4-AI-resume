export default function WhyLove() {
  const items = [
    {
      text: "AI-powered resume writing assistance",
      icon: "/images/ai.png",
    },
    {
      text: "Professional ATS-friendly templates",
      icon: "/images/ats.png",
    },
    {
      text: "Simple step-by-step resume builder",
      icon: "/images/steps.png",
    },
    {
      text: "Fast and easy resume creation",
      icon: "/images/fast.png",
    },
    {
      text: "Trusted by thousands of job seekers",
      icon: "/images/users.png",
    },
  ];

  return (
    <div className="py-24 px-6 bg-background overflow-hidden">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
        Why Job Seekers Love{" "}
        <span className="text-primary">SmartCV</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">

        {/* LEFT IMAGE WITH CIRCLE DESIGN */}
        <div className="relative flex justify-center items-center">

          {/* ORANGE CIRCLE BACK */}
          <div className="absolute w-80 h-80 bg-orange-400 rounded-full z-0"></div>

          {/* PURPLE ARC */}
          

          {/* IMAGE */}
          <img
            src="/images/jobseeker.png"
            alt="job seeker"
            className="relative w-72 md:w-80 z-10 drop-shadow-xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full max-w-md h-[400px]">

  {items.map((item, i) => {
    const positions = [
      "top-0 left-10",
      "top-20 left-20",
      "top-40 left-40",
      "top-60 left-20",
      "top-80 left-10",
    ];

    return (
      <div
        key={i}
        className={`group absolute ${positions[i]} 
        flex items-center gap-4 
        bg-gradient-to-r from-purple-500 to-purple-600 
        text-white px-6 py-3 rounded-full shadow-md 
        transition-all duration-400 cursor-pointer
        hover:scale-105 hover:shadow-[0_10px_25px_rgba(124,58,237,0.4)]`}
      >

        {/* ICON */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md 
          transition-transform duration-300 group-hover:scale-110">

          <img
            src={item.icon}
            alt="icon"
            className="w-6 h-6 object-contain"
          />
        </div>

        {/* TEXT */}
        <p className="text-sm md:text-base font-medium whitespace-nowrap">
          {item.text}
        </p>
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
}