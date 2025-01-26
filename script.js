let doctors = [
  {
    id:1,
    name: 'Dahir Mohamud Ali',
    image:'./images/doc1.png',
    speciality: 'General physician',
    fee:"$50",
    year:'4 Years'
  },
  {
    id:2,
    name: 'Dr. Emily Larson',
    image:'./images/doc2.png',
    speciality: 'Gynecologist',
    fee:"$40",
    year:'5 Years'
  },
  {
    id:3,
    name: 'Dr. Sarah Patel',
    image:'./images/doc3.png',
    speciality: 'Dermatologist',
    fee:"$60",
    year:'6 Years'
  },
  {
    id:4,
    name: 'Dr Christopher Lee',
    image:'./images/doc4.png',
    speciality: 'Pediatricians',
    fee:"$30",
    year:'3 Years'
  },
  {
    id:5,
    name: 'Dr. Jennifer Garcia',
    image:'./images/doc5.png',
    speciality: 'Neurologist',
    fee:"$50",
    year:'5 Years'
  },
  {
    id:6,
    name: 'Dr. Andrew Williams',
    image:'./images/doc6.png',
    speciality: 'Gastroenterologist',
    fee:"$70",
    year:'8 Years'
  },
  {
    id:7,
    name: 'Dr. Christopher Davis',
    image:'./images/doc7.png',
    speciality: 'General physician',
    fee:"$80",
    year:'9 Years'
  },
  {
    id:8,
    name: 'Dr. Timothy White',
    image:'./images/doc8.png',
    speciality: 'Gynecologist',
    fee:"$25",
    year:'2 Years'
  },
  {
    id:9,
    name: 'Dr. Ava Mitchel',
    image:'./images/doc9.png',
    speciality: 'Dermatologist',
    fee:"$70",
    year:'6 Years'
  },
  {
    id:10,
    name: 'Dr. Jeffrey King',
    image:'./images/doc10.png',
    speciality: 'Pediatricians',
    fee:"$75",
    year:'7 Years'
  },
  {
    id:11,
    name: 'Dr. Zoe Kelly',
    image:'./images/doc11.png',
    speciality: 'Neurologist',
    fee:"$35",
    year:'3 Years'
  },
  {
    id:12,
    name: 'Dr. Patrick Harris',
    image:'./images/doc12.png',
    speciality: 'Gastroenterologist',
    fee:"$45",
    year:'4 Years'
  },
  {
    id:13,
    name: 'Dr. Chloe Evans',
    image:'./images/doc13.png',
    speciality: 'General physician',
    fee:"$55",
    year:'5 Years'
  },
  {
    id:14,
    name: 'Dr. Ryan Martinez',
    image:'./images/doc14.png',
    speciality: 'Gynecologist',
    fee: "$90",
    year:'9 Years'
  },
  {
    id:15,
    name: 'Dr. Amelia Hill',
    image:'./images/doc15.png',
    speciality: 'Dermatologist',
    fee:"$42",
    year:'4 Years'
  },
  {
    id:16,
    name: 'Abdishakur Suleiman',
    image:'./images/doc15.png',
    speciality: 'Gynecologist',
    fee:"$60",
    year:'6 Years',
    about:"abdihsdfhlkasdhjflasdklhlfgashjldgf"
  },
]
if(window.location.pathname.includes('index.html')){
  let doctorsBoxes = document.querySelector('#doctorsBoxes');
  doctors.forEach((doc,index)=>{
    if(index < 10){
      let box = document.createElement('div');
    box.setAttribute('id','box');
    let docImg = document.createElement('img');
    docImg.setAttribute('src', doc.image);
    let docAvailability = document.createElement('p');
    docAvailability.setAttribute('id','docAvailability');
    docAvailability.innerHTML = '<span></span> Available';

    let docName = document.createElement('h3');
    docName.textContent = doc.name;
    let docSpeciality = document.createElement('p');
    docSpeciality.setAttribute('id', 'docSpeciality');
    docSpeciality.textContent = doc.speciality;

    //apppends childs
    box.appendChild(docImg);
    box.appendChild(docAvailability);
    box.appendChild(docName);
    box.appendChild(docSpeciality);

    box.addEventListener('click', () => {
      localStorage.setItem('selectedDoctorId', doc.id); // Store doctor id in localStorage
      window.location.href = './profile.html'; // Navigate to profile.html
    });

    doctorsBoxes.appendChild(box);
    }
  }) 
}

