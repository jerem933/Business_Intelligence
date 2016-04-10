function maj(){
	window.location.reload(); 
	}
    var map = L.map('map', {
        center: [35.51, 10.11],
        zoom: 2,
        minZoom: 1,
        maxZoom: 9 
    }); 
        
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);		
    
    var Olympics_medal;
	var filtre;
	google.load('visualization', '1.0', {'packages': ['corechart']});
	var annee = document.getElementById("annee").value;
    Papa.parse("http://jerem933.github.io/Business_Intelligence/Olympics_games_datasetV2.csv", {
            header: true,
            delimiter:";",
            dynamicTyping: true,
			download: true,
            complete: function(results) {
                Olympics_medal = results;
                var totalMedalsUS = 0, totalGoldUS = 0, totalSilverUS = 0, totalBronzeUS = 0, totalMedalsDE = 0, totalGoldDE = 0, totalSilverDE = 0, totalBronzeDE = 0, totalMedalsFR = 0, totalGoldFR = 0, totalSilverFR = 0, totalBronzeFR = 0, totalMedalsAUS = 0, totalGoldAUS = 0, totalSilverAUS = 0, totalBronzeAUS = 0, totalMedalsAUT = 0, totalGoldAUT = 0, totalSilverAUT = 0, totalBronzeAUT = 0, totalMedalsCAN = 0, totalGoldCAN = 0, totalSilverCAN = 0, totalBronzeCAN = 0, totalMedalsCHN = 0, totalGoldCHN = 0, totalSilverCHN = 0, totalBronzeCHN = 0, totalMedalsGBR = 0, totalGoldGBR = 0, totalSilverGBR = 0, totalBronzeGBR = 0, totalMedalsIT = 0, totalGoldIT = 0, totalSilverIT = 0, totalBronzeIT = 0, totalMedalsNOR = 0, totalGoldNOR = 0, totalSilverNOR = 0, totalBronzeNOR = 0, totalMedalsRUS = 0, totalGoldRUS = 0, totalSilverRUS = 0, totalBronzeRUS = 0, totalMedalsSWE = 0, totalGoldSWE = 0, totalSilverSWE = 0, totalBronzeSWE = 0;
                
				for (var i=0; i < Olympics_medal.data.length; i++) {

					
					if (annee !== "Historique"){
                    if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsUS += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldUS += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverUS += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeUS += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsDE += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldDE += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverDE += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeDE += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsFR += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldFR += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverFR += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeFR += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsRUS += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldRUS += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverRUS += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeRUS += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsCAN += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldCAN += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverCAN += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeCAN += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsSWE += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldSWE += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverSWE += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeSWE += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsNOR += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldNOR += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverNOR += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeNOR += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsAUT += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldAUT += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverAUT += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeAUT += Olympics_medal.data[i].Bronze;
                    }
										
					if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsAUS += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldAUS += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverAUS += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeAUS += Olympics_medal.data[i].Bronze;
                    }
										
					if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsGBR += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldGBR += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverGBR += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeGBR += Olympics_medal.data[i].Bronze;
                    }
															
					if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsCHN += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldCHN += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverCHN += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeCHN += Olympics_medal.data[i].Bronze;
                    }
																				
					if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Total !== "" && Olympics_medal.data[i].Year == annee) {
                        totalMedalsIT += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Gold !== "" && Olympics_medal.data[i].Year == annee) {
                        totalGoldIT += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Silver !== "" && Olympics_medal.data[i].Year == annee) {
                        totalSilverIT += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Bronze !== "" && Olympics_medal.data[i].Year == annee) {
                        totalBronzeIT += Olympics_medal.data[i].Bronze;
                    }
                }
				else
				{
				if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsUS += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldUS += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverUS += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "USA" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeUS += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsDE += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldDE += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverDE += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "GER" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeDE += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsFR += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldFR += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverFR += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "FRA" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeFR += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsRUS += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldRUS += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverRUS += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "RUS" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeRUS += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsCAN += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldCAN += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverCAN += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "CAN" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeCAN += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsSWE += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldSWE += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverSWE += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "SWE" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeSWE += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsNOR += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldNOR += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverNOR += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "NOR" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeNOR += Olympics_medal.data[i].Bronze;
                    }
					
					if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsAUT += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldAUT += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverAUT += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "AUT" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeAUT += Olympics_medal.data[i].Bronze;
                    }
										
					if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsAUS += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldAUS += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverAUS += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "AUS" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeAUS += Olympics_medal.data[i].Bronze;
                    }
										
					if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsGBR += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldGBR += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverGBR += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "GBR" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeGBR += Olympics_medal.data[i].Bronze;
                    }
															
					if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsCHN += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldCHN += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverCHN += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "CHN" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeCHN += Olympics_medal.data[i].Bronze;
                    }
																				
					if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Total !== "") {
                        totalMedalsIT += Olympics_medal.data[i].Total;
                    }
                    if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Gold !== "") {
                        totalGoldIT += Olympics_medal.data[i].Gold;
                    }
					if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Silver !== "") {
                        totalSilverIT += Olympics_medal.data[i].Silver;
                    }
					if (Olympics_medal.data[i].Country === "ITA" && Olympics_medal.data[i].Bronze !== "") {
                        totalBronzeIT += Olympics_medal.data[i].Bronze;
                    }
				
				
				}
				}
				
				openTab(1, 'Carte',0);

                $.getJSON("country.geojson", function (data) {
				
					
                  				
					// get color depending on population density value
					function getColor(d, x) {
					if(x === "2002" || x === "2006" || x === "2010" || x === "2014") {
						return d > 75  ? '#000099' :
							   d > 60  ? '#0000CC' :
							   d > 45  ? '#0066CC' :
							   d > 30  ? '#0099CC' :
							   d > 15  ? '#00CCCC' :
							   d > 0  ?  '#00FFCC' :
										 '#FFEDA0';
						
												
					}
					else {
						return d > 1000 ? '#800026' :
							   d > 500  ? '#BD0026' :
							   d > 350  ? '#E31A1C' :
							   d > 200  ? '#FC4E2A' :
							   d > 150  ? '#FD8D3C' :
							   d > 70   ? '#FEB24C' :
							   d > 10   ? '#FED976' :
										  '#FFEDA0';
										 
						}
					}
                    
                    // Ici, à chaque département, on lui associe les valeurs du chômage
                    data.features.forEach(function (d) {
					
						if (d.id == "GER") {
							d.properties.totalMedals = totalMedalsDE;
							d.properties.totalGold = totalGoldDE;
							d.properties.totalSilver = totalSilverDE;
							d.properties.totalBronze = totalBronzeDE;
						}
						if (d.id == "USA") {
							d.properties.totalMedals = totalMedalsUS;
							d.properties.totalGold = totalGoldUS;
							d.properties.totalSilver = totalSilverUS;
							d.properties.totalBronze = totalBronzeUS;
						}
						if (d.id == "FRA") {
							d.properties.totalMedals = totalMedalsFR;
							d.properties.totalGold = totalGoldFR;
							d.properties.totalSilver = totalSilverFR;
							d.properties.totalBronze = totalBronzeFR;
						}
						if (d.id == "GBR") {
							d.properties.totalMedals = totalMedalsGBR;
							d.properties.totalGold = totalGoldGBR;
							d.properties.totalSilver = totalSilverGBR;
							d.properties.totalBronze = totalBronzeGBR;
						}
						if (d.id == "CHN") {
							d.properties.totalMedals = totalMedalsCHN;
							d.properties.totalGold = totalGoldCHN;
							d.properties.totalSilver = totalSilverCHN;
							d.properties.totalBronze = totalBronzeCHN;
						}
						if (d.id == "CAN") {
							d.properties.totalMedals = totalMedalsCAN;
							d.properties.totalGold = totalGoldCAN;
							d.properties.totalSilver = totalSilverCAN;
							d.properties.totalBronze = totalBronzeCAN;
						}
						if (d.id == "AUT") {
							d.properties.totalMedals = totalMedalsAUT;
							d.properties.totalGold = totalGoldAUT;
							d.properties.totalSilver = totalSilverAUT;
							d.properties.totalBronze = totalBronzeAUT;
						}
						if (d.id == "AUS") {
							d.properties.totalMedals = totalMedalsAUS;
							d.properties.totalGold = totalGoldAUS;
							d.properties.totalSilver = totalSilverAUS;
							d.properties.totalBronze = totalBronzeAUS;
						}
						if (d.id == "SWE") {
							d.properties.totalMedals = totalMedalsSWE;
							d.properties.totalGold = totalGoldSWE;
							d.properties.totalSilver = totalSilverSWE;
							d.properties.totalBronze = totalBronzeSWE;
						}
						if (d.id == "NOR") {
							d.properties.totalMedals = totalMedalsNOR;
							d.properties.totalGold = totalGoldNOR;
							d.properties.totalSilver = totalSilverNOR;
							d.properties.totalBronze = totalBronzeNOR;
						}
						if (d.id == "RUS") {
							d.properties.totalMedals = totalMedalsRUS;
							d.properties.totalGold = totalGoldRUS;
							d.properties.totalSilver = totalSilverRUS;
							d.properties.totalBronze = totalBronzeRUS;
						}
						if (d.id == "ITA") {
							d.properties.totalMedals = totalMedalsIT;
							d.properties.totalGold = totalGoldIT;
							d.properties.totalSilver = totalSilverIT;
							d.properties.totalBronze = totalBronzeIT;
						}
                    });
					tableau("FRA","France");

                    
                    // Ajout des départements, avec un remplissage en fonction de la variable totalMedals
                    L.geoJson(data, {
                        // option de style à mettre ici
                        style: function (feature) {
                            return { 
                                fillColor: getColor(feature.properties.totalMedals, annee),
                                fillOpacity: 0.7,
                                weight: 2,
                                opacity: 1,
								dashArray: '3',
								color: "white"
			                };
                        },
                        // option pour gestion des événements
                        onEachFeature: function (feature, layer) {
                            layer.on({
                                mouseover: function (e) {
								
								var layer = e.target,
                                souris = e.originalEvent,
                                tooltip = document.getElementById("tooltip");
								                            

                                    var prop = e.target.feature.properties;
                                    document.getElementById("info").innerHTML = prop.name + ' (' + prop.totalMedals + ')';
                                    layer.setStyle({
                                        weight: 3,
										opacity: 1,
										fillOpacity: 5,
										dashArray: '3',
										color: "#000"
                                    })
									
									 // Affichage des infos dans le tooltip
                            document.getElementById("pays").innerHTML = prop.name;
                            document.getElementById("total").innerHTML = prop.totalMedals;
                            document.getElementById("or").innerHTML = prop.totalGold;
                            document.getElementById("argent").innerHTML = prop.totalSilver;
                            document.getElementById("bronze").innerHTML = prop.totalBronze;
                           
						   
                            // Création du graphique du tooltip
                            //creationGraph("Sport");

                            // Affichage du tooltip
                            tooltip.style.display = "initial";

                            // Déplacement du tooltip en fonction de la souris
                            if (souris.pageY + 125 > window.innerHeight) {
                                tooltip.style.top = souris.pageY - 250 + "px";
                            } else {
                                tooltip.style.top = souris.pageY - 125 + "px";
                            }
                            tooltip.style.left = souris.pageX + 10 + "px";
                            
                           
                                },
                                mouseout : function (e) {
                                    document.getElementById("info").innerHTML = "";
									document.getElementById("tooltip").style.display = "none";

									 layer.setStyle({
										fillColor: getColor(feature.properties.totalMedals, annee),
										fillOpacity: 0.7,
										weight: 2,
										color: "white",
										opacity: 1,
										dashArray: '3'
                                    })
                                },
								click : function (e){
									tableau(e.target.feature.id,e.target.feature.properties.name);
									openTab(2, 'Reportings',e.target.feature.properties.name);
									
								}
                            })
                        }
                    }).addTo(map);

                }); 
            }
        });

        
        function openTab(evt, tabName,pays) {
		
    // Declare all variables
    var i, tabcontent, tablinks;

	if (tabName ===  "Autre"){
		drawStuff("Sport");
	}
	if (tabName ===  "Recherche"){
		drawStringFilter();
	}
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }

	
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    //evt.currentTarget.classList.add("active");
	
	
	
}

