import PropTypes from "prop-types";
import { usePDF } from 'react-to-pdf';
import styles from "./ResumePreview.module.css";
import parseTags from "../../../../utils/parseTags";
import Avatar from "../../../../components/Avatar";
import { Phone, Mail, MapPin, Globe, Briefcase, GraduationCap, Award, FolderGit2 } from "lucide-react";

function ResumePreview({ data = {} }) {
  const { toPDF, targetRef } = usePDF({
    filename: `${data.fullName || 'resume'}.pdf`,
    page: { 
      margin: 0, 
      format: 'a4',
      orientation: 'portrait',
    },
  });

  const skills = parseTags(data.skills);
  const certifications = parseTags(data.certifications);
  const projects = parseTags(data.projects);


  if (!data.fullName) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.loader}>
          <div className={styles.wrapperLoader}>
            <div className={styles.circle}></div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
          </div>
        </div>
        <p className={styles.emptyText}>Məlumatları daxil edin...</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.miniDownloadBtn} onClick={() => toPDF()}>
        PDF Yüklə
      </button>

      <div className={styles.previewCard} ref={targetRef}>
        <div className={styles.sidebar}>
          <div className={styles.avatarArea}>
            {data.profileImage ? (
              <img src={data.profileImage} alt="Profile" className={styles.img} />
            ) : (
              <Avatar name={data.fullName} />
            )}
          </div>

          <div className={styles.infoSection}>
            <p className={styles.sidebarTitle}>CONTACT</p>
            <ContactDetail icon={<Phone size={14} />} value={data.phone} />
            <ContactDetail icon={<Mail size={14} />} value={data.email} />
            <ContactDetail icon={<MapPin size={14} />} value={data.location} />
            {data.linkedin && <ContactDetail icon={<Globe size={14} />} value={data.linkedin} label="LinkedIn" />}
            {data.github && <ContactDetail icon={<FolderGit2 size={14} />} value={data.github} label="GitHub" />}
          </div>

          {data.languages && (
            <div className={styles.infoSection}>
              <p className={styles.sidebarTitle}>LANGUAGES</p>
              <p className={styles.sidebarText}>{data.languages}</p>
            </div>
          )}

          {skills.length > 0 && (
            <div className={styles.infoSection}>
              <p className={styles.sidebarTitle}>SKILLS</p>
              <div className={styles.skillList}>
                {skills.map((s, i) => (
                  <span key={i} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className={styles.infoSection}>
              <p className={styles.sidebarTitle}>CERTIFICATIONS</p>
              <div className={styles.certList}>
                {certifications.map((cert, i) => (
                  <div key={i} className={styles.certItem}>
                    <Award size={12} className={styles.certIcon} />
                    <span className={styles.certText}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.mainHeader}>
            <h1 className={styles.name}>{data.fullName || "NAME SURNAME"}</h1>
            <p className={styles.role}>
              {data.position || ""} 
              {data.experience && <span className={styles.expBadge}> | {data.experience}</span>}
            </p>
          </div>

          <div className={styles.resumeBody}>
            {data.summary && (
              <section className={styles.bodySection}>
                <h3 className={styles.sectionHeading}>
                  <Briefcase size={16} className={styles.headingIcon} />
                  PROFILE
                </h3>
                <p className={styles.text}>{data.summary}</p>
              </section>
            )}

            {(data.currentRole || data.currentCompany) && (
              <section className={styles.bodySection}>
                <h3 className={styles.sectionHeading}>
                  <Briefcase size={16} className={styles.headingIcon} />
                  WORK EXPERIENCE
                </h3>
                <div className={styles.expBox}>
                  <div className={styles.expHeader}>
                    <p className={styles.expTitle}>{data.currentRole}</p>
                    <p className={styles.expPeriod}>{data.period}</p>
                  </div>
                  <p className={styles.expCompany}>{data.currentCompany}</p>
                  {data.jobDescription && (
                    <ul className={styles.bulletList}>
                      {data.jobDescription.split('\n').filter(line => line.trim()).map((line, i) => (
                        <li key={i} className={styles.bulletItem}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section className={styles.bodySection}>
                <h3 className={styles.sectionHeading}>
                  <FolderGit2 size={16} className={styles.headingIcon} />
                  PROJECTS
                </h3>
                <ul className={styles.bulletList}>
                  {projects.map((project, i) => (
                    <li key={i} className={styles.bulletItem}>{project}</li>
                  ))}
                </ul>
              </section>
            )}

            {(data.school || data.degree) && (
              <section className={styles.bodySection}>
                <h3 className={styles.sectionHeading}>
                  <GraduationCap size={16} className={styles.headingIcon} />
                  EDUCATION
                </h3>
                <div className={styles.eduBox}>
                  <div className={styles.expHeader}>
                    <p className={styles.expTitle}>{data.degree || data.school}</p>
                    <p className={styles.expPeriod}>{data.graduationYear}</p>
                  </div>
                  {data.degree && data.school && (
                    <p className={styles.expCompany}>{data.school}</p>
                  )}
                </div>
              </section>
            )}

            {data.references && (
              <section className={styles.bodySection}>
                <h3 className={styles.sectionHeading}>REFERENCES</h3>
                <p className={styles.text}>{data.references}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactDetail = ({ icon, value, label }) => {
  if (!value) return null;
  return (
    <div className={styles.contactBox}>
      <div className={styles.contactIcon}>{icon}</div>
      <div className={styles.contactContent}>
        {label && <span className={styles.contactLabel}>{label}</span>}
        <span className={styles.contactValue}>{value}</span>
      </div>
    </div>
  );
};

ResumePreview.propTypes = { data: PropTypes.object };
export default ResumePreview;