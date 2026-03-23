export default function TemplateModern({ data, styles }) {
  return (
    <div className="flex">

      {/* LEFT */}
      <div
        className="w-[260px] text-white p-6"
        style={{ background: styles.primary }}
      >
        <div className="text-center mb-6 text-3xl">👤</div>

        <h3 className="font-semibold mb-2">Contact</h3>
        <p className="text-sm">{data.email}</p>
        <p className="text-sm">{data.phone}</p>

        <h3 className="font-semibold mt-6 mb-2">Education</h3>
        {data.educationList?.map((edu, i) => (
          <div key={i} className="text-sm mb-2">
            <p>{edu.year}</p>
            <p>{edu.degree} - {edu.university}</p>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold text-center">
          {data.name}
        </h1>

        <p className="text-center text-gray-500 mb-4">
          {data.role}
        </p>

        <h3 style={{ color: styles.primary }}>Profile</h3>
        <p>{data.summary}</p>

        <h3 className="mt-4" style={{ color: styles.primary }}>
          Skills
        </h3>
        <ul>
          {data.skills?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3 className="mt-4" style={{ color: styles.primary }}>
          Projects
        </h3>
        {data.projects?.map((p, i) => (
          <div key={i}>
            <p className="font-semibold">{p.title}</p>
            <p className="text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}