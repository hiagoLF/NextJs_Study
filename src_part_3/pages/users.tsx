import axios from "axios";
import React from "react";
import Link from "next/link";
import { User } from "./types/User";

export interface UsersProps {
   users: User[];
}

function Users({ users }: UsersProps) {
   return (
      <div style={{ display: "flex", flexDirection: "column" }}>
         <h1>Hello NextJS</h1>

         {/* Link é um componente para ser usado no client side navigation */}
         {users.map((user, index) => (
            <Link key={index} href="/profile/[id]" as={`/profile/${user.id}`}>
               <a>{user.name}</a>
            </Link>
         ))}
      </div>
   );
}

// Função necessário para que haja Renderização no Server Side
export async function getServerSideProps(context) {
   const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
   );
   const data = await response.data;

   return {
      props: { users: data }, // will be passed to the page component as props
   };
}

export default Users;
