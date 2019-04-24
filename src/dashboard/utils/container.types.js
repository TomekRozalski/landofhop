import PropTypes from 'prop-types';

const ContainerTypes = {
	propTypes: {
		moveBack: PropTypes.func.isRequired,
		moveOn: PropTypes.func.isRequired,
		savedForms: PropTypes.shape({}),
		saveFormValues: PropTypes.func.isRequired,
		showSubform: PropTypes.func.isRequired,
		update: PropTypes.shape({}),
	},
	defaultProps: {
		savedForms: {},
		update: null,
	},
};

export default ContainerTypes;
