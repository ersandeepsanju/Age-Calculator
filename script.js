
/* Function call on Today button click */
function callDate1() {
    var currDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    document.getElementById("dob").value = currDate;
}

/* Function call on Today button click */
function callDate2() {
    var currDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    document.getElementById("cDate").value = currDate;
}

/* Function call on Calculate button click */
function ageCalculator() {

    /* Get both input fields value into variables */
    var dob = document.getElementById("dob").value;
    var cDate = document.getElementById("cDate").value;


    /* Check for empty input fields */
    if (dob == null || dob == '' || cDate == null || cDate == '') {
        return false;
    }

    /* Get Year, Month, and Date value for DOB */
    var y1 = (new Date(dob)).getFullYear();
    var m1 = (new Date(dob)).getMonth();
    var d1 = (new Date(dob)).getDate();

    /* Get Year, Month, and Date value for Current Date */
    var y2 = (new Date(cDate)).getFullYear();
    var m2 = (new Date(cDate)).getMonth();
    var d2 = (new Date(cDate)).getDate();

    /* Declare variables */
    var Days, Months, Years;

    var demo = 0;

    /* Days difference algorithm */
    if (d2 < d1) {
        if (m2 == 0 || m2 == 2 || m2 == 4 || m2 == 6 ||
            m2 == 7 || m2 == 9 || m2 == 11) {
            demo = 31;
            d2 = d2 + 31;
        } else if (m2 == 3 || m2 == 5 || m2 == 8 || m2 == 10) {
            demo = 30;
            d2 = d2 + 30;
        } else if (m2 == 1 && leapYeaar(y2)) {
            demo = 29;
            d2 = d2 + 29;
        } else {
            demo = 28;
            d2 = d2 + 28;
        }

        Days = d2 - d1;
        m2 = m2 - 1;
    } else {
        Days = d2 - d1;
    }

    /* Months difference algorithm */
    if (m2 < m1) {
        Months = (m2 + 12) - m1;
        y2 = y2 - 1;
    } else {
        Months = m2 - m1;
    }

    /* Years difference */
    Years = y2 - y1;

    /* Display result on screen on result section */

    document.getElementById("result").innerHTML = Years +
        " Years,  " + Months + " Months,  and " + Days + " Days";

}

/* Functino to check for Leap Year */
function leapYeaar(currYear) {

    if (year % 400 == 0)
        return true;

    if (year % 100 == 0)
        return false;

    if (year % 4 == 0)
        return true;
    return false;
}