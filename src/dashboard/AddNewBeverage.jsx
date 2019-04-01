import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import { BeverageFormWrapper } from 'dashboard/utils';
import { MainHeader, ProgressList } from 'dashboard/elements';

const AddNewBeverage = () => (
	<BeverageFormWrapper>
		{({
			hideSubforms,
			moveBack,
			moveOn,
			moveTo,
			savedForms,
			saveFormValues,
			showSubform,
			subform,
			step,
		}) => {
			const formBodyProps = {
				moveBack,
				moveOn,
				savedForms,
				saveFormValues,
				showSubform,
			};

			return (
				<>
					{/* <Subforms
						hide={hideSubforms}
						showSubform={showSubform}
						subform={subform}
					/> */}
					<MainHeader title="dashboard.addNewBeverage.title" />
					<ProgressList step={step} moveTo={moveTo} />
					{/* { step === 1 && <Label {...formBodyProps} /> } */}
					{/* { step === 2 && <Producer {...formBodyProps} /> } */}
					{/* { step === 3 && <Editorial {...formBodyProps} finalSubmit={finalSubmit} /> } */}
					<FormattedMessage id="dashboard.addNewBeverage.title">
						{title => <Helmet><title>{title}</title></Helmet>}
					</FormattedMessage>
				</>
			);
		}}
	</BeverageFormWrapper>
);

export default AddNewBeverage;
