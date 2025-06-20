import { styled } from "@mui/material";
import { RefObject } from "react";
import { logout } from "../../../utils/auth";

interface ModalProps {
  isOpen: boolean;
  itemRef: RefObject<HTMLDivElement | null>;
  changeColorCode: () => void;
}

const ProfileModal = ({ isOpen, itemRef, changeColorCode }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalBox ref={itemRef}>
      <Menu
        onClick={(e) => {
          e.stopPropagation();
          changeColorCode();
        }}
      >
        랜덤 프로필
      </Menu>
      <div className="hr" />

      <Menu onClick={logout}>Logout</Menu>
    </ModalBox>
  );
};

export default ProfileModal;

const ModalBox = styled("div")`
  z-index: 20;
  position: absolute;
  right: -30%;
  top: 110%;
  width: 12rem;
  padding: 4px;
  font-size: 16px;
  background-color: #303030;
  border-radius: 4px;

  div.hr {
    height: 1px;
    background-color: #484848;
  }
`;
const Menu = styled("div")`
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #4d4d4d;
    text-decoration: underline;
  }
`;
