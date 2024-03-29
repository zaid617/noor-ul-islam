
let Namaz = document.getElementById('Namaz');
let Hijiri = document.getElementById('Hijiri');
let Quran = document.getElementById('Quran');
let description = document.getElementById('description')
let description2 = document.getElementById('description2')
let description3 = document.getElementById('description3')
let form = document.getElementById('main');


Namaz.addEventListener("mouseover",function show() {
    description.style.display = 'flex'
})
Namaz.addEventListener("mouseout",function hide() {
    description.style.display = 'none'
})


Hijiri.addEventListener("mouseover",function show() {
    description2.style.display = 'flex'
})
Hijiri.addEventListener("mouseout",function hide() {
    description2.style.display = 'none'
})

Quran.addEventListener("mouseover",function show() {
    description3.style.display = 'flex'
})
Quran.addEventListener("mouseout",function hide() {
    description3.style.display = 'none'
});

let data = ()=>{
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let Fajar = document.getElementById('Fajar')
    let Zohar = document.getElementById('Zohar')
    let Asar = document.getElementById('Asar')
    let Maghrib = document.getElementById('Maghrib')
    let Esha = document.getElementById('Esha')
    let main = document.getElementById('main')
    
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`)
            .then(function (response) {
                data = response.data;

                
                    Fajar.innerHTML = "Timing:" +"  "+ data.data.timings.Fajr;
                    Zohar.innerHTML = "Timing:" +"  "+ data.data.timings.Dhuhr;
                    Asar.innerHTML = "Timing:" +"  "+ data.data.timings.Asr;
                    Maghrib.innerHTML = "Timing:" +"  "+ data.data.timings.Maghrib;
                    Esha.innerHTML = "Timing:" +"  "+ data.data.timings.Isha;
                })
                
            main.style.display = 'flex';
            return false;
        }




            function HijriCalendar() {
                let inp_ut1 = document.getElementById("citynames_forcalendar");
                let inp_ut2 = document.getElementById("countrynames_forcalendar");
                let inp_ut3 = document.getElementById("monthsnames");
                let inp_ut4 = document.getElementById("yearnames");
                let main2 = document.getElementById('main2')
                axios.get(`https://api.aladhan.com/v1/hijriCalendarByCity?city=${inp_ut1.value}&country=${inp_ut2.value}&method=1&month=${inp_ut3.value}&year=${inp_ut4.value}`)
                .then(function (response) {
                    console.log(response.data);
                    for (let i = 0; i < response.data.data.length; i++) {
                        response.data.data[i].date.gregorian.date;
                            response.data.data[i].date.gregorian.weekday.en;
                            response.data.data[i].date.hijri.date;
                            response.data.data[i].timings.Fajr;
                            response.data.data[i].timings.Asr;
                            response.data.data[i].timings.Dhuhr;
                            response.data.data[i].timings.Isha;
                            response.data.data[i].timings.Maghrib;
                            response.data.data[i].timings.Midnight;
                            response.data.data[i].timings.Sunrise;
                            response.data.data[i].timings.Sunset;
            
                            document.getElementById('table_for_calendar').innerHTML += `<tr>
                            <td>${i + 1}</td>
                            <td>${response.data.data[i].date.hijri.date}</td>
                            <td>${response.data.data[i].date.gregorian.date}</td>
                            <td>${response.data.data[i].date.gregorian.weekday.en}</td>
                            <td>${response.data.data[i].timings.Fajr}</td>
                            <td>${response.data.data[i].timings.Sunrise}</td>
                            <td>${response.data.data[i].timings.Dhuhr}</td>
                            <td>${response.data.data[i].timings.Asr}</td>
                            <td>${response.data.data[i].timings.Sunset}</td>
                            <td>${response.data.data[i].timings.Maghrib}</td>
                            <td>${response.data.data[i].timings.Isha}</td>
                            <td>${response.data.data[i].timings.Midnight}</td>
                            </tr>`;
                        }
                        document.getElementById('hijrimonth').innerHTML = "Islamic Month :" + " " + response.data.data[0].date.hijri.month.en;
                        document.getElementById('georgmonth').innerHTML = "Month :" + " " + response.data.data[0].date.gregorian.month.en;
                        document.getElementById('heading').innerHTML = ` 

                        <th>S.No</th>
                        <th>Islamic Date:</th>
                        <th>Date:</th>
                        <th>Day:</th>
                        <th>Fajr:</th>
                        <th>Sunrise:</th>
                        <th>Zuhur:</th>
                        <th>Aasr:</th>
                        <th>Sunset:</th>
                        <th>Maghrib:</th>
                        <th>Esha:</th>
                        <th>Tahajjud:</th>`;
            
                    }
                    
                    )
                    main2.style.display = 'flex'}


let click = ()=>{
    let search = document.getElementById('.search')
    search.style.display = 'inline'


    search.addEventListener("mouseout",function show() {
    search.style.display = 'none'
})
}

let ayah = ()=>{
    let num =document.getElementById('surah_num').value;
    let surah =document.getElementById('surah');
    surah.innerHTML = "";
    surah.style.display ='block'
    axios.get(`https://api.alquran.cloud/v1/surah/${num}`)
                .then(function (response) {
                    const data = response.data;
                    for (let i = 0; i < data.data.ayahs.length; i++) {
                        
                        surah.innerHTML += (data.data.ayahs[i].text + " " + "۝" + "");
                        
                    }
                        surahName.innerHTML = data.surah.name;
                })
            
}
