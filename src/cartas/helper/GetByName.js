import { useFetchCards } from "../hook/useFetchCards";


export const GetByName = ( name ='' ) => {
    const {images, isLoading} = useFetchCards('');
    const cards = images.slice()

    if ( name.length === 0 ) return []

    return images.filter(
        card => card.title.includes(name)
    )

}
