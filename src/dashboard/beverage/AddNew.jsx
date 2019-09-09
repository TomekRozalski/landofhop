import React from 'react';

import { BeverageFormWrapper } from './utils';
import Label from './Label';
import Producer from './Producer';
import Editorial from './Editorial';
import saveBeverage from './utils/api/saveBeverage';

const AddNewBeverage = () => (
	<BeverageFormWrapper>
		{({
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
		}) => {
			if (!title) {
				setTitle('dashboard.addNewBeverage.title');
			}

			const finalSubmit = saveBeverage({
				getBeveragesList,
				push,
				savedForms,
				setAppError,
				setReadyToUnmount,
			});

			const commonProps = {
				moveBack,
				moveOn,
				savedForms,
				saveFormValues,
				showSubform,
			};

			return (
				<>
					{ step === 1 && <Label {...commonProps} /> }
					{ step === 2 && <Producer {...commonProps} /> }
					{ step === 3 && <Editorial {...commonProps} finalSubmit={finalSubmit} /> }
				</>
			);
		}}
	</BeverageFormWrapper>
);

export default AddNewBeverage;
