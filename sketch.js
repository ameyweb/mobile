var input;
var Bingbutton, Googlebutton, Yandexbutton, AskButton, AolButton;
var DuckDuckGoButton, GooButton;
var LycosButton, DaumKakaoButton, ExciteButton;
var asImg, as;
var NaverButton, EcosiaButton;
var YahooButton, ExaleadButton;
var WallaButton, WebCrawlerButton;
var MetaButton, EgerinButton, MojeekButton, LeitButton;


function preload(){
asImg = loadImage("ameysearcher.png");

    
}

function setup() {
    createCanvas(windowWidth,windowHeight);


    input = createInput("","text");
    input.position(5,300);
    input.class("input");

    Bingbutton = createButton("Bing Search");
    Bingbutton.position(5, input.y +150);
    Bingbutton.mouseClicked(bing);
    Bingbutton.class("button");
   
    Googlebutton = createButton("Google Search");
    Googlebutton.position(5,Bingbutton.y + 150);
    Googlebutton.mouseClicked(google);
    Googlebutton.class("button")

    Yandexbutton = createButton("Yandex Search");
    Yandexbutton.position(5, Googlebutton.y+150);
    Yandexbutton.mouseClicked(yandex);
    Yandexbutton.class("button")

    AskButton = createButton("Ask Search");
    AskButton.position(5,Yandexbutton.y +150);
    AskButton.mouseClicked(ask);
    AskButton.class("button")




    DuckDuckGoButton = createButton("DuckDuckGo Search");
    DuckDuckGoButton.position(5, AskButton.y + 150);
    DuckDuckGoButton.mouseClicked(duckduckgo);
    DuckDuckGoButton.class("button")

    AolButton = createButton("Aol Search");
    AolButton.position(5,DuckDuckGoButton.y + 150);
    AolButton.mouseClicked(aol);
    AolButton.class("button")

    NaverButton = createButton("Naver Search");
    NaverButton.position(5, DuckDuckGoButton.y+300);
    NaverButton.mouseClicked(naver);
    NaverButton.class("button");

    GooButton = createButton("Goo Search");
    GooButton.position(5, NaverButton.y +150);
    GooButton.mouseClicked(goo);
    GooButton.class("button")

    LycosButton = createButton("Lycos Search");
    LycosButton.position(5, GooButton.y+150);
    LycosButton.mouseClicked(lycos);
    LycosButton.class("button")

    DaumKakaoButton = createButton("Daum Kakao Search");
    DaumKakaoButton.position(5,LycosButton.y+150);
    DaumKakaoButton.mouseClicked(daumkakao);
    DaumKakaoButton.class("button")

    ExciteButton = createButton("Excite Search");
    ExciteButton.position(5, DaumKakaoButton.y+ 150);
    ExciteButton.mouseClicked(excite);
    ExciteButton.class("button")

    EcosiaButton = createButton("Ecosia Search");
    EcosiaButton.position(5,ExciteButton.y+150);
    EcosiaButton.mouseClicked(ecosia);
    EcosiaButton.class("button");

    YahooButton = createButton("Yahoo Search");
    YahooButton.position(5,EcosiaButton.y+150);
    YahooButton.mouseClicked(yahoo);
    YahooButton.class("button");

    ExaleadButton = createButton("Exalead Search");
    ExaleadButton.position(5,YahooButton.y + 150);
    ExaleadButton.mouseClicked(exalead);
    ExaleadButton.class("button");

    WallaButton = createButton("Walla! Search");
    WallaButton.position(5, ExaleadButton.y + 150);
    WallaButton.mouseClicked(walla);
    WallaButton.class("button");

    WebCrawlerButton = createButton("Web Crawler Button");
    WebCrawlerButton.position(5,WallaButton.y + 150);
    WebCrawlerButton.mouseClicked(webcrawler);
    WebCrawlerButton.class("button");

    MetaButton = createButton("Meta Crawler Search");
    MetaButton.position(5,WebCrawlerButton.y + 150);
    MetaButton.mouseClicked(metacrawler);
    MetaButton.class("button");

    EgerinButton = createButton("Egerin Search");
    EgerinButton.position(5,MetaButton.y + 150);
    EgerinButton.mouseClicked(egerin);
    EgerinButton.class("button");

    MojeekButton = createButton("Mojeek Search");
    MojeekButton.position(5,EgerinButton.y + 150);
    MojeekButton.mouseClicked(mojeek);
    MojeekButton.class("button");

    LeitButton = createButton("Leit Search");
    LeitButton.position(5,MojeekButton.y + 150);
    LeitButton.mouseClicked(leit);
    LeitButton.class("button");


    

    


}

function draw() {
    imageMode(CENTER);
    image(asImg,width/2,150,280,280);
    textSize(15)

}

function bing(){
    window.open("https://www.bing.com/search?q="+input.value())
}

function google(){
    window.open("https://www.google.com/search?q="+input.value())
}

function yandex(){
    window.open("https://yandex.com/search/?text="+input.value())
}

function ask(){
    window.open("https://www.ask.com/web?q="+input.value())
}

function aol(){
    window.open("https://search.aol.com/aol/search?q="+input.value())
}

function duckduckgo(){
    window.open("https://duckduckgo.com/?q="+input.value())
}

function goo(){
    window.open("https://search.goo.ne.jp/web.jsp?MT="+input.value())
}

function lycos(){
    window.open("https://search.lycos.com/web/?q="+input.value());
}

function daumkakao(){
    window.open("https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q="+input.value());
}

function excite(){
    window.open("https://results.excite.com/serp?q="+input.value())
}

function naver(){
    window.open("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+input.value())
}

function ecosia(){
    window.open("https://www.ecosia.org/search?method=index&q="+input.value())
}

function yahoo(){
    window.open("https://search.yahoo.com/search?q="+input.value());
}

function exalead(){
    window.open("https://www.exalead.com/search/web/results/?q="+input.value());
}

function walla(){
    window.open("https://search.walla.co.il/?q="+input.value());
}

function webcrawler(){
    window.open("https://www.webcrawler.com/serp?q="+input.value());
}
function metacrawler(){
    window.open("https://www.metacrawler.com/serp?q="+input.value());
}
function egerin(){
    window.open("https://egerin.com/search/?type=Web&start=0&image_size=&image_color=&image_date=&load_more=&q="+input.value());
}
function mojeek(){
    window.open("https://www.mojeek.com/search?q="+input.value());
}
function leit(){
    window.open("http://leit.is/leita?utf8=%E2%9C%93&search="+input.value());
}