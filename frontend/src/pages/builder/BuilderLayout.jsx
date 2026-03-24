
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import Step1Job from "./Step1Job";
import Step2Experience from "./Step2Experience";
import Step3Education from "./Step3Education";
import Step4Skills from "./Step4Skills";
import Step5Projects from "./Step5Projects";
import Step6Personal from "./Step6Personal";
import Step7Template from "./Step7Template";
import Step8Review from "./Step8Review";

export default function BuilderLayout() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    role: "",
    experienceLevel: "",
    education: {
      university: "",
      degree: "",
      field: "",
      year: "",
    },
    skills: [],
    hasProjects: "",
    template: "",
    sections: {
  certificates: false,
  languages: false,
  interests: false,
  portfolio: false,
  custom: [] // for user-added sections
}
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const goToStep = (stepNumber) => {
  setStep(stepNumber);
};

  const updateData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  console.log("GLOBAL FORM DATA:", formData);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        {step === 1 && <Step1Job next={next} updateData={updateData} />}
        {step === 2 && <Step2Experience next={next} back={back} updateData={updateData} data={formData} />}
        {step === 3 && <Step3Education next={next} back={back} updateData={updateData} data={formData} />}
        {step === 4 && <Step4Skills next={next} back={back} updateData={updateData} data={formData} />}
        {step === 5 && <Step5Projects next={next} back={back} updateData={updateData} />}
        {step === 6 && <Step6Personal next={next} back={back} updateData={updateData} data={formData} />}
        {step === 7 && <Step7Template next={next} back={back} updateData={updateData} data={formData}/>}
        {step === 8 && <Step8Review back={back} data={formData} updateData={updateData} goToStep={goToStep} />}
      </div>

      <Footer />
    </div>
  );
}