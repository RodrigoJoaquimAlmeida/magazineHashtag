const ProductsFilter = () => {
	return (
		<section className='flex justify-center items-center py-8'>
			<input
				id='filter-0'
				type='radio'
				name='filter-selection'
				className='hidden'
			/>
			<label
				className='rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
				htmlFor='filter-0'
			>
				Todos
			</label>
			<input
				id='filter-1'
				type='radio'
				name='filter-selection'
				className='hidden'
			/>
			<label
				className='bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
				htmlFor='filter-1'
			>
				Masculino
			</label>
			<input
				id='filter-2'
				type='radio'
				name='filter-selection'
				className='hidden'
			/>
			<label
				className='rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
				htmlFor='filter-2'
				dir='rtl'
			>
				Feminino
			</label>
		</section>
	);
};

export default ProductsFilter;
