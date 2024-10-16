"use client";

import {useBalance} from "@repo/store/balance";

export default function() {
  const num=useBalance();
  return <div>
    hi there user-app{num}
    <div>
    user-app
    </div>
  </div>
}