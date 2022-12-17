import React from "react";
import * as C from "./styles";

const ResumeItem = ({title, value}) => {
   <C.Container>
    <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
    </C.Header>
    <C.Total>{value}</C.Total>
   </C.Container>
}

export default ResumeItem;