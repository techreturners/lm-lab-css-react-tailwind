export interface IProperty {
    property: {
        location: string;
        country: string;
        property_type: string;
        bedroom_count: number;
        bathroom_count: number;
        price: string;
        image_urls: string[];
        title: string;
        description: string;
    };
}

export const Card: React.FC<IProperty> = ({ property: { title, location, country, property_type, image_urls, description, bedroom_count, bathroom_count, price } }) => {

    return (
        <>
            <h4>{title}</h4>
            <p>{location}</p>
            <p>{country}</p>
            <p>{property_type}</p>
            <p>{description}</p>
            <p>{bedroom_count}</p>
            <p>{bathroom_count}</p>
            <p>{price}</p>
            <img src={image_urls[0]} alt={title} />
        </>
    )
}