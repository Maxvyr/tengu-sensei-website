//variable
const _linkAppStore = "https://apps.apple.com/fr/app/tengu-sensei/id1558435052";
const _linkPlayStore = "https://play.google.com/store/apps/details?id=com.pandamy.tengu_sensei";

const showStore = (store) => {
    if(store === true){
        window.open(_linkAppStore, '_blank');
    } else {
        window.open(_linkPlayStore, '_blank');
    }
}

const instaLink = () => {
    window.open("https://www.instagram.com/tengusensei_/", '_blank');
}

const showYear = () => {
    let _year = new Date().getFullYear();
    return _year;
}


document.body.innerHTML = document.body.innerHTML.replace("@date", showYear());