       $("#getting-started").countdown("2016/09/29", function(event) {
         $("#getting-startedD").text(event.strftime('%D'));
         $("#getting-startedH").text(event.strftime('%H'));
         $("#getting-startedM").text(event.strftime('%M'));
         $("#getting-startedS").text(event.strftime('%S'));
       });
       $("#2015").click(function(){
        $(".activeY").removeClass("activeY");
        $(this).addClass("activeY");
            $(".c2016").slideUp("fast", function(){
               $(".c2015").slideDown("slow");
            });
            return false;
       });
       $("#2016").click(function(){
        $(".activeY").removeClass("activeY");
        $(this).addClass("activeY");
            $(".c2015").slideUp("fast", function(){
              $(".c2016").slideDown("slow");
            });
            return false;
       });
       $("#s1").click(function(){
        $(".activeYs").removeClass("activeYs");
        $(this).addClass("activeYs");
            $(".s2").slideUp("fast");
            $(".s1").slideDown("fast");
       });
       $("#s2").click(function(){
        $(".activeYs").removeClass("activeYs");
        $(this).addClass("activeYs");
            $(".s1").slideUp("fast");
            $(".s2").slideDown("fast");
       });
       $("#s2015").click(function(){
        $(".activeYss").removeClass("activeYss");
        $(this).addClass("activeYss");
            $(".speakers2016").slideUp("fast");
            $(".speakers2015").slideDown("fast");
       });
       $("#s2016").click(function(){
        $(".activeYss").removeClass("activeYss");
        $(this).addClass("activeYss");
            $(".speakers2015").slideUp("fast");
            $(".speakers2016").slideDown("fast");
       });
        $("#s16").click(function(){
        $(".activeYs6").removeClass("activeYs6");
        $(this).addClass("activeYs6");
            $(".s26").slideUp("fast");
            $(".s16").slideDown("fast");
       });
       $("#s26").click(function(){
        $(".activeYs6").removeClass("activeYs6");
        $(this).addClass("activeYs6");
            $(".s16").slideUp("fast");
            $(".s26").slideDown("fast");
       });


       $(".sp2015").click(function(){
            var sp15id = $(this).attr('name');
            $(".popback").show(20, function(){
                $(".popup").slideDown('fast');
              });
          $.ajax({
            type: "GET",
            url: "showvideo/"+sp15id,
            success: function(data){
              $(".sp15popvideo").attr('src', data.video);
              $(".popup h1").html(data.description);
              $(".popup p").html(data.full_name);

              setTimeout(function(){
                $(".popup .loadingPop").hide(20, function(){
                  
                    $(".popup .contentPop").slideDown("fast");
                  
                });
              }, 150);

            }
          });
       });
       $(".sp2016").click(function(){
            var sp16id = $(this).attr('name');
            $(".popback").show(20, function(){
                $(".popup2016").slideDown('fast');
            });
          $.ajax({
            type: "GET",
            url: "showinfo/"+sp16id,
            success: function(data){
              $(".popup2016 img").attr('src', data.img_url);
              $(".popup2016 h1").html(data.description);
              $(".popup2016 h2").html(data.full_name);
              $(".popup2016 p").html(data.about);

              setTimeout(function(){
                $(".popup2016 .loadingPop").hide(20, function(){
                  $(".popup2016 .contentPop").slideDown("fast");
                });
              }, 150);

            }
          });
       });


       $(".popback").click(function(){
          $(".contentPop").hide("fast");
          $(".popup").slideUp('fast');
          $(".popup2016").slideUp('fast');
          $(".popback").hide("fast");
          $(".loadingPop").show("fast");
       });
