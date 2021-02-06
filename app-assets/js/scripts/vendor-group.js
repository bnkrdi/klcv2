$(document).ready(function(){
    var count = 0;
    $('#tambah').click(function(){
        if(confirm("Apakah data sudah benar?"))
        {
            var vendor_idx = $("#vendor_id").val();
            var vendor_nama1x = $("#vendor_nama1").val();
            var vendor_aliasx = $("#vendor_alias").val();
            var vendor_alamatx = $("#vendor_alamat").val();

            if(vendor_idx == "")
            {
                alert("Vendor Tidak Boleh Kosong");
            }
            else
            {
                count = count + 1;
                output = '<tr id="row_'+count+'">';
                output += '<td><h4>'+vendor_nama1x+'</h4><input type="hidden" name="vendor_idx['+count+']" id="vendor_idx_'+count+'" class="vendor_idx" value="'+vendor_idx+'" /></td>';
                output += '<td>'+vendor_alamatx+'</td>';
                output += '<td>'+vendor_aliasx+'</td>';
                output += '<td><button type="button" name="remove_details" class="btn btn-danger btn-xs remove_details" id="'+count+'">Hapus</button></td>';
                output += '</tr>';
                $('#data_vendor').append(output);
            }
        }
        else
        {
            return false;
        }

    });

    $(document).on('click', '.remove_details', function(){
        var row_id = $(this).attr("id");
        if(confirm("Are you sure you want to remove this row data?"))
        {
            $('#row_'+row_id+'').remove();
        }
        else
        {
            return false;
        }
    });
});
