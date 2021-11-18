/** Muudab kuupäeva kujult M/D/YYYY kujule DD.MM.YYY */
function convertDate(strDate) {
    let parts = strDate.split('/');
    let d = (parts[1] <= 9 ? '0' + parts[1] : parts[1]);
    let m = (parts[0] <= 9 ? '0' + parts[0] : parts[0]);
    let y = parts[2];
    return d + '.' + m + '.' + y;
}

/** Tekitab automaatselt e-maili kujul eesnimi.perekonnanimi@ettevõte.com, 
 * kus juhul kui ettevõtte nimi on mitmesõnaline kasutatakse ainult nime esimest sõna*/
function makeEmail(company, fname, lname) {
    if(company != '') {
        this.fname = fname;
        this.lname = lname;
        let d = company.split(' ');
        let domen = d[0];
        return fname.toLowerCase() + '.' + lname.toLowerCase() + '@' + domen.toLowerCase() + '.com';
    }
}

/** Kontrollib, kas elemendi kõik andmeväljad omavad andmeid, kui jah siis tagastab tru, kui ei siis tagastab false*/
function haveAllData(data, i) {
    this.data = data;
    if(data.objects[i].ID != '' && 
        data.objects[i].Firstname != '' && 
        data.objects[i].Lastname != '' &&
        data.objects[i].Gender != '' &&
        data.objects[i].Birthdate != '' &&
        data.objects[i].Country != '' &&
        data.objects[i].Company != '' &&
        data.objects[i].Color != '') {
    return true;
    } else {
        return false;
    }
}

/** Et saaks funktsioone mujal kasutada */
module.exports = {
    convertDate: convertDate,
    makeEmail: makeEmail,
    haveAllData: haveAllData
}