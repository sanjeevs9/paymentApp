import CredentialsProvider from "next-auth/providers/credentials"
import { Providers } from "../provider"
import PrismaClient from "@repo/prisma/client"
const prisma=new PrismaClient();
import bcrypt from "bcrypt"
import { error } from "console";

export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                phone: { label: "phone", type: "number", placeholder: "989878" },
                password: { label: "Password", type: "password",placeholder:"***" },
                name:{label :"name",type:"string",placeholder:"sanjeev"}
            },
            async authorize(credentials:any):Promise<any>{
                const password:string=credentials.password
                const phone:number=credentials.phone
                //find user
                const user=await prisma.user.findUnique({
                    where:{
                        number:phone
                    }
                })
                const hash=await bcrypt.hashSync(password,10);
                if(user){
                    if(!bcrypt.compareSync(password,hash)){
                        return null;
                    }
                    return{
                        id:user.id.toString(),
                        name:user.name,
                        number:user.number
                    }
                }
                try{
                    const user=await prisma.user.create({
                        data:{
                            number:phone,
                            password:hash,
                            name: credentials.name
                        }
                    })
                    return{
                        id:user.id.toString(),
                        name:user.name,
                        phone:user.number
                    }
                }catch(e){
                    console.log(error)
                }

                return null

            }
        })],
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