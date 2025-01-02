// Sample database of valid usernames
const validUsernames = [
    'R2023/620/001', 'R2023/620/002', 'R2023/620/003', 'R2023/620/004', 'R2023/620/005', 
    'R2023/620/006', 'R2023/620/007', 'R2023/620/008', 'R2023/620/009', 'R2023/620/010', 
    'R2023/620/011', 'R2023/620/012', 'R2023/620/013', 'R2023/620/014', 'R2023/620/015', 
    'R2023/620/016', 'R2023/620/017', 'R2023/620/018', 'R2023/620/019', 'R2023/620/020', 
    'R2023/620/021', 'R2023/620/022', 'R2023/620/023', 'R2023/620/024', 'R2023/620/025', 
    'R2023/620/0026', 'R2023/620/027', 'R2023/620/028', 'R2023/620/029', 'R2023/620/030'
];

document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value.trim();

    if (username) {
        if (validUsernames.includes(username)) {
            // Save matric number to local storage
            localStorage.setItem('matricNumber', username);
            
            window.location.href = 'exam.html'; // Redirect to exam page if the matric number is valid
        } else {
            alert('Invalid Reg. Number. Please try again.');
        }
    } else {
        alert('Please enter your Reg. Number.');
    }
});


