import React, { FC, useState } from 'react';
import { StyledReactPaginate } from '../../styled';

export interface IPaginationHandlerEvent {
	selected: number
}

interface IProps {
	page: number;
	pageCount: number;
	handlePaginationClick: (event: IPaginationHandlerEvent) => void;
}

const Paginator: FC<IProps> = ({page, pageCount, handlePaginationClick  } ) => {

	return (
		<StyledReactPaginate
			breakLabel="..."
			nextLabel="Next"
			onPageChange={handlePaginationClick}
			pageRangeDisplayed={4}
			marginPagesDisplayed={5}
			pageCount={pageCount}
			previousLabel="Prev"
			pageClassName='element'
			pageLinkClassName='link'
			activeLinkClassName='link__active'
			initialPage={page - 1}
			disableInitialCallback={true}
		/>
	);
};

export default Paginator;