// Création du graphique du tooltip
function creationGraph() {
param =filtre;
var array_filter = new Array();
var year;
var donnee;

		for (var i=0; i < Olympics_medal.data.length-1; i++) {
			donnee = Olympics_medal.data[i][param];
			year = Olympics_medal.data[i].Year;	
				if(Olympics_medal.data[i].Total !== ""){
				if(array_filter[donnee] == null){
						array_filter[donnee] = {2000 : 0, 2002 : 0, 2004 : 0, 2006 : 0,2008 : 0, 2010 : 0,2012 : 0, 2014 : 0}; 
				}
				array_filter[donnee][year] = array_filter[donnee][year] + Olympics_medal.data[i].Total ; 		
				}
		}
		
		var data = [];
		
		var tmp=[param];
		
		for (var k in array_filter)
		if (array_filter.hasOwnProperty(k)) 
		tmp.push(k);	 
		
		
		data[0]=tmp;
		var lgr = tmp.length-1;
		var tab = [2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014];
		var cpt =1;
		tab.forEach (function(entry) {
			tmp =[];
			tmp.push(entry);
			for (index = 0; index < lgr; ++index) {
				tmp.push(array_filter[data[0][index+1]][entry]);
			}
			data[cpt] = tmp;
			cpt++;
		});

		
		var data = google.visualization.arrayToDataTable(data);

      var options = {
	    title: "Nombre de médailles par année",
        width: 800,
        height: 1000,
        legend: { position: 'top', maxLines: 3 },
        bar: {groupWidth: '75%'},
        isStacked: true,
      };

	  
      var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_stacked'));

      chart.draw(data, options);
 
}



