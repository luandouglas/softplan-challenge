export const GET_ALL_CONTRIES = (orderBy: any) => `
    {
        Country(
            orderBy: ${orderBy}
        ) {
            _id 
            name 
            capital
            nativeName 
            alpha2Code
            topLevelDomains { name }    
        }
    }
`

export const GET_ALL_CONTRIES_WITH_NAME = (filter: any) => `
{
    Country(
        orderBy: ${filter.orderBy}
        name: "${filter.name}"
    ) {
        _id 
        name 
        capital
        nativeName 
        alpha2Code
        topLevelDomains { name }    
    }
}
`

export const GET_COUNTRY = (filter: any) => `
{
    Country(orderBy: ${filter.orderBy}) {
        _id 
        name 
        capital
        alpha2Code
        topLevelDomains { name }    
    }
}
`

export const GET_CONTRY_DETAIL = (id: string) => `
{
    Country(_id: "${id}") {
        _id 
        name
        capital
        alpha2Code
        alpha3Code
        nativeName 
        area
        population
        location { latitude longitude }
        borders(first: 5) { name location { latitude, longitude  } }
        distanceToOtherCountries(first: 5) { countryName distanceInKm }
        topLevelDomains { name }
        subregion { name region { name } }
    }
}

`