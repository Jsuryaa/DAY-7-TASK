var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var country=JSON.parse(this.response);
    const asia=country.filter((a)=>{
        if(a.region==='Asia'){
            return a.name;
        }
    })
    console.log(asia)
}