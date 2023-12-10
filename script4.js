var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
  if (request.status === 200) {
    var data = JSON.parse(this.response);
    for (let i = 0; i < data.length; i++) {
      if (data[i].currencies && data[i].currencies.hasOwnProperty('USD')) {
        console.log('Name:', data[i].name.common, '==> Currency:', data[i].currencies.USD.name);
      }
    }
  } else {
    console.error('Error fetching data:', request.status);
  }
};