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
            <div className="fondo pt-4">
            <div className="container ">
                
                <div className="container">
                    <div className="row col-12">
                    <h2>Traps Cards</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row row-cols-md-2 row-cols-lg-4 justify-content-around ">
                        <div className="col-2 mt-2 mb-2 btn-trap-spell" >
                            <button   onClick={onAllRace} className="button-85 btn-trap-spell" >
                                All Traps
                            </button>
                        </div>
                        <div className="col-2 mt-2 mb-2 btn-trap-spell" >
                            <button  onClick={onNormalRace} className="button-85 btn-trap-spell" >
                                Normal 
                            </button>
                        </div>
                        <div className="col-2 mt-2 mb-2 btn-trap-spell" >
                            <button onClick={onContinuousdRace} className="button-85 btn-trap-spell">
                                Continuous 
                            </button>
                        </div>
                        <div className="col-2 mt-2 mb-2 btn-trap-spell" >
                            <button onClick={onCounterRace} className="button-85 btn-trap-spell">
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