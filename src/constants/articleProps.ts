export const fontFamilyClasses = [
	'open-sans',
	'ubuntu',
	'cormorant-garamond',
	'days-one',
	'merriweather',
] as const;

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];

export type OptionType = {
	optionType?: any;
	title: string;
	value: string;
	className: string;
	optionClassName?: string;
};

export const fontFamilyOptions: OptionType[] & {
	optionClassName?: FontFamiliesClasses;
} = [
	{
		title: 'Open Sans',
		value: 'Open Sans',
		className: fontFamilyClasses[0],
		optionType: 'fontFamily',
	},
	{
		title: 'Ubuntu',
		value: 'Ubuntu',
		className: fontFamilyClasses[1],
		optionType: 'fontFamily',
	},
	{
		title: 'Cormorant Garamond',
		value: 'Cormorant Garamond',
		className: fontFamilyClasses[2],
		optionType: 'fontFamily',
	},
	{
		title: 'Days One',
		value: 'Days One',
		className: fontFamilyClasses[3],
		optionType: 'fontFamily',
	},
	{
		title: 'Merriweather',
		value: 'Merriweather',
		className: fontFamilyClasses[4],
		optionType: 'fontFamily',
	},
];

export const fontColors: OptionType[] = [
	{
		title: 'Черный',
		value: '#000000',
		className: 'font-black',
		optionClassName: 'option-black',
		optionType: 'fontColors',
	},
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'font-white',
		optionClassName: 'option-white',
		optionType: 'fontColors',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'font-gray',
		optionClassName: 'option-gray',
		optionType: 'fontColors',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'font-pink',
		optionClassName: 'option-pink',
		optionType: 'fontColors',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'font-fuchsia',
		optionClassName: 'option-fuchsia',
		optionType: 'fontColors',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'font-yellow',
		optionClassName: 'option-yellow',
		optionType: 'fontColors',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'font-green',
		optionClassName: 'option-green',
		optionType: 'fontColors',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'font-blue',
		optionClassName: 'option-blue',
		optionType: 'fontColors',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'font-purple',
		optionClassName: 'option-purple',
		optionType: 'fontColors',
	},
];

export const backgroundColors: OptionType[] = [
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white',
		optionType: 'backgroundColors',
	},
	{
		title: 'Черный',
		value: '#000000',
		className: 'bg-black',
		optionClassName: 'option-black',
		optionType: 'backgroundColors',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'bg-gray',
		optionClassName: 'option-gray',
		optionType: 'backgroundColors',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'bg-pink',
		optionClassName: 'option-pink',
		optionType: 'backgroundColors',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'bg-fuchsia',
		optionClassName: 'option-fuchsia',
		optionType: 'backgroundColors',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'bg-yellow',
		optionClassName: 'option-yellow',
		optionType: 'backgroundColors',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'bg-green',
		optionType: 'backgroundColors',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'bg-blue',
		optionType: 'backgroundColors',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'bg-purple',
		optionType: 'backgroundColors',
	},
];

export const contentWidthArr: OptionType[] = [
	{
		title: 'Широкий',
		value: '1394px',
		className: 'width-wide',
		optionClassName: 'option-wide',
		optionType: 'contentWidth',
	},
	{
		title: 'Узкий',
		value: '948px',
		className: 'width-narrow',
		optionClassName: 'option-narrow',
		optionType: 'contentWidth',
	},
];

export const fontSizeOptions: OptionType[] = [
	{
		title: '18px',
		value: '18px',
		className: 'font-size-18',
		optionType: 'fontSize',
	},
	{
		title: '25px',
		value: '25px',
		className: 'font-size-25',
		optionType: 'fontSize',
	},
	{
		title: '38px',
		value: '38px',
		className: 'font-size-38',
		optionType: 'fontSize',
	},
];

export const defaultArticleState = {
	fontFamilyOption: fontFamilyOptions[0],
	fontColor: fontColors[0],
	backgroundColor: backgroundColors[0],
	contentWidth: contentWidthArr[0],
	fontSizeOption: fontSizeOptions[0],
};

export type ArticleStateType = typeof defaultArticleState;
