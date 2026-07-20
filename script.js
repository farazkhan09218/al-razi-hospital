// ================= BACK TO TOP BUTTON =================

const topBtn = document.getElementById("topBtn");

 window.addEventListener("scroll", function () {

     if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
       topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ================= AOS =================

AOS.init({

    duration:1000,
    once:true,

});
// ================= PRELOADER =================

 window.addEventListener("load", function () {

     document.getElementById("preloader").style.display = "none";

 });
 // ================= APPOINTMENT TO WHATSAPP =================

document.getElementById("appointmentForm").addEventListener("submit", function(e){

    e.preventDefault();

    let patientName = document.getElementById("patientName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let reason = document.getElementById("reason").value;
    let notes = document.getElementById("notes").value;

    let message =
`🏥 *New Appointment Request*

👤 Patient Name: ${patientName}

🎂 Age: ${age}

🚻 Gender: ${gender}

📞 Mobile: ${phone}

📧 Email: ${email}

📅 Appointment Date: ${date}

🩺 Reason:
${reason}

📝 Additional Notes:
${notes}`;

    let whatsappNumber = "923281024791";

    let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

});