
export const YugiCardSearch = ({
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

    const styles = {
        title: {fontSize:17} ,
        imgEstrella: {width: 13, height: 13,borderRadius: 10, marginTop:'-10px'},
        race: {fontSize:10} ,
        desc: {fontSize:10} ,

    }


  return (
    <div className="col">
        
        <div className="card m-1 gradientYugicardSearch ">

              
            <div className="row no-gutters">
                <div className="col-4">
                    {(id=='300302025' || id=='300302061' || id=='300302062' || id=='300205002' || id=='300302068' || id=='662854' || id=='300201001' )?
                        <img src="/imgno.png" alt={title} className="card-img " />:
                        <img src={url} alt={title} className="card-img " />
                    }
                </div>

                <div className="col-8 glassCard">

                    <div className="">
                        <div className=" container ">
                                        {(type == 'Spell Card' || type == 'Trap Card') ?
                                            <h5 className="mt-3 ms-2" style={styles.title}>  <strong> {title} </strong>  </h5> :
                                            <h5 className="mt-3 ms-2" style={styles.title}> <strong> {title} | {attibute} </strong> </h5>
                                        }
                                        {(type == 'Spell Card' || type == 'Trap Card') ?
                                            <h5>{level}</h5>:
                                            <div className="d-flex justify-content-start ms-2" >
                                                    <div className="col-2  justify-content-start "> 
                                                        <h5 className="carta-title ">Level: {level}</h5>
                                                    </div> 
                                                    <div className="col-2  justify-content-star">
                                                        <img className="" style={styles.imgEstrella} src="/estrella.png" alt={level} /> 
                                                    </div>
                                            </div>
                                        }
                                        <h5 className="ms-2" style={styles.race}> <strong> [{race}]</strong></h5>
                                        <div className=""><p className="ms-2" style={styles.desc}>{description}</p></div> 
                                        {(type == 'Spell Card' || type == 'Trap Card') ?
                                            <h5>{atack}</h5>:
                                            <div className="d-flex  justify-content-start align-items-center text-end" >
                                                    <div className="col-2 "> <h5 style={{fontSize:10, marginBottom:2}}>Atk: {atack}</h5></div> 
                                                    <div className="col-2 "> <h5 style={{fontSize:10, marginBottom:2}}>Def: {defence}</h5></div>
                                            </div>
                                        }
                        </div>  

                    </div>

                </div>
            </div>        
            
        </div> 

    </div>
  )
}
