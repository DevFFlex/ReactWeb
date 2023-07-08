import "./BannerTitleStyle.css"


const BannerTitle = () =>{

    const name = "Dev-Flex";

return(
    <div className="BannerTitleContainer">

        <div className="container">
            
            
            <div className="left">Welcom to</div>
            <div className="center">
            {name}
            </div>
            <div className="right">Developer World</div>

        </div>

    </div>
);

};


export default BannerTitle;