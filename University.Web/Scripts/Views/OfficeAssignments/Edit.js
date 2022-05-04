$("#edit-save").click(function () {
    editOfficeAssignment();
});
function editOfficeAssignment() {

    var formData = $("#formEditOfficeAssignment").serialize();

    $.post(urlBase + "/OfficeAssignments/Edit", formData).done(function (data) {
        console.table(data);

        if (data.IsSuccess) {
            swal("Notification", "Process done successfull!", "success")
            $("#modalOfficeAssignments").modal("hide");
            getOfficeAssignments();

        } else {
            swal("Notification", "Process failure!", "error")
        }

    }).fail(function (data) {
        console.table(data);
    })
}