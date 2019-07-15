// Add btn

var index = 0;
function removeBtnHapus() {
$('.btnHapus' + (index-1)).remove();
};

function appendBtnHapus() {
$('#areaBtnHapus' + (index-1)).append('<label id="btnHapus" class="h5 text-warning btnHapus'+ (index-1) +'" for="input-username">Hapus</label>')
};

$('#btnAddPelatihan').click(function() {
if (index == 0) {
index++;
$('#formPelatihan').append('<div class="row"><div class="col-lg-12"><div class="form-group"><div id="areaBtnHapus'+index+'" class="row col d-flex justify-content-between ml-0 p-0"><label class="form-control-label" for="input-username">Sub ' + index + '</label><label id="btnHapus" class="h5 text-warning btnHapus'+ index +'" for="input-username">Hapus</label></div><input type="text" id="input-first-name" class="form-control form-control-alternative form-control-sm" placeholder="First name"></div></div></div>');
return false;
}
else if (index > 0) {
index++;
removeBtnHapus();
$('#formPelatihan').append('<div class="row"><div class="col-lg-12"><div class="form-group"><div id="areaBtnHapus'+index+'" class="row col d-flex justify-content-between ml-0 p-0"><label class="form-control-label" for="input-username">Sub ' + index + '</label><label id="btnHapus" class="h5 text-warning btnHapus'+ index +'" for="input-username">Hapus</label></div><input type="text" id="input-first-name" class="form-control form-control-alternative form-control-sm" placeholder="First name"></div></div></div>');
return false;
}
});

$('#formPelatihan').on('click', '#btnHapus', function() {
if (index == 1) {
    index--;
    $(this).parent().parent().remove();
    return false;
}
else if (index > 1) {
    appendBtnHapus();
    index--;
    $(this).parent().parent().remove();
    return false;
    }
});

$("#shortSiswa").change(function() {
    var filterValue = $(this).val();
    var row = $('.dataSiswa'); 
    row.hide()
    row.each(function(i, el) {
    if($(el).attr('data-type') == filterValue) {
        $(el).show();
        }
    })
    if ("semua" == filterValue) {
      row.show();
    }
    });

setTimeout(function(){ 
    $(".alert").fadeOut("slow"); 
}, 2000 ); 