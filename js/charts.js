/* ============================================
   Dashboard Charts - Chart.js Configurations
   ============================================ */

// Monthly Sales Bar Chart
function initMonthlySalesChart() {
  const ctx = document.getElementById('monthlySalesChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: MOCK_DATA.monthlySales.map(d => d.month),
      datasets: [{
        label: 'Sales (Ks)',
        data: MOCK_DATA.monthlySales.map(d => d.value),
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
        borderColor: '#2563eb',
        borderWidth: 1,
        borderRadius: 6,
        barThickness: 28,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return formatCurrency(context.parsed.y);
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 12,
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: '#f1f5f9',
          },
          ticks: {
            color: '#64748b',
            font: {
              size: 12,
            },
            callback: function(value) {
              return formatNumber(value);
            }
          }
        }
      }
    }
  });
}

// Initialize all dashboard charts
function initDashboardCharts() {
  initMonthlySalesChart();
}
