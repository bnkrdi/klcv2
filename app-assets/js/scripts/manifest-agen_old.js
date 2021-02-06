$(document).ready(function(){
    var count = 0;
    $('#tambah').click(function(){
        if(confirm("Apakah data sudah benar?"))
        {
            var resi = $("#no_resi").val();
            var pengiriman_idx = $("#pengiriman_id").val();
            var pengirimx = $("#pengirim").val();
            var penerimax = $("#penerima").val();
            var tujuanx = $("#tujuan").val();
            var jumlahkoli = $("#jumlah_koli").val();
            var jumlahkg = $("#jumlah_kg").val();
            var isipaket = $("#isi_paket").val();

            if(resi == "")
            {
                alert("No Resi Tidak Boleh Kosong");
            }
            else
            {
                count = count + 1;
                /*'<%Session["pengiriman_idx"] = "'+pengiriman_idx+'";%>';
                alert('<%=Session["pengiriman_idx"]%>');*/
                //$.post("manifest_vendor/get-session", {"q": "aku"});
                output = '<tr id="row_'+count+'">';
                output += '<td><h4>'+resi+'</h4><input type="hidden" name="pengiriman_idx['+count+']" id="pengiriman_idx_'+count+'" class="pengiriman_idx" value="'+pengiriman_idx+'" /></td>';
                output += '<td>'+pengirimx+'</td>';
                output += '<td>'+penerimax+'</td>';
                output += '<td>'+tujuanx+'</td>';
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

    /*$("#no_resi").select2({
        var agen_id_tujuan	= $("#agen_id_tujuan").val() || [];
        var pengiriman_ids = document.getElementsByClassName("pengiriman_idx").value();
        var penerima_nama = $("#tr"+did+" .penerima_nama").html();
        pengiriman_ids: "95785ebd7bdf32bd2386289287",


        minimumInputLength: 1,
        allowClear: true,
        placeholder: "Cari No Resi",
        ajax: {
            dataType: "json",
            url: "'.$url.'/get-resi?pengiriman_id=",
            delay: 100,
            data: function(params) {
                return {
                    search: params.term,
                    pengiriman_id: pengiriman_ids
                }
            },
            processResults: function (data, page) {
                return {
                    results: data
                };
            }
        }
    });*/
});
