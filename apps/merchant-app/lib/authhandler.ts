import GoogleProvider from "next-auth/providers/google"

const fadsf=process.env.GOOGLE_CLIENT_ID;
export const authOptions={
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
      ],
      secret:"fasdf",
        callbacks:{
            async session({ session, token }:any) {
    // Send properties to the client, like an access_token and user id from a provider.
    session.accessToken = token.accessToken
    session.user.id = token.id
    return session
  }
        }
}