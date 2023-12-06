import { useState } from "react";
import ReactModal from "react-modal";
import ReactFlipCard from "reactjs-flip-card"



export const YugiCard = ({
        id,
        title,
        type,
        description,
        atack,
        defence,
        level,
        race,
        attibute,
        archetype,
        url
}) => {
    
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => {
        setShowModal(true)
    }
      
    const handleCloseModal = () => {
        setShowModal(false) 
    }

    const styles = {
        img: (type == 'Spell Card') ? 
                {width: 154, height: 157,borderRadius: 0, margin: 11, marginTop: 13, marginBottom:13 }:
                (type == 'Trap Card') ?
                    {width: 150, height: 152,borderRadius: 0, marginLeft: 12, marginTop:'22px', marginBottom:15 }:
                    {width: 152, height: 155,borderRadius: 0, marginLeft: 12, marginTop: 1, marginBottom:11 },
        imgModal: (type == 'Spell Card') ? 
                    {width: 267, height: 263,borderRadius: 0, margin: 30, marginTop: 35, marginBottom:20 }:
                    (type == 'Trap Card') ?
                        {width: 257, height: 253,borderRadius: 0, marginLeft: 35, marginTop:'50px', marginBottom:25 }:
                        {width: 261, height: 262,borderRadius: 0, marginLeft: 30, marginTop: 11, marginBottom:21 },
        imgEstrella: {width: 13, height: 13,borderRadius: 10, marginTop:'-10px'},
        imgEstrellaModal: {width: 20, height: 20,borderRadius: 10, marginTop:'-10px'},
        AlignLevel:{marginTop:'-6px', height: 18},
        AlignLevelModal:{marginTop:'16px', height: 18},
        AlignAtkDef:{marginTop:'-1px', height: 18},
        AlignAtkDefModal:{marginTop:'-5px', height: 18},
        btn:{paddingTop: 1, paddingBottom: 1.5, paddingLeft: 1.5, paddingRight: 1.5, height: 10, fontSize: 10 },
        centeredContent: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
        container: {padding: 20},        
        cardFront: (type == 'Spell Card') ?
                    { borderRadius: 20, width: 200, height: 300, background:`url(/spell-card.png)`, backgroundSize: '200px 300px' }:
                    (type == 'Trap Card') ?
                        { borderRadius: 10, width: 200, height: 300, background:`url(/trap-card.jpg)`, backgroundSize: '200px 300px' }:
                        { borderRadius: 10, width: 200, height: 300, background:`url(/carta_layout.jpg)`, backgroundSize: 'contain' },
        cardFrontModal: (type == 'Spell Card') ?
                        { borderRadius: 20, width: 350, height: 500, background:`url(/spell-card.png)`, backgroundSize: '350px 500px' }:
                        (type == 'Trap Card') ?
                            { borderRadius: 10, width: 350, height: 500, background:`url(/trap-card.jpg)`, backgroundSize: '350px 500px' }:
                            { borderRadius: 10, width: 350, height: 500, background:`url(/carta_layout.jpg)`, backgroundSize: 'contain' },
        cardBack:  {borderRadius: 20, width: 200, height: 300,
                    background: ''} 
    }

    const Estrellalevel = () => {
        for (let i = 0; i < Number(level); i++) {
            return  <img className="" style={styles.imgEstrella} src="/estrella.png" alt={level} />;
          }
    }

    return (
    <div className="col ps-2 ">
        <div style={{width: 200, height: 300}} className="mt-2 mb-2" >
            <ReactFlipCard
                containerCss={'resizeBasedOnParent'}
                flipTrigger={"onClick"}
                direction={'diagonal'}
                frontStyle={styles.cardFront}
                backStyle={styles.cardBack}
                frontComponent= { 
                                    <div className=" container ">
                                        {(type == 'Spell Card' || type == 'Trap Card') ?
                                            <h5 className="carta-title title mt-3 ms-2">  <strong> {title} </strong>  </h5> :
                                            <h5 className="carta-title-Monster title mt-3 ms-2"> <strong> {title} | {attibute} </strong> </h5>
                                        }
                                        {(type == 'Spell Card' || type == 'Trap Card') ?
                                            <h5>{level}</h5>:
                                            <div className="d-flex justify-content-end" style={styles.AlignLevel}>
                                                    <div className="col-1  justify-content-end me-1"> <h5 className="carta-title ">{level}</h5></div> 
                                                    <div className="col-2  justify-content-end"> {Estrellalevel(level)}</div>
                                            </div>
                                        }
                                        <img src={url} alt={title} style={styles.img}  />
                                        <h5 className="carta-Race title ms-2"> <strong> [{race}]</strong></h5>
                                        <div className="carta-description"><p className="carta-desc ms-2">{description}</p></div> 
                                        
                                        <div className="d-flex  justify-content-end align-items-center text-end" style={styles.AlignAtkDef}>
                                                <div className="col-2  carta-atkDef"> <h5 style={{fontSize:7, marginBottom:2}}>{atack}</h5></div> 
                                                <div className="col-2  carta-atkDef"> <h5 style={{fontSize:7, marginBottom:2}}>{defence}</h5></div>
                                        </div>

                                    </div>  
                                }
                backComponent={<img src="/carta_reverso.jpg" alt='' style={styles.cardBack} className="" />}
            />
            
        </div>
            <div className="row justify-content-center mt-1">
                <div className="col-6  ">
                    <button 
                        className="btn btn-secondary  carta-btn" 
                        style={styles.btn}
                        onClick={handleOpenModal}
                    > 
                        Ver Mas... 
                    </button>
                </div>
            </div>
            <ReactModal 
                isOpen={showModal}
                contentLabel=""
                onRequestClose={handleCloseModal}
                className="Modal"
                ariaHideApp={false}
                overlayClassName="Overlay"
            >
                <div style={styles.cardFrontModal}>
                    <div className=" container ">
                        {(type == 'Spell Card' || type == 'Trap Card') ?
                            <h5 className="carta-titleSpell-Modal title-Modal ">  <strong> {title} </strong>  </h5> :
                            <h5 className="carta-title-Monster-Modal title-Modal "> <strong> {title} | {attibute} </strong> </h5>
                        }
                        {(type == 'Spell Card' || type == 'Trap Card') ?
                            <h5>{level}</h5>:
                            <div className="d-flex justify-content-end" style={styles.AlignLevelModal}>
                                    <div className="col-1  justify-content-end text-center"> <h5 className="carta-level ">{level}</h5></div> 
                                    <div className="col-2  justify-content-end">
                                        <img className="" style={styles.imgEstrellaModal} src="/estrella.png" alt={level} />
                                    </div>
                            </div>
                        }
                        <img src={url} alt={title} style={styles.imgModal}  />
                        <h5 className="carta-Race-Modal title-Modal "> <strong> [{race}]</strong></h5>
                        <div className="carta-descriptionMonster-Modal"><p className="carta-descMonster-Modal ">{description}</p></div> 

                        <div className="d-flex  justify-content-end align-items-center text-end" style={styles.AlignAtkDefModal}>
                                <div className="col-2  carta-atkDef"> <h5 style={{fontSize:12, marginBottom:2,marginRight:21}}> <strong> {atack} </strong></h5></div> 
                                <div className="col-2  carta-atkDef"> <h5 style={{fontSize:12, marginBottom:2,marginRight:21}}> <strong> {defence}</strong></h5></div>
                        </div>
                    </div>
                </div>  
          
        </ReactModal>
    </div>
  )
}
