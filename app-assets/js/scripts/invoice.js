$(document).ready(function(){
    var count = 0;
    $('#tambah').click(function(){
        if(confirm("Apakah data sudah benar?"))
        {
            var resix = $("#no_resi").val();
            var pengiriman_idx = $("#pengiriman_id").val();
            var pengirimx = $("#pengirim").val();
            var penerimax = $("#penerima").val();
            var tujuanx = $("#tujuan").val();
            var jumlahkoli = $("#jumlah_koli").val();
            var jumlahkg = $("#jumlah_kg").val();
            var jumlahharga = $("#jumlah_harga").val();
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
                output += '<td>'+pengirimx+' <input type="hidden" name="resix['+count+']" id="resix_'+count+'" class="resix" value="'+resix+'" /><input type="hidden" name="pengirimx['+count+']" id="pengirimx_'+count+'" class="pengirimx" value="'+pengirimx+'" /></td>';
                output += '<td>'+penerimax+' <input type="hidden" name="penerimax['+count+']" id="penerimax_'+count+'" class="penerimax" value="'+penerimax+'" /></td>';
                output += '<td>'+tujuanx+' <input type="hidden" name="tujuanx['+count+']" id="tujuanx_'+count+'" class="tujuanx" value="'+tujuanx+'" /></td>';
                output += '<td>'+jumlahkoli+' <input type="hidden" name="jumlahkoli['+count+']" id="jumlahkoli_'+count+'" class="jumlahkoli" value="'+jumlahkoli+'" /></td>';
                output += '<td>'+jumlahkg+' <input type="hidden" name="jumlahkg['+count+']" id="jumlahkg_'+count+'" class="jumlahkg" value="'+jumlahkg+'" /></td>';
                output += '<td>'+jumlahharga+' <input type="hidden" name="jumlahharga['+count+']" id="jumlahharga_'+count+'" class="jumlahharga" value="'+jumlahharga+'" /></td>';
                output += '<td>'+isipaket+' <input type="hidden" name="isipaket['+count+']" id="isipaket_'+count+'" class="isipaket" value="'+isipaket+'" /></td></td>';
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

                var sumh = 0;
                $(".jumlahharga").each(function(){
                    sumh += parseFloat(this.value);
                    $("#totalharga").text(sumh);
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

            var sumh = 0;
            $(".jumlahharga").each(function(){
                sumh += parseFloat(this.value);
                $("#totalharga").text(sumh);
            });
        }
        else
        {
            return false;
        }
    });
});
