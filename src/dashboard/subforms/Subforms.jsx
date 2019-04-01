import React from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
// import AddNewCountry from './AddNewCountry';
// import AddNewIngredient from './AddNewIngredient';
// import AddNewInstitution from './AddNewInstitution';
// import AddNewPlace from './AddNewPlace';

const Subforms = ({
	hide,
	showSubform,
	subform,
}) => {
	const subformProps = { hide, showSubform };

	switch (subform) {
	// case constants.forms.institution:
	// 	return (<AddNewInstitution {...subformProps} />);
	// case constants.forms.place:
	// 	return (<AddNewPlace {...subformProps} />);
	// case constants.forms.country:
	// 	return (<AddNewCountry {...subformProps} />);
	// case constants.forms.ingredients:
	// 	return (<AddNewIngredient {...subformProps} />);
	default:
		return null;
	}
};

Subforms.propTypes = {
	hide: PropTypes.func.isRequired,
	showSubform: PropTypes.func.isRequired,
	subform: PropTypes.string,
};

Subforms.defaultProps = {
	subform: null,
};

export default Subforms;
