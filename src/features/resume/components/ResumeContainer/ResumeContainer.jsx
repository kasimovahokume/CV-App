import { useState } from "react";
import { ResumeForm } from "../ResumeForm/ResumeForm";
import ResumePreview from "../ResumePreview/ResumePreview";
import styles from "./ResumeContainer.module.css";

export const ResumeContainer = () => {
  const [resumeData, setResumeData] = useState({});

  return (
    <div className={styles.root}>
      <div className={styles.formPanel}>
        <ResumeForm setData={setResumeData} />
      </div>
      <div className={styles.previewPanel}>
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
};