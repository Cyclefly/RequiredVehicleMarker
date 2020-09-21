// ==UserScript==
// @name         RequiredVehicleMarker
// @version      0.3
// @description  Hebt die AAO-Buttons zur Alarmierung eines Fahrzeuges entsprechenden Types im Einsatzfenster hervor, wenn verfügbar. AAO_IDs muessen zuvor eingegeben werden.
// @author       Cyclefly
// @include      *://www.leitstellenspiel.de/missions/*
// @updateURL    https://github.com/Cyclefly/RequiredVehicleMarker/raw/main/RequiredVehicleMarker.user.js
// ==/UserScript==
var vehMiss = document.getElementById("missing_text").textContent;
function colorButt(aaoID){
	if($("#available_aao_"+aaoID+" > span")[0].classList.contains("glyphicon-ok")){
		document.getElementById("aao_"+aaoID).style.border = "3px solid black"; //UMRANDUNG HIER ANPASSEN, z.B. '4px solid red'
	};
};


//ANLEITUNG:
//NICHT VORHANDENE FAHRZEUGE AUSKOMMENTIEREN UND RESTLICHE MIT AAO ID VERSEHEN
//BEISPIEL:
//if(vehMiss.includes("FAHRZEUGTEXT")){colorButt(AAO_ID);}
//MIT:
//FAHRZEUGTEXT: TEXT DES FAHRZEUGES UNTER 'Zusätzlich benötigte Fahrzeuge'
//AAO_ID: SIEHE Strg+Klick AUF AAO EINTRAG DES FAHRZEUGES
//Beispiel 1 - Spieler ersetzt ELW1 durch ELW2:
//if(vehMiss.includes("ELW 2") || vehMiss.includes("ELW 1")){colorButt(12345678);}
//Beispiel2 - SEK / MEK Fahrzeug benoetigt, sowohl ZF als auch MTF moeglich:
//if(vehMiss.includes("SEK-Fahrzeuge")){colorButt(12345678);colorButt(12345679);} 


//Feuerwehr//
if(vehMiss.includes("l. Wasser")){colorButt(12345678);} //Loeschfahrzeuge, z.B.TLF
if(vehMiss.includes("Feuerwehrleute")){colorButt(12345678);} //z.B: MTW
if(vehMiss.includes("Löschfahrzeug")){colorButt(12345678);}
if(vehMiss.includes("Drehleiter")){colorButt(12345678);}
if(vehMiss.includes("FwK")){colorButt(12345678);}
if(vehMiss.includes("GW-A")){colorButt(12345678);}
if(vehMiss.includes("GW-Öl")){colorButt(12345678);}
if(vehMiss.includes("Schlauchwagen")){colorButt(12345678);}
if(vehMiss.includes("ELW 1")){colorButt(12345678);}
if(vehMiss.includes("ELW 2")){colorButt(12345678);}
if(vehMiss.includes("Rettungstreppe")){colorButt(12345678);}
if(vehMiss.includes("GW-Werkfeuerwehr")){colorButt(12345678);}
if(vehMiss.includes("Turbolöscher")){colorButt(12345678);}
if(vehMiss.includes("Teleskopmast")){colorButt(12345678);}
if(vehMiss.includes("Dekon-P")){colorButt(12345678);}
if(vehMiss.includes("GW-Messtechnik")){colorButt(12345678);}
if(vehMiss.includes("GW-Gefahrgut")){colorButt(12345678);}
if(vehMiss.includes("GW-Höhenrettung")){colorButt(12345678);}
if(vehMiss.includes("ULF")){colorButt(12345678);}
if(vehMiss.includes("Flugfeldlöschfahrzeuge")){colorButt(12345678);}
if(vehMiss.includes("Rettungstreppe")){colorButt(12345678);}
if(vehMiss.includes("GW-Taucher")){colorButt(12345678);}


//Polizei
if(vehMiss.includes("SEK-Fahrzeuge")){colorButt(12345678);colorButt(12345678);} //ZF / MTF
if(vehMiss.includes("MEK-Fahrzeuge")){colorButt(12345678);colorButt(12345678);} //ZF / MTF
if(vehMiss.includes("FuStW")){colorButt(12345678);}
if(vehMiss.includes("Polizeihubschrauber")){colorButt(12345678);}
if(vehMiss.includes("GruKw")){colorButt(12345678);}
if(vehMiss.includes("FüKw")){colorButt(12345678);}
if(vehMiss.includes("leBefKw")){colorButt(12345678);}
if(vehMiss.includes("Wasserwerfer")){colorButt(12345678);}


//THW
if(vehMiss.includes("Gerätekraftwage")){colorButt(12345678);}
if(vehMiss.includes("THW-Einsatzleitung")){colorButt(12345678);}
if(vehMiss.includes("THW-Mehrzweckkraftwagen")){colorButt(12345678);}
if(vehMiss.includes("Radlader")){colorButt(12345678);}
if(vehMiss.includes("Anhänger Drucklufterzeugung")){colorButt(12345678);}
if(vehMiss.includes("LKW Kipper")){colorButt(12345678);}


//Rettung
if(vehMiss.includes("Rettungshundestaffel")){colorButt(12345678);}
//if(vehMiss.includes("")){colorButt(12345678);}
