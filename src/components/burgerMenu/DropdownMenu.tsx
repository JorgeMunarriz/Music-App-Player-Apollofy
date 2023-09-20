import styled from "styled-components";
import {FC} from 'react'
import { trackDelete } from "../../api/track.service";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "..";
import { DeleteModal } from "./DeleteModal";
import { useModal } from "../../hooks/useModal";

interface DropdownMenuInterface {
    isOpen: boolean;
    trackId: string;
}
export const DropdownMenu:FC<DropdownMenuInterface> = ({isOpen, trackId}) => {
    const [isOpenModal, openModal, closeModal] = useModal(false)

    const handleEditSong = () => {
      try {
        
      } catch (error) {
        
      }
    }

  return isOpen ? (
    <DropdownMenuStyles>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <DeleteModal onClose={closeModal} trackId={trackId}/>
        </Modal>
    <div className="dropdown__menu">
        <button onClick={handleEditSong}>Edit song</button>
        <button onClick={openModal} >Delete song</button>
    </div>
    </DropdownMenuStyles>
  ) : null;
}



const DropdownMenuStyles = styled.div`

width: 100%;
max-width: 500px;
border-radius: 5px;
box-shadow: 0, 1, 2;


`;



