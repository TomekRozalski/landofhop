import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { get, isUndefined } from 'lodash';

import { grid } from 'utils';
import { constants } from 'dashboard/utils';
import { ProgressItem } from 'dashboard/elements';

const Wrapper = styled.div`
	${grid}
`;

const List = styled.ul`
	grid-column: 1 / -1;
	display: flex;
`;

const Item = styled.li`
	flex: 1;
`;

const ProgressList = ({
	moveTo,
	step,
	[constants.forms.beverage.label]: hasStep1,
	[constants.forms.beverage.producer]: hasStep2,
	[constants.forms.beverage.editorial]: hasStep3,
}) => (
	<Wrapper>
		<List>
			<Item>
				<ProgressItem order={1} step={step} completed={hasStep1} moveTo={moveTo} />
			</Item>
			<Item>
				<ProgressItem order={2} step={step} completed={hasStep2} moveTo={moveTo} />
			</Item>
			<Item>
				<ProgressItem order={3} step={step} completed={hasStep3} moveTo={moveTo} />
			</Item>
		</List>
	</Wrapper>
);

ProgressList.propTypes = {
	moveTo: PropTypes.func.isRequired,
	step: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
	const hasValue = form => !isUndefined(get(state, ['dashboard', 'savedForms', form]));

	return ({
		[constants.forms.beverage.label]: hasValue(constants.forms.beverage.label),
		[constants.forms.beverage.producer]: hasValue(constants.forms.beverage.producer),
		[constants.forms.beverage.editorial]: hasValue(constants.forms.beverage.editorial),
	});
};

export default connect(mapStateToProps)(ProgressList);
