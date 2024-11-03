import { Ingredients } from '../../pasta-items/type/PastaTypes';
import { ExtraIngredient } from '../../pizza-items/type/PizzaTypes';

export type ProductType = 'pizza' | 'pasta' | 'other';

export interface CartItem {
	id: string;
	type: ProductType; // Добавляем тип продукта
	name: string;
	image: string; // Свойство для изображения
	price: number;
	quantity: number;
	size?: string; // Размер продукта, если применимо
	extras?: ExtraIngredient[];
	ingredients?: Ingredients[];
}
