const myform1 = document.getElementById('myform1');
const country = document.getElementById('country');
const province = document.getElementById('state');
myform1.addEventListener('submit', function (e){
    e.preventDefault();
    var count = country.value;
    var prov = province.value;
    
    //fetching
    const url = 'https://api.covid19api.com/live/country/'+`${count}`+'/status/confirmed'
    fetch(url)
    .then((data) => data.json())
    .then((data) => {
        // console.log(data);
        const index = data.length - 1;
        for(var i=data.length-1;i>=0;i--){
            if(data[i].Province === prov){
                // console.log(data[i].Province)
                // console.log(i)
                active.append(data[i].Active);
                confirmed.append(data[i].Confirmed);
                recovered.append(data[i].Recovered);
                deaths.append(data[i].Deaths);
                country.value = "";
                province.value = "";
                break
            }
        }
    })
    country.addEventListener('click',  () => {
        window.location.reload();
    })
});
