import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { DetailsControlPanelContext } from 'config';
import {
	Checkbox,
	ControlPanelWrapper,
	Label,
	OptionWrapper,
} from './elements';
import { Navigation } from './fragments';

const ControlPanel = () => {
	const {
		isProducerDataHighlighted,
		isEditorialDataHighlighted,
		toggleProducerDataHighlight,
		toggleEditorialDataHighlight,
	} = useContext(DetailsControlPanelContext);

	return (
		<ControlPanelWrapper>
			<Navigation />
			<OptionWrapper>
				<Checkbox
					id="control.producer"
					onChange={toggleProducerDataHighlight}
					checked={isProducerDataHighlighted}
				/>
				<Label htmlFor="control.producer" type="producer">
					<FormattedMessage id="details.controlPanel.selectProducerData" />
				</Label>
			</OptionWrapper>
			<OptionWrapper>
				<Checkbox
					id="control.editorial"
					onChange={toggleEditorialDataHighlight}
					checked={isEditorialDataHighlighted}
				/>
				<Label htmlFor="control.editorial" type="editorial">
					<FormattedMessage id="details.controlPanel.selectEditorialData" />
				</Label>
			</OptionWrapper>
		</ControlPanelWrapper>
	);
};

export default ControlPanel;
