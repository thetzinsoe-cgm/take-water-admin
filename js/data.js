/* ============================================
   Mock Data - Take Water Admin Panel
   ============================================ */

const MOCK_DATA = {
  // Products
  products: [
    { id: 1, name: "Take Premium Purified 20L", category: "Large Bottle", price: 2500, stock: 150, unit: "Bottle", barcode: "TW20L001", image: "💧", packItems: null },
    { id: 2, name: "Take Purified 10L", category: "Large Bottle", price: 1800, stock: 200, unit: "Bottle", barcode: "TW10L001", image: "💧", packItems: null },
    { id: 3, name: "Take 1L Slim Pack", category: "Small Pack", price: 6000, stock: 80, unit: "Pack", barcode: "TW1L012", image: "📦", packItems: 12 },
    { id: 4, name: "Take 500mL Mini Pack", category: "Small Pack", price: 8000, stock: 60, unit: "Pack", barcode: "TW500M24", image: "📦", packItems: 24 },
    { id: 5, name: "Take Premium Purified 20L (Box)", category: "Large Bottle", price: 2500, stock: 120, unit: "Bottle", barcode: "TW20L002", image: "💧", packItems: null },
    { id: 6, name: "Take Purified 10L (Box)", category: "Large Bottle", price: 1800, stock: 180, unit: "Bottle", barcode: "TW10L002", image: "💧", packItems: null },
    { id: 7, name: "Take 1L Family Pack", category: "Small Pack", price: 6000, stock: 95, unit: "Pack", barcode: "TW1L013", image: "📦", packItems: 6 },
    { id: 8, name: "Take 500mL Party Pack", category: "Small Pack", price: 8000, stock: 45, unit: "Pack", barcode: "TW500M25", image: "📦", packItems: 48 },
  ],

  // Customers
  customers: [
    { id: 1, name: "Ko Min Thura", phone: "09777123456", email: "minthura@gmail.com", address: "Mandalay", total: 45000, paid: 40000, remaining: 5000 },
    { id: 2, name: "Ma Su Mon", phone: "09955443322", email: "smon@gmail.com", address: "Yangon", total: 32000, paid: 32000, remaining: 0 },
    { id: 3, name: "U Kyaw Zin", phone: "09123456789", email: "kyawzin@gmail.com", address: "Sagaing", total: 78000, paid: 50000, remaining: 28000 },
    { id: 4, name: "Daw Thin Thin", phone: "09876543210", email: "thinthin@gmail.com", address: "Bago", total: 15000, paid: 15000, remaining: 0 },
    { id: 5, name: "Ko Aung Myo", phone: "09456789012", email: "aungmyo@gmail.com", address: "Mandalay", total: 92000, paid: 70000, remaining: 22000 },
    { id: 6, name: "Ma Htay Htay", phone: "09345678901", email: "htayhtay@gmail.com", address: "Yangon", total: 28000, paid: 28000, remaining: 0 },
    { id: 7, name: "U Ba Kyi", phone: "09234567890", email: "bakyi@gmail.com", address: "Shan", total: 55000, paid: 30000, remaining: 25000 },
    { id: 8, name: "Ma Khin Mar", phone: "09123456780", email: "khinmar@gmail.com", address: "Mandalay", total: 18000, paid: 18000, remaining: 0 },
  ],

  // Orders
  orders: [
    { id: "INV-2026-001", date: "2026-07-06", customer: "Ko Min Thura", phone: "09777123456", items: 2, total: 5000, status: "Delivered", payment: "Cash" },
    { id: "INV-2026-002", date: "2026-07-06", customer: "Ma Su Mon", phone: "09955443322", items: 1, total: 2500, status: "Pending", payment: "KBZPay" },
    { id: "INV-2026-003", date: "2026-07-05", customer: "U Kyaw Zin", phone: "09123456789", items: 3, total: 7800, status: "Delivered", payment: "WaveMoney" },
    { id: "INV-2026-004", date: "2026-07-05", customer: "Daw Thin Thin", phone: "09876543210", items: 1, total: 1800, status: "Cancelled", payment: "Cash" },
    { id: "INV-2026-005", date: "2026-07-04", customer: "Ko Aung Myo", phone: "09456789012", items: 4, total: 12000, status: "Delivered", payment: "Cash" },
    { id: "INV-2026-006", date: "2026-07-04", customer: "Ma Htay Htay", phone: "09345678901", items: 2, total: 5000, status: "Pending", payment: "Credit" },
    { id: "INV-2026-007", date: "2026-07-03", customer: "U Ba Kyi", phone: "09234567890", items: 1, total: 2500, status: "Delivered", payment: "Cash" },
    { id: "INV-2026-008", date: "2026-07-03", customer: "Ma Khin Mar", phone: "09123456780", items: 2, total: 4300, status: "Delivered", payment: "KBZPay" },
  ],

  // Staff
  staff: [
    { id: 1, name: "Admin 16", number: "bibA016", role: "Company Admin", shop: "All Shops", email: "admin16@gmail.com", joinDate: "2026-02-19" },
    { id: 2, name: "Cashier 18", number: "bibC018", role: "Cashier Staff", shop: "BiBShop", email: "cashier18@gmail.com", joinDate: "2026-06-12" },
    { id: 3, name: "Admin 17", number: "bibA017", role: "Company Admin", shop: "All Shops", email: "admin17@gmail.com", joinDate: "2026-06-12" },
    { id: 4, name: "ye min aung", number: "bibCSA002", role: "Super Admin", shop: "All Shops", email: "", joinDate: "2026-01-14" },
    { id: 5, name: "shop admin 13", number: "bibSHA013", role: "Shop Admin", shop: "Shop 3", email: "", joinDate: "2026-01-14" },
    { id: 6, name: "Company Super Admin", number: "bibCSA001", role: "Super Admin", shop: "All Shops", email: "", joinDate: "2026-01-14" },
  ],

  // Suppliers
  suppliers: [
    { id: 1, name: "Take Water Co.", phone: "09955853377", email: "info@takewater.com", address: "Yangon" },
    { id: 2, name: "Pure Water Distributor", phone: "09123456789", email: "pure@water.com", address: "Mandalay" },
    { id: 3, name: "Aqua Fresh Supply", phone: "09876543210", email: "aqua@supply.com", address: "Sagaing" },
  ],

  // Categories
  categories: [
    { id: 1, name: "Large Bottle (10L/20L)", description: "Home & office dispenser bottles" },
    { id: 2, name: "Small Bottle/Packs", description: "1L and 500mL multi-packs" },
    { id: 3, name: "Accessories", description: "Dispensers and cups" },
  ],

  // Shops
  shops: [
    { id: 1, name: "Main Warehouse", type: "Warehouse" },
    { id: 2, name: "Mandalay Shop", type: "Shop" },
    { id: 3, name: "Yangon Shop", type: "Shop" },
    { id: 4, name: "Sagaing Shop", type: "Shop" },
  ],

  // Monthly Sales Data (for charts)
  monthlySales: [
    { month: "Jan", value: 180000 },
    { month: "Feb", value: 220000 },
    { month: "Mar", value: 195000 },
    { month: "Apr", value: 240000 },
    { month: "May", value: 210000 },
    { month: "Jun", value: 275000 },
    { month: "Jul", value: 320000 },
    { month: "Aug", value: 290000 },
    { month: "Sep", value: 260000 },
    { month: "Oct", value: 310000 },
    { month: "Nov", value: 285000 },
    { month: "Dec", value: 350000 },
  ],

  // Top Products
  topProducts: [
    { name: "Take Premium 20L", sold: 450, revenue: 1125000, image: "💧" },
    { name: "Take Purified 10L", sold: 380, revenue: 684000, image: "💧" },
    { name: "Take 1L Pack (12)", sold: 220, revenue: 1320000, image: "📦" },
    { name: "Take 500mL Pack (24)", sold: 180, revenue: 1440000, image: "📦" },
  ],

  // Knowledge Articles
  knowledge: [
    { id: 1, title: "How Much Purified Water Do You Need Daily?", category: "Health", status: "Published", author: "Dr. Aung Kyaw", createdDate: "2026-07-01" },
    { id: 2, title: "Understanding Multi-Stage Water Purification: RO vs. UV vs. Ozone", category: "Technology", status: "Published", author: "Tech Team", createdDate: "2026-06-28" },
    { id: 3, title: "5 Subtle Signs of Dehydration", category: "Lifestyle", status: "Published", author: "Health Blog", createdDate: "2026-06-25" },
    { id: 4, title: "Benefits of Drinking Purified Water for Children", category: "Health", status: "Draft", author: "Dr. Aung Kyaw", createdDate: "2026-07-05" },
    { id: 5, title: "Water Quality Standards in Myanmar", category: "Technology", status: "Published", author: "QA Team", createdDate: "2026-06-20" },
  ],

  // Order Details (for detail page)
  orderDetails: {
    "INV-2026-002": {
      invoice: "INV-2026-002",
      date: "2026-07-06 10:30 AM",
      deliveryDate: "2026-07-06 (Same Day)",
      status: "Pending",
      paymentMethod: "KBZPay",
      customer: {
        name: "Ma Su Mon",
        phone: "09955443322",
        address: "No. 45, Pyay Road, Yangon",
        type: "Regular"
      },
      items: [
        { product: "Take Premium Purified 20L", category: "Large Bottle", qty: 1, unitPrice: 2500, total: 2500 }
      ],
      subtotal: 2500,
      deliveryFee: 1500,
      grandTotal: 4000,
      paymentScreenshot: true,
      screenshotDate: "2026-07-06 10:35 AM",
      notes: "Customer requested morning delivery before 10 AM. Gate code: 1234"
    }
  },
};

// Helper functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US').format(amount) + ' Ks';
}

function getStatusBadge(status) {
  const classes = {
    'Delivered': 'badge-success',
    'Pending': 'badge-warning',
    'Cancelled': 'badge-danger',
    'Processing': 'badge-info',
  };
  return `<span class="badge ${classes[status] || 'badge-info'}">${status}</span>`;
}

function getPaymentBadge(payment) {
  const classes = {
    'Cash': 'badge-success',
    'KBZPay': 'badge-info',
    'WaveMoney': 'badge-info',
    'Credit': 'badge-warning',
  };
  return `<span class="badge ${classes[payment] || 'badge-info'}">${payment}</span>`;
}
