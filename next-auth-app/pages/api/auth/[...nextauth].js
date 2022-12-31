import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [GitHubProvider({
        ClientId: process.env.GITHUB_ID,
        ClientSecret: process.env.GITHUB_SECRET,
    }),
],
pages:{
    signIn: "/auth/signin"
}
})