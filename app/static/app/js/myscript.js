// $('.plus-cart').click(function() {
//     var id = $(this).attr('pid').toString();
//     var eml = this.parentNode.children[2]
//     console.log('pid=', id)
//     $.ajax({
//         type: 'GET',
//         url: '/pluscart',
//         data: {
//             prod_id: id
//         },
//         success: function(data) {
//             console.log('data = ', data);
//             eml.innerText = data.quantity
//             document.getElementById('amount').innerText = data.amount
//             document.getElementById('totalamount').innerText = data.totalamount
//         }
//     })
// })

$('.plus-cart').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('pid').toString();
    var quantityElement = $('#quantity' + id);
    console.log('pid=', id);
    $.ajax({
        type: 'GET',
        url: '/pluscart',
        data: {
            prod_id: id
        },
        success: function(data) {
            console.log('data = ', data);
            if (data.quantity !== undefined) {
                quantityElement.text(data.quantity);
            }
            if (data.amount !== undefined) {
                $('#amount').text('Rs. ' + data.amount);
            }
            if (data.totalamount !== undefined) {
                $('#totalamount').text('Rs. ' + data.totalamount);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error: ' + status + error);
        }
    });
});