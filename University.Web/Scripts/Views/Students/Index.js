﻿$(document).ready(function () {
    getStudents();
});

$("#create").click(function () {
    $("#modalStudents .modal-body", this).empty();
    $("#modalStudents .modal-body").load("/Students/Create");
    $("#modalStudents").modal("show");
});

function getStudents() {
    var $row = $('#rowStudents');
    $('#divStudents').remove();
    var $div = $('<div></div>');
    $div.addClass('table-responsive mb-5');
    $div.attr({ id: 'divStudents' });
    $div.addClass('divStudents mb-5');
    var $table = $("<table></table>");
    $table.addClass('table table-bordered display text-center');
    $table.attr({ id: 'tableStudents', width: '100%' });
    $div.append($table);
    $row.append($div);

    $.get(urlBase + '/Students/IndexJson').done(function (data) {
        $.notify("Load data", "info");
        console.table(data);
        table = $('#tableStudents').DataTable({
            data: data,
            "iDisplayLength": 50,
            "order": [[0, "desc"]],
            columns: [
                { title: 'ID', data: 'ID', className: 'd-none' },
                { title: 'Last Name', data: 'LastName' },
                { title: 'First Mid Name', data: 'FirstMidName' },
                { title: 'Enrollment Date', data: 'EnrollmentDateFormat' },
                { title: 'Options', data: null }
                //{ title: 'Full Name', data: 'FullName' },

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

        $('#tableStudents').on('click', 'tbody a.edit', function (e) {
            let id = $(this).parent().siblings('td')[0].innerText;

            $('#modalStudents .modal-body', this).empty();
            $('#modalStudents .modal-body').load(urlBase + '/Students/Edit/' + id);
            $("#modalStudents").modal("show");
        });

        $('#tableStudents').on('click', 'tbody a.delete', function (data) {
            let id = $(this).parent().siblings('td')[0].innerText;
            deleteStudent(id);
        });

    }).fail(function (data) {
        console.table(data);
    });
}

function deleteStudent(id) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this register!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {

                $.get(urlBase + "/Students/Delete/" + id).done(function (data) {
                    if (data.IsSuccess) {
                        getStudents();
                        swal("Deleted!", "Your register has been deleted.", "success");
                    } else {
                        swal("Notification", data.Message, "error");
                    }
                }).fail(function (data) {
                    swal("Notification", data.Message, "error");
                })
            } else {
                swal("Cancelled", "Your register is safe :)", "error");
            }
        });
}