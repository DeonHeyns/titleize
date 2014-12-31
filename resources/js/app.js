/**
 * Created by DeonHeyns on 12/31/14.
 */
$(document).ready(function() {

	$('input').on('keyup', throttle(titleize, 1000))

	function titleize(){
		var title = getInitials();
		var url = '/' + title;
        $.get(url, function( data ) {
			console.log(data)
			console.log(data == 'Undefined')
            if(data == 'Undefined'){
				$( "#results" ).html('')
			}
			else {
				$("#results").html('<h2>Results are in:</h2><br/>' + data);
			}
        });
	}

	function getInitials(){
		var value = $('#titelize').val();
		if(!value){
			return 'undefined'
		}
		return value
	}

	function throttle(fn, threshhold, scope) {
	  threshhold || (threshhold = 250);
	  var last,
		  deferTimer;
	  return function () {
		var context = scope || this;

		var now = +new Date,
			args = arguments;
		if (last && now < last + threshhold) {
		  // hold on to it
		  clearTimeout(deferTimer);
		  deferTimer = setTimeout(function () {
			last = now;
			fn.apply(context, args);
		  }, threshhold);
		} else {
		  last = now;
		  fn.apply(context, args);
		}
	  };
	}
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');