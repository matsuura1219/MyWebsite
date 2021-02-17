/* 変数の定義 */

/* DOM操作用 */

//menu_icon
var menu_icon = document.getElementsByClassName("menu_icon")[0];
//bodyタグ
var body = document.getElementsByTagName("body")[0];
//overlay
var overrlay = document.getElementsByClassName("overlay")[0];
//矢印アイコン
var arrows = document.getElementsByClassName("arrow-button");

//各menu_bar
var menu_bar1 = document.getElementsByClassName("menu_bar1")[0];
var menu_bar2 = document.getElementsByClassName("menu_bar2")[0];
var menu_bar3 = document.getElementsByClassName("menu_bar3")[0];

//文字アニメーション
var chr = document.getElementById("typewriter");

//オーバレイ表示中に表示する文字（ナビゲーション）
var home = document.getElementById("home");
var about = document.getElementById("about");
var research = document.getElementById("research");
var profile = document.getElementById("profile");
var portfolio = document.getElementById("portfolio");

//詳細画面（オーバーレイ）の閉じるボタン（配列）
var close_btn = document.getElementsByClassName("close");

//各「MORE」ボタンの配列
var btn = document.getElementsByClassName("btn");

//オープニング画面
var opening = document.getElementsByClassName("opening")[0];

//各画面の配列
var content = document.getElementsByClassName("swiper-container");

//詳細画面を表示する画面の配列
var detail_page = document.getElementsByClassName("detail_fadein");

/* 条件分岐のための変数う */

//ハンバーガメニューが押されたかどうかを判定するフラグ（初期値はfalse=開いていない）
var open = false;

//各画面における、詳細画面を開いているかを判定するフラグ
var detail = [false, false, false, false, false];

//表示しているページの位置
var current_position = 1;



/* 定数の定義 */

//各ページの位置
const home_position = 1;
const about_position = 2;
const profile_position = 3;
const research_position = 4;
const portfolio_position = 5;

//アニメーションする文字の高さ
const height_chr = 50;
//最初に表示する文章
const message1 = "Hello Everyone";
//最後に表示する文章
const message2 = "My Name Is Yuki Matsuura";

//アニメーション開始時間
const startDelay = 200;
//タイプの時間
const typeSpeed = 100;
//戻りの時間
const backSpeed = 80;
//戻る際の遅延時間
const backDelay = 150;
//フェードアウトの時間
const fade_out_time = 1000;

/* Swiper実行処理 */

//Swiperの実装関数
var mySwiper = new Swiper('.swiper-container', {

    /* エフェクトの定義 */
    effect: 'cube',
    //ページングをループさせるかどうか
    loop: true,
    //アニメーション時間
    speed: 1000,
    //矢印ボタンの設定
    navigation: {
        //次へボタンのセレクタ名
        nextEl: '.swiper-button-next',
        //前へボタンのセレクタ名
        prevEl: '.swiper-button-prev'
    },

    //インジケータの設定
    pagination: {
        //セレクタ名
        el: '.swiper-pagination',
        //bullets,fraction,progressbar,customeから選択可能
        type: 'bullets',
        //クリックできるかどうか
        clickable: false
    }
});


/* 関数 */

//ハンバーガアイコンを変形するメソッドです
function changeShape() {
    //cssのクラスを各バーに適用します
    menu_bar1.classList.add("menu_bar1_active");
    menu_bar2.classList.add("menu_bar2_active");
    menu_bar3.classList.add("menu_bar3_active");
}

//ハンバーガアイコンを元に戻すするメソッドです
function restoreShape() {
    //cssのクラスを各バーから排除します
    menu_bar1.classList.remove("menu_bar1_active");
    menu_bar2.classList.remove("menu_bar2_active");
    menu_bar3.classList.remove("menu_bar3_active");
}

//ナビゲーションを表示するオーバーレイを行う関数です
function showOverlay() {
    overrlay.classList.add("overlay_off");
}

//ナビゲーションを表示するオーバーレイを解除する関数です
function removeOverlay() {
    overrlay.classList.remove("overlay_off");
}

