const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/museum.json');
const image = require('./img/img.json');

app.get("/", function(request, response){
 response.render("home", {
   museum: data.kunstwerken,
   een: image.een,
   twee: image.twee,
   drie: image.drie
 });
});

app.get("/home", function(request, response){
 response.render("home", {
   museum: data.kunstwerken,
   een: image.een,
   twee: image.twee,
   drie: image.drie
 });
});

app.get("/contact", function(request, response){
 response.render("contact", {
   museum: data.kunstwerken,
   icoon1: image.icoon1,
   icoon2: image.icoon2
 });
});

app.get("/img1p", function(request, response){
 response.render("img1p", {
   museum: data.kunstwerken,
   een: image.een
 });
});

app.get("/img2p", function(request, response){
 response.render("img2p", {
   museum: data.kunstwerken,
   twee: image.twee
 });
});

app.get("/img3p", function(request, response){
 response.render("img3p", {
   museum: data.kunstwerken,
   drie: image.drie
 });
});

app.get("/img4p", function(request, response){
 response.render("img4p", {
   museum: data.kunstwerken,
   vier: image.vier
 });
});

app.get("/img5p", function(request, response){
 response.render("img5p", {
   museum: data.kunstwerken,
   vijf: image.vijf
 });
});

app.get("/img6p", function(request, response){
 response.render("img6p", {
   museum: data.kunstwerken,
   zes: image.zes
 });
});

app.get("/img7p", function(request, response){
 response.render("img7p", {
   museum: data.kunstwerken,
   zeven: image.zeven
 });
});

app.get("/img8p", function(request, response){
 response.render("img8p", {
   museum: data.kunstwerken,
   acht: image.acht
 });
});

app.get("/img9p", function(request, response){
 response.render("img9p", {
   museum: data.kunstwerken,
   negen: image.negen
 });
});

app.get("/img10p", function(request, response){
 response.render("img10p", {
   museum: data.kunstwerken,
   tien: image.tien
 });
});

app.get("/img11p", function(request, response){
 response.render("img11p", {
   museum: data.kunstwerken,
   elf: image.elf
 });
});

app.get("/img12p", function(request, response){
 response.render("img12p", {
   museum: data.kunstwerken,
   twaalf: image.twaalf
 });
});

app.get("/img13p", function(request, response){
 response.render("img13p", {
   museum: data.kunstwerken,
   dertien: image.dertien
 });
});

app.get('/work', function(req, res){
  res.render('work', {
    museum: data.kunstwerken,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien,
    elf: image.elf,
    twaalf: image.twaalf,
    dertien: image.dertien
  });
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));
