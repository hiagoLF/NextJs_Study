import React from "react";
import Link from "next/link";

function Index() {
   return (
      <div>
         <h1>Index</h1>
         <Link href="products">
            <a>Go to products</a>
         </Link>
      </div>
   );
}

export default Index;
