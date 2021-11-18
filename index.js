const express = require('express'); //Impordime express serveri mooduli
const app = express(); // Teeme rakenduse
const path = require('path'); // Kaustade "liitmiseks"
const myfuncs = require('./helpers/myfuncs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // GET jaoks

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

const data = require('./ExportJson.json');

/** Avaleht */
app.get('/', (req, res) => {
    res.render('sheets/home.ejs', {data, myfuncs});
});

/** Detailse info vaatamine */
app.get('/sheets/:id', (req, res) => {
    const { id } = req.params;
    let find = false;
    for (let o of data.objects) {
        if(o.ID === id) {
            find = true;
            const datas = data.objects.find(o=> o.ID === id);
            title = 'Detailne info';
            res.render('sheets/details', {title, datas});
        } 
    } 
    if(find == false) {
        title = 'Error 404';
        res.render('sheets/404details', {title});
    }
});

/** 404 error */
app.get('*', (req, res) =>{
    title = 'Error 404';
    res.render('sheets/404', {title});
});

// Serveri käivitamine pordil 3000
app.listen(3000, () => {
    console.log("Kuulan porti 3000");    
});