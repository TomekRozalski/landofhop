import PropTypes from 'prop-types';

const ContainerTypes = {
	propTypes: {
		finalSubmit: PropTypes.func,
		moveBack: PropTypes.func.isRequired,
		moveOn: PropTypes.func.isRequired,
		savedForms: PropTypes.shape({}),
		saveFormValues: PropTypes.func.isRequired,
		showSubform: PropTypes.func.isRequired,
		update: PropTypes.shape({}),
	},
	defaultProps: {
		finalSubmit: () => {},
		savedForms: {},
		update: null,
	},
};

export default ContainerTypes;
