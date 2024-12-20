document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form submission

    // Get form data
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;

    var message = "";

    // Check gender and generate the appropriate WhatsApp link
    if (gender === "male") {
        message = "مرحبًا " + name + "! شكراً لتسجيلك. يمكنك الدخول إلى رابط الواتساب الخاص بك من خلال الرابط التالي: ";
        message += "<a href='https://chat.whatsapp.com/KlQnP58jm1fFaEvUH97eEP' target='_blank'>رابط الواتساب (رجال)</a>";
    } else if (gender === "female") {
        message = "مرحبًا " + name + "! شكراً لتسجيلك. يمكنك الدخول إلى رابط الواتساب الخاص بك من خلال الرابط التالي: ";
        message += "<a href='https://chat.whatsapp.com/D0F5HmlHCD4JBqxQgL46qq' target='_blank'>رابط الواتساب (نساء)</a>";
    } else {
        message = "الرجاء تحديد الجنس.";
    }

    // Display the message
    document.getElementById("message").innerHTML = message;
});
