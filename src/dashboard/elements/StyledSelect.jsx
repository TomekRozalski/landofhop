import React from 'react';
import styled from 'styled-components';
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
import { get } from 'lodash';

import {
	colors,
	fonts,
	gutters,
	indexes,
} from 'utils/theme';
import { FieldStatusIndicator } from 'elements';
import { ErrorGroup, LoadingGroup } from './index';

const MarkType = styled.div`
	position: relative;

	&::after {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);

		${({ type }) => {
		if (type === 'hop') {
			return `
					content: '';
					background: ${colors.ingredients.hop};
				`;
		}

		if (type === 'malt') {
			return `
					content: '';
					background: ${colors.ingredients.malt};
				`;
		}

		if (type === 'appendix') {
			return `
					content: '';
					background: ${colors.ingredients.appendix};
				`;
		}


		if (type === 'yeast') {
			return `
					content: '';
					background: ${colors.gray[300]};
				`;
		}

		return '';
	}}
	}
`;

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
	const option = props => (
		<MarkType type={get(props, 'data.type')}>
			<components.Option {...props} />
		</MarkType>
	);

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
					Option: option,
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
					multiValue: (base, { data }) => {
						const type = get(data, 'type');

						const getBgColor = () => {
							switch (type) {
							case 'hop':
								return colors.ingredients.hop;
							case 'malt':
								return colors.ingredients.malt;
							case 'appendix':
								return colors.ingredients.appendix;
							default:
								return colors.gray[400];
							}
						};

						return {
							...base,
							backgroundColor: getBgColor(),
						};
					},
					multiValueLabel: (base, { data }) => {
						const type = get(data, 'type');

						const getColor = () => {
							switch (type) {
							case 'hop':
							case 'malt':
							case 'appendix':
								return colors.gray[700];
							default:
								return colors.gray[100];
							}
						};

						return {
							...base,
							borderRadius: 0,
							padding: '0 3px 0 6px',
							color: getColor(),
						};
					},
					multiValueRemove: (base, { data }) => {
						const type = get(data, 'type');

						const getColor = () => {
							switch (type) {
							case 'hop':
							case 'malt':
							case 'appendix':
								return colors.gray[700];
							default:
								return colors.gray[100];
							}
						};

						const getHoverColor = () => {
							switch (type) {
							case 'hop':
							case 'malt':
							case 'appendix':
								return colors.gray[100];
							default:
								return colors.gray[700];
							}
						};

						return {
							...base,
							paddingTop: '1px',
							color: getColor(),
							transition: 'color .1s',
							cursor: 'pointer',
							':hover': {
								color: getHoverColor(),
							},
						};
					},
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
		value: any,
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
