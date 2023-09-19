import { IoChevronBackOutline, IoEllipsisVerticalSharp } from "react-icons/io5";
import { Boop } from "../../animations/boopAnimation";
import { useUserContext } from "../../context";
import { useAuth0 } from "@auth0/auth0-react";
import { TfiPencil } from "react-icons/tfi";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { useEffect } from "react";
import { ArtistCreateForm, TracksCreateForm,AlbumCreateForm } from "..";
import styled from "styled-components";

export const ProfileMainContainer = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { userData, userFetch } = useUserContext();
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  useEffect(() => {
    if (!userData) {
      userFetch(user, getAccessTokenSilently);
    }
  }, [user, userData]);

  return (
    <>
      {/* <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <TracksCreateForm closeModal={closeModal1} />
      </Modal> */}
      {/* <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <TracksCreateForm closeModal={closeModal1} />
      </Modal> */}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <AlbumCreateForm closeModal={closeModal1} />
      </Modal>
      <ProfileMainContainerStyles>
        <ProfileIconsContainer>
          <Boop rotation={20} timing={200}>
            <IoChevronBackOutline />
          </Boop>
          <Boop rotation={20} timing={200}>
            {" "}
            <IoEllipsisVerticalSharp />
          </Boop>
        </ProfileIconsContainer>
        <ProfileIconEditContainer>
          <h2 className="profile__h2">Profile</h2>
          <Boop rotation={20} timing={200}>
            <button onClick={openModal1} className="button-icon" type="button">
              <TfiPencil />
            </button>
          </Boop>
        </ProfileIconEditContainer>
        <div className="profile__img-container">
          <img src={userData?.userImage ? userData?.userImage : user?.picture} alt="profile imagen" />
          <span className="profile__span-email">{userData?.userEmail}</span>
          <h3 className="profile__h3-name">{userData?.userName}</h3>
          <div className="profile__numbers-container">
            <span className="profile__span-numbers">778</span>
            <span className="profile__span-numbers">243</span>
          </div>
          <div className="profile__followers-container">
            <span className="profile__span-followers">Followers</span>
            <span className="profile__span-followers">followed</span>
          </div>
        </div>
      </ProfileMainContainerStyles>
    </>
  );
};

const ProfileMainContainerStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background: var(--color-background-main);
  & img {
    object-fit: contain;
    border-radius: 50%;
    max-width: 13rem;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  & img:hover {
    transform: scale(0.9);
  }

  height: 100%;

  .profile__img-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    .profile__span-email {
      padding-top: 1rem;
      font-size: clamp(0.8rem, 1.4rem, 2rem);
      color: rgb(134, 129, 134);
    }

    .profile__h3-name {
      font-size: clamp(1.5rem, 2.5rem, 5rem);
      color: #e85973;
      padding: 1.5rem 0;
    }

    .profile__numbers-container {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;

      .profile__span-numbers {
        font-size: clamp(0.8rem, 2.3rem, 3rem);
        color: #e85973;
      }
    }
    .profile__followers-container {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      width: 100%;
      .profile__span-followers {
        color: rgb(134, 129, 134);
        font-size: clamp(0.8rem, 2rem, 2rem);
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-area: 1 / 1 / 5 / 7;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    grid-area: 1 / 1 / 5 / 7;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-area: 1 / 2 / 5 / 7;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1025px) {
    grid-area: 1 / 2 / 5 / 7;
    grid-template-rows: 1fr 4fr 4fr;
    width: 100%;
    height: 100%;
  }
`;

const ProfileIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & svg {
    font-size: clamp(0.8rem, 2.3rem, 3rem);
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;
const ProfileIconEditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-left: 2.5rem;
  width: 100%;
  & .profile__h2 {
    font-size: clamp(1.5rem, 3rem, 5rem);
    color: #e85973;
  }

  .button-icon {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  & svg {
    font-size: clamp(0.8rem, 2.3rem, 3rem);
    color: rgba(255, 255, 255, 1);
  }
`;
