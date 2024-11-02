import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartButton: React.FC = () => {
	const { items } = useCart();
	const navigate = useNavigate();

	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

	return <button onClick={() => navigate('/cart')}>Посмотреть мой список ({itemCount})</button>;
};

export default CartButton;
