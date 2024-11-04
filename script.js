document.addEventListener('DOMContentLoaded', () => {
    // Chart untuk Starting Eleven
    const ctx1 = document.getElementById('startingElevenChart').getContext('2d');
    const startingElevenChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Starting Eleven', 'Unused'],
            datasets: [{
                data: [30, 70], // 30% digunakan, 70% unused
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 99, 132, 0.1)'], // Warna transparan
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 0.3)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            cutout: '70%', // Mengatur ketebalan lubang tengah
            plugins: {
                legend: {
                    display: false // Menyembunyikan legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Chart untuk Minutes
    const ctx2 = document.getElementById('minutesChart').getContext('2d');
    const minutesChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Minutes', 'Unused'],
            datasets: [{
                data: [28, 72], // 28% digunakan, 72% unused
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.1)'], // Warna transparan
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 0.3)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            cutout: '70%', // Mengatur ketebalan lubang tengah
            plugins: {
                legend: {
                    display: false // Menyembunyikan legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Chart untuk Goal Participation
    const ctx3 = document.getElementById('goalParticipationChart').getContext('2d');
    const goalParticipationChart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Goal Participation', 'Unused'],
            datasets: [{
                data: [0, 100], // 0% digunakan, 100% unused
                backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(255, 206, 86, 0.1)'], // Warna transparan
                borderColor: ['rgba(255, 206, 86, 1)', 'rgba(255, 206, 86, 0.3)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            cutout: '70%', // Mengatur ketebalan lubang tengah
            plugins: {
                legend: {
                    display: false // Menyembunyikan legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Fungsi untuk men-toggle navbar
    function toggleNavbar() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('show');
    }

    // Menambahkan event listener untuk men-toggle navbar saat menu ikon diklik
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', toggleNavbar);

    // Menyembunyikan navbar saat mengklik di luar navbar
    window.addEventListener('click', (event) => {
        const navbar = document.querySelector('.navbar');
        if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove('show'); // Sembunyikan navbar jika di luar diklik
        }
    });
});
