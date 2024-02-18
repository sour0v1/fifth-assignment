console.log('added successfully');
// for utility
function selectSeat(elementId) {
    // add color
    const seatElementId = document.getElementById(elementId);
    seatElementId.classList.add('bg-[#1DD100]');
    seatElementId.classList.remove('bg-gray-100');
    // reduce seat no
    const getSeatElement = document.getElementById('seat');
    const getSeatElementText = getSeatElement.innerText;
    const getSeatElementValue = parseInt(getSeatElementText);
    console.log(getSeatElementValue);
    getSeatElement.innerText = getSeatElementValue - 1;

    // display ticket
    const getMainSeatDiv = document.getElementById('main-seat-div');
    const createSitDiv = document.createElement('div');
    createSitDiv.classList.add('flex');
    createSitDiv.classList.add('justify-between');
    // 1
    const createSeatElement1 = document.createElement('p');
    createSeatElement1.innerText = seatElementId.innerText;
    // 2
    const createSeatElement2 = document.createElement('p');
    createSeatElement2.innerText = 'Economy';
    // 3
    const createSeatElement3 = document.createElement('p');
    createSeatElement3.innerText = '550';
    // append to seat div
    createSitDiv.appendChild(createSeatElement1);
    createSitDiv.appendChild(createSeatElement2);
    createSitDiv.appendChild(createSeatElement3);
    console.log(createSitDiv);
    getMainSeatDiv.appendChild(createSitDiv);

    // increase seat no
    const getSeatNoElement = document.getElementById('seat-count');
    const getSeatNoElementText = getSeatNoElement.innerText;
    const getSeatNoElementValue = parseInt(getSeatNoElementText);
    getSeatNoElement.innerText = getSeatNoElementValue + 1;
    // console.log(getSeatNoElementText);
    // console.log(getSeatNoElementValue);

    // limit seat
    if (getSeatNoElementText === '3') {
        // window.alert('You can book only 4 seat');
        const getAllSeat = document.getElementsByClassName('inline-block');
        // enable coupon button
        const getCouponBtnElement = document.getElementById('coupon-btn');
        getCouponBtnElement.disabled = false;

        for (let i of getAllSeat) {
            i.onclick = null;
            console.log(getSeatNoElementText);
        }

    }
    // calculate total ticket price
    const getTotalPriceElement = document.getElementById('total-price');
    const getTotalPriceElementText = getTotalPriceElement.innerText;
    const getTotalPriceElementValue = parseInt(getTotalPriceElementText);
    const totalPrice = getTotalPriceElementValue + 550;
    getTotalPriceElement.innerText = totalPrice;

    // calculate grand total ticket price
    const getGrandTotalPriceElement = document.getElementById('grand-total');
    const getGrandTotalPriceElementText = getGrandTotalPriceElement.innerText;
    const getGrandTotalPriceElementValue = parseInt(getGrandTotalPriceElementText);
    const grandTotalPrice = getGrandTotalPriceElementValue + 550;
    getGrandTotalPriceElement.innerText = grandTotalPrice;

    // apply coupon
    const getCouponBtnElement = document.getElementById('coupon-btn');
    getCouponBtnElement.addEventListener('click', function () {
        const getCouponInputElement = document.getElementById('coupon-input');
        const getCouponInputElementValue = getCouponInputElement.value;
        if (getCouponInputElementValue === 'NEW15') {
            getGrandTotalPriceElement.innerText = totalPrice - (grandTotalPrice * 0.15);
            getCouponInputElement.classList.add('hidden');
            document.getElementById('demo').classList.add('hidden');
            getCouponBtnElement.classList.add('hidden')

        }
        else if (getCouponInputElementValue === 'Couple20') {
            getGrandTotalPriceElement.innerText = totalPrice - (grandTotalPrice * 0.2);
            getCouponInputElement.classList.add('hidden');
            document.getElementById('demo').classList.add('hidden');
            getCouponBtnElement.classList.add('hidden');
        }
        else {
            document.getElementById('demo').innerText = 'Empty or Invalid Coupon';
        }
    })

}
// ------------------------------------------

/* // order submission
const getPassengerNameInput = document.getElementById('passenger-input');
const getPassengerNameInputValue = getPassengerNameInput.value;
const getPhoneInput = document.getElementById('phone-input');
const getPhoneInputValue = getPhoneInput.value;
const getSubmitBtn = document.getElementById('submit-btn');

getPassengerNameInput.addEventListener('keyup', function (event) {
    const passengerKeyValue = event.target.value;
    const passengerKeyValueLength = event.target.value.length;
    // console.log(passengerKeyValue);
    // console.log(passengerKeyValueLength);

    // const getSeat = document.getElementById('seat-count').innerText;
    // const seat = parseInt(getSeat);
    // if(passengerKeyValueLength >= 1 && seat >= 1){
    //     getSubmitBtn.disabled = false;
    // }

})

const getSeat = document.getElementById('seat-count').innerText;
const seat = parseInt(getSeat);
if (passengerKeyValueLength >= 1 && seat >= 1) {
    getSubmitBtn.disabled = false;
} */