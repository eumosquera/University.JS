/*
$(document).ready(function () {
        getCourses();
    getCoursesList();
    });


    $("#create").click(function () {
        $("#modalCourses .modal-body", this).empty();
    $("#modalCourses .modal-body").load(urlBase + "/Courses/Create");
    $("#modalCourses").modal("show");
    });

    function getCourses() {
        var $row = $('#rowCourses');
    $('#divCourses').remove();
    var $div = $('<div></div>');
    $div.addClass('table-responsive mb-5');
    $div.attr({id: 'divCourses' });
    $div.addClass('divCourses mb-5');
    var $table = $("<table></table>");
    $table.addClass('table table-bordered display text-center');
    $table.attr({id: 'tableCourses', width: '100%' });
    $div.append($table);
    $row.append($div);

    $.get(urlBase + '/Courses/IndexJson').done(function (data) {
        $.notify("Load data", "info");
    console.table(data);
    table = $('#tableCourses').DataTable({
        data: data,
    "iDisplayLength": 25,
    "order": [[0, "desc"]],
    columns: [
    {title: 'ID', data: 'CourseID', className: 'd-none' },
    {title: 'Title', data: 'Title' },
    {title: 'Credits', data: 'Credits' },
    {title: 'Options', data: null }
    ],
    columnDefs: [
    {
        targets: 3,
    render: function (data, type, row) {
                            return '<a href="javascript:void" class="btn btn-warning edit">Edit</a>' +
    '<a href="javascript:void" class="btn btn-danger delete">Delete</a>';
                        }
                    }
    ]
            });

    $('#tableCourses').on('click', 'tbody a.edit', function (e) {
        let id = $(this).parent().siblings('td')[0].innerText;

    $('#modalCourses .modal-body', this).empty();
    $('#modalCourses .modal-body').load(urlBase + '/Courses/Edit/' + id);
    $("#modalCourses").modal("show");
            });

    $('#tableCourses').on('click', 'tbody a.delete', function (data) {
        let id = $(this).parent().siblings('td')[0].innerText;
    deleteCourse(id);
            });

        }).fail(function (data) {
        console.table(data);
        });
    }

    function deleteCourse(id) {
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

                    $.get(urlBase + "/Courses/Delete/" + id).done(function (data) {
                        if (data.IsSuccess) {
                            getCourses();
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
    function getCoursesList() {
        $.get(urlBase + '/Courses/GetCourses', function (data) {
            $("#CourseSelect").empty();
            $("#CourseSelect").select2({
                placeholder: "Seleccione",
                data: JSON.parse(data)
            });
            $("#CourseSelect").val("").trigger("change");
        });
}
*/


