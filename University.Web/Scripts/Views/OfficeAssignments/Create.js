$(document).ready(function () {
    getInstructorsList();
});
function getInstructorsList() {
    $.get(urlBase + '/OfficeAssignments/GetInstructorID', function (data) {
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
</script >

    <script>
        $("#create-save").click(function () {
            createOfficeAssignment();
    });
        function createOfficeAssignment() {
        var formData = $('#formCreateOfficeAssignment').serialize();
        $.post(urlBase +"/OfficeAssignments/Create", formData).done(function (data) {
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
        swal("Notification", "Process failure!", "error")
        })
    }