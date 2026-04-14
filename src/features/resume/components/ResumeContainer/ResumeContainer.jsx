import { Input } from 'components/Input';
import styles from './ResumeContainer.module.css'

export const ResumeContainer = () =>{
    return(
        <div className={styles.InputDesign}>
            <h2 className={styles.InputTitle}>Şəxsi Məlumatlar</h2>
            <Input label="Full Name" id='name' />
            <Input label="Age" id='age'/>
            <Input label="Position / Title" id='profession'/>
            <Input label="Years of Experience" id='years'/>

        </div>
    )
}