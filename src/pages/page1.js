import React from "react";

import styled from "styled-components";

const Title = styled.h1`
   font-size: 50px;
   color: ${({ theme }) => theme.colors.primary};
`;

function Page1() {
   return <Title>Page 1 de teste</Title>;
}

export default Page1;
