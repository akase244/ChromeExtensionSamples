var getRand = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
switch(location.host) {
    case 'www.google.co.jp':
    case 'www.google.com':
        var urls = [
            'http://www.goo.ne.jp/',
            'http://www.bing.com/',
            'http://www.baidu.jp/',
            'http://www.baidu.com/',
            'http://www.daum.net/',
            'http://www.yandex.com/',
            'http://www.soso.com/',
            'http://www.naver.com/',
        ];
        location.href = urls[getRand(0, urls.length)];
        break;
    default:
}
