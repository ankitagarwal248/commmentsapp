// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-datepicker
//= require_tree .

$( document ).ready(function() {
 
    // $("a").click(function(event){
    // 	$(this).hide("slow");
    // 	event.preventDefault();
    	
    // });


    // $("p").css("border", "3px solid red");

    // $("#sayhello").click(function(event){
    // 	alert("Say Hello!!");
    // });

    // $("p").on("click", {foo: "bar"}, function(event){
    // 	alert("event data: is " + event.data.foo);
    // });

    $('#testtip').tooltip({
        title: "title"
    });

    // $('#new_portfolio a').on("click", function(){
    //     $.getScript(this.href);
    //     return false;
    // });
        // $("#loading").hide();

        $( document ).ajaxStart(function() {
            $( "#loading" ).show();
        });
        $( document ).ajaxStop(function() {
            $( "#loading" ).hide();
        });

        $(document).on('click', '#datepicker', function(event){
          $('#datepicker').datepicker({
            format: "dd/mm/yyyy",
            orientation: "top auto",
            todayHighlight: true
          });
        });

        $('#newtradebutton').click(function(){
            $.ajax({
              type: "GET",
              url: "/portfolios/1/trades/new",
              dataType: "script"
            });
        });

        // $('#showtradelink').click(function(){
        //     // $("#showtrades").html("show trades box");
        //     alert("hi");
        //     $.ajax({
        //       type: "GET",
        //       url: "/portfolios/1/trades/1",
        //       dataType: "script"
        //     });
        //  });
        
        
            // $.ajax({
            //   type: "GET",
            //   url: "/portfolios/1",
            //   dataType: "script",
            //   beforeSend : function(){
            //     $('#showportfolio').show().html("loading...");
            //     }
            // });

            // $.ajax({
            //   type: "GET",
            //   url: "/portfolios/1/trades",
            //   dataType: "script",
            //   beforeSend : function(){
            //     $('#showtrades').show().html("loading...");
            //     }
            // });



        $(document).on("click", "#showtradelink", function(){
            // $("#showtrades").html("show trades box");
            alert("hi");
            $.ajax({
              type: "GET",
              url: this.href,
              dataType: "script",
              beforeSend : function(){
                $('#showtrades').show().html("loading...");
                }
            });
            return false;
         });


        $(document).on("click", "#newtradelink", function(){
            // $("#showtrades").html("show trades box");
            alert("hi");
            $.ajax({
              type: "GET",
              url: this.href,
              dataType: "script"
            });
            return false;
         });


        $('#showtradesbutton').on('ajax:beforeSend', function(event, xhr, settings) {
          $("#loading").show();
        });

        

        $("#showtradesbutton").on('ajax:success', function(evt, data, status, xhr){
            $("#loading").hide();
        });

        $(document).on("click", "#hide", function(){
            $(this).parent().parent().slideUp();
        });

        $(document).on("click", "#hide1", function(){
            $(this).parent().slideUp();
        });





        // $('#portfolio_<%= portfolio.id %>').click(function(){
        //     $.ajax({
        //       type: "GET",
        //       url: "/portfolios/new",
        //       dataType: "script"
        //     });
        // });
            $(document).on("click", "#showremarklink", function(){

                // $(this).closest("div").addClass("colorb");
                // $(this).parent().parent().next().addClass("colorb");
                alert("hshsh")
                    $.ajax({
                      type: "GET",
                      url: this.href,
                      dataType: "script"
                });
                return false;
            });
  
        // $(document).on("click", "tr", function(){
        //     // $(this).next().show();
            

        //     $(this).next().toggle('slow');       
        // });
        

            $(document).on("click", "#about", function(){
            $.ajax({
              type: "GET",
              url: "/about",
              dataType: "script"
            });
            return false;
         });

        

});

