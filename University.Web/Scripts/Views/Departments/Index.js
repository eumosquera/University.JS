
    $(document).ready(function () {
        getDepartments();
    });

    $("#create").click(function () {
        $("#modalDepartments .modal-body", this).empty();
    $("#modalDepartments .modal-body").load("/Departments/Create");
    $("#modalDepartments").modal("show");
    });

    function getDepartments() {
        var $row = $('#rowDepartments');
    $('#divDepartments').remove();
    var $div = $('<div></div>');
    $div.addClass('table-responsive mb-5');
    $div.attr({id: 'divDepartments' });
    $div.addClass('divDepartments mb-5');
    var $table = $("<table></table>");
    $table.addClass('table table-bordered display text-center');
    $table.attr({id: 'tableDepartments', width: '100%' });
    $div.append($table);
    $row.append($div);

    $.get(urlBase +'/Departments/IndexJson').done(function (data) {
        $.notify("Load data", "info");
    console.table(data);
    table = $('#tableDepartments').DataTable({
        data: data,
    "iDisplayLength": 50,
    "order": [[0, "desc"]],
    columns: [
    {title: 'Department ID', data: 'DepartmentID', className: 'd-none' },
    {title: 'Name', data: 'Name' },
    {title: 'Budget', data: 'Budget' },
    {title: 'Start Date', data: 'StartDateFormat' },
    {title: 'Instructor', data: 'FullName' },
    {title: 'Options', data: null }


    ],
    columnDefs: [
    {
        targets: 5,
    render: function (data, type, row) {
                            return '<a href="javascript:void" class="btn btn-warning edit">Edit</a>' +
    '<a href="javascript:void" class="btn btn-danger delete">Delete</a>';
                        }
                    }
    ]
            });

    $('#tableDepartments').on('click', 'tbody a.edit', function (e) {
        let id = $(this).parent().siblings('td')[0].innerText;

    $('#modalDepartments .modal-body', this).empty();
    $('#modalDepartments .modal-body').load(urlBase +'/Departments/Edit/' + id);
    $("#modalDepartments").modal("show");
            });

    $('#tableDepartments').on('click', 'tbody a.delete', function (data) {
        let id = $(this).parent().siblings('td')[0].innerText;
    deleteDepartment (id);
            });

        }).fail(function (data) {
        console.table(data);
        });
    }

    function deleteDepartment(id) {
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

                    $.get(urlBase + "/Departments/Delete/" + id).done(function (data) {
                        if (data.IsSuccess) {
                            getDepartments();
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