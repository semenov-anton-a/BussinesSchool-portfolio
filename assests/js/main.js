$(document).ready(function () {

    function counter( obj ) {
        $(obj).prop('Counter',0).animate({ Counter: $(obj).text() },
            {
                duration: 3800, easing: 'swing',
                step: function (now) { $(obj).text(Math.ceil(now)+"%") }
            }
        );
    }

    let $myProgress = $("#myProgress");

    ProgressBar = function ( $bar ) {
        let proc = $bar.find('span.count').text();
        counter( $bar.find('span.count') )
        $bar.animate({ width: proc+"%" }, 3000)
        return false;
    };

    $('#myProgress button').one('click',function(){
        $($myProgress).find('li').each(function(index){
            let $this = $(this);
            ProgressBar( $this.find('div.progress-bar') );
        });
    })

});