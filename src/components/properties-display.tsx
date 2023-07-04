import { propertyData } from "../data/data"
import { Card } from "./card"

export const PropertiesDisplay = () => {
    return (
        <>
            <ul>
                {propertyData.map((p) => <Card property={p} />)}
            </ul>
        </>
    )
}