export default function TemplateMinimal({ data, styles }) {
  return (
    <div className="p-8">

      <h1
        className="text-2xl font-bold"
        style={{ color: styles.primary }}
      >
        {data.name || "Your Name"}
      </h1>

      <p className="text-sm text-gray-600">
        {data.email || "email@example.com"} | {data.phone || "1234567890"}
      </p>

      <hr className="my-4" />

      {/* SUMMARY */}
      <h3 style={{ color: styles.primary }}>Profile</h3>
      <p className="text-sm mb-4">
        {data.summary || "Your summary..."}
      </p>

      {/* SKILLS */}
      <h3 style={{ color: styles.primary }}>Skills</h3>
      <ul className="text-sm mb-4">
        {data.skills?.map((s, i) => (
          <li key={i}>• {s}</li>
        ))}
      </ul>

      {/* PROJECTS */}
      <h3 style={{ color: styles.primary }}>Projects</h3>
      {data.projects?.map((p, i) => (
        <div key={i} className="mb-2">
          <p className="font-semibold">{p.title}</p>
          <p className="text-sm">{p.description}</p>
        </div>
      ))}
    </div>
  );
}