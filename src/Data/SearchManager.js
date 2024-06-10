const SearchAlgorithm = (search_options, search_priority, propertys) => {
  propertys.forEach((property) => {
    console.log(property);
    calculatedPropertyPoints(search_options, search_priority, property);
  });
};

const calculatedPropertyPoints = (
  search_options,
  search_priority,
  property_data
) => {
  let totalPoints = 0;
  // calculate price point
  totalPoints += calculatePoint(
    search_options.budget,
    property_data.price,
    search_priority.price
  );
  // calculate bedroom num point
  totalPoints += calculatePoint(
    search_options.budget,
    property_data.price,
    search_priority.price
  );
  // calculate bathroom num point
  totalPoints += calculatePoint(
    search_options.budget,
    property_data.price,
    search_priority.price
  );
  // calculate square footage point
  totalPoints += calculatePoint(
    search_options.budget,
    property_data.price,
    search_priority.price
  );
  // calculate location point

  // calculate amenities point

  property_data.point = totalPoints;
};

const calculatePoint = (requested_value, value, priority = 5) => {
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
