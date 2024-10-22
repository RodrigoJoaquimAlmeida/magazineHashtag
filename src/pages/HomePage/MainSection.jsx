import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsFilter from './ProductsFilter';
import ProductsContainer from './ProductsContainer';

const MainSection = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<>
			<ProductsFilter setSearchParams={setSearchParams} />
			<ProductsContainer searchParams={searchParams} />
		</>
	);
};

export default MainSection;
