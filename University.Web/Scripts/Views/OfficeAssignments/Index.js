$(document).ready(function () {
    getOfficeAssignments();

});
$("#create").click(function () {
    $("#modalOfficeAssignments .modal-body", this).empty();
    $("#modalOfficeAssignments .modal-body").load(urlBase + "/OfficeAssignments/Create");
    $("#modalOfficeAssignments").modal("show");
});

function getOfficeAssignments() {
    var $row = $('#rowOfficeAssignments');
    $('#divOfficeAssignments').remove();
    var $div = $('<div></div>');
    $div.addClass('table-responsive mb-5');
    $div.attr({ id: 'divOfficeAssignments' });
    $div.addClass('divOfficeAssignments mb-5');
    var $table = $("<table></table>");
    $table.addClass('table table-bordered display text-center');
    $table.attr({ id: 'tableOfficeAssignments', width: '100%' });
    $div.append($table);
    $row.append($div);
    $.get(urlBase + '/OfficeAssignments/IndexJson').done(function (data) {
        $.notify("Load data", "info");
        console.table(data);
        table = $('#tableOfficeAssignments').DataTable({
            data: data,
            "iDisplayLength": 25,
            "order": [[0, "desc"]],
            columns: [
                { title: 'ID', data: 'InstructorID', className: 'd-none' },
                { title: 'Location', data: 'Location' },
                { title: 'Options', data: null }
            ],
            columnDefs: [
                {
                    targets: 2,
                    render: function (data, type, row) {
                        return '<a href="javascript:void" class="btn btn-warning edit">Edit</a>' +
                            '<a href="javascript:void" class="btn btn-danger delete">Delete</a>';
                    }
                }
            ]
        });
        $('#tableOfficeAssignments').on('click', 'tbody a.edit', function (e) {
            let id = $(this).parent().siblings('td')[0].innerText;
            $('#modalOfficeAssignments .modal-body', this).empty();
            $('#modalOfficeAssignments .modal-body').load(urlBase + '/OfficeAssignments/Edit/' + id);
            $("#modalOfficeAssignments").modal("show");
        });
        $('#tableOfficeAssignments').on('click', 'tbody a.delete', function (data) {
            let id = $(this).parent().siblings('td')[0].innerText;
            deleteOfficeAssignments(id);
        });
    }).fail(function (data) {
        console.table(data);
    });
}
function deleteOfficeAssignments(id) {
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

                $.get(urlBase + "/OfficeAssignments/Delete/" + id).done(function (data) {
                    if (data.IsSuccess) {
                        getOfficeAssignments();
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
