//export const DEV_SERVER = 'http://192.168.1.100:85';
//export const DEV_SERVER = 'http://localhost:5000';
export const DEV_SERVER = 'http://api.farsmount.ir';

export const DEV_SERVER_API = `${DEV_SERVER}/api`;
export const AVATAR = 'https://www.gravatar.com/avatar/';
export const UPLOAD_SERVER = 'http://api.farsmount.ir/Resources/Images';
export const RESOURSE = 'http://api.farsmount.ir/Resources/';
/**
 * Calls to the API use a reverse proxy which means posts from the client side
 * can now use the following route https://<DNS>/api/…
 * This should fix the SSL issues we’ve run into.
 * e.g https://portal-dev.fleetpartners.com.au/api/getView
 *
 * any calls from localhost should still use the DEV_SERVER_API, as that
 * allows CORS
 */
const getAPIRoot = () => {
  const { host } = window.location;

  if (host.indexOf('localhost') >= 0) {
    return DEV_SERVER_API;
  }
  return 'http://api.farsmount.ir/api'
};

export const MENU = `${getAPIRoot()}/menu/site`;
export const SLIDER_IMAGES = `${getAPIRoot()}/SliderImages/site`;
export const NEWS_POST = `${getAPIRoot()}/NewsPost`;
export const SEARCH_NEWS_POST = `${getAPIRoot()}/NewsPost/search`;
export const COMMENT = `${getAPIRoot()}/Comment`;