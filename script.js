let _AllInput;
let _test = "เสียง ลือ เสียง เล่า อ้าง อัน ใด พี่ เอย\nเสียง ย่อม ยอ ยศ ใคร ทั่ว หล้า\nสอง เขือ พี่ หลับ ไหล ลืม ตื่น ฤๅ พี่\nสอง พี่ คิด เอง อ้า อย่า ใด้ ถาม เผือ";

$(document).ready(function () {

    _AllInput = $(".k-input");

    initialInput();

    load(_test);

});

function initialInput() {

    // check input key
    $(".k-input").keypress(function (event) {

        // press enter or space
        if (event.which == 13 || event.which == 32) {
            focusNextControl(this);
            event.preventDefault();
        }
        else if (event.which == 3656) //ไม้เอก
        {
            if (!($(this).parent().hasClass("k-1") || $(this).parent().hasClass("k-12")))
                event.preventDefault();
        }
        else if (event.which == 3657) //ไม้โท
        {
            if (!($(this).parent().hasClass("k-2") || $(this).parent().hasClass("k-12")))
                event.preventDefault();
        }
        else if (event.which == 3658 || event.which == 3683) //ไม้ตรี, จัตวา
        {
            event.preventDefault();
        }

    });

    // select all when focus
    $(".k-input").focus(function () {
        $(this).select();
    });

    //// set j-3 style
    // $(".j-3-input").change(function () {
    //     // console.log('change', $(this).parent().parent());
    //     // console.log('j3', row.find(".j-3-input"));
    //     let row = $(this).parent().parent();
    //     let j3 = row.find(".j-3-input");
    //     if (j3) {

    //         // get last not empty index
    //         let lastJ3Index = -1;
    //         $.each($(j3), function (index, value) {
    //             $(value).removeClass('j-3-alt');

    //             if ($(value).val())
    //                 lastJ3Index = index;
    //         });

    //         if(lastJ3Index!=-1)
    //         {
    //             j3.eq(lastJ3Index).addClass("j-3-alt");
    //             // console.log(j3.eq(lastJ3Index));
    //             // console.log(j3.get(lastJ3Index));
    //             // console.log(j3[lastJ3Index]);
    //         }
    //     }

    // });

}

function focusNextControl(current) {
    var index = _AllInput.index(current);
    _AllInput.eq(index + 1).focus();

}

function save() {
    // console.log('save', $("#main-part .k-section .k-input"));

    let result = "";
    $.each($("#main-part .k-section .k-input"), function (index, value) {
        let item = $(value);

        if (item.hasClass('k-space'))
            result += " ";

        if (item.hasClass('k-space-2'))
            result += "   ";

        if (item.hasClass('k-new-line'))
            result += "\n";

        if (item.hasClass('k-first'))
            result += "๏ ";



        result += item.val().trim();

        if (item.hasClass('k-last'))
            result += " ๚ะ";

        result = result.trim();

    });

    // console.log(result);
    $("#result").text(result);
}

function load(poem) {

    // replace new line with space
    poem = poem.replace(/\n/g, " ");
    // console.log(poem);

    // split word
    let words = poem.split(" ");

    // fill word
    $.each(_AllInput, function (index, item) {
        if (words.length > index)
            $(item).val(words[index]);
        else
            $(item).val("");

    });

}

function add() {
    // console.log('add', $("#part-2").html());
    $("#main-part").append($("#part-2").html());

    initialInput();

    // $.each(_AllInput, function (index, value) {
    //     let item = $(value);
    //     item.val(index);

    // });
}

function remove(element) {

    // console.log('remove', element);
    if(confirm("ต้องการลบบทนี้หรือไม่?"))
    {
        $(element).parent().parent().parent().parent().remove();
    }
}