const testEventID = [794335146807, 908231724537, 860773265007]

const organisationIDs = [254342048210]

const organizers = [
  79704743823, 74657367793, 17298246000, 18281033692, 70651461373, 76491990883,
  34136996893, 42124400053, 50530745423, 52668656773, 70367608213, 77464058053,
  19198479168, 19777351104, 30259463840, 30337016938, 32296321733, 50741540733,
  59156113293, 59668394333,
];
const places = { Amsterdam: "101751893", Zaandam: "101751901" }
const payload = {
  headers: {
    Authorization: `Bearer A56OCBNX4TGIOQ455DA5`,
  },
  search: {
    place: {
      geo_point: {
        lat: 52.3555584,
        lon: 4.905768,
        radius: 100,
      },
    },
  },
};

const eventURL = "https://www.eventbriteapi.com/v3/events/"
const vanueURL = "https://www.eventbriteapi.com/v3/venues/"

const organizersString = organizers.join("%2C");

export async function fetchApi(req, res, next) {
  const url = `https://www.eventbrite.com/api/v3/organizers/?ids=${organizersString}&expand.order=event&expand.event=organizer,venue&expand.organizer=follow_status&expand.venue=organizer`; // returns venues
  // const uri = `https://www.eventbrite.com/api/v3/destination/search/autocomplete/?&q=comic%20con%20&completion_types=event,query&expand.destination_event=primary_venue,image&place_id=${places.Zaandam}`
  // const uri2 = `https://www.eventbrite.com/api/v3/destination/search/autocomplete/?&q=comic%20con%20&completion_types=event,query&expand.destination_event=primary_venue,image&place_id=${places.Zaandam}`

  try {
    const response = await fetch(url, payload);
    if (!response.ok) {
      // Log de volledige URL en response voor debuggen
      console.error("Fetch error:", url)
      console.error(await response.text())

      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json()
    // console.log('test' + data.organizers[0].description)
    req.apiData = data // store the data in the request object
    console.log("apiData:", req.apiData.organizers[0])
    next()
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

export async function fetchPopularEvents(req, res, next) {
  console.log("fetching popular events")
  // const location = req.query.location || '' // get the location from the request query
  const url = `https://www.eventbrite.com/api/v3/organizers/?ids=${organizersString}&expand.order=event&expand.event=organizer,logo&expand.organizer=follow_status&expand.venue=organizer&expand.destination_event=primary_venue,image`;
  try {
    const response = await fetch(url, payload)
    if (!response.ok) {
      console.error("Fetch error:", url)
      console.error(await response.text())
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json()
    req.popularEvents = data; // store the data in the request object
    // console.log("apiData:", req.popularEvents)
    next();
  } catch (error) {
    console.log(error)
  }
}

export async function fetchSpecificEvent(req, res, next) {
  const { id } = req.params
  console.log(id)
  const url = eventURL + id
  try {
    const response = await fetch(url, payload)
    if (!response.ok) {
      console.error("Fetch error:", url)
      console.error(await response.text())
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json()
    const ticketClasses = await fetchTicketClasses(req, id)
    // data.ticket_classes = ticketClasses
    req.specificEvent = data
    req.specificEvent.price = ticketClasses
    if (data.venue_id) {
      const vanue = await fetchVanueForLocation(req, data.venue_id)
      req.specificEvent.address = vanue
    }
    next()
  } catch (error) {
    console.log(error)
    next()
  }
}

export async function fetchTicketClasses(req, eventId) {
  // voor de prijs van de tickets
  const url = `https://www.eventbriteapi.com/v3/events/${eventId}/ticket_classes/`
  try {
    payload.headers = {
      Authorization: `Bearer ${process.env.privateToken}`,
    };
    const response = await fetch(url, payload)
    if (!response.ok) {
      console.error("Fetch error:", url)
      console.error(await response.text())
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    //   console.log(data.ticket_classes[0].cost)
    req.price = data.ticket_classes
    return data.ticket_classes
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

export async function fetchVanueForLocation(req, eventId) {
  const url = `https://www.eventbriteapi.com/v3/venues/${eventId}/`
  try {
    payload.headers = {
      Authorization: `Bearer ${process.env.privateToken}`,
    };
    const response = await fetch(url, payload)
    if (!response.ok) {
      console.error("Fetch error:", url)
      console.error(await response.text())
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data)
    return data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

// export async function fetchEventCapacity(req, eventId) {
//     const url = `https://www.eventbriteapi.com/v3/events/${eventId}/capacity_tier/`
//     try {
//       payload.headers = {
//         Authorization: `Bearer ${process.env.privateToken}`,
//       }
//       const response = await fetch(url, payload)
//       if (!response.ok) {
//         console.error("Fetch error:", url)
//         console.error(await response.text())
//         throw new Error(
//           `HTTP error! status: ${response.status} ${response.statusText}`
//         )
//       }
//       const data = await response.json()
//       console.log(data)
//       return data
// }catch(error){
//     console.error("Fetch error:", error)
//     throw error
// }
// }

// export async function fetchFullEventDescription(req, eventId) {
//   const url = `https://www.eventbriteapi.com/v3/events/${eventId}/description/`
//   try {
//     payload.headers = {
//       Authorization: `Bearer ${process.env.privateToken}`,
//     }
//     const response = await fetch(url, payload)
//     if (!response.ok) {
//       console.error("Fetch error:", url)
//       console.error(await response.text())
//       throw new Error(
//         `HTTP error! status: ${response.status} ${response.statusText}`
//       );
//     }
//     const data = await response.json();
//     console.log(data)
//     return data
//   } catch (error) {
//     console.error("Fetch error:", error)
//     throw error
//   }
// }

async function listEventsByOrganization(req, res, next) {
  //   payload.headers = {
  //     Authorization: `Bearer ${process.env.privateToken}`,
  //   }
  //   const url = `https://www.eventbriteapi.com/v3/organizations/1234/events/?name_filter=&currency_filter=EUR&order_by=start_asc&series_filter=&show_series_parent=true&status=live&event_group_id=&collection_id=&page_size=50&time_filter=all&venue_filter=&organizer_filter=&inventory_type_filter=&event_ids_to_exclude=1234%2C%205678&event_ids=1234%2C%205678&collection_ids_to_exclude=1234%2C%205678`
  //   try {
  //     const response = await fetch(url, payload)
  //     if (!response.ok) {
  //       console.error("Fetch error:", url)
  //       console.error(await response.text())
  //       throw new Error(
  //         `HTTP error! status: ${response.status} ${response.statusText}`
  //       )
  //     }
  //     const data = await response.json()
  //     req.specificEvent = data
  //     next()
  //   } catch (error) {
  //     console.log(error)
  //   }
}

function listEventsBySeries(req, res, next) { }

function listEventsByVenue(req, res, next) { }
