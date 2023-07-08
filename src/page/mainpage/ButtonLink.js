import "./ButtonStyle.css";


const ButtonLink = (props) =>{

    return(
        <>
        <div className="ButtonElement">
        <a className="btn1" href={props.link}>{props.name}</a>
        </div>
        </>
    )
}


export default ButtonLink;