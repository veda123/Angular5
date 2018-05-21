export interface ILocationPOC{
    id          :   number,
    contactName :   string,
    email       :   string,
    phone       :   string,
    title       :   string,
    location: {
        locationId     : number,
        locationName   : string,
        address         : string,
        city            : string,
        country         : string,
        phone           : string,
        zipCode         : string,
        timeZone        : number
    }
}