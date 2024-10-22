import { useState } from 'react';
import ProductsFilter from './ProductsFilter';
import ProductsContainer from './ProductsContainer';

const MainSection = () => {
	const [femaleProducts, setFemaleProducts] = useState(null);
	return (
		<>
			<ProductsFilter setFemaleProducts={setFemaleProducts} />
			<ProductsContainer femaleProducts={femaleProducts} />
		</>
	);
};

export default MainSection;
