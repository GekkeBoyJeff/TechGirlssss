const organizers = [79704743823,74657367793,17298246000,18281033692,70651461373,76491990883,34136996893,42124400053,50530745423,52668656773,70367608213,77464058053,19198479168,19777351104,30259463840,30337016938,32296321733,50741540733,59156113293,59668394333]
const places = { 'Amsterdam': '101751893', 'Zaandam': '101751901'}
export async function fetchApi(req, res, next){
    const organizersString = organizers.join('%2C')
    const url = `https://www.eventbrite.com/api/v3/organizers/?ids=${organizersString}&expand.order=event&expand.event=organizer,venue&expand.organizer=follow_status&expand.venue=organizer`
    // const uri = `https://www.eventbrite.com/api/v3/destination/search/autocomplete/?&q=comic%20con%20&completion_types=event,query&expand.destination_event=primary_venue,image&place_id=${places.Zaandam}`
    // const uri2 = `https://www.eventbrite.com/api/v3/destination/search/autocomplete/?&q=comic%20con%20&completion_types=event,query&expand.destination_event=primary_venue,image&place_id=${places.Zaandam}`

    try{
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${process.env.eventBriteKey}` 
            },
            search:{
                place:{
                    geo_point:{
                        lat: 52.3555584,
                        lon: 4.905768,
                        radius: 100
                    }
                }
            },
        })
        if (!response.ok) {
                // Log de volledige URL en response voor debuggen
                console.error("Fetch error:", url);
                console.error(await response.text()); 
          
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
              }
            const data = await response.json()
            // console.log('test' + data.organizers[0].description)
            req.apiData = data; // store the data in the request object
            console.log('apiData:', req.apiData.organizers[0])
            next()
    }catch(error){
        console.error("Fetch error:", error);
        throw error;
    }
}
