export default function TemplateCreative({ data, styles, goToStep }) {
  return (
    <div className="flex">

      {/* LEFT */}
      <div
        className="w-1/3 text-white p-6"
        style={{ background: styles.primary }}
      >
        {/* NAME + CONTACT */}
        <div
          onClick={() => goToStep(6)}
          className="cursor-pointer hover:opacity-80"
        >
          <h2 className="text-xl font-bold">
            {data.name || "Your Name"}
          </h2>

          <p className="text-sm mt-2">
            {data.email || "email@example.com"}
          </p>
          <p className="text-sm">
            {data.phone || "1234567890"}
          </p>
        </div>

        {/* ROLE */}
        <div
          onClick={() => goToStep(1)}
          className="cursor-pointer hover:opacity-80 mt-4"
        >
          <p className="text-sm font-medium">
            {data.role || "Your Role"}
          </p>
        </div>

        {/* SKILLS */}
        <div
          onClick={() => goToStep(4)}
          className="cursor-pointer hover:opacity-80 mt-6"
        >
          <h3 className="font-semibold">Skills</h3>

          {data.skills?.length > 0 ? (
            <ul className="text-sm mt-2">
              {data.skills.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm opacity-70 mt-2">Add skills</p>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-2/3 p-6 text-gray-800">

        {/* PROFILE */}
        <div
          onClick={() => goToStep(6)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded mb-4"
        >
          <h3 style={{ color: styles.primary }}>Profile</h3>
          <p className="text-sm">
            {data.summary || "Add your professional summary"}
          </p>
        </div>

        {/* EXPERIENCE */}
        <div
          onClick={() => goToStep(2)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded mb-4"
        >
          <h3 style={{ color: styles.primary }}>Experience</h3>
          <p className="text-sm">
            {data.experienceLevel || "Add experience"}
          </p>
        </div>

        {/* EDUCATION */}
        <div
          onClick={() => goToStep(3)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded mb-4"
        >
          <h3 style={{ color: styles.primary }}>Education</h3>

          {data.education?.length > 0 ? (
            data.education.map((edu, i) => (
              <div key={i} className="text-sm mb-2">
                <p className="font-semibold">
                  {edu.degree} - {edu.field}
                </p>
                <p>{edu.university}</p>
                <p>
                  {edu.year} | CGPA: {edu.cgpa}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">Add education</p>
          )}
        </div>

        {/* PROJECTS */}
        <div
          onClick={() => goToStep(5)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded"
        >
          <h3 style={{ color: styles.primary }}>Projects</h3>

          {data.projects?.length > 0 ? (
            data.projects.map((p, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{p.title}</p>

                <p className="text-sm text-gray-600">
                  {p.tools}
                </p>

                <p className="text-sm text-gray-500">
                  {p.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">Add projects</p>
          )}
        </div>

      </div>
    </div>
  );
}