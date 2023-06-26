const store = (reducer) => {
    let state;
    const fetchState = () => state;
    
    const publish = (action) => {
        state = reducer(state, action);
    };

    //to get the state after an event is registered
    const getState = () => fetchState();

    return {
        getState,
        publish
    };
};


const reducer = (state = 'Normal', action) => {
    switch (action.type) {
        case 'ADD':
            if (state === 'Minimum reached') {
                return 'Normal';
            } else if (state === 'Normal' && parseInt(number.value) + 1 >= MAX_NUMBER) {
                return 'Maximum reached';
            } else {
                return 'Normal';
            }
        case 'MINUS':
            if (state === 'Maximum reached') {
                return 'Normal';
            } else if (state === 'Normal' && parseInt(number.value) - 1 <= MIN_NUMBER) {
                return 'Minimum reached';
            } else {
                return 'Normal';
            }
        case 'RESET':
            return 'Normal';
        default:
            return state;
    }
};

const myStore = store(reducer);

const MAX_NUMBER = 10;
const MIN_NUMBER = -10;


const add = document.querySelector('[data-add-sign]');
const number = document.querySelector('[data-number-input]')
const subtract = document.querySelector('[data-subtract-sign]')
const reset= document.querySelector('[data-reset-input]')


const checkPassedLimits = (number, newValue) => {

    if (number <= MIN_NUMBER) {
        add.disabled = false;
    }
    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
        subtract.disabled = false;
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
        add.disabled = false;
    }
}

add.addEventListener("click", () => {
    myStore.publish({ type: 'ADD' });
    console.log(myStore.getState())   

    const newValue = parseInt(number.value) + 1;
    number.value = newValue
    checkPassedLimits(number.value, newValue)
})

subtract.addEventListener('click', () => {
    myStore.publish({ type: 'MINUS' });
    console.log(myStore.getState())

    const newValue = parseInt(number.value) - 1;
    number.value = newValue
    checkPassedLimits(number.value, newValue)
})

reset.addEventListener('click', () => {
    myStore.publish({ type: 'RESET' });
    console.log(myStore.getState())

    number.value = 0
    popup.style.display = 'block';

    // Hide the popup after 2 seconds
    setTimeout(function () {
        popup.style.display = 'none';
    }, 1000);
})
