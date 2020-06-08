$(function () {
    $('#ajax-button').click(function(){
        $.ajax({
            url:'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data){
                var img_src = data["results"][0]["picture"]["medium"] //画像イメージのURL
                var name = data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"] //名前
                var email = data["results"][0]["email"]
                //console.log(img_src, name, email)

                }
        }).done(function(data){
            var img_src = data["results"][0]["picture"]["medium"] //画像イメージのURL 画像の大きさは["medium"]の部分を["large"]にすれば大きいのが取れます。
            var name = data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"] //名前
            var email = data["results"][0]["email"]

            //.「クラス名」　該当のクラス名をもつタグを(html,attr関数を使用して)書き換える　文字列を書き換えるために`${変数名}`　を使用する
            $('.img_src').attr('src', img_src) //attr で属性の書き換えを行う　※もっといいやり方あるかもしれません
            $('.name').html(`<p>"${name}"</p>`)
            $('.email').html(`<p>${email}</p>`)
            
        }).fail(function(data){
            window.alert('結果を表示できません')
        });
    });
});

/* 
以下の二つを行えばうまく動くと思います。

①上記のjsをhtml側で読み込むために以下を書き加える　※設定していない場合のみ
例：
<html>........
    <script src=「jsファイルのパス」></script>　<---これを書き加える
    .......
</html>

②HTML内の画像,名前,emailを指定しているタグにjsファイルの中で対になっているクラス名を指定してあげる
例：
更新前：
<img src="~~~~~">

更新後：
<img class="クラス名" src="~~~~~">
           このクラス名はjsにおいて「$('.img_src').attr('src', img_src)」で指定した
           「.img_src」のような部分　

----------------------------------以上の二つでたぶん動きます　

html側では 画像、名前、email を出力するタグにクラスを指定する
指定したクラス名に対して以下の処理をすることによりボタンをクリックするたびにhtmlが書き換えられる
※クラス名の指定は次の通り「$('.クラス名')」

処理の部分：
$('.img_src').attr('src', img_src) 
$('.name').html(`<p>"${name}"</p>`)
$('.email').html(`<p>${email}</p>`)

htmlで気をつける点はbootstrapを使っているとajaxが使えないらしいです。
なので、
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
を付け足してajaxを使えるようにしています。



*/