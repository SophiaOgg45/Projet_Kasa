import StarActive from '../assets/images/StarActive.png'
import StarInactive from '../assets/images/StarInactive.png'


function Rating({value}) {

    const stars = []

    const maxRating = 5


    for (let i = 0; i < value; i++) {
        stars.push(<img key={i} src={StarActive} alt="Etoile pleine" />)
    }

    for (let i = 0; i < maxRating - value; i++) {
        stars.push(<img key={value + i} src={StarInactive} alt="Etoile vide" />)
    }

    return (

        <div className='rating'>
            {stars}
        </div>

    )
}

export default Rating

