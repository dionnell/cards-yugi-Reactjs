import { useState } from "react";
import { ListSpells } from "../components/ListSpells";


export const Spells = ({value}) => {

    const [categories, setCategories] = useState(value);

    const onAllRace = () =>{
        setCategories( value ); 
    }
    
    const onNormalRace = () =>{
        setCategories( value+'&race=Normal' );
    }

    const onFieldRace = () =>{
        setCategories( value+'&race=Field' );
    }

    const onEquipRace = () =>{
        setCategories( value+'&race=Equip' );
    }

    const onContinuousRace = () =>{
        setCategories( value+'&race=Continuous' );
    }

    const onQuickRace = () =>{
        setCategories( value+'&race=Quick-Play' );
    }

    const onRitualRace = () =>{
        setCategories( value+'&race=Ritual' );
    }


    return(
        <>
            <div className="fondo pt-4">
                <div className="container ">
                    
                    <div className="container ">
                        <div className="row col-12 mb-2">
                            <h2>Spells Cards</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col mt-2 mb-2" >
                                <button   onClick={onAllRace} role="button" className="button-85 btn-trap-spell" >
                                    All Spell
                                </button>
                            </div>
                            <div className="col mt-2 mb-2" >
                                <button  onClick={onNormalRace} className="button-85 btn-trap-spell" >
                                    Normal 
                                </button>
                            </div>
                            <div className="col mt-2 mb-2" >
                                <button onClick={onFieldRace} className="button-85 btn-trap-spell">
                                    Field 
                                </button>
                            </div>
                            <div className="col mt-2 mb-2" >
                                <button onClick={onEquipRace} className="button-85 btn-trap-spell">
                                    Equip 
                                </button>
                            </div>
                            <div className="col mt-2 mb-2" >
                                <button onClick={onContinuousRace} className="button-85 btn-trap-spell" > 
                                    Continuous 
                                </button>
                            </div>
                            <div className="col mt-2 mb-2" >
                                <button onClick={onQuickRace} className="button-85 btn-trap-spell"> 
                                    Quick-Play 
                                </button>
                            </div>
                            <div className="col mt-2 mb-2" >
                                <button onClick={onRitualRace} className="button-85 btn-trap-spell"> 
                                    Ritual 
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

Spells.defaultProps = {
    value: 'type=Spell Card',
}