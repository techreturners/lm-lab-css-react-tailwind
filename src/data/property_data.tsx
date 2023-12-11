import { Property } from './property';

export const propertyData: Array<Property> = [
	// Iceland
	{
		location: 'Westfjords Region',
		country: 'Iceland',
		property_type: 'Cabin',
		bedroom_count: 2,
		bathroom_count: 1,
		price: '£290,000',
		image_urls: [
			'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
		],
		title: 'Gorgeous two bed cabin in the heart of Icelands Westfjords region',
		description:
			'Traditional icelandic cabin with stunning paranoramic views. Located in the center of Verbier.',
	},
	// Spain
	{
		location: 'Majorca',
		country: 'Spain',
		property_type: 'Villa',
		bedroom_count: 3,
		bathroom_count: 2,
		price: '£220,000',
		image_urls: [
			'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
		],
		title: 'Pristine villa with roof-top dining and plunge pool',
		description:
			'Contemporary villa in Balearic countryside of Mallorja. Features plunge pool, olive grove and rooftop garden for al fresco dining.',
	},
	{
		location: 'Valencia',
		country: 'Spain',
		property_type: 'Villa',
		bedroom_count: 3,
		bathroom_count: 4,
		price: '£240,000',
		image_urls: [
			'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		],
		title: 'Exquisite Villa Retreat with Sparkling Pool in the Heart of Spain',
		description:
			'Idyllic oasis nestled in the sun-drenched landscapes of Spain. Embrace the epitome of luxury living as you discover this magnificent villa, where timeless elegance and modern comfort harmoniously blend',
	},
	// England
	{
		location: 'Bristol',
		country: 'England',
		property_type: 'Family home',
		bedroom_count: 4,
		bathroom_count: 2,
		price: '£650,000',
		image_urls: [
			'https://plus.unsplash.com/premium_photo-1683133222982-be5d355a5c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
		],
		title: 'Generously sized family home with live in decorator',
		description:
			'Say goodbye to stress and embrace wellness in this generously sized family home property, featuring live-in handy-man and decorator',
	},
	{
		location: 'Hyde',
		country: 'England',
		property_type: 'Mansion',
		bedroom_count: 9,
		bathroom_count: 9,
		price: '£900,500',
		image_urls: [
			'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
		],
		title: 'Enchanting mansion in the gorgeous region of Hyde, England',
		description:
			'This enchanting property features nine spacious bedrooms, an orangery and meditation garden',
	},
	{
		location: 'York',
		country: 'England',
		property_type: 'Bird Box',
		bedroom_count: 3,
		bathroom_count: 2,
		price: '£5.00',
		image_urls: [
			'https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
		],
		title: 'Small, but tweet retreat',
		description:
			'Cosey property overlooking gorgeous garden views. Perfect for winter months when you just want to Nestflix and Chill',
	},
	// America
	{
		location: 'Texas',
		country: 'US',
		property_type: 'Mansion',
		bedroom_count: 30,
		bathroom_count: 32,
		price: 'Just a couple mill',
		image_urls: [
			'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
		],
		title: 'Understated hideaway for people that value the simple things in life',
		description:
			'This modest mansion boasts a meager 20 bedrooms, 15 bathrooms, and quaint 10-car garage. Its petite ballroom and uassuming banquet hall make this charming property perfect for intimate gatherings and low-key family dinners',
	},
	// Portugal
	{
		location: 'Costa Nova',
		country: 'Portugal',
		property_type: 'Beach hut',
		bedroom_count: 2,
		bathroom_count: 1,
		price: '£60,000',
		image_urls: [
			'https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2897&q=80',
		],
		title: 'Cheerful beach hut',
		description:
			'An ex-pats delight! Eat breakfast in style on this roomy beach huts bedroom balcony. Boasting 2 bedrooms, 1 bathroom and stunning sea views.',
	},
	// Lilliput
	{
		location: 'Lilliput',
		country: 'Northern Australia',
		property_type: 'House',
		bedroom_count: 4,
		bathroom_count: 2,
		price: '£2.50',
		image_urls: [
			'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
		],
		title: 'Charming family home in the largely unexplored region of Lilliput',
		description:
			'Embrace the art of compact living without compromising on style. This thoughtfully designed residence maximizes its modest proportions, ensuring each room is meticulously crafted for efficient functionality and an inviting atmosphere.',
	},
];
