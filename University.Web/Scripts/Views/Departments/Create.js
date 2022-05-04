$(document).ready(function () {
    getInstructorsList();
});
function getInstructorsList() {
    $.get(urlBase + '/Departments/GetInstructorID', function (data) {
        $("#InstructorID").empty();
        $("#InstructorID").select2({
            placeholder: "Seleccione",
            data: JSON.parse(data)
        });
        $("#InstructorID").val("").trigger("change");
        $("#InstructorID").addClass('form-control');
        $("#InstructorID").attr({ width: '100%' });
    });
}



$("#create-save").click(function () {
    createDepartment();
});
function createDepartment() {
    var formData = $('#formCreateDepartment').serialize();
    $.post(urlBase + "/Departments/Create", formData).done(function (data) {
        console.table(data);
        if (data.IsSuccess) {
            swal("Notification", "Process done successfull!", "success")
            $("#modalOfficeAssignments").modal("hide");
            getDepartments();
        } else {
            swal("Notification", "Process failure!", "error")
        }
    }).fail(function (data) {
        console.table(data);
        swal("Notification", "Process failure!", "error")
    })
}