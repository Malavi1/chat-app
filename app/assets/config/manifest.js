//= link_tree ../images
//= link_directory ../stylesheets .css
//= link_tree ../../javascript .js
//= link_tree ../../../vendor/javascript .js
// Loads all Semantic javascripts
//= require semantic-ui
//= require jquery
//= require turbolinks


scroll_bottom = function(){
    if ($('#messages').length >0){
        $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }
}

submit_message = function(){
    $('#message_body').on('keydown', function(e){
    if (e.keyCode ==13){
        $('button').click();
        e.target.value = ""
        };
    });
};
$(document).on('turbolinks:load', function(){
    $('.ui.dropdown').dropdown();
    $('.message.close').on('click', function(){
        $(this).closest('.message').trnasition('fade');
    });
    scroll_bottom();
    submit_message();
})