import { useEffect } from "react";
import { useNavigate } from "react-router";
import Library from "../../Layout/component/Library/Library";
import LibraryHead from "../../Layout/component/Library/LibraryHead";

const PlayListPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (!isMobile) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <LibraryHead />
      <Library isMoblie={true} />
    </>
  );
};
export default PlayListPage;
