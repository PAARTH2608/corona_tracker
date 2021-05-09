const myform1 = document.getElementById('myform1');
const country = document.getElementById('country');
myform1.addEventListener('submit', function (e){
    e.preventDefault();
    var count = country.value;

    //fetching
    const url = 'https://api.covid19api.com/live/country/'+`${count}`+'/status/confirmed'
    fetch(url)
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
        const index = data.length - 1;
        const active = document.getElementById('active');
        const confirmed = document.getElementById('confirmed');
        const recovered = document.getElementById('recovered');
        const deaths = document.getElementById('deaths');

        active.append(data[index].Active);
        confirmed.append(data[index].Confirmed);
        recovered.append(data[index].Recovered);
        deaths.append(data[index].Deaths);
        country.value = "";
    })


    country.addEventListener('click',  () => {
        window.location.reload();
    })
});