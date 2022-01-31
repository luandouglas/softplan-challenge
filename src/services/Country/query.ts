export const GET_ALL_CONTRIES = `
{
    Country(first: 60) {
        _id 
        name 
        capital
        nativeName 
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
        nativeName 
        area
        population
        topLevelDomains { name }     
    }
}

`