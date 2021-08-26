import React from "react";
import Link from "next/link";

// import { Container } from './styles';

function Products() {
   return (
      <div>
         <h1>Produtos</h1>
         <Link href="/category/product">
            <a>Navegar para Produto</a>
         </Link>
      </div>
   );
}

export default Products;
