import { PlayerStyles } from './player.styles'
import logo from '../../assets/img/logo-homepage.png'
import {TbPlayerSkipBack, TbPlayerPlayFilled, TbPlayerSkipForward } from 'react-icons/tb'
export const Player = () => {
  
  return (
    <PlayerStyles>
      <div className='playerstyles__div__whole'>
    <img className='playerstyles__img' src={logo} />
    <div className='playerstyles__info'>
      <h4>Title song</h4>
      <p>Artist name</p>
    </div>
    </div>
    <div className='playerstyles__div__buttons'>
      <button><TbPlayerSkipBack/></button>
      <button><TbPlayerPlayFilled/></button>
      <button><TbPlayerSkipForward/></button>
    </div>
    </PlayerStyles>
  )
}
