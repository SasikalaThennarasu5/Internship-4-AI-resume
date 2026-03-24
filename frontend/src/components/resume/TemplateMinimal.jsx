export default function TemplateMinimal({ data, styles, goToStep }) {
  return (
    <div className="p-8 text-gray-800">

      {/* NAME + CONTACT */}
      <div
        onClick={() => goToStep(6)}
        className="cursor-pointer hover:bg-purple-50 p-3 rounded transition"
      >
        <h1
          className="text-2xl font-bold"
          style={{ color: styles.primary }}
        >
          {data.name || "Your Name"}
        </h1>

        <p className="text-sm text-gray-600">
          {data.email || "email@example.com"} |{" "}
          {data.phone || "1234567890"}
        </p>
      </div>

      <hr className="my-4" />

      {/* ROLE */}
      <div
        onClick={() => goToStep(1)}
        className="cursor-pointer hover:bg-purple-50 p-2 rounded transition mb-3"
      >
        <p className="text-sm font-medium" style={{ color: styles.primary }}>
          {data.role || "Your Role"}
        </p>
      </div>

      {/* SUMMARY */}
      <div
        onClick={() => goToStep(6)}
        className="cursor-pointer hover:bg-purple-50 p-2 rounded transition mb-4"
      >
        <h3 style={{ color: styles.primary }}>Profile</h3>
        <p className="text-sm">
          {data.summary || "Add your professional summary"}
        </p>
      </div>

      {/* EXPERIENCE */}
      <div
        onClick={() => goToStep(2)}
        className="cursor-pointer hover:bg-purple-50 p-2 rounded transition mb-4"
      >
        <h3 style={{ color: styles.primary }}>Experience</h3>
        <p className="text-sm">
          {data.experienceLevel || "Add experience"}
        </p>
      </div>

      {/* EDUCATION */}
      <div
        onClick={() => goToStep(3)}
        className="cursor-pointer hover:bg-purple-50 p-2 rounded transition mb-4"
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

      {/* SKILLS */}
      <div
        onClick={() => goToStep(4)}
        className="cursor-pointer hover:bg-purple-50 p-2 rounded transition mb-4"
      >
        <h3 style={{ color: styles.primary }}>Skills</h3>

        {data.skills?.length > 0 ? (
          <ul className="text-sm">
            {data.skills.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Add skills</p>
        )}
      </div>

      {/* PROJECTS */}
      <div
        onClick={() => goToStep(5)}
        className="cursor-pointer hover:bg-purple-50 p-2 rounded transition"
      >
        <h3 style={{ color: styles.primary }}>Projects</h3>

        {data.projects?.length > 0 ? (
          data.projects.map((p, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-gray-600">
                {p.tools}
              </p>
              <p className="text-sm">{p.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Add projects</p>
        )}
      </div>

    </div>
  );
}