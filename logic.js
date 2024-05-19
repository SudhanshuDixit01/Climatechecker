const button = document.getElementById("Search-button");
const input = document.getElementById("City-input");

const cityname = document.getElementById("city-name");
const citytime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");
const citycondition = document.getElementById("city-condition"); // Corrected typo

async function getData(cityname) {
          const promise = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=9900e43ffedb45829ef72444241405&q=${cityname}&aqi=yes`
        );
        return await promise.json();
    }


button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    citytime.innerText = result.location.localtime;
    citytemp.innerText = `${result.current.temp_c} °C`;
    citycondition.innerText = result.current.condition.text;
});


// http://api.weatherapi.com/v1/current.json?key=9900e43ffedb45829ef72444241405&q=${cityname}&aqi=yes