function tableau(paysclique,titreclique){
	var paysclique;
	var titreclique;
	$(function () {
	if(paysclique !=  ""){
		var pays = paysclique;
		var titre = titreclique;
	}
	else {
		pays = document.getElementById("paysfiltre").value;
		titre = document.getElementById("paysfiltre").options[document.getElementById('paysfiltre').selectedIndex].text;
	}
    $('#FiltrePays').highcharts({
        chart: {
            type: 'column'
        },
		 colors: [
		 '#FFD700', '#C0C0C0', '#8C7853'
                ],
        title: {
            text: titre,
        },
        xAxis: {
            categories: ['2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total des médailles'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'OR',
            data: [recherche(pays, "2000", "Gold"), recherche(pays, "2002", "Gold"), recherche(pays, "2004", "Gold"), recherche(pays, "2006", "Gold"), recherche(pays, "2008", "Gold"), recherche(pays, "2010", "Gold"), recherche(pays, "2012", "Gold"), recherche(pays, "2014", "Gold")],

        }, {
            name: 'ARGENT',
            data: [recherche(pays, "2000", "Silver"), recherche(pays, "2002", "Silver"), recherche(pays, "2004", "Silver"), recherche(pays, "2006", "Silver"), recherche(pays, "2008", "Silver"), recherche(pays, "2010", "Silver"), recherche(pays, "2012", "Silver"), recherche(pays, "2014", "Silver")],

        }, {
            name: 'BRONZE',
            data: [recherche(pays, "2000", "Bronze"), recherche(pays, "2002", "Bronze"), recherche(pays, "2004", "Bronze"), recherche(pays, "2006", "Bronze"), recherche(pays, "2008", "Bronze"), recherche(pays, "2010", "Bronze"), recherche(pays, "2012", "Bronze"), recherche(pays, "2014", "Bronze")]
        }]
    });
});
	paysclique = "";
}	
	
	function recherche(pays, annee, typeM){
	var medailles = 0;
		for (var i = 0; i < Olympics_medal.data.length; i++) {
		if (Olympics_medal.data[i].Country === pays && Olympics_medal.data[i].Year == annee) {
		switch(typeM){
		case "Gold":
			medailles  = addmedailles(medailles,Olympics_medal.data[i].Gold);
			break;
		case "Silver":
			medailles  = addmedailles(medailles,Olympics_medal.data[i].Silver);
			break;
		case "Bronze":
			medailles = addmedailles(medailles,Olympics_medal.data[i].Bronze);
			break;
		default:
			alert("Erreur");
			break;
		}
		}
		}
	return medailles;
	
	}
	function addmedailles(medailles, typeM){
	if(typeM == ""){
		return medailles;
	}
	else{
	return medailles += parseInt(typeM);
	}
	
	}
	
   
	
	 	    google.charts.load('current', {packages:['corechart', 'table', 'line', 'controls']});
   // google.charts.setOnLoadCallback(drawStringFilter);
