import * as Yup from "yup";
import {useFormik} from "formik";
import {useState} from "react";

export default function AddUserForm({handleAddUser}) {


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
            handleAddUser({
                id: Date.now(),
                name: values.name,
                username: values.username,
                email: values.email,
                address: {street: 'lazienkowska'}, //ustawiamy domyslne wartosci dla ulicy i numeru teleofoonu zeby userlist nie beczal
                phone: '999-999-999'
            });
        }
    })



    return (
        <>
            <h1>Formularz dodawania nowego użytkownika</h1>
            <form
                className={'flex-col flex  '}
                onSubmit={formik.handleSubmit}
            >
                <input
                    className={'border-1 my-2'}
                    type="text"
                    name="name"
                    placeholder='Santiago'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                />

                {formik.touched.name && formik.errors.name  &&  <p className={'text-red-500'}>{formik.errors.name}</p>}


                <input
                    className={'border-1 my-2'}
                    type='text'
                    name='username'
                    placeholder='Chile'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && <p className={'text-red-500'}>{formik.errors.username}</p>}

                <input
                    className={'border-1 my-2'}
                    type={'email'}
                    name='email'
                    placeholder='Santiago@gmail.com'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className={'text-red-500'}>{formik.errors.email}</p>}

                <button
                    className={'rounded-xl my-2 bg-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer'}
                    disabled = {!formik.values.name|| !formik.values.username || !formik.values.email }
                >Dodaj użytkownika </button>

            </form>
        </>
    )
}