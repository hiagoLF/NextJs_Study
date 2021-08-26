import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { User } from "../types/User";

export interface ProfileProps {
   user: User;
}

function Profile({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
   const router = useRouter();

   if (router.isFallback) return <h2>Carregando...</h2>;

   return (
      <div>
         <h1>Profile {router.query.id}</h1>
         <h3>{user.name}</h3>
         <h3>{user.username}</h3>
         <h3>{user.email}</h3>
      </div>
   );
}

// Utilizado em um servidor SSG com páginas estáticas
// SSG --> Static Site Generation
// Vai ser executado somente no momento da build
export const getStaticProps: GetStaticProps<ProfileProps> = async (context) => {
   const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
         params: { id: context.params.id },
      }
   );
   const user = await response.data[0];

   return {
      props: { user, revalidate: 10 }, // revalidade -> O tempo em que a informação permanece em cache
   };
};

// Os parametros que poderão ser recebidos em id
export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [
         { params: { id: "1" } }, // See the "paths" section below
         { params: { id: "2" } }, // See the "paths" section below
      ],
      fallback: true, // Quando acessar um id que não está nos path, ele faz um client side rendering
   };
};

export default Profile;
