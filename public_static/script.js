//document.ready function
$(function () {
    let kmBox = $('#km')
    let minBox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let rateBtn = $('#getrates')
    let rateDiv = $('#rates')

    calcBtn.click(function () {
        $.post('/calcfare', {
                km: kmBox.val(),
                min: minBox.val()
            },
            function (data) {
                fareDiv.text(data.fare)
            })
    })

    rateBtn.click(function () {
        $.get('/rate', function (data) {
            rateDiv.text(JSON.stringify(data))
        })
    })
})