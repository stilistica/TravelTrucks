import s from "./FormBooking.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormBooking = () => {
  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    date: Yup.date().required("Booking date is required"),
    comment: Yup.string().max(750, "Max 750 chars"),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <div className={s.container}>
      <div className={s.info}>
        <h3 className={s.title}>Book your campervan now</h3>
        <p className={s.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={s.form}>
            <div className={s.field}>
              <Field name="name" placeholder="Name*" className={s.input} />
              <ErrorMessage name="name" component="p" className={s.error} />
            </div>

            <div className={s.field}>
              <Field name="email" placeholder="Email*" className={s.input} />
              <ErrorMessage name="email" component="p" className={s.error} />
            </div>

            <div className={s.field}>
              {/* <Field name="date" placeholder="Date*"/> */}
              <DatePicker
                selected={values.date}
                onChange={(val) => setFieldValue("date", val)}
                placeholderText="Booking date*"
                className={s.datepicker}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
              />
              <ErrorMessage name="date" component="p" className={s.error} />
            </div>

            <div className={s.field}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                rows="5"
                className={s.comment}
              />
              <ErrorMessage name="comment" component="p" className={s.error} />
            </div>

            <button type="submit" className={s.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBooking;
