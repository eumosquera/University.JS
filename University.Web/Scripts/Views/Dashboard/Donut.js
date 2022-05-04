﻿
$(document).ready(function () {
    //getData();
});
function getData(id) {
    if (id === undefined)
        id = $("#report").val();
    $("#graph").empty();
    $.get(urlBase + '/Dashboard/DonutJson/' + id).done(function (data) {
        Morris.Donut({
            element: 'graph',
            data: JSON.parse(data),
            formatter: function (x) { return x + "" }
        }).on('click', function (i, row) {
            console.log(i, row);
        });
    }).fail(function (ex) {
        console.log(ex);
    });
}