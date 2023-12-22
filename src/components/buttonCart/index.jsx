import "./styles.scss";
const ButtonActionCart = ({buttonClass, text}) => {
    return (
        <>
        <button className={`p-2 ${buttonClass}`}><img src="./images/icon_card.svg" alt="" className="mx-1"/>{text}</button>
        </>
    )
}

export default ButtonActionCart;