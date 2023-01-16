import { useSession, signIn, signOut } from "next-auth/react"
const User = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <div>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()} className='bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105'>Sign out</button>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                {/* Not signed in <br /> */}
                <button onClick={() => signIn()} className='bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105'>Sign in</button>
            </div>
        </>
    )
}
export default User