$("#edit-save").click(function () {

    editInstructor();
})

function editInstructor() {

    var formData = $("#formEditInstructor").serialize();

    //ruta para enviar datos
    $.post(urlBase + "/Instructors/Edit", formData).done(function (data) {

        console.table(data);


        if (data.IsSuccess) {
            swal("Notification", "Process done successfull!", "success");
            $("#modalInstructors").modal("hide");
            getInstructors();

        }
        else {


            swal("Notification", data.Message, "error");
        }

    }).fail(function (data) {

        console.table(data);

    })

}