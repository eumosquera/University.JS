$("#edit-save").click(function () {

    editStudent();
})

function editStudent() {

    var formData = $("#formEditStudent").serialize();

    
    $.post(urlBase + "/Students/Edit", formData).done(function (data) {

        console.table(data);


        if (data.IsSuccess) {
            swal("Notification", "Process done successfull!", "success");
            $("#modalStudents").modal("hide");
            getStudents();

        }
        else {
            swal("Notification", data.Message, "error");
            //$.notify(data.Message, "erros");
        }

    }).fail(function (data) {

        console.table(data);

    })

}