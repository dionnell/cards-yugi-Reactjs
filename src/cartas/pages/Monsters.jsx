import { useState } from "react";
import { ListSpells } from "../components/ListSpells";

const valor = {
  All: 'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster',
  Aqua: 'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Aqua',
  Beast: 'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Beast',
  BeastWarrior:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Beast-Warrior',
  Cyberse:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Cyberse',
  Dinosaur:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Dinosaur',
  DivineBeast:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Divine-Beast',
  Dragon:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Dragon',
  Fairy:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Fairy',
  Fiend:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Fiend',
  Fish:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Fish',
  Insect:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Insect',
  Machine:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Machine',
  Plant:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Plant',
  Psychic:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Psychic',
  Pyro:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Pyro',
  Reptile:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Reptile',
  Rock:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Rock',
  SeaSerpent:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Sea Serpent',
  Spellcaster:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Spellcaster',
  Thunder:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Thunder',
  Warrior:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Warrior',
  WingedBeast:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Winged Beast',
  Wyrm:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Wyrm',
  Zombie:'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster&race=Zombie',
}

export const Monsters = () => {
  
  const [categories, setCategories] = useState(valor.All);
  const [AtkDef, setAtkDef] = useState('');

  
  return(
      <>
          <div className="fondo pt-4">
            <div className="container ">
                
                <div className="container">
                    <div className="row col-12">
                    <h2>Monster Cards</h2>
                    </div>
                </div>
                <hr />
    
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                      <div className="col 4">
                        <h2>Monster Type</h2>
                        <select
                          value={categories} 
                          onChange={e => setCategories(e.target.value)} 
                        >
                          {Object.entries(valor).map(c => (
                            <option value={c[1]}>{c[0]}</option>
                          ))}
                        </select>
                      </div>
                          
                      <div className="col 4">
                        <h2>Order</h2>
                        <select
                          value={AtkDef} 
                          onChange={e => setAtkDef(e.target.value)} 
                        >
                          <option value=''>--</option>
                          <option value="&sort=atk">Atack</option>
                          <option value="&sort=def">Defence </option>
                          <option value="&sort=level">Level</option>
                        </select>
                      </div>
                    </div>
                </div>
                          
                <hr className="mb-4" />    
                          
                <ListSpells key={categories+AtkDef} category={categories+AtkDef}  />
             </div>
           </div>
      </>
  )

}

Monsters.defaultProps = {
  valor: 'type=Effect Monster,Flip Effect Monster,Flip Tuner Effect Monster,Gemini Monster,Normal Monster,Normal Tuner Monster,Spirit Monster,Toon Monster,Tuner Monster,Union Effect Monster'
}
