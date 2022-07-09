const switcherBtn = document.querySelector('.bg-color-switcher-btn');
const countriesDiv = document.querySelector('.countries');
const selectRegion = document.querySelector('select');

const options = document.querySelectorAll('option')

switcherBtn.addEventListener('click', changeBackground);

function changeBackground(){
    switcherBtn.classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('nav').classList.toggle('dark')
    document.querySelector('.logo').classList.toggle('dark')
}

async function get(){
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data)

    if(selectRegion.value == "all"){}

    data.forEach(country => {
        let card = document.createElement('div');
        card.classList.add('card');
        countriesDiv.appendChild(card);

        let flag = document.createElement('img');
        flag.classList.add('flag');
        card.appendChild(flag)
        flag.src = country.flags.png

        let countryMainInfos = document.createElement('div');
        countryMainInfos.classList.add('country-main-infos');
        card.appendChild(countryMainInfos)



        let countryName =  document.createElement('div');
        countryName.classList.add('country-name');
        countryMainInfos.appendChild(countryName);
        countryName.innerHTML = country.name.common

        let population =  document.createElement('div');
        population.classList.add('population');
        countryMainInfos.appendChild(population);
        population.innerHTML = `<span>Population: </span>`  +country.population

        let region =  document.createElement('div');
        region.classList.add('region');
        countryMainInfos.appendChild(region);
        region.innerHTML = `<span>Region: </span>`  + country.region

        let capital =  document.createElement('div');
        capital.classList.add('capital');
        countryMainInfos.appendChild(capital);
        capital.innerHTML =`<span>Capital: </span>`  +  country.capital

       

    });

}
get();

