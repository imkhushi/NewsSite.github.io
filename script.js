
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00bfd1fb5fmsh285afe44fb357c5p1f1438jsnd90b0e85fb62',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const defaultCity = 'Kharagpur'

const getweather=(city)=>{
    
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=>response.json())
.then((response)=>{
 
cloud_pct.innerHTML=response.cloud_pct
let val=cloud_pct.innerHTML
if (val<50)
{
	ppt.innerHTML="less (almost clear)"
document.body.style.backgroundImage = "url('clear.jpg')";

}
else if (val<80)
{
	ppt.innerHTML="more (cloudy)"
	document.body.style.backgroundImage = "url('cloudy.jpg')";
}
else if (val<=100)
{
	ppt.innerHTML="more (rain)"
	document.body.style.backgroundImage = "url('rainy.jpg')";
}
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
const desiredHeight = window.innerHeight * 0.2;
document.body.style.height = `${desiredHeight}px`;
 temp.innerHTML=response.temp
 feels_like.innerHTML=response.feels_like
 humidity.innerHTML=response.humidity
 min_temp.innerHTML =response.min_temp
 max_temp.innerHTML =response.max_temp
 wind_speed.innerHTML =response.wind_speed
 wind_degrees.innerHTML=response.wind_degrees 
 sunrise.innerHTML =response.sunrise
 sunset.innerHTML=response.sunset
 console.log(response);
})
 .catch(err=>console.log(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value)
})


// Fetch weather data for the default city on page load
window.addEventListener('load', () => {
	getweather(defaultCity)
  });




const shanghai = document.getElementById("shanghai");
const delhi = document.getElementById("delhi");
const mumbai = document.getElementById("mumbai");
const singapore = document.getElementById("singapore");

shanghai.addEventListener("change", function() {
	if (shanghai.checked) {
	  const place="shanghai"
	}
  });

delhi.addEventListener("change", function() {
	if (delhi.checked) {
		const place="delhi"
		getdetails(place)
	}
  });

mumbai.addEventListener("change", function() {
	if (mumbai.checked) {
		const place="mumbai"
		getdetails(place)
	}
  });

singapore.addEventListener("change", function() {
	if (singapore.checked) {
		const place="singapore"
		getdetails(place)
	}
  });


  const getdetails=(city)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
	.then(response=>response.json())
	.then((response)=>{
	 cloud_pct_d.innerHTML=response.cloud_pct + "%"
	 temp_d.innerHTML=response.temp + "deg."
	 humidity_d.innerHTML=response.humidity
	 min_temp_d.innerHTML =response.min_temp + "deg."
	 max_temp_d.innerHTML =response.max_temp + "deg."
	 wind_speed_d.innerHTML =response.wind_speed

	 console.log(response);
	})
	 .catch(err=>console.log(err))
	}