"use client"
import { useSession } from "next-auth/react";


export default function Home() {
const session=useSession();
if(session){
  console.log("hello from session")
}else{
  console.log("not session");
  
}
  return (
    <div >
      hello from merchant app
      {JSON.stringify(session.data)}
    </div>
  );
}
