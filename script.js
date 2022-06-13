    // let btn = document.querySelector(".send");
    // let input = document.querySelector(".input-text");


    function exploreHandeler(city){
        try{
            city = input.value;
        link = `https://api.weatherapi.com/v1/current.json?key=598f0368744d4481891160144222305&q=${city}&aqi=no`;
        const request = new XMLHttpRequest();
        request.open("GET", link, false);
        request.send();
        let data = JSON.parse(request.responseText);
        console.log(data);

        document.querySelector(".weather-country").innerHTML =
            data.location.country ;


        let temp = Math.round(data.current.temp_c);
            document.querySelector(".weather-temp").innerHTML = temp  +'&deg';

        
        document.querySelector(".weather-comment").innerHTML =
            data.current.condition.text;


        document.querySelector(".humidity-procent").innerHTML = 
            data.current.humidity + '%';
            
            
            let path = icons (data.current.condition.icon);


             document.querySelector(".weather-icon").setAttribute ("src",path);


         document.querySelector(".vis-procent").innerHTML =
             data.current.vis_km + 'km';


         document.querySelector(".weather-city").innerHTML = '/    ' +
             data.location.name;


        let feelslike = Math.round(data.current.feelslike_c);
             document.querySelector(".feelslike-temp").innerHTML = feelslike + '&deg';
                

     
             document.querySelector(".localtime-time").innerHTML =
             data.location.localtime;
 

     
        
        change_window();
    } 


    catch {
       
    }
    }

    


    function icons(image_link){
        let parts = image_link.split("/");
        let name =  parts [parts.length -1];
        console.log(name);
        let path=`./img2/day/${name}`;
        return path;
     }
    

     

    
    
    











