const select = document.querySelector('select');
const choice = select.value;

let a = document.getElementById("icon_search");

if (choice == 'opt_berlin') {
    a.href = 'https://travel.naver.com/overseas/DEBER187323/city/summary';
} else if (choice == 'opt_newyork') {
    a.href = 'https://travel.naver.com/overseas/USNYC60763/city/summary';
} else if (choice == 'opt_seoul') {
    a.href = 'https://travel.naver.com/overseas/DEBER187323/city/summary';
} else if (choice == 'opt_sydney') {
    a.href = 'https://travel.naver.com/overseas/AUSYD255060/city/summary';
} else if (choice == 'opt_cairo') {
    a.href = 'https://travel.naver.com/overseas/EGCAI294201/city/summary';
};


/* 베를린 */
const berlin = document.getElementsByClassName('berlin');
let berlin_text = document.querySelector('.berlin_text');
let berlin_a = document.querySelector('.berlin_a');
for (let i = 0; i < berlin.length; i++) {
    if (i == 0) {
        berlin[i].addEventListener('click', () => {
            berlin_text.textContent = "기온: 9°C \n 강수확률: 1% \n 습도: 53% \n 풍속: 6m/s";
        });
    } else if (i == 1) {
        berlin[i].addEventListener('click', () => {
            berlin_text.textContent = "67 보통";
        });
    } else if (i == 2) {
        berlin[i].addEventListener('click', () => {
            berlin_text.textContent = "Google News";
            berlin_a.href = "https://www.google.com/search?q=%EB%B2%A0%EB%A5%BC%EB%A6%B0+%EB%89%B4%EC%8A%A4&newwindow=1&sxsrf=APq-WBvq_4npmJ_ZOuApxTt1cPDyeqsSlw:1645690239950&source=lnms&tbm=nws&sa=X&ved=2ahUKEwio7qXx8Zf2AhUIdt4KHRKTA2kQ_AUoAXoECAEQAw&biw=1122&bih=893&dpr=1";
        });
    } else if (i == 3) {
        berlin[i].addEventListener('click', () => {
            berlin_text.textContent = "실시간 확진자";
            berlin_a.href = "https://news.google.com/covid19/map?hl=ko&mid=%2Fm%2F0345h&gl=KR&ceid=KR%3Ako";
        });
    }
}


/* 뉴욕 */
const newyork = document.getElementsByClassName('newyork');
let newyork_text = document.querySelector('.newyork_text');
let newyork_a = document.querySelector('.newyork_a');
for (let i = 0; i < newyork.length; i++) {
    if (i == 0) {
        newyork[i].addEventListener('click', () => {
            newyork_text.textContent = "기온: 16°C \n 강수확률: 15% \n 습도: 80% \n 풍속: 3m/s";
        });
    } else if (i == 1) {
        newyork[i].addEventListener('click', () => {
            newyork_text.textContent = "30 좋음";
        });
    } else if (i == 2) {
        newyork[i].addEventListener('click', () => {
            newyork_text.textContent = "Google News";
            newyork_a.href = "https://www.google.com/search?q=%EB%89%B4%EC%9A%95+%EB%89%B4%EC%8A%A4&newwindow=1&biw=1122&bih=893&tbm=nws&sxsrf=APq-WBstVIYPJzh9rXDxlDgOtp6nSq3sig%3A1645690250634&ei=ij0XYseSJojP-Qar2JC4Cg&ved=0ahUKEwjH_7H28Zf2AhWIZ94KHSssBKcQ4dUDCA0&uact=5&oq=%EB%89%B4%EC%9A%95+%EB%89%B4%EC%8A%A4&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQAzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeOggIABANEAUQHjoICAAQCBANEB5QAFiDCGDwCGgBcAB4AYABygGIAfEFkgEFMC4zLjGYAQCgAQHAAQE&sclient=gws-wiz-news";
        });
    } else if (i == 3) {
        newyork[i].addEventListener('click', () => {
            newyork_text.textContent = "실시간 확진자";
            newyork_a.href = "https://news.google.com/covid19/map?hl=ko&mid=%2Fm%2F02_286&gl=KR&ceid=KR%3Ako";
        });
    }
}


