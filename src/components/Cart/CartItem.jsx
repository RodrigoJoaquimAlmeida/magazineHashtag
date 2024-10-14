import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CartItem = () => {
	return (
		<article>
			<img src='' alt='' />
			<button>
				<FontAwesomeIcon icon={faXmark} />
			</button>
			<div>
				<p>Nome</p>
				<p>Tamanho: P</p>
				<p>Preço</p>
			</div>
		</article>
	);
};

export default CartItem;
