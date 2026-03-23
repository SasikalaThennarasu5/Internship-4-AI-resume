import TemplateModern from "./TemplateModern";
import TemplateMinimal from "./TemplateMinimal";
import TemplateCreative from "./TemplateCreative";

export default function ResumePreview({ template, data, styles }) {
  return (
    <div
      id="resume"
      className="bg-white shadow-lg border"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontFamily: styles.font,
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
      }}
    >
      {template === "modern" && (
        <TemplateModern data={data} styles={styles} />
      )}
      {template === "minimal" && (
        <TemplateMinimal data={data} styles={styles} />
      )}
      {template === "creative" && (
        <TemplateCreative data={data} styles={styles} />
      )}
    </div>
  );
}