/* 서울 */
const seoul = document.getElementsByClassName('seoul');
let seoul_text = document.querySelector('.seoul_text');
let seoul_a = document.querySelector('.seoul_a');
for (let i = 0; i < seoul.length; i++) {
    if (i == 0) {
        seoul[i].addEventListener('click', () => {
            seoul_text.textContent = "기온: -5°C \n 강수확률: 0% \n 습도: 36% \n 풍속: 3m/s";
        });
    } else if (i == 1) {
        seoul[i].addEventListener('click', () => {
            seoul_text.textContent = "75 보통";
        });
    } else if (i == 2) {
        seoul[i].addEventListener('click', () => {
            seoul_text.textContent = "Google News";
            seoul_a.href = "https://www.google.com/search?q=%EC%84%9C%EC%9A%B8+%EB%89%B4%EC%8A%A4&newwindow=1&biw=1122&bih=893&tbm=nws&sxsrf=APq-WBtuvznfynzEWn6svnn18OefcMFf9Q%3A1645690300978&ei=vD0XYpiIO4WOhwPsvKOgBA&ved=0ahUKEwiY1rKO8pf2AhUFx2EKHWzeCEQQ4dUDCA0&uact=5&oq=%EC%84%9C%EC%9A%B8+%EB%89%B4%EC%8A%A4&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQAzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeUABY6gdgwghoAXAAeAGAAeoBiAGQBJIBBTAuMi4xmAEAoAEBwAEB&sclient=gws-wiz-news";
        });
    } else if (i == 3) {
        seoul[i].addEventListener('click', () => {
            seoul_text.textContent = "실시간 확진자";
            seoul_a.href = "https://news.google.com/covid19/map?hl=ko&mid=%2Fm%2F06qd3&gl=KR&ceid=KR%3Ako";
        });
    }
}


/* 시드니 */
const sydney = document.getElementsByClassName('sydney');
let sydney_text = document.querySelector('.sydney_text');
let sydney_a = document.querySelector('.sydney_a');
for (let i = 0; i < sydney.length; i++) {
    if (i == 0) {
        sydney[i].addEventListener('click', () => {
            sydney_text.textContent = "기온: 21°C \n 강수확률: 49% \n 습도: 98% \n 풍속: 3m/s";
        });
    } else if (i == 1) {
        sydney[i].addEventListener('click', () => {
            sydney_text.textContent = "18 좋음";
        });
    } else if (i == 2) {
        sydney[i].addEventListener('click', () => {
            sydney_text.textContent = "Google News";
            sydney_a.href = "https://www.google.com/search?q=%EC%8B%9C%EB%93%9C%EB%8B%88+%EB%89%B4%EC%8A%A4&newwindow=1&biw=1122&bih=893&tbm=nws&sxsrf=APq-WBsZuYrduGn7bWBH8zMd1X4U_riAeQ%3A1645690411565&ei=Kz4XYu32IdGImgaNhYy4CQ&ved=0ahUKEwituJDD8pf2AhVRhMYKHY0CA5cQ4dUDCA0&uact=5&oq=%EC%8B%9C%EB%93%9C%EB%8B%88+%EB%89%B4%EC%8A%A4&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQAzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzIKCAAQsQMQgwEQQzIECAAQAzIKCAAQsQMQgwEQQzILCAAQgAQQsQMQgwEyCAgAEIAEELEDOgQIABBDOgYIABAHEB5Q0whYzRJg1BNoAHAAeACAAeQDiAG7CJIBBzEuNC40LTGYAQCgAQHAAQE&sclient=gws-wiz-news";
        });
    } else if (i == 3) {
        sydney[i].addEventListener('click', () => {
            sydney_text.textContent = "실시간 확진자";
            sydney_a.href = "https://news.google.com/covid19/map?hl=ko&mid=/m/05fly&gl=KR&ceid=KR:ko";
        });
    }
}


/* 카이로 */
const cairo = document.getElementsByClassName('cairo');
let cairo_text = document.querySelector('.cairo_text');
let cairo_a = document.querySelector('.cairo_a');
for (let i = 0; i < cairo.length; i++) {
    if (i == 0) {
        cairo[i].addEventListener('click', () => {
            cairo_text.textContent = "기온: 24°C \n 강수확률: 2% \n 습도: 26% \n 풍속: 5m/s";
        });
    } else if (i == 1) {
        cairo[i].addEventListener('click', () => {
            cairo_text.textContent = "65 보통";
        });
    } else if (i == 2) {
        cairo[i].addEventListener('click', () => {
            cairo_text.textContent = "Google News";
            cairo_a.href = "https://www.google.com/search?q=%EC%B9%B4%EC%9D%B4%EB%A1%9C+%EB%89%B4%EC%8A%A4&newwindow=1&biw=1122&bih=893&tbm=nws&sxsrf=APq-WBvWQ6axehEK9Plc8DZ4gU0oy7K20Q%3A1645690432515&ei=QD4XYv_qHtTO-QbFzZHACQ&ved=0ahUKEwj_io_N8pf2AhVUZ94KHcVmBJgQ4dUDCA0&uact=5&oq=%EC%B9%B4%EC%9D%B4%EB%A1%9C+%EB%89%B4%EC%8A%A4&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQAzIICAAQBxAKEB4yBggAEAgQHjoGCAAQBxAeUABYywVg9QZoAXAAeAGAAY4BiAGABpIBAzEuNpgBAKABAcABAQ&sclient=gws-wiz-news";
        });
    } else if (i == 3) {
        cairo[i].addEventListener('click', () => {
            cairo_text.textContent = "실시간 확진자";
            cairo_a.href = "https://news.google.com/covid19/map?hl=ko&mid=/m/02k54&gl=KR&ceid=KR:ko";
        });
    }
}