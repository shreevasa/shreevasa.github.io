//select elements
const dayElememnt=document.querySelector(".day");
const iconElememnt=document.querySelector(".icon");
const tempElememnt=document.querySelector(".temperature p");
const rightElement=document.querySelector(".right p");
const cityElement=document.querySelector(".right h4");
const tempminElement=document.querySelector(".temperature1 p");
//App data
const weather={};
// const forecast={};
weather.temperature={
    unit : "celsius"
}
weather.temperature1={
    unit:"celsius"
}

//App const and vars
const KELVIN=273;
//api key
const key="6cfb00bd8fc705d673be0522ef4efdfe";

//geolocation supports
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError);
}
else{
    dayElememnt.style.display="block";
    dayElememnt.innerHTML="<p>browser doesnt support geolocation</p>";
}
//set users position
function setPosition(position){
    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;

    getWeather(latitude,longitude);
    getForecast(latitude,longitude);
    
}
function showError(error){
    dayElememnt.style.display="block";
    dayElememnt.innerHTML= `<p>${error.message}</p>`;
}

//get weather from api
function getWeather(latitude,longitude){
    let api=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    // console.log(api);   
    // fetch()
    // .then(function(response){
    //     let data1=response.json();
    //     return data1;
    // })
    // .then(function(data1){
    //     weather.description=data1.list[0].dt_txt;
    // })
    // .then(function(){
    //     displayWeather();
    // })
        fetch(api)
        .then(function(response){
            let data=response.json();
            return data;
        
    })
    .then(function(data){
        weather.description=data.dt;
        weather.hour=data.dt;
        weather.iconId=data.weather[0].icon;
        weather.temperature.value=Math.floor(data.main.temp_max-KELVIN);
        weather.city=data.name;
        weather.temperature1.value=Math.floor(data.main.temp_min-KELVIN);
        var dt=new Date((weather.description)*1000);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    dayElememnt.innerHTML=weekday[dt.getDay()];
    var hours=new Date((weather.hour)*1000);
    var hour=hours.getHours();
    if(hour>0 && hour<12){
        rightElement.innerHTML="GOOD MORNING";
    }
    else if(hour>=12 && hour<16){
        rightElement.innerHTML="GOOD AFTERNOON";
    }
    else if(hour>=16 && hour<19){
        rightElement.innerHTML="GOOD EVENING";
    }
    else{
        rightElement.innerHTML="GOOD NIGHT";
    }

    })
    .then(function(){
        displayWeather();
    
    });
}

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}
function cityClick(latitude,longitude,time){
    let api1=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
   

     
    
        fetch(api1)
        .then(function(response){
            let data1=response.json();
            return data1;
        
    })
    .then(function(data1){
        weather.description=data1.dt;
        weather.hour=data1.dt;
        weather.iconId=data1.weather[0].icon;//
        weather.temperature.value=Math.floor(data1.main.temp_max-KELVIN);//
        weather.city=data1.name;//
        weather.temperature1.value=Math.floor(data1.main.temp_min-KELVIN);//
        var d=new Date((weather.description)*1000);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        dayElememnt.innerHTML=weekday[d.getDay()];
        var hours1=new Date((weather.hour)*1000);
        var hour0=hours1.getHours();
        hour1=hour0-time;
        if(hour1>0 && hour1<12){
            rightElement.innerHTML="GOOD MORNING";
        }
        else if(hour1>=12 && hour1<16){
            rightElement.innerHTML="GOOD AFTERNOON";
        }
        else if(hour1>=16 && hour1<19){
            rightElement.innerHTML="GOOD EVENING";
        }
        else{
            rightElement.innerHTML="GOOD NIGHT";
        }

    })
    .then(function(){
        displayWeather();
    });
}
    
function displayWeather(){
    iconElememnt.innerHTML=`<img src="icons/${weather.iconId}.png"/>`;
    tempElememnt.innerHTML=`MAX-${weather.temperature.value}&#176C<span><span>`;
    tempminElement.innerHTML=`MIN-${weather.temperature1.value}&#176C<span><span>`;
    cityElement.innerHTML=weather.city;
}

/////////////////////////////////////////////////////////////
const dayElememnt1=document.querySelector(".day1");
const dayElememnt2=document.querySelector(".day2");
const dayElememnt3=document.querySelector(".day3");
const dayElememnt4=document.querySelector(".day4");
const dayElememnt5=document.querySelector(".day5");
const dayElememnt6=document.querySelector(".day6");

const mintemp1=document.querySelector(".temperature10");
const mintemp2=document.querySelector(".temperature2");
const mintemp3=document.querySelector(".temperature3");
const mintemp4=document.querySelector(".temperature4");
const mintemp5=document.querySelector(".temperature5");
const mintemp6=document.querySelector(".temperature6");

const maxtemp1=document.querySelector(".temperature11");
const maxtemp2=document.querySelector(".temperature12");
const maxtemp3=document.querySelector(".temperature13");
const maxtemp4=document.querySelector(".temperature14");
const maxtemp5=document.querySelector(".temperature15");
const maxtemp6=document.querySelector(".temperature16");

