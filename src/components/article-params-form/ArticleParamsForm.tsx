import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type TArticleParamsForm = {
	fontSizeOption: OptionType;
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	onSave?: (articleParams: TArticleParamsForm) => void;
	onReset?: (articleParams: TArticleParamsForm) => void;
};

export const ArticleParamsForm = (props: TArticleParamsForm) => {
	const [isOpen, setOpen] = useState(false);
	const ref = useRef<HTMLElement | null>(null);

	const [articleParams, setOption] = useState<TArticleParamsForm>({
		fontFamilyOption: props.fontFamilyOption,
		fontSizeOption: props.fontSizeOption,
		fontColor: props.fontColor,
		backgroundColor: props.backgroundColor,
		contentWidth: props.contentWidth,
	});

	const closeHandle = (evt: Event) => {
		if (
			!(
				ref.current?.contains(evt.target as HTMLElement) ||
				(evt.target as HTMLElement).dataset.target === 'openButton' ||
				(evt.target as HTMLElement).dataset.select === 'select'
			)
		) {
			setOpen(false);
		}
	};

	const handleOpenChange = (isOpen: boolean) => {
		setOpen(isOpen);
		if (isOpen) {
			document.addEventListener('click', closeHandle);
		} else {
			document.removeEventListener('click', closeHandle);
		}
	};

	const { onSave, onReset } = props;

	const resetStyle = () => {
		setOption({
			fontColor: defaultArticleState.fontColor,
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});

		if (onReset) {
			onReset(defaultArticleState);
		}
	};

	const saveParams = () => {
		document.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});

		if (onSave) {
			onSave(articleParams);
		}
	};

	function changeOption(selected: OptionType): void {
		switch (selected.optionType) {
			case 'fontFamily':
				setOption({
					...articleParams,
					fontFamilyOption: selected,
				});
				break;
			case 'fontColors':
				setOption({
					...articleParams,
					fontColor: selected,
				});
				break;
			case 'backgroundColors':
				setOption({
					...articleParams,
					backgroundColor: selected,
				});
				break;
			case 'contentWidth':
				setOption({
					...articleParams,
					contentWidth: selected,
				});
				break;
			case 'fontSize':
				setOption({
					...articleParams,
					fontSizeOption: selected,
				});
				break;
		}
	}

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onOpen={handleOpenChange}
				dataset='openButton'></ArrowButton>
			<aside
				className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
				ref={ref}>
				<form className={styles.form}>
					<Text as={'span'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={articleParams.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={changeOption}
					/>
					<RadioGroup
						name='font-size-group'
						options={fontSizeOptions}
						selected={articleParams.fontSizeOption}
						title='Размер шрифта'
						onChange={changeOption}
					/>
					<Select
						selected={articleParams.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={changeOption}
					/>
					<Separator />
					<Select
						selected={articleParams.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={changeOption}
					/>
					<Select
						selected={articleParams.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={changeOption}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetStyle} />
						<Button title='Применить' type='submit' onClick={saveParams} />
					</div>
				</form>
			</aside>
		</>
	);
};
