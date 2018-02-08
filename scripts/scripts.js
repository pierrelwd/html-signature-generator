$(function()
{

	$("template-selector").load(function(){
		    $select.append('<option value=' + key + '>' + value + '</option>');
	});


    $("#generate").click(function(){

    	var lastname = $("#lastname").val();
    	var firstname = $("#firstname").val();
    	var positionfr = $("#positionfr").val();
    	var positionen = $("#positionen").val();
    	var address = $("#address").val();
    	var zipcode = $("#zipcode").val();
    	var city = $("#city").val();
    	var email = $("#email").val();
    	var telephone = $("#telephone").val();
    	var mobilephone = $("#mobilephone").val();

    	var tpl = readTextFile('tpl/signature.tpl');
    	var signature = generateSignature(lastname, firstname, positionfr, positionen, address, zipcode, city, email, telephone, mobilephone, tpl);
    	$("#signature").val(signature);

    });

    $("#copy").click(function(){
        copy();
    });

	$("#clear").click(function(){
	   $("#lastname").val('');
	   $("#firstname").val('');
	   $("#positionfr").val('');
	   $("#positionen").val('');
	   $("#address").val('');
	   $("#zipcode").val('');
	   $("#city").val('');
	   $("#email").val('');
	   $("#telephone").val('');
	   $("#mobilephone").val('');
   });

	function readTextFile(file)
		{
			var final;
		    var rawFile = new XMLHttpRequest();
		    rawFile.open("GET", file, false);
		    rawFile.onreadystatechange = function ()
		    {
		        if(rawFile.readyState === 4)
		        {
		            if(rawFile.status === 200 || rawFile.status == 0)
		            {
		                var allText = rawFile.responseText;
		                final = allText
		            }
		        }
		    }
			rawFile.send(null);
			return final;
		}

	function generateSignature(lastname, firstname, positionfr, positionen, address, zipcode, city, email, telephone, mobilephone, data)
		{
			data = data.replace("$LASTNAME", lastname);
			data = data.replace("$FIRSTNAME", firstname);
			data = data.replace("$POSITIONFR",positionfr);
			data = data.replace("$POSITIONEN",positionen);
			data = data.replace("$ADDRESS",address);
			data = data.replace("$ZIPCODE",zipcode);
			data = data.replace("$CITY",city);
			data = data.replace("$EMAIL",email);
			data = data.replace("$TELEPHONE",telephone);
			data = data.replace("$MOBILE",mobilephone);
			return data;
		}
		
	function copy() 
		{
			var copyText = document.querySelector("#signature");
			copyText.select();
			document.execCommand("Copy");
		}	

});
