import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/authOptions";

const hanlder=NextAuth(authOptions)
export{hanlder as GET,hanlder as POST}
