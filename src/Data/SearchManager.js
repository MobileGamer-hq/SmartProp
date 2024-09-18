import { Search_Filter, Search_Priority, Property } from "./DataModels";

//Ranking Algorithm
const GetAllPoints = (
  property_list,
  search_filter = Search_Filter,
  search_priority = Search_Priority
) => {
  let property_points = [];
  property_list.forEach((property) => {
    property_points.push(
      CalculatedPropertyPoints(search_filter, search_priority, property)
    );
  });

  return property_points;
};

const CalculatedPropertyPoints = (
  search_filter = Search_Filter,
  search_priority = Search_Priority,
  property_data = Property
) => {
  let totalPoints = 0;

  let priority_sum = 0;
  let values = Object.values(search_priority);
  for (const i in values) {
    priority_sum += values[i];
  }
  // calculate price point
  totalPoints += CalculatePoint(
    search_filter.budget,
    property_data.price,
    search_priority.price
  );
  // calculate bedroom num point
  totalPoints += CalculatePoint(
    search_filter.bedroom_number,
    property_data.rooms.bedrooms,
    search_priority.bedroom_no
  );
  // calculate bathroom num point
  totalPoints += CalculatePoint(
    search_filter.bathroom_number,
    property_data.rooms.bathrooms,
    search_priority.bathroom_no
  );

  // calculate kitchen num point
  totalPoints += CalculatePoint(
    search_filter.kitchen_number,
    property_data.rooms.kitchen,
    search_priority.kitchen_no
  );

  // calculate living room num point
  totalPoints += CalculatePoint(
    search_filter.living_room_number,
    property_data.rooms.living_room,
    search_priority.living_room_no
  );

  // calculate square footage point
  totalPoints += CalculatePoint(
    search_filter.square_footage,
    property_data.size.squ_foot,
    search_priority.square_footage
  );

  // calculate location point
  let location_point = 0;
  if (search_filter.city === property_data.location.city) {
    location_point += search_priority.location;
  }
  if (search_filter.state === property_data.location.state) {
    location_point += search_priority.location;
  }
  if (search_filter.estate === property_data.location.estate) {
    location_point += search_priority.location;
  }

  totalPoints += (location_point / 3) * search_priority.location;

  // // calculate amenities point
  // let amenities_points = 0;
  // let possible_points = 0;
  // for (let amenity in search_filter.amenities) {
  //   if (search_filter.amenities[amenity] && property_data.amenities[amenity]) {
  //     amenities_points++;
  //   }
  //   possible_points++;
  // }
  // totalPoints +=
  //   (amenities_points / possible_points) * search_priority.amenities;

  if (search_filter.inside_estate && property_data.location.inside_estate) {
    totalPoints += search_priority.inside_estate;
  }

  return (totalPoints / priority_sum) * 100;
};

const CalculatePoint = (requested_value, value, priority = 5) => {
  let point = 0;
  if (value < requested_value) {
    point = (value / requested_value) * priority;
  } else if (value > requested_value) {
    point = (requested_value / value) * priority;
  } else {
    point = priority;
  }

  return point;
};

const GetBestChoice = (property_list) => {
  const points = GetAllPoints(property_list);
  const pointsCopy = [...points];
  const sortedPoints = points.sort((a, b) => b - a);
  const sortedProperties = [];
  sortedPoints.forEach((point) => {
    let index = pointsCopy.indexOf(point);
    sortedProperties.push(property_list[index]);
    console.log(`${Math.round(point)}% match`);
  });

  return sortedProperties;
};

//Search Term Algorithm
export const generateTerms = (search_term, filter = Search_Filter) => {
  let x = search_term.toLowerCase();
  const terms = x.split(" ");

  const keys = Object.keys(filter);

  const exceptions = {
    living_rooms: ["living room", "living", "palour"],
  };

  const gotternTerms = [];
  keys.forEach((key) => {
    if (exceptions[key] != null) {
      exceptions[key].forEach((term) => {
        if (terms.includes(term)) {
          let index = terms.indexOf(term);

          filter[key] = parseInt(terms[index - 1]);
          gotternTerms.push(exceptions[key][0]);
        } else if (terms.includes(term.slice(0, term.length - 1))) {
          let index = terms.indexOf(term.slice(0, term.length - 1));
          filter[key] = parseInt(terms[index - 1]);
          gotternTerms.push(exceptions[key][0]);
        }
      });
    } else {
      if (terms.includes(key)) {
        let index = terms.indexOf(key);

        filter[key] = parseInt(terms[index - 1]);
        gotternTerms.push(key);
      } else if (terms.includes(key.slice(0, key.length - 1))) {
        let index = terms.indexOf(key.slice(0, key.length - 1));
        filter[key] = parseInt(terms[index - 1]);
        gotternTerms.push(key.slice(0, key.length - 1));
      }
    }

    if (key == "property_type") {
      filter[key] = terms[terms.length - 1];
    }
  });

  return { _terms: gotternTerms, _filter: filter };
};
