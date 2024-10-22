var weekData = [
    {
        "day-name": "Mon",
        "date": "JUL 01",
        "day-color": "#000000",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    },
    {
        "day-name": "Tue",
        "date": "JUL 02",
        "day-color": "#000000",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    },
    {
        "day-name": "Wed",
        "date": "JUL 03",
        "day-color": "#000000",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    },
    {
        "day-name": "Thu",
        "date": "JUL 04",
        "day-color": "#000000",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    },
    {
        "day-name": "Fri",
        "date": "JUL 05",
        "day-color": "#000000",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    },
    {
        "day-name": "Sat",
        "date": "JUL 06",
        "day-color": "#FF3232",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    },
    {
        "day-name": "Sun",
        "date": "JUL 07",
        "day-color": "#FF3232",
        "lunch-break": [
            {"text": "15 Mins", "value": "15"},
            {"text": "30 Mins", "value": "30"},
            {"text": "45 Mins", "value": "45"},
            {"text": "60 Mins", "value": "60"}
        ],
        "reason": [
            {"text": "Reason 1", "value": "1"},
            {"text": "Reason 2", "value": "2"},
            {"text": "Reason 3", "value": "3"},
            {"text": "Reason 4", "value": "4"}
        ],
        "total-hours": "30 Mins"
    }
];



// document.addEventListener('DOMContentLoaded', () => {
//      displayData();
// });

function showTableData(value) 
{
    const selectedValueElement = document.getElementById('selected-value');
    selectedValueElement.textContent = value; // Update the displayed selected text

  if(value != null)
    {
        document.getElementById('table-section-container').classList.add('d-block');
        document.getElementById('table-section-container').classList.remove('d-none');
        isAnyButtonDisabled();
        showTimePicker();
        showLunchTimePicker()
        // displayData();
    }
    if(value == null || value == 'null')
    {
        document.getElementById('table-section-container').classList.remove('d-block');
        document.getElementById('table-section-container').classList.add('d-none');
    }

}

function showTimePicker () {
    for (let i = 1; i <= 7; i++) {
        (function (index) {
            $(`#clockin-timepicker${index}`).timepicker({
                timeFormat: 'h:mm p',
                interval: 5,
                minTime: new Date(0, 0, 0, 8, 0, 0),
                maxTime: new Date(0, 0, 0, 18, 0, 0),
                startTime: new Date(0, 0, 0, 8, 0, 0),
                dynamic: false,
                dropdown: true,
                scrollbar: true,
                change: function (time) {
                    const clockInTime = new Date(time).getHours() + ':' + new Date(time).getMinutes();
                    const textInput = document.getElementById(`clockout-timepicker${index}`);
                    textInput.disabled = false;
                    $(`#clockout-timepicker${index}`).timepicker({
                        timeFormat: 'h:mm p',
                        interval: 5,
                        minTime: String(clockInTime),
                        maxTime: new Date(0, 0, 0, 18, 0, 0),
                        startTime: new Date(0, 0, 0, 8, 0, 0),
                        dynamic: false,
                        dropdown: true,
                        scrollbar: true,
                        change: function (time) {
                            var startTime = $(`#clockin-timepicker${index}`).val();
                            var endTime = $(`#clockout-timepicker${index}`).val();

                            let [startHours, startMinutes] = startTime.split(':');
                            let [endHours, endMinutes] = endTime.split(':');

                            startTime = String(startHours).padStart(2, '0')+':'+startMinutes; // Ensure hours are two digits
                            endTime = String(endHours).padStart(2, '0')+':'+endMinutes; // Ensure hours are two digits

                            var singleDayWorkingHours = calculateWorkingHours(startTime, endTime);
                            document.getElementById(`working-hours${index}`).textContent = singleDayWorkingHours;
                            document.getElementById('total_working_hours').textContent = calculateTotalWorkingHours();
                            checkReasonDropdown(singleDayWorkingHours, index);

                        }
                    });
                }
            });
        })(i);
    }
}

function showLunchTimePicker () {
    for (let i = 1; i <= 7; i++) {
        (function (index) {
            $(`#lunchin-timepicker${index}`).timepicker({
                timeFormat: 'h:mm p',
                interval: 5,
                minTime: new Date(0, 0, 0, 8, 0, 0),
                maxTime: new Date(0, 0, 0, 18, 0, 0),
                startTime: new Date(0, 0, 0, 8, 0, 0),
                dynamic: false,
                dropdown: true,
                scrollbar: true,
                change: function (time) {
                    const lunchinTime = new Date(time).getHours() + ':' + new Date(time).getMinutes();
                    const textInput = document.getElementById(`lunchout-timepicker${index}`);
                    textInput.disabled = false;
                    $(`#lunchout-timepicker${index}`).timepicker({
                        timeFormat: 'h:mm p',
                        interval: 5,
                        minTime: String(lunchinTime),
                        maxTime: new Date(0, 0, 0, 18, 0, 0),
                        startTime: new Date(0, 0, 0, 8, 0, 0),
                        dynamic: false,
                        dropdown: true,
                        scrollbar: true,
                        change: function (time) {
                            var startTime = $(`#lunchin-timepicker${index}`).val();
                            var endTime = $(`#lunchout-timepicker${index}`).val();

                            let [startHours, startMinutes] = startTime.split(':');
                            let [endHours, endMinutes] = endTime.split(':');

                            startTime = String(startHours).padStart(2, '0')+':'+startMinutes; // Ensure hours are two digits
                            endTime = String(endHours).padStart(2, '0')+':'+endMinutes; // Ensure hours are two digits

                            // var singleDayWorkingHours = calculateWorkingHours(startTime, endTime);
                            // document.getElementById(`working-hours${index}`).textContent = singleDayWorkingHours;
                            // document.getElementById('total_working_hours').textContent = calculateTotalWorkingHours();
                            // checkReasonDropdown(singleDayWorkingHours, index);

                        }
                    });
                }
            });
        })(i);
    }
}

