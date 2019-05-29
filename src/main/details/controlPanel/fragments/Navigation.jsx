import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	arrayOf,
	bool,
	func,
	shape,
} from 'prop-types';
import { connect } from 'react-redux';

import { getBeveragesList as getBeveragesListAction } from 'store/actions';
import { BeverageDetailsContext } from 'config';
import { StyledButton } from '../elements';
import { beverageBasics } from '../../../tiles/utils';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

const Navigation = ({
	getBeveragesList,
	isError,
	isLoading,
	list,
}) => {
	const { beverage } = useContext(BeverageDetailsContext);
	const [prevLink, setPrevLink] = useState(null);
	const [nextLink, setNextLink] = useState(null);

	useEffect(() => {
		if (list.length >= 5 && !isLoading && !isError) {
			const num = list.findIndex(item => item.id === beverage.id);

			if (num === 0) {
				setPrevLink(null);
			} else {
				const {
					badge,
					brand: {
						badge: brandBadge,
					},
					shortId,
				} = list[num - 1];
				setPrevLink(`/details/${shortId}/${brandBadge}/${badge}`);
			}


			if (num + 1 === list.length) {
				setNextLink(null);
			} else {
				const {
					badge,
					brand: {
						badge: brandBadge,
					},
					shortId,
				} = list[num + 1];
				setNextLink(`/details/${shortId}/${brandBadge}/${badge}`);
			}
		}
	}, [isError, isLoading, list]);

	useEffect(() => {
		if (list.length < 5) {
			getBeveragesList();
		}
	}, []);

	return (
		<Wrapper>
			<StyledButton to={prevLink} type="previous">poprzednie piwo</StyledButton>
			<StyledButton to={nextLink} type="next">następne piwo</StyledButton>
		</Wrapper>
	);
};

Navigation.propTypes = {
	getBeveragesList: func.isRequired,
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	list: arrayOf(
		shape(beverageBasics),
	).isRequired,
};

const mapStateToProps = ({ beverages }) => ({
	isError: beverages.basics.isError,
	isLoading: beverages.basics.isLoading,
	list: beverages.basics.list,
});

const mapDispatchToProps = {
	getBeveragesList: getBeveragesListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
