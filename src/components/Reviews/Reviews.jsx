import ReviewItem from '../ReviewItem/ReviewItem'
import s from './Reviews.module.css'

const Reviews = ({reviews}) => {
	return (
		<div className={s.container}>
			<ul className={s.list}>
				{reviews.map((review, indx) => (
					<li key={`${review.reviewer_name}-${indx}`}>
						<ReviewItem review={review}/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Reviews