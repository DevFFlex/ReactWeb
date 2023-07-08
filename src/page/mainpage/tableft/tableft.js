// import ButtonPage from "../ButtonPage";
import ButtonLink from "../ButtonLink";
import "./tableft.css";

const TabLeft = () => {

    return (
        <>
        <div className="container">

            <img className="imgprofile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHCg6n46PM78T8GMwb0PE05xN6S7B5UYKbw&usqp=CAU" alt=""></img>
            
            <div className="child1">

                <div className="ButtonGroup">
                {/* <ButtonPage name="Home" path="/"/> */}
                <ButtonLink name="Profile" link="https://fflex-efbb7.firebaseapp.com/"></ButtonLink>
                <ButtonLink name="Contact" link="/profile"/>
        
                </div>

                <h1>Resume</h1>

                <h1>Project</h1>
            </div>
            

        </div>
        </>
    )

}


export default TabLeft;



