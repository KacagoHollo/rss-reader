function loadCountry() {
    fetch("https://restcountries.com/v3.1/name/peru").then(r => r.json()).then(showCountry);
}

function showCountry(country) {
    console.log(country);
    const name = country[0].name.official;
    document.getElementById("name").textContent=name;

    for (let j = 0; j < country[0].name.nativeName.length; j++) {
        const native = country[0].name.nativeName[j];
        document.getElementById("nativeS").innerText += ' ' + native;
   };
    
   const capital = country[0].capital;
    document.getElementById("capital").innerHTML=capital;

    const flag = country[0].flags.png;
    document.getElementById("flag").setAttribute('src', flag);

    const continent = country[0].continents[0];
    document.getElementById("continent").innerHTML=continent;

    for (let i = 0; i < country[0].timezones.length; i++) {
       const tz = country[0].timezones[i];
        document.getElementById("timezones").textContent += ' ' + tz;
    }

}

window.addEventListener("load", loadCountry);
