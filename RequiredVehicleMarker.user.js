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


//Feuerwehr
if(vehMiss.includes("l. Wasser")){colorButt(12815015);colorButt(12814826);} //Loeschfahrzeuge, z.B.TLF
if(vehMiss.includes("Feuerwehrleute")){colorButt(12814826);} //z.B: MTW
if(vehMiss.includes("Löschfahrzeug")){colorButt(12814826);}
if(vehMiss.includes("Drehleiter")){colorButt(12814828);}
if(vehMiss.includes("FwK")){colorButt(12814831);}
if(vehMiss.includes("GW-A")){colorButt(12814832);}
if(vehMiss.includes("GW-Öl")){colorButt(12814836);}
if(vehMiss.includes("Schlauchwagen")){colorButt(12814837);}
if(vehMiss.includes("ELW 2") || vehMiss.includes("ELW 1")){colorButt(12814829);}
if(vehMiss.includes("Rettungstreppe")){colorButt(13357463);}
if(vehMiss.includes("GW-Werkfeuerwehr")){colorButt(13327238);}
if(vehMiss.includes("Turbolöscher")){colorButt(13327296);}
if(vehMiss.includes("Teleskopmast")){colorButt(13327239);}
if(vehMiss.includes("Dekon-P")){colorButt(12814827);}
if(vehMiss.includes("GW-Messtechnik")){colorButt(12814835);}
if(vehMiss.includes("GW-Gefahrgut")){colorButt(12814833);}
if(vehMiss.includes("GW-Höhenrettung")){colorButt(12814834);}
if(vehMiss.includes("ULF")){colorButt(13327295);}
if(vehMiss.includes("Flugfeldlöschfahrzeug")){colorButt(13357465);}
if(vehMiss.includes("Rettungstreppe")){colorButt(13357463);}


//Polizei
if(vehMiss.includes("SEK-Fahrzeug")){colorButt(13501899);colorButt(13501900);}
if(vehMiss.includes("MEK-Fahrzeug")){colorButt(13672813);colorButt(13672814);}
if(vehMiss.includes("FuStW")){colorButt(12814841);}
if(vehMiss.includes("Polizeihubschrauber")){colorButt(13405973);}
if(vehMiss.includes("GruKw")){colorButt(13292686);}
if(vehMiss.includes("FüKw")){colorButt(13501901);}
if(vehMiss.includes("leBefKw")){colorButt(13293167);}
if(vehMiss.includes("Wasserwerfer")){colorButt(13561548);}
if(vehMiss.includes("GefKw")){colorButt(13900436);}


//THW
if(vehMiss.includes("Gerätekraftwagen")){colorButt(13714271);}
if(vehMiss.includes("THW-Einsatzleitung")){colorButt(13915076);}
if(vehMiss.includes("THW-Mehrzweckkraftwagen")){colorButt(13915072);}
if(vehMiss.includes("Radlader")){colorButt(14324897);}
if(vehMiss.includes("Anhänger Drucklufterzeugung")){colorButt(14389321);}
if(vehMiss.includes("LKW Kipper")){colorButt(14324893);}


//Rettung
//if(vehMiss.includes("")){colorButt();}
