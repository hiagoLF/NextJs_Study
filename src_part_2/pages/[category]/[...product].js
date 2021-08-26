import React from "react";
import { useRouter } from "next/router";

function Products() {
   const router = useRouter();

   console.log(router.query);

   return (
      <h1>
         {router.query.category} - {router.query.product[0]}
         {router.query.product.map((product, index) => (
            <h6 key={index}>{product}</h6>
         ))}
      </h1>
   );
}

export default Products;
