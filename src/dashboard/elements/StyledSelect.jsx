import React from 'react';
import {
	any,
	arrayOf,
	bool,
	func,
	shape,
	string,
} from 'prop-types';
import Select, { components } from 'react-select';
import { injectIntl } from 'react-intl';

import {
	colors,
	fonts,
	gutters,
	indexes,
} from 'utils/theme';
import { FieldStatusIndicator } from 'elements';
import { ErrorGroup, LoadingGroup } from './index';

const StyledSelect = ({
	children,
	field: {
		name: fieldName,
		value,
	},
	form: {
		setFieldValue,
	},
	formName,
	intl,
	inverse,
	isError,
	isLoading,
	multi,
	placeholder,
	warning,
}) => {
	const setValue = (newValue) => {
		setFieldValue(fieldName, newValue);
	};

	const input = props => <components.Input {...props} id={`${formName}-${fieldName}`} />;

	if (isError) {
		return <ErrorGroup />;
	}

	if (isLoading) {
		return <LoadingGroup />;
	}

	return (
		<FieldStatusIndicator select warning={warning}>
			<Select
				components={{
					Input: input,
				}}
				isDisabled={value === null}
				isMulti={multi}
				isClearable={false}
				onChange={setValue}
				options={children}
				placeholder={
					placeholder
						? intl.formatMessage({ id: `dashboard.${placeholder}` })
						: intl.formatMessage({ id: 'dashboard.select' })
				}
				styles={{
					dropdownIndicator: (base, { isFocused }) => ({
						...base,
						alignSelf: 'stretch',
						alignItems: 'center',
						padding: '0 8px',
						color: isFocused ? colors.gray[200] : colors.gray[300],
					}),
					indicatorSeparator: base => ({
						...base,
						background: colors.gray[400],
					}),
					control: (base, { isDisabled, isFocused, isMulti }) => {
						let background;
						let border;

						if (inverse && !isDisabled) {
							background = colors.gray['700'];
						} else if (inverse && isDisabled) {
							background = colors.gray['500'];
						} else if (!inverse && !isDisabled) {
							background = colors.gray['500'];
						} else if (!inverse && isDisabled) {
							background = colors.gray['600'];
						}

						if (isDisabled) {
							border = colors.gray['400'];
						} else if (isFocused) {
							border = colors.gray['100'];
						} else {
							border = colors.gray['300'];
						}

						return ({
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
							flexWrap: 'wrap',
							position: 'relative',
							minHeight: 'unset',
							height: isMulti ? 'auto' : `${gutters.inputHeight}rem`,
							borderWidth: 0,
							borderBottom: `1px solid ${border}`,
							borderRadius: 0,
							backgroundColor: background,
							transition: 'border-color .1s',
							font: `300 1.6rem / 1 ${fonts.primary}`,
						});
					},
					placeholder: (base, { isDisabled }) => ({
						...base,
						color: isDisabled ? colors.gray[300] : colors.gray[200],
					}),
					container: (base, { isDisabled }) => ({
						cursor: isDisabled ? 'not-allowed' : 'pointer',
					}),
					option: (base, { isFocused, isSelected }) => ({
						...base,
						backgroundColor: `${isFocused ? colors.gray[600] : 'transparent'}`,
						color: `${isSelected ? colors.gray[100] : colors.gray[200]}`,
						cursor: 'pointer',
					}),
					menu: base => ({
						...base,
						borderRadius: 0,
						backgroundColor: colors.gray[700],
						zIndex: indexes.dropdown,
					}),
					menuList: base => ({
						...base,
						paddingTop: 0,
						paddingBottom: 0,
					}),
					multiValue: base => ({
						...base,
						backgroundColor: colors.gray[400],
					}),
					multiValueLabel: base => ({
						...base,
						borderRadius: 0,
						padding: '0 3px 0 6px',
						color: colors.gray[100],
					}),
					multiValueRemove: base => ({
						...base,
						color: colors.gray[200],
						transition: 'color .1s',
						cursor: 'pointer',
						':hover': {
							color: colors.gray[100],
						},
					}),
					valueContainer: (base, { isMulti }) => ({
						...base,
						height: isMulti ? 'auto' : `${gutters.inputHeight}rem`,
						padding: '0 8px',
						lineHeight: 2,
					}),
					input: base => ({
						...base,
						margin: '0 2px',
						paddingTop: '1px',
						paddingBottom: '1px',
					}),
				}}
				value={value}
			/>
		</FieldStatusIndicator>
	);
};

StyledSelect.propTypes = {
	children: arrayOf(
		shape({
			label: string.isRequired,
			value: string.isRequired,
		}),
	).isRequired,
	field: shape({
		name: string.isRequired,
		value: any.isRequired,
	}).isRequired,
	form: shape({
		setFieldValue: func.isRequired,
	}).isRequired,
	formName: string.isRequired,
	intl: shape({
		formatMessage: func.isRequired,
	}).isRequired,
	inverse: bool,
	isError: bool,
	isLoading: bool,
	multi: bool,
	placeholder: string,
	warning: bool,
};

StyledSelect.defaultProps = {
	isError: false,
	isLoading: false,
	inverse: false,
	multi: false,
	placeholder: null,
	warning: false,
};

export default injectIntl(StyledSelect);
