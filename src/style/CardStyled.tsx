import { styled } from "@mui/material";

export const CardGridList = styled("div")`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
