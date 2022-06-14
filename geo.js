(async function () {
  /**
   * Get data based on IP
   * @param {string} [ip] - IP, default is current
   * @returns {Object} - fields of API response (https://ipapi.co/api/#complete-location)
   */
  const getLocale = async function getLocale(ip) {
    let url = 'https://ipapi.co/';
    if (ip) {
      url += ip + '/';
    }
    url += 'json/';
    return fetch(url).then(function (response) {
      return response.json();
    });
  };

  //Get locale data
  const locale = await getLocale().catch(function (err) {
    console.log(err);
  });

  //Display info
  document.querySelector("#state").innerHTML += [
  locale.region
  ].join('');
})();

