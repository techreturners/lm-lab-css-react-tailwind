export const PROPERTY_TYPES = [
	'Villa',
	'Bird Box',
	'Mansion',
	'Beach hut',
	'House',
	'Cabin',
	'Family home',
] as const;
export type PropertyType = (typeof PROPERTY_TYPES)[number];

export interface Property {
	location: string;
	country: string;
	property_type: PropertyType;
	bedroom_count: number;
	bathroom_count: number;
	price: string;
	image_urls: string[];
	title: string;
	description: string;
}
