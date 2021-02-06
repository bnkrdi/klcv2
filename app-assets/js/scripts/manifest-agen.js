$(document).ready(function(){
    var count = 0;
    $('#tambah').click(function(){
        if(confirm("Apakah data sudah benar?"))
        {
            var resix = $("#no_resi").val();
            var alur_nox = $("#alur_no").val();
            var alur_idx = $("#alur_id").val();
            var pengiriman_idx = $("#pengiriman_id").val();
            var pengirimx = $("#pengirim").val();
            var penerimax = $("#penerima").val();
            var tujuanx = $("#tujuan").val();
            var jumlahkoli = $("#jumlah_koli").val();
            var jumlahkg = $("#jumlah_kg").val();
            var isipaket = $("#isi_paket").val();

            if(resix == "")
            {
                alert("No Resi Tidak Boleh Kosong");
            }
            else
            {
                count = count + 1;
                output = '<tr id="row_'+count+'">';
                output += '<td><h4>'+resix+'</h4><input type="hidden" name="pengiriman_idx['+count+']" id="pengiriman_idx_'+count+'" class="pengiriman_idx" value="'+pengiriman_idx+'" /></td>';
                output += '<td>'+pengirimx+' <input type="hidden" name="resix['+count+']" id="resix_'+count+'" class="resix" value="'+resix+'" /></td>';
                output += '<td>'+penerimax+' <input type="hidden" name="alur_nox['+count+']" id="alur_nox_'+count+'" class="alur_nox" value="'+alur_nox+'" /></td>';
                output += '<td>'+tujuanx+' <input type="hidden" name="alur_idx['+count+']" id="alur_idx_'+count+'" class="alur_idx" value="'+alur_idx+'" /></td>';
                output += '<td>'+jumlahkoli+' <input type="hidden" name="jumlahkoli['+count+']" id="jumlahkoli_'+count+'" class="jumlahkoli" value="'+jumlahkoli+'" /></td>';
                output += '<td>'+jumlahkg+' <input type="hidden" name="jumlahkg['+count+']" id="jumlahkg_'+count+'" class="jumlahkg" value="'+jumlahkg+'" /></td>';
                output += '<td>'+isipaket+'</td>';
                output += '<td><button type="button" name="remove_details" class="btn btn-danger btn-xs remove_details" id="'+count+'">Hapus</button></td>';
                output += '</tr>';
                $('#data_resi').append(output);
                var sum = 0;
                $(".jumlahkoli").each(function(){
                    sum += parseFloat(this.value);
                    $("#totaljumlah").text(sum);
                });

                var sume = 0;
                $(".jumlahkg").each(function(){
                    sume += parseFloat(this.value);
                    $("#totalkg").text(sume);
                });
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
            var sum = 0;
            $(".jumlahkoli").each(function(){
                sum += parseFloat(this.value);
                $("#totaljumlah").text(sum);
            });

            var sume = 0;
            $(".jumlahkg").each(function(){
                sume += parseFloat(this.value);
                $("#totalkg").text(sume);
            });
        }
        else
        {
            return false;
        }
    });
});
