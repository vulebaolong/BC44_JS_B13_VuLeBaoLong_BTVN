// ===================================================================
// button for phone
// ===================================================================
const btnNav = document.querySelector(".btn_nav");
const contentLeft = document.querySelector(".content_left");
btnNav.addEventListener("click", function () {
    contentLeft.classList.toggle("show_content_left");
});

/**
 * Format number width comma
 */
function formatCurrency(num) {
    const locale = navigator.language;
    return new Intl.NumberFormat(locale).format(num);
}

// ===================================================================
// Change theme dark or light
// ===================================================================
const toggleTheme = document.querySelector(".toggle_theme");
const toggleThemeSun = document.querySelector(".toggle_theme-sun");
const toggleThemeMoon = document.querySelector(".toggle_theme-moon");
const htmlEl = document.querySelector("html");
toggleTheme.addEventListener("click", (e) => {
    console.log(e.target.classList);
    function toggleDisplay(params) {
        toggleThemeSun.classList.toggle("hide");
        toggleThemeMoon.classList.toggle("hide");
    }
    if (e.target.classList.contains("toggle_theme-sun")) {
        toggleDisplay();
        htmlEl.attributes["data-bs-theme"].value = "light";
    }
    if (e.target.classList.contains("toggle_theme-moon")) {
        toggleDisplay();
        htmlEl.attributes["data-bs-theme"].value = "dark";
    }
    // e.target.closest(".toggle_theme-sun")
});

// ===================================================================
// Bài 1 tính tiền lương nhân viên
// ===================================================================
// INPUT
const calWageForm = document.querySelector(".calWage");
const wageDay = document.querySelector(".calWage_input-wageDay");
const numDay = document.querySelector(".calWage_input-numDay");
const calWageResult = document.querySelector(".calWage_result");

// HANDLE
function calWage(num1, num2) {
    return +num1.split(",").join("") * num2;
}

// OUTPUT
calWageForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = calWage(wageDay.value, +numDay.value);
    const resultFormat = formatCurrency(result);
    calWageResult.textContent = `Kết quả: ${resultFormat} VNĐ`;
});
new Cleave(".calWage_input-wageDay", {
    numeral: true,
});

// ===================================================================
// Bài 2 Tính giá trị trung bình
// ===================================================================
// INPUT
const AveNum = [...document.querySelectorAll(".calAve_input")];
const calAveForm = document.querySelector(".calAve");
const calAveResult = document.querySelector(".calAve_result");

// HANDLE
function calAve(arrNum) {
    const totalNum = arrNum.reduce((accumulator, current) => {
        return accumulator + current;
    });
    const result = totalNum / arrNum.length;
    return result;
}

// OUTPUT
calAveForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const arrNum = AveNum.map((e) => {
        return +e.value;
    });
    const result = calAve(arrNum);
    calAveResult.textContent = `Kết quả: ${result}`;
});

// ===================================================================
// Bài 3 Quy đổi tiền
// ===================================================================
// INPUT
const EXCHANGE_RATE = 23500;
const calConverForm = document.querySelector(".calConver");
const calConverInput = document.querySelector(".calConver_input");
const calConverResult = document.querySelector(".calConver_result");

// HANDLE
function calConver(num) {
    return num * EXCHANGE_RATE;
}

// OUTPUT
calConverForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = calConver(+calConverInput.value);
    const resultFormat = formatCurrency(result);
    calConverResult.textContent = `Kết quả: ${resultFormat} VNĐ`;
});

// ===================================================================
// Bài 4 Tính diện tích, chu vi hình chữ nhật
// ===================================================================
// INPUT
const calPeriAreaForm = document.querySelector(".calPeriArea");
const calPeriAreaLength = document.querySelector(".calPeriArea_input-length");
const calPeriAreaWidth = document.querySelector(".calPeriArea_input-width");
const calPeriAreaResult = document.querySelector(".calPeriArea_result");

// HANDLE
// perimeter Chu vi: (dài + rộng) x 2
function calPerimeter(length, width) {
    return (length + width) * 2;
}
// area Diện tích: dài x rộng
function calArea(length, width) {
    return length * width;
}

// OUTPUT
calPeriAreaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const resultPerimete = calPerimeter(
        +calPeriAreaLength.value,
        +calPeriAreaWidth.value
    );
    const resultArea = calArea(+calPeriAreaLength.value, +calPeriAreaWidth.value);
    calPeriAreaResult.textContent = `Kết quả => Diện tích: ${resultArea} / Chu vi: ${resultPerimete}`;
});

// ===================================================================
// Bài 5 Tính tổng 2 ký số
// ===================================================================
// INPUT
const calSumDigitsForm = document.querySelector(".calSumDigits");
const calSumDigitsInput = document.querySelector(".calSumDigits_input");
const calSumDigitsResult = document.querySelector(".calSumDigits_result");

//HANDLE
function calSumDigits(num) {
    const a = Math.trunc(num / 10);
    const b = num % 10;

    return a + b;
}
function calSumDigits2(num) {
    const result = [...num.toString()].reduce((e, i) => {
        return +e + +i;
    });
    return result;
}

// OUTPUT
calSumDigitsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = calSumDigits2(+calSumDigitsInput.value);
    calSumDigitsResult.textContent = `Kết quả ${result}`;
});

// ===================================================================
// Change color theme
// ===================================================================
const inputChangeColor = document.querySelector(".form-range");
const root = document.querySelector(":root");
inputChangeColor.addEventListener("input", function name() {
    root.style.setProperty("--hue", inputChangeColor.value);
});
