import React from 'react';
import {
	arrayOf,
	bool,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import { FastField, Field } from 'formik';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from '../elements';
import { fragmentTypes } from './utils';

const IngredientsList = ({
	fieldName,
	formName,
	ingredients,
	isError,
	isLoading,
}) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={[]}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<Field
				component={StyledSelect}
				formName={formName}
				isError={isError}
				isLoading={isLoading}
				multi
				name={fieldName}
			>
				{ ingredients }
			</Field>
		</InputWrapper>
	</>
);

IngredientsList.propTypes = {
	...fragmentTypes,
	ingredients: arrayOf(
		shape({
			label: string.isRequired,
			value: string.isRequired,
			type: string.isRequired,
		}),
	).isRequired,
	isError: bool.isRequired,
	isLoading: bool.isRequired,
};

const mapStateToProps = state => ({
	ingredients: get(state, 'dashboard.lists.ingredients.values', []),
	isError: get(state, 'dashboard.lists.ingredients.isError', false),
	isLoading: get(state, 'dashboard.lists.ingredients.isLoading', false),
});

export default connect(mapStateToProps)(IngredientsList);
