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
    <div className="py-20 px-6 bg-background">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Why Job Seekers Love{" "}
        <span className="text-primary">SmartCV</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/jobseeker.png"
            alt="job seeker"
            className="w-80 md:w-96 object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 w-full max-w-md">

          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >

              {/* ICON CIRCLE */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* TEXT */}
              <p className="text-sm md:text-base font-medium">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}