$(function(){
  




// 切換點選的清單跟顏色
$('#down_list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

// 切換清單顯示區塊
$('.d-dp').on('click',function(){
    showLi($(this).index());
    // alert($(this).index());
})
var showLi = (i) => {
    $('.d-show').addClass('d-none');
    $('.nav-link').removeClass('active');
    if(i !== null){
        $('.d-show').eq(i).removeClass('d-none');
        $('.nav-link').eq(i).addClass('active');
    }
}









})



















