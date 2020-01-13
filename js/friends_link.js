
var sites = [
    'https://jasonqsy.github.io/',
    'https://yangych29.github.io',
    'https://jinlinyi.github.io/',
    'https://w-yi.github.io/',
    'https://tc-imba.github.io',
    'https://sannndy0000.github.io/',
    'https://niceirene.github.io/',
    'https://web.eecs.umich.edu/~chshibo/',
    'https://shengpu1126.github.io/',
    'https://yifanguan.github.io/',
    'https://xingjunjie.me/blog/',
    'http://www-personal.umich.edu/~pujat/',
    'https://abuyukcakir.github.io/',
    'https://quickshift.xyz/',
    'https://ducbui.io/',
    'https://c-t-a.me/',
    'https://ificl.github.io/#',
    'https://pyjhzwh.github.io/'
];
function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    window.location.href = sites[i];
}