function _0x4eba() { var _0x1732fe = ['change', 'tableCourses', 'done', '2213618oZySxY', 'show', 'trigger', '#create', '/Courses/Delete/', '/Courses/Edit/', 'click', '840357epJLPb', '16PTMgqz', 'remove', 'Load\x20data', 'siblings', '153168IVZeYj', '2441740mPIRgt', 'table', 'btn-danger', 'Credits', '55BxJEPN', 'parent', '40mnVwvA', '6rKpybj', 'Your\x20register\x20has\x20been\x20deleted.', 'addClass', 'divCourses\x20mb-5', 'empty', 'get', '842968sCLJiw', 'divCourses', 'desc', 'val', 'success', 'modal', 'error', '/Courses/Create', '<a\x20href=\x22javascript:void\x22\x20class=\x22btn\x20btn-warning\x20edit\x22>Edit</a>', 'tbody\x20a.edit', 'Deleted!', '/Courses/GetCourses', 'append', '#divCourses', 'load', 'table\x20table-bordered\x20display\x20text-center', 'DataTable', '241778nYzyIz', 'You\x20will\x20not\x20be\x20able\x20to\x20recover\x20this\x20register!', 'Yes,\x20delete\x20it!', 'Message', 'Title', 'select2', 'CourseID', 'fail', 'ready', 'Your\x20register\x20is\x20safe\x20:)', '#modalCourses', 'tbody\x20a.delete', '#CourseSelect', '#tableCourses', '100%', 'attr', '79242UwrGWq', '<a\x20href=\x22javascript:void\x22\x20class=\x22btn\x20btn-danger\x20delete\x22>Delete</a>', '#rowCourses', '<div></div>', 'Notification', 'notify', '#modalCourses\x20.modal-body', '/Courses/IndexJson', 'Cancelled']; _0x4eba = function () { return _0x1732fe; }; return _0x4eba(); } var _0x45f129 = _0x4249; (function (_0x45cdd5, _0x3069fb) { var _0x1fdb2c = _0x4249, _0x224281 = _0x45cdd5(); while (!![]) { try { var _0x379202 = parseInt(_0x1fdb2c(0xd2)) / 0x1 + parseInt(_0x1fdb2c(0xe2)) / 0x2 + parseInt(_0x1fdb2c(0x102)) / 0x3 * (-parseInt(_0x1fdb2c(0x108)) / 0x4) + -parseInt(_0x1fdb2c(0xff)) / 0x5 * (parseInt(_0x1fdb2c(0xfa)) / 0x6) + -parseInt(_0x1fdb2c(0xfb)) / 0x7 + -parseInt(_0x1fdb2c(0xf6)) / 0x8 * (-parseInt(_0x1fdb2c(0xf5)) / 0x9) + parseInt(_0x1fdb2c(0x101)) / 0xa * (parseInt(_0x1fdb2c(0xee)) / 0xb); if (_0x379202 === _0x3069fb) break; else _0x224281['push'](_0x224281['shift']()); } catch (_0x12f8e0) { _0x224281['push'](_0x224281['shift']()); } } }(_0x4eba, 0x36321), $(document)[_0x45f129(0xda)](function () { getCourses(), getCoursesList(); }), $(_0x45f129(0xf1))[_0x45f129(0xf4)](function () { var _0x42196a = _0x45f129; $(_0x42196a(0xe8), this)[_0x42196a(0x106)](), $(_0x42196a(0xe8))[_0x42196a(0xcf)](urlBase + _0x42196a(0xc8)), $(_0x42196a(0xdc))[_0x42196a(0xc6)](_0x42196a(0xef)); })); function getCourses() { var _0x19e1bc = _0x45f129, _0x318b60 = $(_0x19e1bc(0xe4)); $(_0x19e1bc(0xce))[_0x19e1bc(0xf7)](); var _0x54529c = $(_0x19e1bc(0xe5)); _0x54529c[_0x19e1bc(0x104)]('table-responsive\x20mb-5'), _0x54529c[_0x19e1bc(0xe1)]({ 'id': _0x19e1bc(0xc2) }), _0x54529c[_0x19e1bc(0x104)](_0x19e1bc(0x105)); var _0x2d608c = $('<table></table>'); _0x2d608c[_0x19e1bc(0x104)](_0x19e1bc(0xd0)), _0x2d608c[_0x19e1bc(0xe1)]({ 'id': _0x19e1bc(0xec), 'width': _0x19e1bc(0xe0) }), _0x54529c[_0x19e1bc(0xcd)](_0x2d608c), _0x318b60[_0x19e1bc(0xcd)](_0x54529c), $[_0x19e1bc(0x107)](urlBase + _0x19e1bc(0xe9))[_0x19e1bc(0xed)](function (_0x58320f) { var _0x29c06c = _0x19e1bc; $[_0x29c06c(0xe7)](_0x29c06c(0xf8), 'info'), console[_0x29c06c(0xfc)](_0x58320f), table = $(_0x29c06c(0xdf))[_0x29c06c(0xd1)]({ 'data': _0x58320f, 'iDisplayLength': 0x19, 'order': [[0x0, _0x29c06c(0xc3)]], 'columns': [{ 'title': 'ID', 'data': _0x29c06c(0xd8), 'className': 'd-none' }, { 'title': 'Title', 'data': _0x29c06c(0xd6) }, { 'title': _0x29c06c(0xfe), 'data': _0x29c06c(0xfe) }, { 'title': 'Options', 'data': null }], 'columnDefs': [{ 'targets': 0x3, 'render': function (_0x1a8e74, _0x4fd009, _0x1eceed) { var _0x190f16 = _0x29c06c; return _0x190f16(0xc9) + _0x190f16(0xe3); } }] }), $(_0x29c06c(0xdf))['on'](_0x29c06c(0xf4), _0x29c06c(0xca), function (_0x2b7d66) { var _0x43a6bb = _0x29c06c; let _0x25ac52 = $(this)[_0x43a6bb(0x100)]()[_0x43a6bb(0xf9)]('td')[0x0]['innerText']; $(_0x43a6bb(0xe8), this)[_0x43a6bb(0x106)](), $('#modalCourses\x20.modal-body')[_0x43a6bb(0xcf)](urlBase + _0x43a6bb(0xf3) + _0x25ac52), $('#modalCourses')[_0x43a6bb(0xc6)]('show'); }), $(_0x29c06c(0xdf))['on']('click', _0x29c06c(0xdd), function (_0x362e09) { var _0x82648e = _0x29c06c; let _0x5b0475 = $(this)[_0x82648e(0x100)]()[_0x82648e(0xf9)]('td')[0x0]['innerText']; deleteCourse(_0x5b0475); }); })[_0x19e1bc(0xd9)](function (_0xb485bc) { var _0x3f9254 = _0x19e1bc; console[_0x3f9254(0xfc)](_0xb485bc); }); } function deleteCourse(_0x46dba7) { var _0x42a74b = _0x45f129; swal({ 'title': 'Are\x20you\x20sure?', 'text': _0x42a74b(0xd3), 'type': 'warning', 'showCancelButton': !![], 'confirmButtonClass': _0x42a74b(0xfd), 'confirmButtonText': _0x42a74b(0xd4), 'cancelButtonText': 'No,\x20cancel!', 'closeOnConfirm': ![], 'closeOnCancel': ![] }, function (_0x4db00d) { var _0x8161e4 = _0x42a74b; _0x4db00d ? $[_0x8161e4(0x107)](urlBase + _0x8161e4(0xf2) + _0x46dba7)[_0x8161e4(0xed)](function (_0x5ef582) { var _0x5a7be3 = _0x8161e4; _0x5ef582['IsSuccess'] ? (getCourses(), swal(_0x5a7be3(0xcb), _0x5a7be3(0x103), _0x5a7be3(0xc5))) : swal('Notification', _0x5ef582[_0x5a7be3(0xd5)], _0x5a7be3(0xc7)); })['fail'](function (_0xe621c7) { var _0x564687 = _0x8161e4; swal(_0x564687(0xe6), _0xe621c7[_0x564687(0xd5)], _0x564687(0xc7)); }) : swal(_0x8161e4(0xea), _0x8161e4(0xdb), _0x8161e4(0xc7)); }); } function _0x4249(_0x583594, _0x5d83f5) { var _0x4eba78 = _0x4eba(); return _0x4249 = function (_0x42495b, _0x299f97) { _0x42495b = _0x42495b - 0xc2; var _0x21b944 = _0x4eba78[_0x42495b]; return _0x21b944; }, _0x4249(_0x583594, _0x5d83f5); } function getCoursesList() { var _0x208b59 = _0x45f129; $[_0x208b59(0x107)](urlBase + _0x208b59(0xcc), function (_0x3e9d27) { var _0x35cf9c = _0x208b59; $(_0x35cf9c(0xde))[_0x35cf9c(0x106)](), $(_0x35cf9c(0xde))[_0x35cf9c(0xd7)]({ 'placeholder': 'Seleccione', 'data': JSON['parse'](_0x3e9d27) }), $(_0x35cf9c(0xde))[_0x35cf9c(0xc4)]('')[_0x35cf9c(0xf0)](_0x35cf9c(0xeb)); }); }