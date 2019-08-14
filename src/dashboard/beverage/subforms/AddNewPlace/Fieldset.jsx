import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from '../../utils';
import { AddButton } from '../../elements';
import {
	City,
	Country,
	Institution,
	Longitude,
	Latitude,
} from '../../fragments';
import { fields } from './utils';

const Fieldset = ({ showSubform }) => {
	const commonProps = {
		formName: constants.forms.place,
		inverse: true,
	};

	return (
		<>
			<City {...commonProps} fieldName={fields.city} />
			<Country {...commonProps} fieldName={fields.country} />
			<AddButton onClick={() => { showSubform(constants.forms.country); }} />
			<Institution {...commonProps} fieldName={fields.institution} />
			<Longitude {...commonProps} fieldName={fields.longitude} />
			<Latitude {...commonProps} fieldName={fields.latitude} />
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
