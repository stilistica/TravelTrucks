import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async ({
  page = 1,
  limit = 4,
  form,
  location,
  equipment = {},
  transmission,
  engine,
}) => {
  const params = {
    page,
    limit,
  };
  if (form) params.form = form;
  if (transmission) params.transmission = transmission;
  if (engine) params.engine = engine;
  if (location) params.location = location;
  
  Object.entries(equipment).forEach(([key, value]) => {
    if (value !== undefined) {
      params[key] = value;
    }
  });

  const { data } = await axios.get("/campers", { params });
  return data;
};

export const fetchCamperById = async (id) => {
  const { data } = await axios.get(`/campers/${id}`);
  return data;
};
