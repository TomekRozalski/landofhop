import React from 'react';

import { BeverageFormWrapper } from 'dashboard/utils';
import Label from 'dashboard/Label';
import Producer from 'dashboard/Producer';
import Editorial from 'dashboard/Editorial';
import saveBeverage from 'dashboard/utils/api/saveBeverage';

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
			setTitle,
			showSubform,
			step,
			title,
			token,
		}) => {
			if (!title) {
				setTitle('dashboard.addNewBeverage.title');
			}

			const finalSubmit = saveBeverage({
				getBeveragesList,
				push,
				savedForms,
				setAppError,
				token,
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
