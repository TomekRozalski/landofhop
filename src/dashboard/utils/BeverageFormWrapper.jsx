import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Prompt, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';

import { AppErrorContext, AuthenticationContext } from 'config';
import {
	clearBeverageDashboard as clearBeverageDashboardAction,
	getBeveragesList as getBeveragesListAction,
	getCountriesList as getCountriesListAction,
	getIngredientsList as getIngredientsListAction,
	getInstitutionsList as getInstitutionsListAction,
	getPlacesList as getPlacesListAction,
	saveFormValues as saveFormValuesAction,
} from 'store/actions';
import { Spinner } from 'elements';
import { MainHeader, ProgressList } from 'dashboard/elements';
import Subforms from 'dashboard/subforms';

const BeverageFormWrapper = ({
	areCountriesLoaded,
	areIngredientsLoaded,
	areInstitutionsLoaded,
	arePlacesLoaded,
	children,
	clearBeverageDashboard,
	getBeveragesList,
	getCountriesList,
	getIngredientsList,
	getInstitutionsList,
	getPlacesList,
	history: { push },
	savedForms,
	saveFormValues,
}) => {
	const { setAppError } = useContext(AppErrorContext);
	const { token } = useContext(AuthenticationContext);

	const [step, setStep] = useState(1);
	const [subform, setSubform] = useState(null);
	const [title, setTitle] = useState('');
	const [readyToUnmount, setReadyToUnmount] = useState(false);

	const preventClose = (e) => {
		e.preventDefault();
		e.returnValue = '';
	};

	useEffect(() => {
		if (!areCountriesLoaded) { getCountriesList(); }
		if (!areIngredientsLoaded) { getIngredientsList(); }
		if (!areInstitutionsLoaded) { getInstitutionsList(); }
		if (!arePlacesLoaded) { getPlacesList(); }

		window.addEventListener('beforeunload', preventClose);

		return () => {
			clearBeverageDashboard();
			window.removeEventListener('beforeunload', preventClose);
		};
	}, []);

	const moveBack = () => {
		setStep(step - 1);
	};

	const moveOn = () => {
		setStep(step + 1);
	};

	const moveTo = (value) => {
		setStep(value);
	};

	const showSubform = (subformToSet) => {
		// scrollContentTop();
		setSubform(subformToSet);
	};

	const hideSubforms = () => {
		setSubform(null);
	};

	if (
		!areCountriesLoaded
		|| !areIngredientsLoaded
		|| !areInstitutionsLoaded
		|| !arePlacesLoaded
	) {
		return <Spinner center />;
	}

	return (
		<>
			<Subforms
				hide={hideSubforms}
				showSubform={showSubform}
				subform={subform}
			/>
			<MainHeader title={title} />
			<ProgressList step={step} moveTo={moveTo} />
			{
				children({
					getBeveragesList,
					moveBack,
					moveOn,
					push,
					savedForms,
					saveFormValues,
					setAppError,
					setReadyToUnmount,
					setTitle,
					showSubform,
					step,
					title,
					token,
				})
			}
			{
				!readyToUnmount && (
					<FormattedMessage id="appWarning.areYouSureYouWantToLeave">
						{message => <Prompt when message={message} />}
					</FormattedMessage>
				)
			}
			<FormattedMessage id={title}>
				{value => <Helmet><title>{value}</title></Helmet>}
			</FormattedMessage>
		</>
	);
};

BeverageFormWrapper.propTypes = {
	areCountriesLoaded: PropTypes.bool.isRequired,
	areIngredientsLoaded: PropTypes.bool.isRequired,
	areInstitutionsLoaded: PropTypes.bool.isRequired,
	arePlacesLoaded: PropTypes.bool.isRequired,
	children: PropTypes.func.isRequired,
	clearBeverageDashboard: PropTypes.func.isRequired,
	getBeveragesList: PropTypes.func.isRequired,
	getCountriesList: PropTypes.func.isRequired,
	getIngredientsList: PropTypes.func.isRequired,
	getInstitutionsList: PropTypes.func.isRequired,
	getPlacesList: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	savedForms: PropTypes.shape({

	}).isRequired,
	saveFormValues: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dashboard }) => ({
	areCountriesLoaded: get(dashboard, 'lists.countries.isLoaded', false),
	areIngredientsLoaded: get(dashboard, 'lists.ingredients.isLoaded', false),
	areInstitutionsLoaded: get(dashboard, 'lists.institutions.isLoaded', false),
	arePlacesLoaded: get(dashboard, 'lists.places.isLoaded', false),
	savedForms: dashboard.savedForms,
});

const mapDispatchToProps = {
	clearBeverageDashboard: clearBeverageDashboardAction,
	getBeveragesList: getBeveragesListAction,
	getCountriesList: getCountriesListAction,
	getIngredientsList: getIngredientsListAction,
	getInstitutionsList: getInstitutionsListAction,
	getPlacesList: getPlacesListAction,
	saveFormValues: saveFormValuesAction,
};

const enhanced = compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
);

export default enhanced(BeverageFormWrapper);
