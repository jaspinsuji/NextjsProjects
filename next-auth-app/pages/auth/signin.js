import React from "react";
import { getProviders, signIn } from "next-auth/react"
const Signin = ({ providers }) => {
    return (
        <>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <img src="https://pngimg.com/uploads/github/github_PNG15.png" alt="" />
                    <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})}>Sign in with {provider.name}</button>
                </div>
            ))}
        </>
    )
}
export default Signin
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    }
}
