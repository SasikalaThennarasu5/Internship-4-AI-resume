export default function TemplateCreative({ data, styles }) {
  return (
    <div className="flex">

      {/* LEFT */}
      <div
        className="w-1/3 text-white p-6"
        style={{ background: styles.primary }}
      >
        <h2 className="text-xl font-bold">
          {data.name || "Your Name"}
        </h2>

        <p className="text-sm mt-2">{data.email}</p>
        <p className="text-sm">{data.phone}</p>

        <h3 className="mt-6 font-semibold">Skills</h3>
        <ul className="text-sm mt-2">
          {data.skills?.map((s, i) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="w-2/3 p-6">

        <h3 style={{ color: styles.primary }}>Profile</h3>
        <p className="text-sm mb-4">
          {data.summary || "Your summary..."}
        </p>

        <h3 style={{ color: styles.primary }}>Projects</h3>
        {data.projects?.map((p, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">{p.title}</p>
            <p className="text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}