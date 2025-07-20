async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '9a7b834be941461e8d454251250905';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
  
      const result = `
        <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
        <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="weather icon"/>
      `;
  
      document.getElementById('weatherResult').innerHTML = result;
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
  }
  