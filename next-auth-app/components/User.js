import { useSession, signIn, signOut } from "next-auth/react"
const User = ({ providers }) => {
    const { data: session } = useSession();
    if(session){
        return(
            <>
            <div>
                <button>Sign out</button>
            </div>
        </>
        )
    }
    return (
        <>
            <div>
                <button onClick={signIn}> Sign in</button>
            </div>
        </>
    )
}
export default User