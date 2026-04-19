import styles from "./ResumeForm.module.css";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import Input from "../../../../components/Input/Input";
import Textarea from "../../../../components/Textarea";
import Button from "../../../../components/Button";

const initialValues = {
  fullName: "",
  position: "",
  experience: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  summary: "",
  currentCompany: "",
  currentRole: "",
  period: "",
  jobDescription: "",
  skills: "",
  school: "",
  degree: "",
  graduationYear: "",
  languages: "",
  profileImage: "",
  certifications: "",
  projects: "",
  references: "",
};

export const ResumeForm = ({ setData }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setData(values);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFullReset = () => {
    formik.resetForm();
    setData({});
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
      <h2 className={styles.mainTitle}>Personal Information</h2>

      <div className={styles.imageUploadSection}>
        <label className={styles.uploadLabel}>Profile Picture</label>
        <div className={styles.customFileUploadWrapper}>
          <input
            type="file"
            id="profile-image-input"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.hiddenFileInput}
          />
          <label htmlFor="profile-image-input" className={styles.customUploadBtn}>
            <i className="fa-solid fa-cloud-arrow-up"></i>
            {formik.values.profileImage ? "Change Photo" : "Upload Photo"}
          </label>
        </div>

        {formik.values.profileImage && (
          <div className={styles.imagePreview}>
            <img src={formik.values.profileImage} alt="Preview" />
            <button
              type="button"
              onClick={() => formik.setFieldValue("profileImage", "")}
              className={styles.removeImageBtn}
            >
              Sil
            </button>
          </div>
        )}
      </div>

      <div className={styles.row}>
        <Input
          label="Full Name *"
          name="fullName"
          placeholder="e.g. John Doe"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        <Input
          label="Position"
          name="position"
          placeholder="e.g. Frontend Developer"
          value={formik.values.position}
          onChange={formik.handleChange}
        />
      </div>

      <div className={styles.row}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="example@domain.com"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          label="Phone"
          name="phone"
          placeholder="+994 -- --- -- --"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </div>

      <div className={styles.row}>
        <Input
          label="Location"
          name="location"
          placeholder="Baku, Azerbaijan"
          value={formik.values.location}
          onChange={formik.handleChange}
        />
        <Input
          label="Years of Experience"
          name="experience"
          placeholder="e.g. 1 Year / Junior"
          value={formik.values.experience}
          onChange={formik.handleChange}
        />
      </div>

      <div className={styles.row}>
        <Input
          label="LinkedIn Profile"
          name="linkedin"
          placeholder="linkedin.com/in/username"
          value={formik.values.linkedin}
          onChange={formik.handleChange}
        />
        <Input
          label="GitHub Profile"
          name="github"
          placeholder="github.com/username"
          value={formik.values.github}
          onChange={formik.handleChange}
        />
      </div>

      <h2 className={styles.mainTitle}>Summary & Skills</h2>

      <Textarea
        label="Professional Summary"
        name="summary"
        placeholder="Ambitious Frontend Developer with a focus on React.js..."
        value={formik.values.summary}
        onChange={formik.handleChange}
      />

      <div className={styles.row}>
        <Input
          label="Skills (vergüllə ayırın)"
          name="skills"
          value={formik.values.skills}
          onChange={formik.handleChange}
          placeholder="React, JavaScript, CSS, HTML, Git"
        />
        <Input
          label="Languages"
          name="languages"
          placeholder="English (B2), Azerbaijani (Native)"
          value={formik.values.languages}
          onChange={formik.handleChange}
        />
      </div>

      <h2 className={styles.mainTitle}>Work Experience</h2>

      <div className={styles.row}>
        <Input
          label="Company Name"
          name="currentCompany"
          placeholder="e.g. Tech Solutions Inc."
          value={formik.values.currentCompany}
          onChange={formik.handleChange}
        />
        <Input
          label="Job Title"
          name="currentRole"
          placeholder="e.g. Frontend Developer"
          value={formik.values.currentRole}
          onChange={formik.handleChange}
        />
      </div>

      <Input
        label="Period"
        name="period"
        placeholder="Jan 2024 - Present"
        value={formik.values.period}
        onChange={formik.handleChange}
      />

      <Textarea
        label="Job Description"
        name="jobDescription"
        placeholder="Developing responsive UI components..."
        value={formik.values.jobDescription}
        onChange={formik.handleChange}
      />

      <h2 className={styles.mainTitle}>Education</h2>

      <div className={styles.row}>
        <Input
          label="School/University"
          name="school"
          placeholder="University or College Name"
          value={formik.values.school}
          onChange={formik.handleChange}
        />
        <Input
          label="Degree"
          name="degree"
          placeholder="e.g. Bachelor in Computer Science"
          value={formik.values.degree}
          onChange={formik.handleChange}
        />
      </div>

      <Input
        label="Graduation Year"
        name="graduationYear"
        placeholder="e.g. 2024"
        value={formik.values.graduationYear}
        onChange={formik.handleChange}
      />

      <h2 className={styles.mainTitle}>Additional Information</h2>

      <Input
        label="Certifications"
        name="certifications"
        placeholder="e.g. AWS Certified Developer"
        value={formik.values.certifications}
        onChange={formik.handleChange}
      />

      <Textarea
        label="Projects"
        name="projects"
        placeholder="E-commerce platform using React..."
        value={formik.values.projects}
        onChange={formik.handleChange}
      />

      <Textarea
        label="References"
        name="references"
        placeholder="Available upon request"
        value={formik.values.references}
        onChange={formik.handleChange}
      />

      <div className={styles.actions}>
        <Button onClick={handleFullReset} variant="reset" type="button">
          Reset
        </Button>
        <Button type="submit" variant="save">
          Save
        </Button>
      </div>
    </form>
  );
};

ResumeForm.propTypes = { setData: PropTypes.func.isRequired };