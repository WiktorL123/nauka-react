import * as Yup from "yup";
import {useFormik} from "formik";

export default function AddUserForm(){


    const formik = useFormik({
         initialValues: {
            name: "",
            username: "",
            email: "",
        },
         validationSchema: Yup.object().shape({
            name: Yup.string().
            min(3, "at least 3 characters long").
            required('Name is required'),
            username: Yup.string().min(3,
                "at least 3 characters long").
            required('Name is required'),
            email: Yup.string().email('invalid email address').
            required('Email is required'),
        }),
        onSubmit: (values) => {
             console.log(values);
             alert('dodano uzytkownika ')
        }
    })







    return (
        <>
            <h1>Formularz dodawania nowego użytkownika</h1>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='Santiago'
                    value={formik.values.name}
                    onChange={}
                />

                {formik.touched.name && formik.errors.name  && ( <p>{formik.errors.name}</p>)}
            </form>
        </>
    )
}