const iconone=document.querySelector(".icon1");
const icontwo=document.querySelector(".icon2");
const iconthree=document.querySelector(".icon3");
const iconfour=document.querySelector(".icon4");
const iconfive=document.querySelector(".icon5");
const iconsix=document.querySelector(".icon6");

const forecast={};

forecast.temperature={
    unit:"celsius"
}
function getForecast(latitude,longitude){
    let api2=`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    // console.log(api2);
    fetch(api2)
        .then(function(response){
            let data2=response.json();
            return data2;
    })
    .then(function(data2){
        forecast.day1=data2.list[0].dt_txt;
        forecast.day2=data2.list[8].dt_txt;
        forecast.day3=data2.list[16].dt_txt;
        forecast.day4=data2.list[24].dt_txt;
        forecast.day5=data2.list[32].dt_txt;
        forecast.day6=data2.list[39].dt_txt;

        forecast.temperature.value2=Math.floor(data2.list[8].main.temp_min-KELVIN);
        forecast.temperature.value3=Math.floor(data2.list[16].main.temp_min-KELVIN);
        forecast.temperature.value4=Math.floor(data2.list[24].main.temp_min-KELVIN);
        forecast.temperature.value5=Math.floor(data2.list[32].main.temp_min-KELVIN);
        forecast.temperature.value6=Math.floor(data2.list[39].main.temp_min-KELVIN);

        forecast.temperature.value21=Math.floor(data2.list[8].main.temp_max-KELVIN);
        // console.log(forecast.temperature.value21);

        forecast.temperature.value31=Math.floor(data2.list[16].main.temp_max-KELVIN);
        forecast.temperature.value41=Math.floor(data2.list[24].main.temp_max-KELVIN);
        forecast.temperature.value51=Math.floor(data2.list[32].main.temp_max-KELVIN);
        forecast.temperature.value61=Math.floor(data2.list[39].main.temp_max-KELVIN);
        // console.log(forecast.temperature.value);

        forecast.ic1=data2.list[0].weather[0].icon;
        forecast.ic2=data2.list[8].weather[0].icon;
        forecast.ic3=data2.list[16].weather[0].icon;
        forecast.ic4=data2.list[24].weather[0].icon;
        forecast.ic5=data2.list[32].weather[0].icon;
        forecast.ic6=data2.list[39].weather[0].icon;


    })
    .then(function(){
        displayForecast();
    });

}
function displayForecast(){
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        // dayElememnt.innerHTML=weekday[d.getDay()];

    var a=new Date(forecast.day1);
    dayElememnt1.innerHTML=weekday[a.getDay()];
    var b=new Date(forecast.day2);
    dayElememnt2.innerHTML=weekday[b.getDay()];
    var c=new Date(forecast.day3);
    dayElememnt3.innerHTML=weekday[c.getDay()];
    var d=new Date(forecast.day4);
    dayElememnt4.innerHTML=weekday[d.getDay()];
    var e=new Date(forecast.day5);
    dayElememnt5.innerHTML=weekday[e.getDay()];
    var f=new Date(forecast.day6);
    dayElememnt6.innerHTML=weekday[f.getDay()];

    mintemp1.innerHTML=`Max-${weather.temperature.value}&#176C<span><span>`;
    mintemp2.innerHTML=`Max-${forecast.temperature.value2}&#176C<span><span>`;
    mintemp3.innerHTML=`Max-${forecast.temperature.value3}&#176C<span><span>`;
    mintemp4.innerHTML=`Max-${forecast.temperature.value4}&#176C<span><span>`;
    mintemp5.innerHTML=`Max-${forecast.temperature.value5}&#176C<span><span>`;
    mintemp6.innerHTML=`Max-${forecast.temperature.value6}&#176C<span><span>`;

    maxtemp1.innerHTML=`Min-${weather.temperature1.value}&#176C<span><span>`;
    maxtemp2.innerHTML=`Min-${forecast.temperature.value21}&#176C<span><span>`;
    maxtemp3.innerHTML=`Min-${forecast.temperature.value31}&#176C<span><span>`;
    maxtemp4.innerHTML=`Min-${forecast.temperature.value41}&#176C<span><span>`;
    maxtemp5.innerHTML=`Min-${forecast.temperature.value51}&#176C<span><span>`;
    maxtemp6.innerHTML=`Min-${forecast.temperature.value61}&#176C<span><span>`;    

    iconone.innerHTML=`<img src="icon/${forecast.ic1}.png"/>`;
    icontwo.innerHTML=`<img src="icon/${forecast.ic2}.png"/>`;
    iconthree.innerHTML=`<img src="icon/${forecast.ic3}.png"/>`;
    iconfour.innerHTML=`<img src="icon/${forecast.ic4}.png"/>`;
    iconfive.innerHTML=`<img src="icon/${forecast.ic5}.png"/>`;
    iconsix.innerHTML=`<img src="icon/${forecast.ic6}.png"/>`;

}
// tempElememnt.innerHTML=`${weather.temperature.value}&#176<span><span>`;
// dayElememnt.innerHTML=weekday[d.getDay()];
//