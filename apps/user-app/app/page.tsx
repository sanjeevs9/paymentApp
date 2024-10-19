"use client";

import {useSession} from "next-auth/react";

export default function() {

  const session=useSession();
  // if(session){
  //   console.log("hello from session")
  // }else{
  //   console.log("not session");
    
  // }
  return <div>
    hi there user-app 
    {JSON.stringify(session.data)}
    <div>
    user-app
    </div>
  </div>
}