//文字アニメーションの位置を変更する関数です
function layoutChr() {

    //topを計算します
    let height_screen = opening.clientHeight;
    //文字の高さを考慮したtopを算出します
    let top = (height_screen - height_chr) / 2;
    chr.style.top = top + 'px';
}

//文字にアニメーションをつけるメソッド
function animationText() {

    ityped.init(document.querySelector("#typewriter"), {
        //表示させたい文字の設定 区切りはカンマ 
        strings: [message1, message2],
        //アニメーション開始までの遅延、大きいほど遅れる
        startDelay: startDelay,
        //表示させるスピード、大きいほどゆっくり
        typeSpeed: typeSpeed,
        //ループ
        loop: false,
        //戻るスピード
        backSpeed: backSpeed,
        //戻る時間指定
        backDelay: backDelay,
        //カーソル表示
        showCursor: false,
    })
}

//オープニング画面を非表示にする関数です
function removeOpening() {

    opening.classList.add("fadeout");
    opening.style.zIndex = 10;

    //Opening用の要素を1s後に削除
    setTimeout(() => {
        opening.remove();
    }, 1000);

}


//詳細画面を表示にする関数です
function showDetail(page, e) {

    console.log(page);

    if (!detail[page]) {
        //詳細画面が開いていない場合
        detail_page[page].classList.add("is-open");

        detail[page] = true;

        on_event(page, detail_page);

    }
}

//詳細画面を非表示にする関数です
function removeDetail(page) {

    if (detail[page]) {
        //詳細画面が開いてる場合
        detail_page[page].classList.remove("is-open");

        detail[page] = false;
    }
}

//スワイプ時に処理する関数です
function viewContent(position) {
    current_position = position;
}

//メニューアイコンをマウスオーバーした時の関数です
function changeColor() {

    menu_bar1.classList.add("menu_icon_animate");
    menu_bar2.classList.add("menu_icon_animate");
    menu_bar3.classList.add("menu_icon_animate");
}


//メニューアイコンからマウスが離れたときの関数です
function restoreColor() {
    menu_bar1.classList.remove("menu_icon_animate");
    menu_bar2.classList.remove("menu_icon_animate");
    menu_bar3.classList.remove("menu_icon_animate");
}

function myHandler(e) {
    e.preventDefault();
}

function on_event(page, el) {
    el[page].addEventListener("click", myHandler, false)
}

function off_event(page, el) {
    el[page].removeEventListener("click", myHandler, false)
}

//詳細画面を表示する際にハンバーガーメニューと矢印アイコンを非表示にします
function hideIcon() {

    //ハンバーガーメニューを隠します
    menu_icon.style.display = "none";
    //矢印アイコンを隠します
    for (let i = 0; i < 2; i++) {
        arrows[i].style.display = "none";
    }


}

//詳細画面を表示する際にハンバーガーメニューと矢印アイコンを表示します
function showIcon() {


    //ハンバーガーメニューを表示します
    menu_icon.style.display = "block";
    //矢印アイコンを表示します
    for (let i = 0; i < 2; i++) {
        arrows[i].style.display = "block";
    }
}

/* イベント処理 */

//menu_iconを押したときに実行されるメソッドです
menu_icon.addEventListener("click", function() {

    if (open) {
        //ハンバーガメニューが押下されていない場合
        //ハンバーガアイコンを変形します
        restoreShape();
        removeOverlay();
        open = false;

    } else {
        //ハンバーガメニューの形状を変更します
        //ハンバーガアイコンを元に戻します
        changeShape();
        showOverlay();
        open = true;
    }

});

//menu_iconがマウスオーバーしたとき
menu_icon.addEventListener("mouseover", () => {
    changeColor();
});


//menu_iconからマウスが離れたしたとき
menu_icon.addEventListener("mouseout", () => {
    restoreColor();
});



//オーバーレイ(ナビゲーションあり)表示の際に、画面をクリックすると、解除します
overrlay.addEventListener("click", function() {
    overrlay.classList.remove("overlay_off");
    restoreShape();
    open = false;
})

//スワイプしたときに呼び出されるコールバック関数です
mySwiper.on("slideChange", function() {
    //スワイプする画面のページ数を引数にします
    viewContent(mySwiper.realIndex + 1);
});