if(window.location.pathname.includes('allDoctors.html')){
  let allDoctorsBoxes = document.querySelector('#allDoctorsBoxes');
  doctors.forEach((doc)=>{
    let box = document.createElement('div');
    box.setAttribute('class','box');
    let docImg = document.createElement('img');
    docImg.setAttribute('src', doc.image);
    let docAvailability = document.createElement('p');
    docAvailability.setAttribute('id','docAvailability');
    docAvailability.innerHTML = '<span></span> Available';

    let docName = document.createElement('h3');
    docName.textContent = doc.name;
    let docSpeciality = document.createElement('p');
    docSpeciality.setAttribute('id', 'docSpeciality');
    docSpeciality.textContent = doc.speciality;

    //apppends childs
    box.appendChild(docImg);
    box.appendChild(docAvailability);
    box.appendChild(docName);
    box.appendChild(docSpeciality);

    box.addEventListener('click', () => {
      localStorage.setItem('selectedDoctorId', doc.id); // Store doctor id in localStorage
      window.location.href = './profile.html'; // Navigate to profile.html
    });

    allDoctorsBoxes.appendChild(box);
  })
  function selectedSpeciality(speciality,btn) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      let boxSpeciality = box.querySelector('#docSpeciality').textContent;
      if (speciality === boxSpeciality) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
    let btnSpecialities = document.querySelectorAll('.btnSpeciality');
    btnSpecialities.forEach((allBtns)=>{
      allBtns.style.background ='white';
      allBtns.style.color ='black';
    })
    btn.style.backgroundColor ='rgb(75, 116, 251)';
    btn.style.color = 'white';
    
  }
}

if(window.location.pathname.includes('profile.html')){
  let displayDoctorName = document.getElementById('displayDoctorName');
  let displayDoctorSpeciality = document.getElementById('displayDoctorSpeciality');
  let displayDoctorAbout = document.getElementById('displayDoctorAbout');
  let displayDoctorAppFee = document.getElementById('displayDoctorAppFee');
  let displayDoctorImage = document.getElementById('displayDoctorImage');
  let years = document.getElementById('years');
  let btnAppointment = document.getElementById('btnAppointment');
  
  let doctorsBoxes = document.getElementById('doctorsBoxes'); // Container for other doctors with same specialty
  
  let doctorId = localStorage.getItem('selectedDoctorId');
  if(doctorId){
    let doctor = doctors.find((doc) => {
      return doc.id === parseInt(doctorId);
    });
    
    if(doctor){
      // Display the selected doctor's details
      displayDoctorImage.setAttribute('src', doctor.image);
      displayDoctorName.textContent = doctor.name;
      years.textContent = doctor.year;
      displayDoctorSpeciality.textContent = doctor.speciality;
      displayDoctorAbout.textContent = doctor.name;
      displayDoctorAppFee.textContent = doctor.fee;

      btnAppointment.addEventListener('click', ()=>{
         let selectDateTime = new Date(document.getElementById('selectDateTime').value);
         let getHours = selectDateTime.getHours();
         if(getHours < 8 || getHours >= 17){
          alert(`You can't meet doctors at this time`);
         } 
         else{
          alert(`Thanks for making appointment with ${doctor.name} at ${selectDateTime}`)
         }
        
      })
      
      // Display doctors with the same specialty
      doctors.forEach((doc) => {
        if(doctor.speciality === doc.speciality) { // Exclude the selected doctor
          if(doctor.id !== doc.id){
            let box = document.createElement('div');
            box.setAttribute('class', 'box');
            let docImg = document.createElement('img');
            docImg.setAttribute('src', doc.image);
            let docAvailability = document.createElement('p');
            docAvailability.setAttribute('id', 'docAvailability');
            docAvailability.innerHTML = '<span></span> Available';
        
            let docName = document.createElement('h3');
            docName.textContent = doc.name;
            let docSpeciality = document.createElement('p');
            docSpeciality.setAttribute('id', 'docSpeciality');
            docSpeciality.textContent = doc.speciality;
        
            // Append child elements
            box.appendChild(docImg);
            box.appendChild(docAvailability);
            box.appendChild(docName);
            box.appendChild(docSpeciality);
        
            box.addEventListener('click', () => {
              localStorage.setItem('selectedDoctorId', doc.id); // Store doctor id in localStorage
              window.location.href = './profile.html'; // Navigate to profile.html
            });
  
            doctorsBoxes.appendChild(box); // Append to the container for same specialty doctors
          }
         
        }
      });

    }
  }
}