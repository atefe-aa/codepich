import { useForm } from "react-hook-form";
import { useSubmitForm } from "../hooks/useSubmitForm";
import { useState } from "react";
import Success from "../components/Success";

function ContactUs() {
  const { formState, handleSubmit, register, reset } = useForm();
  const { isPending, submitForm, data } = useSubmitForm();
  const { errors } = formState;
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(data?.error || null);

  function onSubmit(data) {
    submitForm(data, {
      onSuccess: () => {
        reset();
        setShowSuccess(true);
      },
      onError:(error)=>setError(error),
    });
  }

  return (
    <>
    {error  && <div className="text-danger bg-danger-outline rounded">{error}</div>}
      {showSuccess && (
        <Success show={showSuccess} handleClose={() => setShowSuccess(false)} />
      )}
      <div className="contact-us-page">
        <section className="contact-page container-fluid">
          <div className="row">
            <div className="text-top">
              <h1>یک قدم تا وبسایت رویاهایتان مانده است</h1>
              <p>
                با ما در ارتباط باشید تا وبسایت رویاهایتان را به راحتی و در
                سریعترین زمان دریافت کنید
              </p>
            </div>
            <div className="col-12 col-md-10 offset-0 offset-md-1 mt-5 form-contact-us-page mb-5">
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="form-page form">
                <h6>اطلاعات تماس شما</h6>
                <div className="d-flex">
                  <div
                    className=" input-div-special input-div"
                    style={{ margin: "0 0 0 10px" }}
                  >
                    <input
                      disabled={isPending}
                      type="text"
                      id="name"
                      {...register("name", {
                        required: "نام و نام خانوادگی الزامی است.",
                      })}
                      name="name"
                      placeholder="نام و نام خانوداگی :"
                    />  {errors?.name && (
                    <span className="text-info">{errors.name.message}</span>
                  )}
                  </div>
                
                  <div className=" input-div-special input-div">
                    <input
                      disabled={isPending}
                      type="number"
                      id="phone"
                      name="phone"
                      {...register("phone", {
                        required: "شماره همراه الزامی است.",
                        pattern: {
                          value:
                            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                          message: "لطفا یک شماره همراه معتبر وارد کنید.",
                        },
                      })}
                      placeholder="شماره تلفن : "
                      style={{ direction: "rtl" }}
                    /> {errors?.phone && (
                    <span className="text-info">{errors.phone.message}</span>
                  )}
                  </div>
                 
                </div>
                <div className="input-group input-div">
                  <input
                    disabled={isPending}
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "ایمیل الزامی است.",
                    })}
                    name="email"
                    placeholder="پست الکترونیکی : "
                  />
                </div>
                {errors?.email && (
                  <span className="text-info">{errors.email.message}</span>
                )}
                <h6 className="my-3 ps-1">جزییات پروژه</h6>
                <div className="input-group input-div">
                  <textarea
                    disabled={isPending}
                    name="description"
                    id="description"
                    {...register("description")}
                    placeholder="توضیحات پروژه ...."
                  ></textarea>
                </div>
                {errors?.description && (
                  <span className="text-info">{errors.description.message}</span>
                )}
                <h6 className="my-3 ps-1">جزییات شرکت</h6>
                <div className="input-group input-div">
                  <input
                    disabled={isPending}
                    type="text"
                    id="about_company"
                    {...register("about_company")}
                    name="about_company"
                    placeholder="جزییات شرکت :"
                  />
                </div>
                {errors?.about_company && (
                  <span className="text-info">{errors.about_company.message}</span>
                )}
                <button className="btn-custom mt-2">درخواست مشاوره</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
