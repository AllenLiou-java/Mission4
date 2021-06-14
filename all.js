$(document).ready(function(){

    // 設定hurgar按鈕點擊後的動作
    $(".burgar_extend").on("click", function(e){
        // 點擊 burgar_btn 時，讓原本的 a 連結效果無效
        e.preventDefault();
        
        // 讓瀏覽器知道有點擊 .burgar_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burgar_btn-show
        $("body").toggleClass("burgar_btn-show");
    })


    // 點擊加入購物車按鈕後，出現訊息框
    $("#add-to-cart").on("click",itemAddedMsg);
    // 點擊訊息框後，關閉視窗
    $(".itemAdded").on("click",itemAddedMsgClose);

    // 點擊加入我的收藏按鈕後，出現訊息框
    $("#add-to-collect").on("click",collectedMsg);
    // 點擊訊息框後，關閉視窗
    $(".collectAdded").on("click",collectedMsgClose);

    
    // 顯示已加入購物車訊息
    function itemAddedMsg(){
        $(".itemAdded").addClass("msgShow");
        $("html").addClass("noscroll");
    }

    // 關閉已加入購物車訊息
    function itemAddedMsgClose(){
        $(".itemAdded").removeClass("msgShow");
        $("html").removeClass("noscroll");
    }

    // 顯示已加入收藏訊息
    function collectedMsg(){
        $(".collectAdded").addClass("msgShow");
        $("html").addClass("noscroll");
    }

    // 關閉已加入收藏訊息
    function collectedMsgClose(){
        $(".collectAdded").removeClass("msgShow");
        $("html").removeClass("noscroll");
    }


})