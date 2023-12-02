
export const GetCards = async(category) => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const card = data.map( img => ({
        id: img.id,
        title: img.name,
        type: img.type,
        description: img.desc,
        atack: img.atk,
        defence: img.def,
        level: img.level,
        race: img.race,
        attibute: img.attribute,
        archetype: img.archetype,
        url: img.card_images[0].image_url_cropped,
  
    }) );
  
    return card;

}