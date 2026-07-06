/* ============================================
   Core App Logic - Navigation & Shared Utils
   ============================================ */

// Get current page name from URL
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  return page.replace('.html', '');
}

// Initialize sidebar navigation
function initSidebar() {
  const currentPage = getCurrentPage();
  const navItems = document.querySelectorAll('.nav-item[data-page]');

  navItems.forEach(item => {
    const page = item.getAttribute('data-page');
    if (page === currentPage) {
      item.classList.add('active');
    }

    item.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-page') + '.html';
      window.location.href = target;
    });
  });
}

// Mobile sidebar toggle
function initSidebarToggle() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
}

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.show').forEach(modal => {
      modal.classList.remove('show');
    });
    document.body.style.overflow = '';
  }
});

// Table rendering
function renderTable(containerId, columns, data, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { pageSize = 10, actions = true } = options;

  let html = '<div class="table-container"><table class="table"><thead><tr>';

  // Header
  columns.forEach(col => {
    html += `<th>${col.label}</th>`;
  });
  if (actions) {
    html += '<th>Actions</th>';
  }
  html += '</tr></thead><tbody>';

  // Rows
  if (data.length === 0) {
    html += `<tr><td colspan="${columns.length + (actions ? 1 : 0)}" class="empty-state">
      <div class="icon">📭</div>
      <h4>No data found</h4>
      <p>Try adjusting your search filters</p>
    </td></tr>`;
  } else {
    data.forEach((row, index) => {
      html += '<tr>';
      columns.forEach(col => {
        let value = row[col.key];
        if (col.render) {
          value = col.render(value, row);
        }
        html += `<td>${value}</td>`;
      });
      if (actions) {
        html += `<td class="table-actions">
          <button class="btn btn-icon btn-sm btn-secondary" title="Edit" onclick="editItem(${row.id})">✏️</button>
          <button class="btn btn-icon btn-sm btn-danger" title="Delete" onclick="deleteItem(${row.id})">🗑️</button>
        </td>`;
      }
      html += '</tr>';
    });
  }

  html += '</tbody></table></div>';

  // Pagination
  const totalPages = Math.ceil(data.length / pageSize);
  html += `<div class="pagination">
    <button class="pagination-btn" disabled>&lt;&lt;</button>
    <button class="pagination-btn" disabled>&lt;</button>
    <span class="pagination-info">1 / ${totalPages || 1}</span>
    <button class="pagination-btn" ${totalPages <= 1 ? 'disabled' : ''}>&gt;</button>
    <button class="pagination-btn" ${totalPages <= 1 ? 'disabled' : ''}>&gt;&gt;</button>
  </div>`;

  container.innerHTML = html;
}

// Generic edit/delete handlers
function editItem(id) {
  alert(`Edit item #${id} - This would open an edit modal in the real app`);
}

function deleteItem(id) {
  if (confirm(`Are you sure you want to delete item #${id}?`)) {
    alert(`Item #${id} deleted`);
  }
}

// Format number with commas
function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initSidebarToggle();
});
