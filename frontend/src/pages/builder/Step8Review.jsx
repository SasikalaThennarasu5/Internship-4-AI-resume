import { useState } from "react";
import html2pdf from "html2pdf.js";

import ResumePreview from "../../components/resume/ResumePreview";
import Sidebar from "../../components/resume/Sidebar";
import TemplatesPanel from "../../components/resume/TemplatesPanel";
import DesignPanel from "../../components/resume/DesignPanel";
import SectionsPanel from "../../components/resume/SectionsPanel";

export default function Step8Review({ back, data, updateData, goToStep }) {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [activeTab, setActiveTab] = useState("templates");

  const [styles, setStyles] = useState({
    primary: "#6C3BFF",
    font: "Inter",
    fontSize: "14px",
    lineHeight: "1.6",
  });

  

  // ✅ DOWNLOAD PDF (FIXED + HIGH QUALITY)
  const downloadPDF = () => {
    const element = document.getElementById("resume");

    if (!element) {
      alert("Resume not found ❌");
      return;
    }

    html2pdf()
      .set({
        margin: 0,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  // ✅ PRINT
  const handlePrint = () => {
    window.print();
  };

  console.log("Selected Template:", selectedTemplate);

  return (
    <div className="min-h-screen bg-[#f4f5f8] p-6">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Review & Edit{" "}
          <span className="text-primary">Your Resume</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Make final changes before downloading
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-[280px_1fr_220px] gap-6 max-w-7xl mx-auto">

        {/* ================= LEFT PANEL ================= */}
        <div className="bg-white rounded-2xl shadow flex overflow-hidden">

          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1 p-4 overflow-y-auto">

            {activeTab === "templates" && (
              <TemplatesPanel
                selected={selectedTemplate}
                setSelected={setSelectedTemplate}
              />
            )}

            {activeTab === "design" && (
              <DesignPanel styles={styles} setStyles={setStyles} />
            )}

            {activeTab === "sections" && (
  <SectionsPanel data={data} updateData={updateData} />
)}
          </div>
        </div>

        {/* ================= CENTER (RESUME) ================= */}
        <div className="flex justify-center">

          {/* 🔥 IMPORTANT: ID = resume */}
          <div className="bg-white shadow-xl rounded-md overflow-hidden">

            <ResumePreview
              template={selectedTemplate}
              data={data}
              styles={styles}
              goToStep={goToStep}
              
            />
          </div>

        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="flex flex-col gap-4">

          <button
            onClick={downloadPDF}
            className="w-full bg-white border p-3 rounded-lg shadow hover:shadow-md transition flex items-center justify-center gap-2"
          >
            ⬇ Download
          </button>

          <button
            onClick={handlePrint}
            className="w-full bg-white border p-3 rounded-lg shadow hover:shadow-md transition flex items-center justify-center gap-2"
          >
            🖨 Print
          </button>

          <button
            className="w-full bg-white border p-3 rounded-lg shadow hover:shadow-md transition flex items-center justify-center gap-2"
          >
            ✉ Share Email
          </button>

          <button
            className="w-full bg-gradient-to-r from-primary to-purple-600 text-white p-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            💾 Save
          </button>

          {/* BACK */}
          <button
            onClick={back}
            className="mt-6 text-gray-500 text-sm hover:text-black"
          >
            ← Back to edit
          </button>

        </div>
      </div>
    </div>
  );
}