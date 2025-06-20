import { styled } from "@mui/material";
import useGetProfile from "../../../hook/useGetProfile";
import useModal from "../../../hook/local/useModal";
import useOutsideClick from "../../../hook/local/useOutsideClick";
import useRendomColor from "../../../hook/local/useRendomColor";
import ProfileIcon from "../../../image/profileIcon.png";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const { data: userProfile } = useGetProfile();
  const { colorCode, getRandomCode } = useRendomColor();
  const { open, open_modal, close_modal } = useModal();
  const ModalRef = useOutsideClick(close_modal);

  const imageUrl = userProfile?.images?.[0]?.url || null;

  return (
    <Container onClick={open_modal}>
      <PicBox haveImgUrl={!!imageUrl} code={colorCode}>
        <img src={imageUrl || ProfileIcon} alt="프로필 아이콘" />
      </PicBox>

      <ProfileModal
        isOpen={open}
        itemRef={ModalRef}
        changeColorCode={() => close_modal(getRandomCode)}
      />
    </Container>
  );
};

export default Profile;

const Container = styled("div")`
  position: relative;
`;
const PicBox = styled("div")<{ haveImgUrl: boolean; code: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  aspect-ratio: 1/1;
  background-color: ${({ code }) => code};
  border-radius: 50px;
  border: 4px solid;
  border-color: ${({ haveImgUrl, code }) => (haveImgUrl ? code : "#1f1f1f")};
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
