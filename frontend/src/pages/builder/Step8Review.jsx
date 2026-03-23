import { useState } from "react";
import html2pdf from "html2pdf.js";
import ResumePreview from "../../components/resume/ResumePreview";
import Sidebar from "../../components/resume/Sidebar";
import TemplatesPanel from "../../components/resume/TemplatesPanel";
import DesignPanel from "../../components/resume/DesignPanel";
import SectionsPanel from "../../components/resume/SectionsPanel";

export default function Step8Review({ back, data }) {
  const downloadPDF = () => {
  const element = document.getElementById("resume");

  if (!element) {
    alert("Resume not found ❌");
    return;
  }

  html2pdf()
    .from(element)
    .set({
      margin: 0.3,
      filename: "My_Resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4" },
    })
    .save();
};
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [activeTab, setActiveTab] = useState("templates");

  const [styles, setStyles] = useState({
    primary: "#6C3BFF",
    font: "Inter",
    fontSize: "16px",
    lineHeight: "1.5",
  });

  return (
    <div className="min-h-screen bg-[#f6f6f8] p-8">

      <div className="grid grid-cols-[260px_auto_260px] gap-6">

        {/* LEFT */}
        <div className="bg-white rounded-xl shadow flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1 p-4">
            <div className="flex-1 p-4 overflow-y-auto">

  {/* TEMPLATES */}
  {activeTab === "templates" && (
    <TemplatesPanel
      selected={selectedTemplate}
      setSelected={setSelectedTemplate}
    />
  )}

  {/* DESIGN */}
  {activeTab === "design" && (
    <DesignPanel styles={styles} setStyles={setStyles} />
  )}

  {/* SECTIONS */}
  {activeTab === "sections" && (
    <SectionsPanel />
  )}

</div>
          </div>
        </div>

        {/* CENTER */}
        <ResumePreview
          template={selectedTemplate}
          data={data}
          styles={styles}
        />

        {/* RIGHT */}
        <div>
          <button className="w-full border p-3 mb-2">Download</button>
          <button className="w-full border p-3 mb-2">Print</button>
        </div>

      </div>
    </div>
  );
}