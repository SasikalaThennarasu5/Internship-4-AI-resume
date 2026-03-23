export default function SectionsPanel() {
  return (
    <div className="space-y-4">

      <label className="flex gap-2">
        <input type="checkbox" defaultChecked />
        Personal Details
      </label>

      {["Certificates","Experience","Languages","Interest"].map((s) => (
        <label key={s} className="flex gap-2">
          <input type="checkbox" /> {s}
        </label>
      ))}

      <label className="flex gap-2">
        <input type="checkbox" />
        Portfolio / Links
      </label>

      <div>
        <p className="mt-4 mb-1">Add your own</p>
        <input
          placeholder="Hobbies"
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex gap-2">
        <button className="bg-orange-400 text-white px-4 py-2 rounded">
          Cancel
        </button>

        <button className="bg-primary text-white px-4 py-2 rounded">
          Add Section
        </button>
      </div>
    </div>
  );
}