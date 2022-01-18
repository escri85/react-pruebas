import styled from "styled-components";
import { css } from "styled-components";
const Titulo = styled.h6`
  font-family: Arial;
  color: red;
  font-size: 35px;
  padding: 10px;
  ${props=>props.negro && css`
  color:blue`}

`;
 
export default Titulo;