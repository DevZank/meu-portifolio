import './Header.css';
import DevIcon from '../assets/DevIcon.svg';

export function Header() {
  return (
    <div className="header">
        <div className= "groupDiv">
            <div className="nameDiv">
                <img src={DevIcon} alt=""/>
                <h1 className="nameContent">Isaac Martins</h1>
            </div>
            <div className="navDiv">
                <button className="button"> <a className="aHeader" href='https://google.com'> Home </a>  </button>
                <button className="button"> <a className="aHeader" href='https://google.com'> Sobre Mim </a> </button>
                <button className="button"> <a className="aHeader" href='https://google.com'> Portifólio </a> </button>
                <button className="button"> <a className="aHeader" href='https://google.com'> Resumo </a> </button>
                <button className="buttonF"> <a className="aHeader" href='https://google.com'> Contato </a> </button>
            </div>
        </div>
    </div>
  );
}