//オーバーレイ時のhomeをクリックしたときの処理です
home.addEventListener("click", function() {

    if (current_position != home_position) {
        //現在のページがhomeでない場合
        mySwiper.slideTo(home_position);
    }
})

//オーバーレイ時のaboutをクリックしたときの処理です
about.addEventListener("click", function() {

    if (current_position != about_position) {
        //現在のページがaboutでない場合
        mySwiper.slideTo(about_position);
    }
})

//オーバーレイ時のresearchをクリックしたときの処理です
research.addEventListener("click", function() {

    if (current_position != research_position) {
        //現在のページがresearchでない場合
        mySwiper.slideTo(research_position);
    }
})

//オーバーレイ時のprofileをクリックしたときの処理です
profile.addEventListener("click", function() {

    if (current_position != profile_position) {
        //現在のページがprofileでない場合
        mySwiper.slideTo(profile_position);
    }
})


//オーバーレイ時のportfolioをクリックしたときの処理です
portfolio.addEventListener("click", function() {

    if (current_position != portfolio_position) {
        //現在のページがportfolioでない場合
        mySwiper.slideTo(portfolio_position);
    }
})



//「MORE」ボタンを押したとき
for (let i = 0; i <= 4; i++) {

    //console.log(btn[i]);
    btn[i].addEventListener("click", (e) => {

        off_event(i, btn);
        //home画面は「MORE」ボタンがない
        //また、1ページ目を1と定義しているため、+2する
        showDetail(i, e);

        ////////////////////////////////////
        //ハンバーガーメニューを非表示にします
        hideIcon();
        ////////////////////////////////////
    });
}


//詳細画面の×ボタンを押したとき
for (let i = 0; i <= 4; i++) {
    close_btn[i].addEventListener("click", () => {

        off_event(i, close_btn);

        removeDetail(i);

        ////////////////////////////////////
        //ハンバーガーメニューを表示します
        showIcon();
        ////////////////////////////////////
    });
}


//loadされたときに呼ばれる処理です
window.onload = function() {

    //文字の位置を中央に寄せます
    layoutChr();
    //文字アニメーションを表示します
    animationText();

    //最初のメッセージの文字数
    const message1_count = message1.length;
    //次のメッセージの文字数
    const message2_count = message2.length;



    //本番用

    //アニメーション開始時間
    const startDelay = 200;
    //タイプの時間
    const typeSpeed = 100;
    //戻りの時間
    const backSpeed = 80;
    //戻る際の遅延時間
    const backDelay = 150;
    const fade_out_time = 1000;

    //100msをマージンに設定しています
    //フェードアウトさせる時間
    const delay1 = startDelay + message1_count * typeSpeed + message1_count * backSpeed + backDelay + startDelay + message2_count * typeSpeed + message2_count * backSpeed + 100;
    //openingタグを削除する時間
    const delay2 = delay1 + fade_out_time;


    /*
    //テスト用
    const delay1 = 10;
    const delay2 = 20;
    */

    //フェードアウトする処理を遅延実行する
    setTimeout("removeOpening()", delay1);

    //Opening用の要素を1s後に削除
    setTimeout(() => {
        opening.remove();
    }, delay2);
}





/*
function button_event() {

    if (show) {

    } else {
        //詳細画面を開いているとき
        //詳細画面を開いていないとき
        //body.classList.add("fade-in-bottom");
        show = true;
        $('.detail_fadein').addClass('is-open');

    }
}

function button_event1() {

    if (show_detail[1]) {

    } else {
        //詳細画面を開いているとき
        //詳細画面を開いていないとき
        //body.classList.add("fade-in-bottom");
        show_detail[1] = true;
        $('.detail_fadein').addClass('is-open');

    }
}

close_btn[0].addEventListener("click", function() {

    if (show) {
        show = false;
        $('.detail_fadein').removeClass('is-open');
    }
});

close_btn[1].addEventListener("click", function() {

    if (show_detail[1]) {
        show_detail[1] = false;
        $('.detail_fadein').removeClass('is-open');
    }
});


btn_profile.addEventListener("click", function() {

    button_event();
});

btn_research.addEventListener("click", function() {

    button_event1();
});

*/