import { useParams } from 'react-router-dom'
import DataLogements from '../data/logementImage.json'
import StarActive from '../assets/images/StarActive.png'
import StarInactive from '../assets/images/StarInactive.png'


function Rating() {

    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)


    const stars = []

    const rating = location.rating

    const maxRating = 5


    for (let i = 0; i < rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="Etoile pleine" />)
    }

    for (let i = 0; i < maxRating - rating; i++) {
        stars.push(<img key={rating + i} src={StarInactive} alt="Etoile vide" />)
    }

    return (

        <div className='rating'>
            {stars}
        </div>

    )
}

export default Rating

