$("#create-save").click(function () {

    createStudent();
})

function createStudent() {


    var formData = $("#formCreateStudent").serialize();

    
    $.post(urlBase + "/Students/Create", formData).done(function (data) {

        console.table(data);


        if (data.IsSuccess) {
            swal("Notification", "Process done successfull!", "success");
            $("#modalStudents").modal("hide");
            getStudents();

        }
        else {

            
            swal("Notification", data.Message, "error");

        }

    }).fail(function (data) {

        swal("Notification", "Process failure!", "error");
        console.table(data);

    })

}