//google.charts.setOnLoadCallback(creationGraph("Sport")); 	
	//	google.charts.setOnLoadCallback(drawStuff('Sport'));
		 
		
      function drawStuff(param) {
	  filtre =param;
        var dashboard = new google.visualization.Dashboard(
          document.getElementById('programmatic_dashboard_div'));

        // We omit "var" so that programmaticSlider is visible to changeRange.
        programmaticSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'programmatic_control_div',
          'options': {
            'filterColumnLabel': 'Nombre de medailles',
            'ui': {'labelStacking': 'vertical'}
          }
        });

       programmaticChart  = new google.visualization.ChartWrapper({
        'chartType': 'PieChart',
        'containerId': 'programmatic_chart_div',
        'options': {
		'width': 600,
          'height': 600,
          'legend': 'none',
          'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
          'pieSliceText': 'value'
        }
      });
	
		var array_filter =[];
		

		for (var i=0; i < (Olympics_medal.data.length); i++) {
				if(Olympics_medal.data[i].Total !== ""){
					if(array_filter[Olympics_medal.data[i][param]] != null){
					array_filter[Olympics_medal.data[i][param]] = parseInt(array_filter[Olympics_medal.data[i][param]]) + parseInt((Olympics_medal.data[i].Total));
					}
					else{
					array_filter[Olympics_medal.data[i][param]] = Olympics_medal.data[i].Total; 
					}
				}
		}
		
		var data = [];
		
		data.push([param,'Nombre de medailles']);
		
		for (var k in array_filter){
		if (array_filter.hasOwnProperty(k)) {
			 data.push([k,array_filter[k]]);
		}
		}

      dashboard.bind(programmaticSlider, programmaticChart);
      dashboard.draw(data);
	   
	   
	   creationGraph();
	   drawchartPays('summer');
    }
	

  function drawStringFilter() {
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('stringFilter_dashboard_div'));
    var control = new google.visualization.ControlWrapper({
      'controlType': 'StringFilter',
      'containerId': 'stringFilter_control_div',
      'options': {
        'filterColumnIndex': 0
      }
    });
    var chart = new google.visualization.ChartWrapper({
      'chartType': 'Table',
      'containerId': 'stringFilter_chart_div',
      'options': {'height': '100%', 'width': '100%'}
    });
	
		var array_filter =[];
	
	for (var i=0; i < (Olympics_medal.data.length); i++) {
				if(Olympics_medal.data[i].Total !== ""){
					if(array_filter[Olympics_medal.data[i]['Athlete']] != null){
					array_filter[Olympics_medal.data[i]['Athlete']] = parseInt(array_filter[Olympics_medal.data[i]['Athlete']]) + parseInt((Olympics_medal.data[i].Total));
					}
					else{
					array_filter[Olympics_medal.data[i]['Athlete']] = Olympics_medal.data[i].Total; 
					}
				}
		}
		
		var data = [];
		
		data.push(['Athlète','Nombre de medailles']);
		
		for (var k in array_filter){
		if (array_filter.hasOwnProperty(k)) {
			 data.push([k,array_filter[k]]);
		}
		}
		
    dashboard.bind(control, chart);
    dashboard.draw(data);
  }
  


    function drawchartPays(season) {

	param=filtre;
	
	if (param === "Season")
		param ="Sport"
var array_filter = new Array();
var year;
var donnee;
var tmp =[];
if(season =="winter")
		var tab = [2002, 2006,  2010,  2014];
else
		var tab = [2000,  2004, 2008,  2012];

      var data = new google.visualization.DataTable();
	  	for (var i=0; i < Olympics_medal.data.length-1 ; i++) {
			donnee = Olympics_medal.data[i][param];
			year = Olympics_medal.data[i].Year;
				if(Olympics_medal.data[i].Total !== ""){
					if(array_filter[donnee] == null){
							if(Olympics_medal.data[i].Season == "summer" && season == "summer")
							array_filter[donnee] =  {2000 : 0,  2004 : 0, 2008 : 0, 2012 : 0};
							else if(Olympics_medal.data[i].Season == "winter" && season == "winter")
							array_filter[donnee] =  {2002 : 0, 2006 : 0, 2010 : 0, 2014 : 0};
					}
					if(array_filter[donnee] != null)
					array_filter[donnee][year] = array_filter[donnee][year] + Olympics_medal.data[i].Total ; 		
				}
		}
		
	
		var donnee_param=[];
		data.addColumn('number',param);
		
		for (var k in array_filter)
		if (array_filter.hasOwnProperty(k)) {
					donnee_param.push(k);	 
					data.addColumn('number',k);

			
		}
		
		var tmp2= [];
		var lgr = donnee_param.length;
		var cpt =0;	
		
		var previous = null;
		tab.forEach (function(entry) {
			tmp2 =[];
			tmp2.push(entry);
			for (index = 0; index < lgr; ++index) {
				if(array_filter[donnee_param[index]][entry] != null)
					tmp2.push(array_filter[donnee_param[index]][entry]);
				else
					tmp2.push(array_filter[donnee_param[index]][previous]);
				previous = entry -2;
			}
			tmp[cpt] = tmp2;
			cpt++;
		});
	
		
		data.addRows(tmp);
		var season_fr;
		if (season ==="summer")
			season_fr = "Été";
		else
			season_fr = "Hiver";
		var options = {
        chart: {
          title: 'Nombre de médailles par ' + param,
          subtitle: 'en ' + season_fr,
          legend: { position: 'bottom' }


        },
        width: 1200,
        height: 700
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, options);
	  

    }
