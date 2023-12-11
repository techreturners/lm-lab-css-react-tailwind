import { propertyData } from '../data/property_data';
import { PropertyCard } from './property_card';

export const PropertiesList = () => {
	return (
		<ul>
			{propertyData.map((p) => (
				<PropertyCard property={p} />
			))}
		</ul>
	);
};
