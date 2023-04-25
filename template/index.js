let express = require(`express`);
let app  = express();

const hbs = require(`hbs`);
app.set(`views`, `views`)
app.set(`view engine`, `hbs`)
let port = 3000;

app.listen(port, function(){
    console.log(`http://localhost:3000/`);
})

app.use(express.static(`public`))


app.get(`/`, function(req,res) {
    res.render(`index`,{
    classh:`image`,
    fullimgclass:`imageh`,
    hrefh:`imageh`,
    text1: `кот задира`,
    image1: `cat.png`,
    text2: `Гордый Орёл`,
    image2: `eagle.png`,
    text3: `Спокойный Слон`,
    image3: `elephant.png`,
    textx: `Мудрая Сова`,
    imagex: `owl.png`,
    text5: `Обидчивая Рыба`,
    image5: `puffer-fish.png`,
    text6: `Трудолюбивый Ленивец`,
    image6: `sloth.png`,
    text7: `Гремучая Змея`,
    image7: `snake.png`})
})

app.get(`/page-cat`,(req,res)=>{
    res.render(`index`,{
        name:`кот задира`,
        fullimage: `cat.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})

app.get(`/page-eagl`,(req,res)=>{
    res.render(`index`,{
        name:`Гордый Орёл`,
        fullimage: `eagle.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})

app.get(`/page-elef`,(req,res)=>{
    res.render(`index`,{
        name:`Спокойный Слон`,
        fullimage: `elephant.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})

app.get(`/page-owl`,(req,res)=>{
    res.render(`index`,{
        name:`Мудрая Сова`,
        fullimage: `owl.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})

app.get(`/page-fish`,(req,res)=>{
    res.render(`index`,{
        name:`Обидчивая Рыба`,
        fullimage: `puffer-fish.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})

app.get(`/page-sloth`,(req,res)=>{
    res.render(`index`,{
        name:`Трудолюбивый Ленивец`,
        fullimage: `sloth.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})

app.get(`/page-snake`,(req,res)=>{
    res.render(`index`,{
        name:`Гремучая Змея`,
        fullimage: `snake.png`,
        fullimgclass:`imageh1`,
        classh:`imageh`,
        hrefh:`href`
    })
})