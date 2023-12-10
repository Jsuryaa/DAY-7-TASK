var amount=new XMLHttpRequest();
amount.open('GET','https://restcountries.com/v3.1/all');
amount.send();
amount.onload=function (){
var countryData=JSON.parse(this.response);
const populate=countryData.filter((element)=>{
     return element.population<200000;
     })
     console.log(populate);
}