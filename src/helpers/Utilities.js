/**
 * Dispratches a custom event on the document element
 *
 * @param   {String}  eventName  name of custom event
 * @param   {Mixed}  detail     detail value passed with the event
 */
export function dispatchCustomEvent(eventName, detail) {
  document.dispatchEvent(new CustomEvent(eventName, { detail: detail }));
}

/**
 * Generates a random number between 2 values
 * Rejects if it is included in the excluded values
 *
 * @param   {Integer}  min              Floor of possible numbers
 * @param   {Integer}  max              Ceiling of possible numbers
 * @param   {Array}    excludes         Array of previously used objects
 *
 * @return  {Mixed}                     Could be string or generated number
 */
export function getRandomNumberInRange(min, max, excludes = []) {
  // if the called length is smaller than the max number
  // go ahead and select the next number, otherwise return message
  if (excludes.length < max) {
    for (let count = 0; count < 5000; count++) {
      let array = new Uint8Array(1);
      // only allow this to run 5k times
      window.crypto.getRandomValues(array);
      let value = array[0] % (max + 1);
      if (!excludes.includes(value) && value >= min && value <= max) {
        return value;
      }
    }
    throw new Error("unique random not found");
  }
  throw new Error("max has been reached");
}

/**
 * Toggles full screen view on the application
 *
 * @param   {Boolean}  state  represents if full screen should be active or not
 */
export function toggleFullScreen(state) {
  let elem = document.documentElement;
  if (state === true) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  } else {
    if (document.fullscreenElement !== null) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  }
}
