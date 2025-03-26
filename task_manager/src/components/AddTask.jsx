"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import {useTasks} from "@/context/TaskContext";

export default function AddTask() {

    const {addNewTask} = useTasks();
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            isDone: false
        },
        validationSchema: Yup.object().shape({
            title: Yup.string()
                .required("Title is required")
                .trim()
                .min(5, "Title must be at least 5 characters")
                .max(100, "Title must be at most 100 characters"),
            description: Yup.string()
                .required("Description is required")
                .trim()
                .min(10, "Description must be at least 10 characters")
                .max(500, "Description is too long"),
            isDone: Yup.boolean().default(false)
        }),
        onSubmit: (values) => {
            addNewTask(values);
        }
    });

    return (
        <div className="flex justify-center my-2">
            <form
                className="flex flex-col gap-4 w-1/2 bg-white p-6 rounded-xl shadow-xl border border-gray-200"
                onSubmit={formik.handleSubmit}
            >
                <label htmlFor="title" className="w-full font-semibold">
                    Tytuł:
                    <input
                        className="border border-gray-300 rounded px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        id="title"
                        name="title"
                        type="text"
                        placeholder="nowe zadanie"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                </label>
                {formik.errors.title && formik.touched.title && (
                    <p className="text-red-600 text-sm">{formik.errors.title}</p>
                )}

                <label htmlFor="description" className="w-full font-semibold">
                    Opis:
                    <input
                        className="border border-gray-300 rounded px-3 py-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        id="description"
                        name="description"
                        type="text"
                        placeholder="opis zadania"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                </label>
                {formik.errors.description && formik.touched.description && (
                    <p className="text-red-600 text-sm">{formik.errors.description}</p>
                )}

                <label htmlFor="isDone" className="flex items-center font-semibold">
                    <span>Status:</span>
                    <input
                        className="ml-2 w-5 h-5 accent-purple-600"
                        id="isDone"
                        name="isDone"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.isDone}
                    />
                </label>
                {formik.errors.isDone && formik.touched.isDone && (
                    <p className="text-red-600 text-sm">{formik.errors.isDone}</p>
                )}

                <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className={`px-4 py-2 rounded font-semibold transition-all duration-300 
            ${formik.isValid && formik.dirty
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
          `}
                >
                    Dodaj nowe zadanie
                </button>
            </form>
        </div>
    );
}
