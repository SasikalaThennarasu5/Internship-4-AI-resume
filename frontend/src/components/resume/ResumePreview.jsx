import TemplateModern from "./TemplateModern";
import TemplateMinimal from "./TemplateMinimal";
import TemplateCreative from "./TemplateCreative";

export default function ResumePreview({
  template,
  data,
  styles,
  goToStep,
}) {
  // ✅ normalize template name
  const selectedTemplate = template?.toLowerCase();

  console.log("Rendering Template:", selectedTemplate); // 🔍 debug

  const renderTemplate = () => {
    if (selectedTemplate === "modern") {
      return (
        <TemplateModern
          data={data}
          styles={styles}
          goToStep={goToStep}
        />
      );
    }

    if (selectedTemplate === "minimal") {
      return (
        <TemplateMinimal
          data={data}
          styles={styles}
          goToStep={goToStep}
        />
      );
    }

    if (selectedTemplate === "creative") {
      return (
        <TemplateCreative
          data={data}
          styles={styles}
          goToStep={goToStep}
        />
      );
    }

    // 🔥 fallback
    return (
      <TemplateModern
        data={data}
        styles={styles}
        goToStep={goToStep}
      />
    );
  };

  return (
    <div
      id="resume"
      className="bg-white"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontFamily: styles.font,
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
      }}
    >
      {renderTemplate()}
    </div>
  );
}