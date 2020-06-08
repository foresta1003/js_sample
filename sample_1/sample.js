$(function () {
    console.log("sample");
    $('#ajax-button').click(function(){
        console.log("click")
        $.ajax({
            url:'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data){
                console.log(data["results"][0]);
                var img_src = data["results"][0]["picture"]["medium"] //画像イメージのURL
                var name = data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"] //名前
                var email = data["results"][0]["email"]
                console.log(img_src, name, email)
                /*
                var data_dic = {
                    img_src : data["results"][0]["email"],
                    name : data["results"][0]["email"],
                    email : data["results"][0]["email"]               
                };
                window.alert(data_dic)
                */

                }
        }).done(function(data){
            var img_src = data["results"][0]["picture"]["medium"] //画像イメージのURL
            var name = data["results"][0]["name"]["first"] + " " + data["results"][0]["name"]["last"] //名前
            var email = data["results"][0]["email"]

            //'.「クラス名」　該当のクラス名をもつタグを関数を使用して書き換える　文字列を書き換えるために${変数名}　を使用する
            $('.img_src').attr('src', img_src)
            $('.name').html(`<p>"${name}"</p>`)
            $('.email').html(`<p>${email}</p>`)
            window.alert(img_src)
            
        }).fail(function(data){
            window.alert('結果を表示できません')
        });
    });
});
