import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.css";
import { useSubmitForm } from "../hooks/useSubmitForm";


function Form() {
const {formState, handleSubmit,  register, reset} = useForm();
const {isPending, submitForm} = useSubmitForm();
const {errors} = formState;

function onSubmit(data){
  submitForm(data);
}

  return (
    <>
      <span className={styles.formTitle}>یک قدم تا وبسایت رویاهایتان مانده است</span>
      <form  autoComplete="off" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={`input-group ${styles.inputDiv}`}>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: "نام و نام خانوادگی الزامی است.",
            })}
            placeholder="نام و نام خانوداگی :"
          />
        </div>
          {errors?.name && <span className={styles.formError}>{errors.name.message}</span>}
        <div  className={`input-group ${styles.inputDiv}`}>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "ایمیل الزامی است.",
            })}
            placeholder="پست الکترونیکی : "
            style={{direction: 'rtl'}}
          />
        </div>
           {errors?.email && <span className={styles.formError}>{errors.email.message}</span>}
        <div  className={`input-group ${styles.inputDiv}`}>
          <input
            type="text"
            id="phone"
            name="phone"
            {...register("phone", {
              required: "شماره همراه الزامی است.",
              pattern: {
                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "لطفا یک شماره همراه معتبر وارد کنید.",
              },
            })}
            placeholder="شماره همراه : "
          />
        </div>
           {errors?.phone && <span className={styles.formError}>{errors.phone.message}</span>}
        <div  className={`input-group ${styles.inputDiv}`}>
          <input
            type="text"
            id="budget"
            name="budget"
            {...register("budget")}
            placeholder="بودجه موردنظر : "
          />
        </div>
           {errors?.budget && <span className={styles.formError}>{errors.budget.message}</span>}

        <button className="btn-custom mt-2">درخواست مشاوره</button>
      </form>
    </>
  );
}

export default Form;
