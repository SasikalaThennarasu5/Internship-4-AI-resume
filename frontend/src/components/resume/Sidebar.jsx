export default function Sidebar({ activeTab, setActiveTab }) {
  const menu = [
    { key: "templates", label: "Templates", icon: "/images/template.png" },
    { key: "design", label: "Design", icon: "/images/design.png" },
    { key: "sections", label: "Sections", icon: "/images/add.png" },
  ];

  return (
    <div className="w-[90px] flex flex-col items-center py-6 gap-10 border-r bg-[#fafafa]">
      {menu.map((item) => (
        <div
          key={item.key}
          onClick={() => setActiveTab(item.key)}
          className={`cursor-pointer text-center ${
            activeTab === item.key ? "text-primary" : "text-gray-500"
          }`}
        >
          <img src={item.icon} className="w-7 mb-2" />
          <p className="text-xs">{item.label}</p>
        </div>
      ))}
    </div>
  );
}