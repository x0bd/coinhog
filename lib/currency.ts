// TODO Add more currency support
// Put The Proper Currency Icon

export const Currencies = [
	{ value: "USD", label: "$ Dollar", locale: "en-US" },
	{ value: "GBP", label: "£ Pound", locale: "en-GB" },
	{ value: "JPY", label: "¥ Yen", locale: "ja-JP" },
	{ value: "EUR", label: "€ Euro", locale: "de-DE" },
];

export type Currency = (typeof Currencies)[0];
