$(document).ready(function(){
  
  //GA
  $('[data-an]').click(function(){
  var cat = $(this).attr('data-an-cat');
  var action = $(this).attr('data-an-action');
  var label = $(this).attr('data-an-label');
  //send values to google analytics
  ga('send', {
    'hitType' : 'event',
    'eventCategory': cat,
    'eventAction': action,
    'eventLabel': label
  });
});
});
