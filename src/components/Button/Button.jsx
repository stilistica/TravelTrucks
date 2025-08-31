import s from './Button.module.css'

const Button = ({onClick, children}) => {
	return (
		<button 
		className={s.btn}
		onClick={onClick}>
			{children}
		</button>
	)
}

export default Button;