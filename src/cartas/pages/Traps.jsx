import { useState } from "react";
import { ListSpells } from "../components/ListSpells";


export const Traps = ({value}) => {

    const [categories, setCategories] = useState(value);

    const onAllRace = () =>{
        setCategories( value ); 
    }
    
    const onNormalRace = () =>{
        setCategories( value+'&race=Normal' );
    }

    const onContinuousdRace = () =>{
        setCategories( value+'&race=Continuous' );
    }

    const onCounterRace = () =>{
        setCategories( value+'&race=Counter' );
    }


    return(
        <>
            <div className="fondo">
            <div className="container ">
                
                <div className="container">
                    <div className="row col-12">
                    <h2>Traps Cards</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className="col mt-2 mb-2" >
                            <button   onClick={onAllRace} className="btn btn-primary btn-trap-spell" >
                                All Traps
                            </button>
                        </div>
                        <div className="col-2 mt-2 mb-2" >
                            <button  onClick={onNormalRace} className="btn btn-primary btn-trap-spell" >
                                Normal 
                            </button>
                        </div>
                        <div className="col-2 mt-2 mb-2" >
                            <button onClick={onContinuousdRace} className="btn btn-primary btn-trap-spell">
                                Continuous 
                            </button>
                        </div>
                        <div className="col-2 mt-2 mb-2" >
                            <button onClick={onCounterRace} className="btn btn-primary btn-trap-spell">
                                Counter 
                            </button>
                        </div>

                    </div>
                </div>

                <hr className="mb-4" />    

                <ListSpells key={categories} category={categories}  />
             </div>
             </div>
        </>
    )

}

Traps.defaultProps = {
    value: 'type=Trap Card',
}