import React from 'react';

import { WithTitle } from 'elements';
import { BeverageFormWrapper } from './utils';
import Label from './Label';
import Producer from './Producer';
import Editorial from './Editorial';
import saveBeverage from './utils/api/saveBeverage';

const AddNewBeverage = () => (
	<WithTitle title="dashboard.addNewBeverage.title">
		<BeverageFormWrapper>
			{({
				getBeveragesList,
				header,
				moveBack,
				moveOn,
				notify,
				push,
				savedForms,
				saveFormValues,
				setHeader,
				setReadyToUnmount,
				setScrollPosition,
				showSubform,
				step,
				token,
			}) => {
				if (!header) {
					setHeader('dashboard.addNewBeverage.title');
				}

				const finalSubmit = saveBeverage({
					getBeveragesList,
					notify,
					push,
					savedForms,
					setReadyToUnmount,
					setScrollPosition,
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
	</WithTitle>
);

export default AddNewBeverage;
