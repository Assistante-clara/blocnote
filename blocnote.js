exports.action = function(data){
var req ={ query :  {reco : ClaraIANom+" "+ClaraIA.reco ,confidence : ClaraIA.ipappel } }
var request = require('request');path = require('path');
var fs = require('fs');

try{
	var tempstorage = path.resolve('%CD%', './plugins/blocnote/tempstorage.json').replace('\\%CD%', '');
	var contents	=fs.readFileSync(tempstorage,'utf8')
}catch(err){var contents=[]}



if((data.blocnotedata==undefined)&&(data.blocnotelecture==undefined)){

		     		console.log(" question ")

console.log(contents)
console.log(ClaraIA.reco)
try{
var temp=ClaraIA.reco
console.log(temp," recu en reco")
var testphrase = require(path.resolve('%CD%', './plugins/yoda/testphrase').replace('\\%CD%', '')) ;
var resultatsreco=testphrase(temp)
var tableau=[]
var result = [];

resultatsreco.forEach((car, index) => car === ' nom ' ? result.push(resultatsreco[index-1]) : null)
console.log(result," result phrase recu")
}catch(err){console.log(err)}


var contents=JSON.parse(contents)
var conteur=0

for(var i=0;i<contents.length;i++){

console.log(contents[i],' les phrases du json')
var resultatscontents=testphrase(contents[i])

var result1 = [];
resultatscontents.forEach((car, index) => car === ' nom ' ? result1.push(resultatscontents[index-1]) : null)
console.log(result1," result1 de la phrase json")


var result2 = [];
for(var j=0;j<result.length;j++){
result1.forEach((car, index) => car === result[j] ? result2.push("1") : null)
}console.log(result2,' result2 à t"on trouvé'," ",contents[i])
if(result2.length>0){ClaraIASpeech("tu m'as dit "+contents[i]);conteur++;return}
if( (result2.length<1)&&(j==result.length-1) ){ClaraIASpeech("tu ne m'a rien dit ");conteur++;return}
}
var tempo2=path.resolve('%CD%',"./script/traitement.js").replace('\\%CD%', '')
		     		var temp = require(tempo2);
console.log(req," !!!!!!!!!!!!!!!!!")
					return
}

if(data.blocnotelecture=="0"){
	ClaraIASpeech("j'efface")
	var	contents=[]
	var contents=JSON.stringify(contents)
	fs.writeFile(tempstorage,contents.toString(), (err, result) => {
   	  if(err) console.log('error', err);
   	});
	return
}

+var contents = JSON.parse(contents);var longueur = contents	.length;var jsonStr = JSON.stringify(contents	);
console	.log(contents)

if(data.blocnotelecture=="1"){
	console.log('lecture'+contents	)
	ClaraIASpeech(longueur+" mémos ; " +contents)
	return
}

try{
var reco=ClaraIA.reco
var reg = "/"+data.blocnotedata+"(.+)/i" ; var rgxp=eval(reg) ; var temp = reco.match(rgxp); console.log(temp);var phraseBlocnote =temp[1].trim()
console.log(phraseBlocnote+" valeur à sauvegarder"+tempstorage	)

ClaraIASpeech('je prends en note')
contents.push(phraseBlocnote)
console	.log(contents	)
var contents	 = JSON.stringify(contents	);
	fs.writeFile(tempstorage,contents.toString(), (err, result) =>{
    	 if(err) console.log('error', err);
    });
}catch	(err){console	.log(err)}

return false

}