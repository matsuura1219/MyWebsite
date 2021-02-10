//menu_icon
var menu_icon = document.getElementsByClassName("menu_icon")[0];
//bodyタグ
var body = document.getElementsByTagName("body")[0];
//overlay
var overrlay = document.getElementsByClassName("overlay")[0];

//各menu_bar
var menu_bar1 = document.getElementsByClassName("menu_bar1")[0];
var menu_bar2 = document.getElementsByClassName("menu_bar2")[0];
var menu_bar3 = document.getElementsByClassName("menu_bar3")[0];

//表示しているページの位置
var current_position = 1;

//各ページの位置
var about_position = 1;
var profile_position = 2;
var portfolio_position = 3;
var activity_position = 4;

var show_detail = [false, false, false, false];

//オーバレイ表示中に表示する文字（ナビゲーション）
var home = document.getElementById("home");
var about = document.getElementById("about");
var reseach = document.getElementById("research");
var profile = document.getElementById("profile");
var portfolio = document.getElementById("portfolio");

//詳細画面（オーバーレイ）の閉じるボタン（配列）
var close_btn = document.getElementsByClassName("close");
//「MORE」ボタンの配列
var btn = document.getElementsByClassName("btn");
//var btn_profile = document.getElementsByClassName("btn_profile")[0];
//var btn_research = document.getElementsByClassName("btn_research")[0];

//文字アニメーション
var chr = document.getElementById("typewriter");
const height_chr = 50;
const message1 = "Hello Everyone";
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
var fade_out_time = 1000;

//オープニング画面
var opening = document.getElementsByClassName("opening")[0];

//メイン画面
var content = document.getElementsByClassName("swiper-container");
//var main_content = document.getElementsByClassName("swiper-container")[0];

//ハンバーガメニューが押されたかどうかを判定するフラグ（初期値はfalse=開いていない）
var open = false;

//詳細画面を開いているかを判定するフラグ
var detail = false;

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

//オーバーレイ表示する関数です
function showOverlay() {
    overrlay.classList.add("overlay_off");
}

//オーバーレイ表示を解除する関数です
function removeOverlay() {
    overrlay.classList.remove("overlay_off");
}

//オーバー表示の際に、画面をクリックすると、解除します
overrlay.addEventListener("click", function() {
    overrlay.classList.remove("overlay_off");
    restoreShape();
    open = false;

})



//Swiperの実装関数
var mySwiper = new Swiper('.swiper-container', {

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
        clickable: true
    }
});

//スワイプ時に処理する関数です
function viewContent(position) {

    current_position = position;

    switch (position) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            break;
    }

}

//スワイプしたときに呼び出されるコールバック関数です
mySwiper.on("slideChange", function() {
    //スワイプする画面のページ数を引数にします
    viewContent(mySwiper.realIndex + 1);

});

//オーバーレイ時のtitleをクリックしたときの処理です
home.addEventListener("click", function() {

    if (current_position != activity_position) {
        mySwiper.slideTo(activity_position);
    }
})

//オーバーレイ時のtitleをクリックしたときの処理です
about.addEventListener("click", function() {

    if (current_position != about_position) {
        mySwiper.slideTo(about_position);
    }
})

//オーバーレイ時のtitleをクリックしたときの処理です
profile.addEventListener("click", function() {

    if (current_position != profile_position) {
        mySwiper.slideTo(profile_position);
    }
})

//オーバーレイ時のtitleをクリックしたときの処理です
portfolio.addEventListener("click", function() {

    if (current_position != portfolio_position) {
        mySwiper.slideTo(portfolio_position);
    }
})





//オープニング画面を非表示にする関数です
function removeOpening() {

    opening.classList.add("fadeout");
    opening.style.zIndex = 10;

    //Opening用の要素を1s後に削除
    setTimeout(() => {
        opening.remove();
    }, 1000);

}

//文字アニメーションの位置を変更する関数です
function layoutChr() {

    //topを計算します
    let height_screen = opening.clientHeight;
    //文字の高さを考慮したtopを算出します
    let top = (height_screen - height_chr) / 2;
    chr.style.top = top + 'px';
}



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




//loadされたときに呼ばれる処理です
window.onload = function() {

    //文字の位置を中央に寄せます
    layoutChr();
    //文字アニメーションを表示します
    animationText();

    const message = "Hello Everyone Welcome to My Website"

    /*
    //アニメーション開始時間
    const startDelay = 200;
    //タイプの時間
    const typeSpeed = 100;
    //戻りの時間
    const backSpeed = 80;
    //戻る際の遅延時間
    const backDelay = 150;
    fade_out_time = 1000;
    */

    //最初のメッセージの文字数
    const message1_count = message1.length;
    //次のメッセージの文字数
    const message2_count = message2.length;

    //100msをマージンに設定しています
    //フェードアウトさせる時間
    //const delay1 = startDelay + message1_count * typeSpeed + message1_count * backSpeed + backDelay + startDelay + message2_count * typeSpeed + message2_count * backSpeed + 100;
    //openingタグを削除する時間
    //const delay2 = delay1 + fade_out_time;

    //テスト用
    const delay1 = 10;
    const delay2 = 20;

    //フェードアウトする処理を遅延実行する
    setTimeout("removeOpening()", delay1);

    //Opening用の要素を1s後に削除
    setTimeout(() => {
        opening.remove();
    }, delay2);
}

//文字にアニメーションをつけるメソッド
function animationText() {

    ityped.init(document.querySelector("#typewriter"), {
        strings: [message1, message2], //表示させたい文字の設定 区切りはカンマ 
        startDelay: startDelay, //アニメーション開始までの遅延、大きいほど遅れる
        typeSpeed: typeSpeed, //表示させるスピード、大きいほどゆっくり
        loop: false, //ループ
        backSpeed: backSpeed, //戻るスピード
        backDelay: backDelay, //戻る時間指定
        showCursor: false, //カーソル表示
    })

}