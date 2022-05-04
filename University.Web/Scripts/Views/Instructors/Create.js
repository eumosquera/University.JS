$("#create-save").click(function () {

    createInstructor();
})

function createInstructor() {


    var formData = $("#formCreateInstructor").serialize();

    //ruta para enviar datos
    $.post(urlBase + "/Instructors/Create", formData).done(function (data) {

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