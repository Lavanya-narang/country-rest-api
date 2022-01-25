const countriesElem = document.querySelector(".countries");
const dropdown = document.querySelector(".dropdown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const searchers = document.querySelector(".searchers");
async function getCountry() {
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}
getCountry()
function showCountry(data) 
{
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML = `
        <div class="country-img">
        <img src="${data.flag}" alt="">
        </div>
        <div class="country-info">
        <h5 class="countryname">${data.name}</h5>
        <p><strong> population:</strong>${data.population}</p>
        <p class="regionname"><strong> region:</strong>${data.region}</p>
        <p><strong> capital:</strong>${data.capital}</p>
        </div>`;
    countriesElem.appendChild(country)
}
dropdown.addEventListener("click", () => {
    dropElem.classList.toggle("showdropdown")
    console.log("hello");
})
    const regionname = document.getElementsByClassName(".regionname")
    const countryname = document.getElementsByClassName(".countryname")
    region.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element);
            Array.from(regionname).forEach(elem => {
                console.log(elem.innerText);
                if (elem.innerText.includes(element.innerText)|| element.innerText=="all") 
                {
                    elem.parentElement.parentElement.style.display ="grid"
                }
                else 
                {
                    elem.parentElement.parentElement.style.display ="none"
                }
            });
        });
    });
    searchers.addEventListener("input", () => {
    console.log(searchers.value.toLowerCase());
    Array.from(countryname).forEach(elem => 
    {
        
        if (elem.innerText.toLowerCase().includes(searchers.value.toLowerCase())) 
        {
            elem.parentElement.parentElement.style.display = "grid"
        }
        else 
        {
            elem.parentElement.parentElement.style.display = "none"
        }
    });
});