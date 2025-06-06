import { styled } from "@mui/material";
import useModal from "../../../hook/useModal";
import useOutsideClick from "../../../hook/useOutsideClick";
import ProfileIcon from "../../../image/profileIcon.png";
import { logout } from "../../../utils/auth";
import useRendomColor from "../../../hook/useRendomColor";

const Profile = () => {
  const colorCode = useRendomColor();
  const { open, open_modal, close_modal } = useModal();
  const itemRef = useOutsideClick(close_modal);

  return (
    <ProfileBox onClick={open_modal} code={colorCode.code}>
      <img src={ProfileIcon} alt="프로필 아이콘" />

      {open && (
        <ModalBox ref={itemRef}>
          <Menu
            onClick={(e) => {
              e.stopPropagation();
              close_modal(colorCode.getRandomCode);
            }}
          >
            랜덤 프로필
          </Menu>
          <div className="hr" />
          <Menu onClick={logout}>Logout</Menu>
        </ModalBox>
      )}
    </ProfileBox>
  );
};

export default Profile;

const ProfileBox = styled("div")<{ code: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.4rem;
  aspect-ratio: 1/1;
  background-color: ${({ code }) => code};
  border-radius: 50px;
  border: 8px solid #1f1f1f;
  cursor: pointer;
`;
const ModalBox = styled("div")`
  position: absolute;
  right: -50%;
  top: 130%;
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
