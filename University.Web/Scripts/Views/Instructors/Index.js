$(document).ready(function () {
    getInstructors();
});

$("#create").click(function () {
    $("#modalInstructors .modal-body", this).empty();
    $("#modalInstructors .modal-body").load(urlBase + "/Instructors/Create");
    $("#modalInstructors").modal("show");
});

function getInstructors() {
    var $row = $('#rowInstructors');
    $('#divInstructors').remove();
    var $div = $('<div></div>');
    $div.addClass('table-responsive mb-5');
    $div.attr({ id: 'divInstructors' });
    $div.addClass('divInstructors mb-5');
    var $table = $("<table></table>");
    $table.addClass('table table-bordered display text-center');
    $table.attr({ id: 'tableInstructors', width: '100%' });
    $div.append($table);
    $row.append($div);

    $.get(urlBase + '/Instructors/IndexJson').done(function (data) {
        $.notify("Load data", "info");
        console.table(data);
        table = $('#tableInstructors').DataTable({
            data: data,
            "iDisplayLength": 25,
            "order": [[0, "desc"]],
            columns: [
                { title: 'ID', data: 'ID', className: 'd-none' },
                { title: 'Last Name', data: 'LastName' },
                { title: 'First Mid Name', data: 'FirstMidName' },
                { title: 'Hire Date', data: 'HireDateFormat' },
                { title: 'Options', data: null }
            ],
            columnDefs: [
                {
                    targets: 4,
                    render: function (data, type, row) {
                        return '<a href="javascript:void" class="btn btn-warning edit">Edit</a>' +
                            '<a href="javascript:void" class="btn btn-danger delete">Delete</a>';
                    }
                }
            ]
        });

        $('#tableInstructors').on('click', 'tbody a.edit', function (e) {
            let id = $(this).parent().siblings('td')[0].innerText;

            $('#modalInstructors .modal-body', this).empty();
            $('#modalInstructors .modal-body').load(urlBase + '/Instructors/Edit/' + id);
            $("#modalInstructors").modal("show");
        });

        $('#tableInstructors').on('click', 'tbody a.delete', function (data) {
            let id = $(this).parent().siblings('td')[0].innerText;
            deleteInstructor(id);
        });

    }).fail(function (data) {
        console.table(data);
    });
}

function deleteInstructor(id) {
    $.get(urlBase + "/Instructors/Delete/" + id).done(function (data) {
        if (data.IsSuccess) {
            getInstructors();
        }
        else {
            $.notify(data.Message, "error");
        }
    }).fail(function (data) {
        console.table(data);
    })
}