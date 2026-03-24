import { useState } from "react";

export default function SectionsPanel({ data, updateData }) {

  const toggleSection = (key) => {
    updateData({
      sections: {
        ...data.sections,
        [key]: !data.sections[key],
      },
    });
  };

  const addCustomSection = (name) => {
    if (!name.trim()) return;

    updateData({
      sections: {
        ...data.sections,
        custom: [...(data.sections.custom || []), name],
      },
    });
  };

  return (
    <div className="space-y-4">

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={data.sections?.certificates}
          onChange={() => toggleSection("certificates")}
        />
        Certificates
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={data.sections?.languages}
          onChange={() => toggleSection("languages")}
        />
        Languages
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={data.sections?.interests}
          onChange={() => toggleSection("interests")}
        />
        Interests
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={data.sections?.portfolio}
          onChange={() => toggleSection("portfolio")}
        />
        Portfolio
      </label>

      {/* ADD CUSTOM */}
      <CustomSectionInput addCustomSection={addCustomSection} />

    </div>
  );
}

function CustomSectionInput({ addCustomSection }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add custom section"
        className="w-full border p-2 rounded"
      />

      <button
        onClick={() => {
          addCustomSection(value);
          setValue("");
        }}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Add Section
      </button>
    </div>
  );
}