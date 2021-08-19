$(document).ready(function () {

    function counter( obj ) {
        $(obj).prop('Counter',0).animate({Counter: $(obj).text()}, 
        {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(obj).text(Math.ceil(now)+"%");
            }
        });
    }

    let $myProgress = $("#myProgress");

    let $procHTML = $("#multiCollapseExample1 ul li:nth-child(1)");

    const awaitTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));

    PromiseProgressBar = function ( $bar ) {
        awaitTimeout(300).then( () => {
                let proc = $bar.find('span.count').text();
                counter( $bar.find('span.count') )
                $bar.animate({ width: proc+"%" }, 1000)
            });
        return false;
    };
    
    


    $('#myProgress button').click(function(){
        $($myProgress).find('li').each(function(index){
            let $this = $(this);
            PromiseProgressBar( $this.find('div.progress-bar') );
        });
    })

});