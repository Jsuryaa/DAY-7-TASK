var res=new XMLHttpRequest();
    res.open('GET','https://restcountries.com/v3.1/all');
    res.send();
    res.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    })
    console.log(population);}