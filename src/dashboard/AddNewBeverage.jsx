import React from 'react';

import { BeverageFormWrapper } from 'dashboard/utils';
import Label from 'dashboard/Label';
import Producer from 'dashboard/Producer';

const AddNewBeverage = () => (
	<BeverageFormWrapper>
		{({
			moveBack,
			moveOn,
			savedForms,
			saveFormValues,
			setTitle,
			showSubform,
			step,
			title,
		}) => {
			if (!title) {
				setTitle('dashboard.addNewBeverage.title');
			}

			const commonProps = {
				moveBack,
				moveOn,
				savedForms,
				saveFormValues,
				showSubform,
			};

			if (title) {
				if (step === 1) {
					return <Label {...commonProps} />;
				}

				if (step === 2) {
					return <Producer {...commonProps} />;
				}
			}

			return null;

			// return (
			// 	<>
			// 		<div>sdf</div>
			// 		{/* { step === 1 && <Label {...formBodyProps} /> } */}
			// 		{/* { step === 2 && <Producer {...formBodyProps} /> } */}
			// 		{/* { step === 3 && <Editorial {...formBodyProps} finalSubmit={finalSubmit} /> } */}
			// 	</>
			// );
		}}
	</BeverageFormWrapper>
);

export default AddNewBeverage;
