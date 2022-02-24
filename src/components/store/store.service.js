import axios from "axios";

/**
 * This service is used to make api call related to service functionality.
 */
const StoreService = {
  getStoreDetails() {
    return axios.get(`/rest/storeRegistration`);
  },
};

export default StoreService;
