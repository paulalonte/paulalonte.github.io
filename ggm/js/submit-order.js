$(document).ready(function(){
    
    function orderFormSubmit(){

        $("form.order-form").on("submit", function(){
            var errCtr = 0;
            var errStr = "";

            var that = $(this),
                url = that.attr("action"),
                method = that.attr("method"),
                data = {};

            that.find("[name]").each(function(index,value){
                var that = $(this),
                    name = that.attr("name"),
                    value = that.val();



                if(name == 'modePayment'){
                    var valPayment = $("input[name='modePayment']:checked").val();    
                    data[name] = valPayment;	
                }else if(name == 'deliveryArea'){
                    var valDelivery = $("input[name='deliveryArea']:checked").val();
                    data[name] = valDelivery;	    
                }else{
                    data[name] = value;
                }

                if(value == "" || value == null){
                    errCtr++;
                    if(name == 'dateOfPayment'){
                        name = 'date of payment';
                    }

                    errStr += "* " + name + " is required<br>";
                }

            });

            if(errCtr == 0){
                //send to php no error / valid form
                console.log(data);
                //bootbox.alert("Thank you " + data.fullname + ", your form has been successfully submitted");
                $(".response").html("Thank you " + data.fullname + ", your form has been successfully submitted");

                console.log("name: " + data.fullname);
                console.log("name: " + data.email);
                console.log("name: " + data.address);
                console.log("name: " + data.contact);
                console.log("name: " + data.deliveryArea);
                console.log("name: " + data.dateOfPayment);
                console.log("name: " + data.modePayment);

            }else{
                console.log("error count");
                $(".response").html(errStr);
                $(".response").css("display","block");
            }

            return false;
        });
    }

    orderFormSubmit();

});