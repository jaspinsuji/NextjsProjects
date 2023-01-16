import Head from "next/head"
import Link from "next/link"
import styles from "../styles/form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react'
import Layout from "./layout/layout";
import { useFormik } from 'formik';
import form_validation from "../lib/validate"

export default function Register() {
    const [show, setShow] = useState({ password: false, cpassword: false });
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validate: form_validation,
        onSubmit
    })
    async function onSubmit(values) {
        console.log(values);
    }
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gary-800 text-4xl font-bold py-4">Register</h1>
                </div>
                {/* Form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input type="text" placeholder="User Name" {...formik.getFieldProps('username')} className={styles.input_text} />
                        <span className="icon flex items-center px-4"><HiOutlineUser size={20} /></span>
                    </div>
                    {formik.errors.username&&formik.touched.username?<span className="text-rose-500">{formik.errors.username}</span>:<></>}
                    <div className={styles.input_group}>
                        <input type="email" placeholder="Email" {...formik.getFieldProps('email')} className={styles.input_text} />
                        <span className="icon flex items-center px-4"><HiAtSymbol size={20} /></span>
                    </div>
                    {formik.errors.email&&formik.touched.email?<span className="text-rose-500">{formik.errors.email}</span>:<></>}
                    <div className={styles.input_group}>
                        <input type={'${show.password?"text":"password"}'} {...formik.getFieldProps('password')} placeholder="Password" className={styles.input_text} />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}><HiFingerPrint /></span>
                    </div>
                            {formik.errors.password&&formik.touched.password?<span className="text-rose-500">{formik.errors.password}</span>:<></>}
                    <div className={styles.input_group}>
                        <input type={'${show.cpassword?"text":"password"}'} {...formik.getFieldProps('cpassword')} placeholder="Confirm Password" className={styles.input_text} />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}><HiFingerPrint /></span>
                    </div>
                            {formik.errors.cpassword&&formik.touched.cpassword?<span className="text-rose-500">{formik.errors.cpassword}</span>:<></>}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>Sign Up</button>
                    </div>
                </form>
                {/* Form */}
                <p className="text-center text-gray-400">Have an Account?<Link href={'/login'} className="text-blue-800"> Sign In</Link></p>
            </section>
        </Layout>
    )
}