import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
	Checkbox,
	ControlPanelWrapper,
	Label,
	OptionWrapper,
} from './elements';
import { Navigation } from './fragments';

const ControlPanel = () => (
	<ControlPanelWrapper>
		<Navigation />
		<OptionWrapper>
			<Checkbox
				id="control.producer"
				onChange={() => { console.log('aa'); }}
				// checked={false}
			/>
			<Label htmlFor="control.producer" type="producer">
				<FormattedMessage id="details.controlPanel.selectProducerData" />
			</Label>
		</OptionWrapper>
		<OptionWrapper>
			<Checkbox
				id="control.editorial"
				onChange={() => { console.log('aa'); }}
				// checked={false}
			/>
			<Label htmlFor="control.editorial" type="editorial">
				<FormattedMessage id="details.controlPanel.selectEditorialData" />
			</Label>
		</OptionWrapper>
	</ControlPanelWrapper>
);

export default ControlPanel;
