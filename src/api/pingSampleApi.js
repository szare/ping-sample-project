import axios from 'axios';
import * as endpoints from './const';

class FarsMountApi {
  /**
   * initial elements
   */
  static getAllMenus(language) {
    return axios.get(`${endpoints.MENU}/${language}`)
      .then(response => response.data)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw(error);
      });
  }


  static getAllSliderImages() {
    return axios.get(endpoints.SLIDER_IMAGES)
      .then(response => response.data)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw(error);
      });
  }

}
export default FarsMountApi;