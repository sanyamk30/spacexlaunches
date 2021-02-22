

const SpaceX = {
    search(year,launch,landing){
        var url = "https://api.spaceXdata.com/v3/launches?limit=100";
        if(launch === "true"){
            url = url.concat("&launch_success=true");
        }
        if(landing === "true"){
            url = url.concat("&land_success=true");
        }
        if(year !== ''){
            url = url.concat(`&launch_year=${year}`);
        }

        console.log(url);
        return fetch(url).then(response => {
            return response.json();
        }).then(jsonResponse => {
            return jsonResponse.map(launch => {
                console.log('Retiurnign objext');
                return {
                    flight_number: launch.flight_number,
                    mission_name: launch.mission_name,
                    launch_year: launch.launch_year,
                    launch_site : launch.launch_site.site_name_long,
                    images : launch.links.flickr_images,
                    details : launch.details,
                };
            });
        });
    }
}

export default SpaceX;