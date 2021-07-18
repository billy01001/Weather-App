//api key 
let api_key = 'b3cdbe99620f9472ee87849068e4a231'

//getting input zipcode and parsing input
let button = document.querySelector('#press') //submit button
let input = document.querySelector('#zip') //zipcode input

//click event
button.addEventListener('click',e =>{
  let zipcode = input.value
  console.log(zipcode)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=${api_key}`)
  .then(function(res){
    return res.json()
  }).then(function(data){
    console.log(data)
    console.log(appendToHTML(data))
  })
})



//appending to html
function appendToHTML(data){
	//lowest temp
  let lowTemp = document.querySelector('#low-temp')
  lowTemp.innerText = `low: ${convert(data.main.temp_min)}°` 
	//temp (anything element)
  let temp = document.querySelector('#temp')
  temp.innerText = `current: ${convert(data.main.temp)}°`
	//highest temp
  let highTemp = document.querySelector('#high-temp')
  highTemp.innerText = `high: ${convert(data.main.temp_max)}°`
  //weather description
  let descr = document.querySelector('#description')
  descr.innerText = `${data.weather[0].description}` 
  //humidity
  let humidity = document.querySelector('#humidity')
  humidity.innerText = `humidity: ${data.main.humidity}`
	//title temp
	let titleTemp = document.querySelector('#title-temp')
	titleTemp.innerText = `${convert(data.main.temp)}°`
	//area
	let area = document.querySelector('#area')
	area.innerText = `area: ${data.name}`
	//country
	let country = document.querySelector('#country')
	country.innerText = `country: ${data.sys.country}`
}

//converting k to f
function convert(k) {
	var f = (k-273.15) * 9/5 + 32
	return (Math.round(f));
}

//error msg (doesn't work yet, but will try to fix)
/*
const errorCode = document.querySelector('#error')
const errorMsg = document.querySelector('#errorMsg')
const status = data.cod
const statusMsg = data.message

if(status == 200){
	console.log('STATUS: 200 OK')
}else{
	errorCode.innerText = `ERROR: ${status}`;
	errorMsg.innerText = `${statusMsg}\nan error occurred , try again.`
}
*/









