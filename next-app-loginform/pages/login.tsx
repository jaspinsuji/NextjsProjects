import Head from "next/head"
import Link from "next/link"
import Layout from "./layout/layout";
import styles from "../styles/form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import form_validation from "../lib/validate"

export default function Login() {
    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: form_validation,
        onSubmit
    })
    async function onSubmit(values) {
        console.log(values);
    }
    //Google Handler Function
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }
    //GitHub Handler Function
    async function handleGithubSignin() {
        signIn('github', { callbackUrl: "http://localhost:3000" })
    }
    return (
        <>
            <Layout>
                <Head>
                    <title>Login</title>
                </Head>
                <section className="w-3/4 mx-auto flex flex-col gap-10">
                    <div className="title">
                        <h1 className="text-gary-800 text-4xl font-bold py-4">Login</h1>
                    </div>
                    {/* Form */}
                    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                        <div className={styles.input_group}>
                            <input type="email" placeholder="Email" name="email"
                                className={styles.input_text}
                                {...formik.getFieldProps('email')}
                            // onChange={formik.handleChange} //This formik line replace 2 line code & name field
                            // value={formik.values.email} 
                            />
                            <span className="icon flex items-center px-4"><HiAtSymbol size={20} /></span>
                        </div>
                        {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>}
                        <div className={styles.input_group}>
                            <input type={'${show?"text":"password"}'} name="password" placeholder="Password" className={styles.input_text}
                                {...formik.getFieldProps('password')} />
                            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}><HiFingerPrint /></span>
                        </div>
                        {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>}
                        <div className="input-button">
                            <button type="submit" className={styles.button}>Login</button>
                        </div>
                        <div className="input-button">
                            <button type="button" className={styles.button_custom} onClick={handleGoogleSignin}>
                                Sign in with Google <Image src={'/assets/google.svg'} width="20" height={20} alt=""></Image>
                            </button>
                        </div>
                        <div className="input-button">
                            <button type="button" className={styles.button_custom} onClick={handleGithubSignin}>
                                Sign in with Github <Image src={'/assets/github.svg'} width={25} height={25} alt=""></Image>
                            </button>
                        </div>
                    </form>
                    {/* Form */}
                    <p className="text-center text-gray-400">Don't have an Account yet?<Link href={'/register'} className="text-blue-800"> Sign Up</Link></p>
                </section>
            </Layout>
        </>
    )
}
