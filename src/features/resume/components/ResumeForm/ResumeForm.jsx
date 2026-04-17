import styles from "./ResumeForm.module.css";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import Input from "../../../../components/Input/Input";
import Textarea from "../../../../components/Textarea";
import Button from "../../../../components/Button";

const initialValues = {
  fullName: "",
  age: "",
  position: "",
  experience: "",
  email: "",
  phone: "",
  location: "",
  website: "",
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
};

export const ResumeForm = ({ setData }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setData(values);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.mainTitle}>Personal Information</h2>
      <div className={styles.imageUploadSection}>
        <label>Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {

              const validTypes = ["image/jpeg", "image/jpg", "image/png"];
              if (!validTypes.includes(file.type)) {
                alert("Zəhmət olmasa JPG və ya PNG formatında şəkil seçin.");
                return;
              }

              const reader = new FileReader();
              reader.onloadend = () => {
                // Bura çox önəmlidir: reader.result artıq formatı bəlli olan şərqidir
                formik.setFieldValue("profileImage", reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Full Name"
          name="fullName"
          placeholder="e.g. John Doe"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        <Input
          label="Age"
          name="age"
          placeholder="e.g. 20"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
      </div>

      <div className={styles.row}>
        <Input
          label="Position"
          name="position"
          placeholder="e.g. Frontend Developer"
          value={formik.values.position}
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
          label="Email"
          name="email"
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
          label="Website/GitHub"
          name="website"
          placeholder="github.com/username"
          value={formik.values.website}
          onChange={formik.handleChange}
        />
      </div>

      <h2 className={styles.mainTitle}>Summary & Skills</h2>
      <Textarea
        label="Professional Summary"
        name="summary"
        placeholder="Ambitious Frontend Developer with a focus on React.js. Passionate about building clean, functional, and user-friendly web applications with modern UI/UX standards."
        value={formik.values.summary}
        onChange={formik.handleChange}
      />

      <div className={styles.row}>
        <Input
          label="Skills (vergüllə)"
          name="skills"
          value={formik.values.skills}
          onChange={formik.handleChange}
          placeholder="React, JS, CSS"
        />
        <Input
          label="Languages"
          name="languages"
          placeholder="English (B2), Azerbaijani (Native)"
          value={formik.values.languages}
          onChange={formik.handleChange}
        />
      </div>

      <h2 className={styles.mainTitle}>Last Experience</h2>
      <div className={styles.row}>
        <Input
          label="Company name"
          name="currentCompany"
          placeholder="e.g. Tech Solutions Inc."
          value={formik.values.currentCompany}
          onChange={formik.handleChange}
        />
        <Input
          label="Role"
          name="currentRole"
          placeholder="e.g. Frontend Intern"
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
        placeholder="2022 - Present"
      />
      <Textarea
        label="Job Description"
        name="jobDescription"
        placeholder="Developing responsive UI components, integrating RESTful APIs, and collaborating with design teams to improve user experience."
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
          placeholder="e.g. Computer Science"
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

      <div className={styles.actions}>
        <Button onClick={formik.handleReset} variant="reset" type="button">
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