function checkReasonDropdown(workingHours, index)
{
          var html = ` <div class="custom-select-table custom-select-table-reason-tab">
                  <div class="select" id="custom-leave-type-list">
                    <span id="selected-value-reason-${index}">Select</span>
                  </div>
                  <input type="hidden" name="selectedValue" id="hidden-input" />
                  <ul class="dropdown-menu" id="dropdown-menu"> 
                    <li value="CCL" onclick="selectedReason('CCL - Child Care Leave',${index})">CCL - Child Care Leave</li>
                    <li value="FML" onclick="selectedReason('FML - Family Medical Leave',${index})">FML - Family Medical Leave</li>
                    <li value="LWOP" onclick="selectedReason('LWOP - Leave Without Pay',${index})">LWOP - Leave Without Pay</li>
                    <li value="ML" onclick="selectedReason('ML - Military Leave',${index})">ML - Military Leave</li>
                    <li value="PPL" onclick="selectedReason('PPL - Paid Parental Leave',${index})">PPL - Paid Parental Leave</li>
                    <li value="WC" onclick="selectedReason('WC - Workers Compensation',${index})">WC - Worker's Compensation</li>
                  </ul>
                </div> `;

                if (workingHours < 8) {
                    var reasonContainer = document.getElementById(`reason-container${index}`);
                    if (!reasonContainer.querySelector('.custom-select-table-reason-tab')) {
                        reasonContainer.insertAdjacentHTML('beforeend', html);
                        document.getElementById('reason-col-heading').classList.add('d-block');
                    }
                } else {                    
                    var reasonContainer = document.getElementById(`reason-container${index}`);
                    reasonContainer.innerHTML = ''; // Remove the HTML
                    document.getElementById('reason-col-heading').classList.remove('d-block');
                }
}


function selectedReason(value,index) {
    const selectedValueElement = document.getElementById(`selected-value-reason-${index}`);
    selectedValueElement.textContent = value; // Update the displayed selected text
}


function clockTime(value,index) {
    const selectedValueElement = document.getElementById(`selected-value-lunch-${index}`);
    selectedValueElement.textContent = value; // Update the displayed selected text
}


function convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
}

function calculateWorkingHours(startTime, endTime) {    
   
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const formattedDate = `${year}-${month}-${day}`; // format changed to be compatible with Date constructor
  
      startTime = convertTime12to24(startTime);
      endTime = convertTime12to24(endTime);
  
      var timeStart = new Date(`${formattedDate}T${startTime}:00`);
      var timeEnd = new Date(`${formattedDate}T${endTime}:00`);
  
      var hourDiff = (timeEnd - timeStart) / (1000 * 60 * 60);
      const totalWorkingHours = hourDiff.toFixed(2);
  
      return totalWorkingHours;
}

// Example usage:
// const startTime = "09:00 AM";
// const endTime = "05:00 PM";
// const workingHours = calculateWorkingHours(startTime, endTime);
// console.log(`Working hours: ${workingHours}`);


function calculateTotalWorkingHours()
{
    var total_hours = 00;
    console.log('total_hours');
    console.log(total_hours);
    const workingHoursCols = document.querySelectorAll('.working-hours-col');
    for (let singleDay of workingHoursCols) {
        console.log('singleDay.textContent');
        console.log(parseFloat(singleDay.textContent));
        total_hours+=parseFloat(singleDay.textContent);
    }
    console.log('after total_hours');
    console.log(total_hours);
    return total_hours.toFixed(2);
}

// $('#clockin-timepicker1').on('change', function() {
//     const value = $(this).val();
//     $('#output').text('Text Area changed to: ' + value);
// });



function displayData() {
    console.log(weekData);

    // Create and append the items

    // const itemsContainer = document.getElementById('week-data');
    // data.forEach(item => {
    //     const itemDiv = document.createElement('div');
    //     itemDiv.className = 'item';
    //     itemDiv.textContent = `${item.name}: ${item.value}`;
    //     itemsContainer.appendChild(itemDiv);
    // });
}

function changeSubmitButtonState(value)
{
    console.log('changeSubmitButtonState');
    console.log(value);
    console.log(value.checked);
    if(value.checked)
    {
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('submit-btn').classList.remove('btn-disabled');
    }
    else
    {
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').classList.add('btn-disabled');
    }
}