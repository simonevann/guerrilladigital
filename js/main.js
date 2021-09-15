$(document).ready(function() {
	$('#fullpage').fullpage({
    licenseKey: 'D366FDB4-3DAC4E1A-8F22A063-48D0E2E1',
		scrollHorizontally: true,
    navigation:true,
    anchors:['Hello', 'Servizi','Principi','Clienti','Sviluppo-siti-internet','Manutenzione-siti-internet'],
    onLeave: function(origin, destination, direction){
        var leavingSection = this;
        //Change background after section "nuovo sito"
        if(origin.anchor == 'Nuovo' && direction =='down'){
          $('body').addClass("bg-bright");
          $('body').removeClass("bg-darker");
        }
        else if(origin.anchor == 'Manutenzione' && direction == 'up'){
          $('body').removeClass("bg-bright");
          $('body').addClass("bg-darker");
        }
      }
	});
  //Load customer carousel
  new Glide('.glide').mount();

  //shuffle letters
  var origin = [];

$(".shuffle").each(function(){
  let el = $(this);
  let word = el.html();
  origin.push(word);
  el.html(shuffleRnd(word.length));
});

setTimeout(function(){

    let elements = $(".shuffle");
    let interaction = 0;
    let letter = 0;

    var anim = setInterval(function(){
      console.log("Interval 1 " + interaction);
      if (interaction >= elements.length-1 || interaction > 100){
        clearInterval(anim);
      }
      $(elements[interaction]).html(function(){
         shuffleWords(elements[interaction],origin[interaction]);
      });

      interaction++;
    }, 50);

}, 500);

function shuffleWords(elem, orig){
  let j = 0;
  let el = $(elem);
  let word = el.html();
  let decrypt = 0;
  let animWord = setInterval(function(){
      //console.log("Interval X " + j);
      if( j % 3 == 0){
        decrypt++;
      }
      if (j > 100 ){
        clearInterval(animWord);
      }
      $(".shuffle").each(function(){
        el.html(orig.substring(0,decrypt) + shuffleRnd(word.length - decrypt));
      });
    j++
  },50);
}

function shuffleRnd(num){
  let result ="";
  let randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXY0123456789*#@§¬¢|+ç%&/()=!^~¨[]{}$£<>;:.-_";

    for ( let i = 0; i < num; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};

});
