import PropTypes from "prop-types";
import { usePDF } from "react-to-pdf";
import styles from "./ResumePreview.module.css";
import parseTags from "../../../../utils/parseTags";
import { capitalize } from "../../../../helpers/Text.helper";
import Avatar from "../../../../components/Avatar";
import Typography from "../../../../components/Typography";
import SectionTitle from "../../../../components/SectionTitle";

function ResumePreview({ data = {} }) {
  const { toPDF, targetRef } = usePDF({
    filename: `${data.fullName || "resume"}.pdf`,
    page: { margin: 0, format: "a4" },
    canvas: {
      useCORS: true,
      scale: 2,
    },
  });

  const skills = parseTags(data.skills);

  if (!data.fullName && !data.position) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          Məlumatları daxil edib "Save" düyməsini sıxın...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* CV Vərəqi */}
      <div className={styles.preview} ref={targetRef}>
        <div className={styles.sidebar}>
          <div className={styles.avatarWrapper}>
            {data.profileImage ? (
              <img
                src={data.profileImage}
                alt="Profile"
                className={styles.profileImg}
                crossOrigin="anonymous"
              />
            ) : (
              <Avatar name={data.fullName} />
            )}
          </div>

          <div className={styles.contactInfo}>
            <ContactItem title="Email" value={data.email} />
            <ContactItem title="Phone" value={data.phone} />
            <ContactItem title="Location" value={data.location} />
          </div>

          <div className={styles.section}>
            <SectionTitle color="white">Skills</SectionTitle>
            <div className={styles.tagCloud}>
              {skills.map((s, index) => (
                <span key={index} className={styles.tag}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.header}>
            <Typography variant="h1">
              {data.fullName ? capitalize(data.fullName) : "YOUR NAME"}
            </Typography>
            <Typography variant="h2" className={styles.subTitle}>
              {data.position || "Frontend Developer"}
            </Typography>
          </div>

          <SectionWrapper title="Profile" content={data.summary} />
          
          <div className={styles.section}>
            <SectionTitle>Experience</SectionTitle>
            <div className={styles.experienceItem}>
              <Typography variant="h2">{data.currentRole}</Typography>
              <Typography variant="caption" className={styles.periodText}>
                {data.currentCompany} {data.period ? `| ${data.period}` : ""}
              </Typography>
              <Typography variant="body" className={styles.summaryText}>
                {data.jobDescription}
              </Typography>
            </div>
          </div>

          <div className={styles.section}>
            <SectionTitle>Education</SectionTitle>
            <div className={styles.educationItem}>
              <Typography variant="h2">{data.school}</Typography>
              <Typography variant="body">
                {data.degree} {data.graduationYear ? `(${data.graduationYear})` : ""}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Download düyməsi vərəqin altındadır */}
      <button className={styles.downloadBtn} onClick={() => toPDF()}>
        Download PDF
      </button>
    </div>
  );
}

const ContactItem = ({ title, value }) => (
  <div className={styles.contactItem}>
    <strong>{title}</strong>
    <span>{value || "Not specified"}</span>
  </div>
);

const SectionWrapper = ({ title, content }) => (
  <div className={styles.section}>
    <SectionTitle>{title}</SectionTitle>
    <Typography variant="body" className={styles.summaryText}>{content}</Typography>
  </div>
);

ResumePreview.propTypes = { data: PropTypes.object };
export default ResumePreview;