$(document).ready(function(){
    
    //on nav click when used for mobile (using icon bar)
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
    
    var aryRowVO = [];
    var cartItemCount = 0;
    
    var objProductItem = {};
    var aryProductItems = [];
    
    function loadJSON(jsonData, id){
        
        var jsonData = jsonData;
        
        console.log("LOAD JSON: " + id);
                    
        $.getJSON(jsonData, function(data) {

            var aryData = data.aryData;
            
            for(var i = 0; i < aryData.length; i++){
                var rowVO = {};
                rowVO.aryCol = [];

                for(var k = 0; k < aryData[i].aryCol.length; k++){
                    var objCol = {};
                    
                    objCol.id = aryData[i].aryCol[k].id;
                    objCol.label = aryData[i].aryCol[k].label;
                    objCol.desc = aryData[i].aryCol[k].desc;
                    objCol.imageSrc = aryData[i].aryCol[k].imageSrc;
                    objCol.price = aryData[i].aryCol[k].price;
                    objCol.isSale = aryData[i].aryCol[k].isSale;
                    
//                    console.log("label: " + objCol.label);
                    
                    rowVO.aryCol.push(objCol);
                }                    

                aryRowVO.push(rowVO);
            }
                        
            
            if(id != 'search_product'){
                setupDisplay(aryRowVO);    
            }else{
                if($('.search-box').val().length != 0){
                    console.log("search not null");
                    checkSearchItem(aryRowVO);
                }else{
                    $('#products-section').css('display','none');
                }
                
            }
        });
    }
    
    function checkSearchItem(aryRowVO){
        var aryRowVO = aryRowVO;
        var aryRow = [];
        var searchItem = $('.search-box').val();
        var searchCount = 0;
        var aryColSearch = [];
        
        for(var i = 0; i < aryRowVO.length; i++){
//            aryRow.push($('<div class="row"></div>').appendTo(".products-holder"));

            for(var k = 0; k < aryRowVO[i].aryCol.length; k++){
                
//                if(searchItem == aryRowVO[i].aryCol[k].label){
                if(aryRowVO[i].aryCol[k].desc.indexOf(searchItem) != -1){
                    searchCount++;
                    console.log("SEARCH ITEM: " + searchItem);
                    var priceClass = '';
                    if(aryRowVO[i].aryCol[k].isSale == "true"){
                        priceClass = "price sale";
                    }else{
                        priceClass = "price";
                    }

                    var col = $('<div class="col-md-3 col-sm-6 col-xs-12"><div class="product-item" id=' + aryRowVO[i].aryCol[k].id + ' data-toggle="modal" data-target="#addCartModal"><img src=' + aryRowVO[i].aryCol[k].imageSrc + ' alt="Product image"><h3>' + aryRowVO[i].aryCol[k].label + '</h3><div class=" ' + priceClass + '"><h4>' + aryRowVO[i].aryCol[k].price + '</h4></div><p>Buy Now</p></div></div>');
//                    col.appendTo(aryRow[i]);
                    aryColSearch.push(col);
                }      
            }                    
        }
        
        var row = $('<div class="row"></div>').appendTo(".products-holder");
        for(var p = 0; p < aryColSearch.length; p++){
            aryColSearch[p].appendTo(row);
        }
        
        if(searchCount == 0){
            $('.products-title').html('No Search Results');    
        }
        
        $(location).attr('href','#products-section');
        
        setupItemClick();
    }
    
    function setupDisplay(aryRowVO){
        var aryRowVO = aryRowVO;
        var aryRow = [];
        
        for(var i = 0; i < aryRowVO.length; i++){
            aryRow.push($('<div class="row"></div>').appendTo(".products-holder"));

            for(var k = 0; k < aryRowVO[i].aryCol.length; k++){
                
                var priceClass = '';
                if(aryRowVO[i].aryCol[k].isSale == "true"){
                    priceClass = "price sale";
                }else{
                    priceClass = "price";
                }
                
                var col = $('<div class="col-md-3 col-sm-6 col-xs-12"><div class="product-item" id=' + aryRowVO[i].aryCol[k].id + ' data-toggle="modal" data-target="#addCartModal"><img src=' + aryRowVO[i].aryCol[k].imageSrc + ' alt="Product image"><h3>' + aryRowVO[i].aryCol[k].label + '</h3><div class=" ' + priceClass + '"><h4>' + aryRowVO[i].aryCol[k].price + '</h4></div><p>Buy Now</p></div></div>');
                col.appendTo(aryRow[i]);
                       
            }                    
        }
        
        setupItemClick();
    }
    
    function setupItemClick(){
        $(".product-item").click(function(){
            
            //show modal add to cart
            console.log("item click");
//            $('addCartModal').modal('show');
            
            //get id of clicked item
            var id = $(this).attr('id');
            
            console.log("ID: " + id);
            
            //ready product item object to get item details on click get id, labe, price, quantity and total amount
            objProductItem = {};
            objProductItem.id = id;
            
            for(var i = 0; i < aryRowVO.length; i++){
                for(var k = 0; k < aryRowVO[i].aryCol.length; k++){
                    if(aryRowVO[i].aryCol[k].id == id){
                        
                        var label = aryRowVO[i].aryCol[k].label;
                        var desc = aryRowVO[i].aryCol[k].desc;
                        var price = aryRowVO[i].aryCol[k].price;
                        
                        var priceIndex = price.indexOf('.');
                        var actualPrice = price.substr(0, priceIndex);
                        var image = aryRowVO[i].aryCol[k].imageSrc;
                        
                        if(aryRowVO[i].aryCol[k].isSale == "true"){
                            $('.add-to-cart-label').html('(On Sale) - ' + label);
                        }else{
                            $('.add-to-cart-label').html(label);
                        }
                        
                        console.log("IMAGE: " + image);
                        
                        $('.add-to-cart-description').html(desc);
                        $('.add-to-cart-price').html('Price P' + actualPrice);
                        $('.total-amount').html('TOTAL AMOUNT - ' + actualPrice);
                        $('.image-detail-product').attr('src', image);
                        
                        console.log("image path: " + $('.image-detail-product').attr('src'));
                        
                        objProductItem.label = label;
                        objProductItem.price = actualPrice;
                        objProductItem.quantity = 1;
                        objProductItem.totalAmount = actualPrice;
                        objProductItem.image = image;
                        
                        break;
                    }
                }
            }
            
            $(".quantity-input").bind('keyup input', function(){
                var value = $(this).val();

                var totalAmount = actualPrice * value;
                var priceStr = 'TOTAL AMOUNT - ' + totalAmount;
                
//                console.log("TOTAL AMOUNT: " + priceStr);

                $('.total-amount').html(priceStr);
                
                objProductItem.quantity = value;
                objProductItem.totalAmount = totalAmount;
            });
            
            //on complete set items show detail holder
//            $('.main-product-detail-holder').show();
            
        });
        
        
    }
    
    $('.btn-brand').click(function(){
        
        var id = $(this).attr('id');
        var jsonPath = "";
        var prodTitle = "";
        
        switch(id){
            case '01':
                jsonPath = "data/soap_in_love.json";   
                prodTitle = "Soap In Love";
            break;
                
            case '02':
                jsonPath = "data/happy_organics.json";
                prodTitle = "Happy Organics";
            break;
                
            case '03':
                jsonPath = "data/green.json";
                prodTitle = "Green Tea";
            break;
                
            case 'search_product':
                jsonPath = "data/all_products.json";
                prodTitle = "All searched items";
            break;
        }
        
        //empty products holder always before creative thumbnails then clear aryRowVO
        $('.products-holder').empty();
        aryRowVO = [];
        loadJSON(jsonPath, id);
        
        $('.products-title').html(prodTitle);
        $('#products-section').css('display','block');
    });
    
    //on hide of add cart modal always reset the quantity to 1
    $('#addCartModal').on('hidden.bs.modal', function () {
        $('input[type=number]').val('1');
    });
    
    //on hide of view cart
    $('#viewCartModal').on('hidden.bs.modal', function () {
        $(".response").css("display","none");
    });
    
    //on hide of view cart
    $('#addCartModal').on('hidden.bs.modal', function () {
        $('.text-added-to-cart-response').css('display','none');
    });
    
    
    
    
    //on click button continue shopping - add to cart
    $('.btn-add-to-cart').click(function(){
        
        //on click continue shopping/add to cart push to array object product item
        checkSameValue(aryProductItems);        
        //$('#addCartModal').modal('hide');
        
    });
    
    function checkSameValue(val){
        var matchCount = 0;
        var aryProductItems = val;
        
        for(var i = 0; i < aryProductItems.length; i++){
            if(aryProductItems[i].label == objProductItem.label){
                
                var newTotalAmount = Number(aryProductItems[i].totalAmount) + Number(objProductItem.totalAmount);
                var newQuantity = Number(aryProductItems[i].quantity) + Number(objProductItem.quantity);
                aryProductItems[i].totalAmount = newTotalAmount;
                aryProductItems[i].quantity = newQuantity;
                
                matchCount++;
                break;
            }
        }
        
        if(matchCount == 0){
            console.log("push to array");
            aryProductItems.push(objProductItem);
        }
        
        cartItemCount = aryProductItems.length;
        $('.cart-count').html(cartItemCount);
        
        $('.text-added-to-cart-response').css('display','block');
    }
    
    
    //on click button view cart
    $('.btn-view-cart').click(function(){
        //$('viewCartModal').modal('show');
        buildTable();
    });
    
    function buildTable(){
        var aryRowTable = [];
        var aryColTable = [];
        var aryTotalAmount = [];
        var totalAmountPrice = 0;
        
        $('.table-cart-details').empty();
        $('<caption>List of items you added to your cart</caption>').appendTo('.table-cart-details');
        $('<tr><th colspan="2">Item</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>Remove</th></tr>').appendTo('.table-cart-details');
        
        for(var k = 0; k < cartItemCount; k++){
            
            aryRowTable.push($('<tr></tr>').appendTo('.table-cart-details'));
        }
        
        for(var i = 0; i < aryProductItems.length; i++){
            
            
            var colTable = $('<td><img src=' + aryProductItems[i].image + ' width="100" height="70" class="table-image-item"></td><td>' + aryProductItems[i].label + '</td><td>' + aryProductItems[i].price + '</td><td>' + aryProductItems[i].quantity + '</td><td>' + aryProductItems[i].totalAmount + '</td><td><button type="button" class="btn-remove-item" id=' + i + '>X</button></td>');
            
            aryTotalAmount.push(aryProductItems[i].totalAmount);

            aryColTable.push(colTable); 
        } 
        
        for(var p = 0; p < aryRowTable.length; p++){
            aryColTable[p].appendTo(aryRowTable[p]);   
        }
        
        for(var z = 0; z < aryTotalAmount.length; z++){
            var price = Number(aryTotalAmount[z]) + Number(totalAmountPrice);
            totalAmountPrice = Number(price);
        }
        
        $('<tr><td colspan="5"><h4>Total Amount - P' + totalAmountPrice + '</h4></td></tr>').appendTo('.table-cart-details');
        
        $('.btn-remove-item').click(function(){
            var id = $(this).attr('id');
            cartItemCount--;
            if(cartItemCount == 0){
                cartItemCount = 0;
            }
            
            $('.cart-count').html(cartItemCount);
            aryProductItems.splice(id,1);
            buildTable();
        });
        
        //for shipping details total amount to display
        $('.shipping-total-amount').text('P' + totalAmountPrice);
        
        setOrderSummaryDetails(aryProductItems, totalAmountPrice);
    }
    
    function showShippingDetails(){
        $('#shippingDetailsModal').modal('show');
    }
    
    function showCart(){
        $('#viewCartModal').modal('show');
    }
    
    $('.btn-proceed-checkout').click(function(){
        setTimeout(showShippingDetails, 500);
    });
    
    $('.btn-back-to-cart').click(function(){
        setTimeout(showCart, 500);
    });
    
    
    function setOrderSummaryDetails(val, totalAmountPrice){
        var aryProductItems = val;
        var totalAmountPrice = totalAmountPrice;
        
        $('.order-item-details').empty();
        
        for(var i = 0; i < aryProductItems.length; i++){
            
            var label = aryProductItems[i].label;
            var quantity = aryProductItems[i].quantity;
            var totalAmount = aryProductItems[i].totalAmount;
            
            var row = $('<tr></tr>').appendTo('.order-item-details');
            //var col = $('<td>' + label + ' x ' + quantity + '</td><td>' + totalAmount + '</td>');
            var col = $('<td>' + label + '<span class="order-item-multiplier"> x ' + quantity + '</span></td><td>' + totalAmount + '</td>');
            
            col.appendTo(row);
        } 
        
        $('<tr><td>Subtotal</td><td>' + totalAmountPrice + '</td></tr>').appendTo('.order-item-details');
        $('<tr><td>Total</td><td>' + totalAmountPrice + '</td></tr>').appendTo('.order-item-details');
                
    }
    
});








