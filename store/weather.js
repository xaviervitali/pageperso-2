export const state = () => ({
    apiKey: "8e602b9ea28ed4f9f8fc97a5f6d1105c",
    weather: "",
    temperature: 0,
    city:"",

    weatherIcons: {
        Thunderstorm: "wi-day-thunderstorm",
        Drizzle: "wi-day-sleet",
        Rain: "wi-day-rain",
        Snow: "wi-day-snow",
        Mist: " wi-day-fog",
        Smoke: "wi-day-sleet",
        Haze: "wi-day-haze",
        Dust: "wi-dust",
        Fog: "wi-day-fog",
        Sand: "wi-sandstorm",
        Ash: "wi-volcano",
        Squall: "wi-day-cloudy-gusts",
        Tornado: "wi-tornado",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-cloudy"
    }
})

export const mutations = {
    SET_TEMPERATURE(state, temperature) {
        state.temperature = temperature;
    },
    SET_WEATHER(state, weather) {
        state.weather = weather
    },    SET_CITY(state, city) {
        state.city = city
    },


};

export const actions = {
    async getWeather({ commit, state }, location) {
        const weatherResult = await this.$axios.$get(

            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    lat: location.coords.latitude,
                    lon: location.coords.longitude,
                    appid: state.apiKey,
                    units: "metric"
                }
            }
        );
        commit("SET_TEMPERATURE", Math.round(weatherResult.main.temp))
        commit("SET_WEATHER", state.weatherIcons[weatherResult.weather[0].main])
        commit("SET_CITY", weatherResult.name)
        
        

    }
}
  
