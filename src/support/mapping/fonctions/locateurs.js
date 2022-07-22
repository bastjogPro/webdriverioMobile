const fs = require('fs');
const path = require('path');

function findInDir(dir, filter, fileList = []) {
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
        const filePath = path.join(dir, file)
        const fileStat = fs.lstatSync(filePath)

        if (fileStat.isDirectory()) {
            findInDir(filePath, filter, fileList)
        } else if (filter.test(filePath)) {
            fileList.push(filePath)
        }
    });

    return fileList;
}

//Recuperation du locateur a partir de l'alias
export default function getLocateur(alias) {
    var mappingFilesDir = "src/support/mapping/locateurs";
    var mappingFiles = findInDir(mappingFilesDir, /\.json$/);
    var locateur = "";
    mappingFiles.some(function (mappingFile) {
        var JSONContent = JSON.parse(fs.readFileSync(mappingFile, "utf8"));
        if (JSONContent.hasOwnProperty(alias)) {
            locateur = JSONContent[alias];
        }
    });
    if (locateur == '' || locateur == undefined) {
        //console.log("Attention, il est conseille de declarer le locateur "+alias+" via un alias")
        return String(alias);
    } else {
        // Si le locateur debute par un "." -> class
        if (locateur.startsWith(".")) {
            // Si le locateur contient "[" -> plusieurs elements
            if (locateur.includes("[")) {
                var num = locateur.split('[')[1].split(']')[0];
                return 'android=new UiSelector().className("' + String(locateur).split('[')[0].substring(1) + '").instance(' + num + ')';
            }
            else {
                return 'android=new UiSelector().className("' + String(locateur).substring(1) + '")';
            }
        }

        // Si le locateur contient "#" ou ":id/" -> id
        else if (locateur.includes(":id/") || locateur.includes("#")) {
            console.log("test");
            // Si le locateur contient "[" -> plusieurs elements
            if (locateur.includes("[")) {
                var num = locateur.split('[')[1].split(']')[0];
                return 'android=new UiSelector().resourceId("' + String(locateur).split('[')[0].replace("#", "") + '").instance(' + num + ')';
            }
            else {
                return 'android=new UiSelector().resourceId("' + String(locateur).replace("#", "") + '")';
            }
        }

        //Ce code est ajoute pour traiter le cas d'un element a localiser par son Xpath
        
        else if(locateur.length > 15 && (locateur.charAt(0) == "/" || locateur.charAt(1) == "/")) {
            return locateur;
        }

        // Si le locateur contient "~" -> accessibility id
        else if (locateur.includes("~")) {
            return locateur;
        }
        else {
            //Cette modification est faite pour traiter le cas ou il y a plusieurs elements qui ont le meme texte qui sont affiches sur le meme ecran

            // Si le locateur contient "[" -> plusieurs elements
            if (locateur.includes("[")) {
                var num = locateur.split('[')[1].split(']')[0]
                return 'android=new UiSelector().textContains("' + String(locateur).split('[')[0].substring(1) + '").instance(' + num + ')';
            }
            else {
                return 'android=new UiSelector().textContains("' + locateur + '")';
            }

            //return 'android=new UiSelector().textContains("' + locateur + '")';
        }    
    }
}