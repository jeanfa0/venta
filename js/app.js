/**
 * Aura Kicks & Streetwear - Tienda Web Principal JS (Arquitectura Multi-página)
 * Catálogo expandido de 16 productos, buscador en vivo, filtrado y modal de compra por WhatsApp.
 */

const CONFIG = {
  // Reemplaza por el número telefónico real con código de país (sin el signo +)
  whatsappNumber: "1234567890",
  currencySymbol: "S/.",
  brandName: "Aura Kicks & Streetwear"
};

// Base de Datos Completa (16 Productos Exclusivos en Soles S/.)
const productsData = [
  {
    id: 1,
    title: "Air Phantom Crimson OG",
    category: "sneakers",
    price: 650,
    oldPrice: 780,
    image: "assets/images/sneaker1.png",
    badge: "🔥 TOP VENTA",
    isExclusive: true,
    sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 10", "US 11"],
    description: "Zapatillas importadas de edición limitada en colorway rojo carmesí y blanco reflectante. Suela amortiguada de alto rendimiento, materiales de cuero genuino y certificado de originalidad incluido."
  },
  {
    id: 2,
    title: "Cyber Pulse High-Top v2",
    category: "sneakers",
    price: 720,
    oldPrice: 850,
    image: "assets/images/sneaker2.png",
    badge: "NUEVO",
    isExclusive: true,
    sizes: ["US 8", "US 9", "US 9.5", "US 10.5"],
    description: "Diseño futurista de corte alto en negro grafito con destellos neón y acentos rojos. Construidas con tecnología de soporte urbano e impermeabilización ligera."
  },
  {
    id: 3,
    title: "Retro Crimson Stone High",
    category: "sneakers",
    price: 580,
    oldPrice: 660,
    image: "assets/images/sneaker3.png",
    badge: "ORIGINAL",
    isExclusive: false,
    sizes: ["US 7.5", "US 8", "US 9", "US 10"],
    description: "La esencia del streetwear clásico. Cuero vintage color crema con paneles en rojo volcánico y suela envejecida estilo retro. Ideales para el uso diario y outfits relajados."
  },
  {
    id: 4,
    title: "Crimson & White Low-Top OG",
    category: "sneakers",
    price: 540,
    oldPrice: 620,
    image: "assets/images/sneaker4.png",
    badge: "🔥 FAVORITO",
    isExclusive: true,
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    description: "Zapatilla de corte bajo en cuero premium blanco con detalles en rojo carmesí. Perfil limpio, versátil y extremadamente elegante para cualquier outfit de fin de semana."
  },
  {
    id: 5,
    title: "Heavyweight Urban Crimson Hoodie",
    category: "clothing",
    price: 260,
    oldPrice: 320,
    image: "assets/images/hoodie1.png",
    badge: "TOP VENTAS",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Polera / Hoodie de algodón pesado (450 GSM) con capucha de doble capa y tipografía urbana en alta densidad. Corte oversized contemporáneo muy cómodo y duradero."
  },
  {
    id: 6,
    title: "Reflective Street Windbreaker",
    category: "clothing",
    price: 340,
    oldPrice: 420,
    image: "assets/images/jacket1.png",
    badge: "EDICIÓN 2026",
    isExclusive: true,
    sizes: ["M", "L", "XL"],
    description: "Chaqueta cortavientos impermeable negro con detalles en rojo carmesí y cierres termosellados reflectantes. Múltiples bolsillos tácticos e interior transpirable."
  },
  {
    id: 7,
    title: "Tactical Street Cargo Pants",
    category: "clothing",
    price: 280,
    oldPrice: 340,
    image: "assets/images/cargo1.png",
    badge: "TÁCTICO",
    isExclusive: false,
    sizes: ["28", "30", "32", "34", "36"],
    description: "Pantalón cargo de corte relajado y entallable en tobillos. Fabricado en algodón ripstop resistente a desgarros con tiras ajustables y múltiples compartimentos de seguridad."
  },
  {
    id: 8,
    title: "Luxury Oversized Graphic Tee",
    category: "clothing",
    price: 140,
    oldPrice: 180,
    image: "assets/images/tee1.png",
    badge: "BÁSICO LUXURY",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Camiseta box fit en color gris antracita tejida en algodón pima peruano. Cuello reforzado 3cm y gráfico serigrafiado al tacto cero en el pecho."
  },
  {
    id: 9,
    title: "Urban Snapback Cap OG",
    category: "clothing",
    price: 110,
    oldPrice: 140,
    image: "assets/images/cap1.png",
    badge: "ACCESORIO",
    isExclusive: false,
    sizes: ["Ajustable / Talla Única"],
    description: "Gorra snapback estructurada de 6 paneles en negro profundo y rojo carmesí con el escudo de Aura bordado en relieve 3D. Broche trasero personalizado."
  },
  {
    id: 10,
    title: "Aura Kicks Black & Red OG",
    category: "sneakers",
    price: 690,
    oldPrice: 820,
    image: "assets/images/hero.png",
    badge: "LIMITADO",
    isExclusive: true,
    sizes: ["US 8", "US 8.5", "US 9", "US 10"],
    description: "El par insignia de nuestra tienda. Contraste dramático de negro profundo y rojo brillante, pensado para robar miradas y destacar en el streetwear."
  },
  {
    id: 11,
    title: "Crimson Core Street Hoodie v2",
    category: "clothing",
    price: 250,
    oldPrice: 310,
    image: "assets/images/hoodie1.png",
    badge: "ORIGINAL",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Variante minimalista del clásico hoodie carmesí de Aura. Suave interior afelpado térmico ideal para las noches de invierno y media estación."
  },
  {
    id: 12,
    title: "Urban Runner Crimson Low",
    category: "sneakers",
    price: 520,
    oldPrice: 600,
    image: "assets/images/sneaker4.png",
    badge: "RUNNING",
    isExclusive: false,
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    description: "Zapatilla ligera de estilo urbano-deportivo con suela de alta tracción y cuerpo de malla transpirable con refuerzos en cuero blanco."
  },
  {
    id: 13,
    title: "Streetrunner Black Jacket",
    category: "clothing",
    price: 360,
    oldPrice: 440,
    image: "assets/images/jacket1.png",
    badge: "LIMITADO",
    isExclusive: true,
    sizes: ["M", "L", "XL"],
    description: "Casaca técnica multicapa para climas exigentes. Forro interior de malla, puños ajustables con velcro y detalles en carmesí sutiles."
  },
  {
    id: 14,
    title: "Tactical Crimson Strap Cargo",
    category: "clothing",
    price: 295,
    oldPrice: 360,
    image: "assets/images/cargo1.png",
    badge: "NUEVO",
    isExclusive: true,
    sizes: ["30", "32", "34"],
    description: "Pantalón cargo con acentos en carmesí en los tiradores laterales. Corte taper moderno que luce espectacular con zapatillas altas o bajas."
  },
  {
    id: 15,
    title: "Minimal Crimson Chest Tee",
    category: "clothing",
    price: 130,
    oldPrice: 165,
    image: "assets/images/tee1.png",
    badge: "OUTFIT",
    isExclusive: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Tee de algodón grueso 260 gramos en color negro con logo en el centro del pecho. Un básico indispensable que combina con todo."
  },
  {
    id: 16,
    title: "Aura Heritage Snapback",
    category: "clothing",
    price: 120,
    oldPrice: 150,
    image: "assets/images/cap1.png",
    badge: "RESTOCK",
    isExclusive: false,
    sizes: ["Ajustable / Talla Única"],
    description: "Edición especial de nuestra gorra con detalles en hilo rojo carmesí y visera plana estructurada con parte inferior en verde clásico."
  }
];

// Estado global del catálogo
let currentFilter = "all";
let currentSearchQuery = "";
let selectedProduct = null;
let selectedSize = null;

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNavTab();
  setupEventListeners();
  setupHeaderScroll();
  
  // Renderizar de acuerdo al contenedor disponible en la página actual
  const grid = document.getElementById("products-grid");
  if (grid) {
    // Si estamos en index.html y el contenedor tiene atributo data-limit, mostramos solo los destacados
    const limit = grid.getAttribute("data-limit") ? parseInt(grid.getAttribute("data-limit")) : null;
    renderProducts(limit);
  }
});

/**
 * Resaltar automáticamente la pestaña actual de navegación
 */
function highlightActiveNavTab() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === path || (path === "" && linkHref === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Renderizar productos con filtrado por categoría y búsqueda por texto
 */
function renderProducts(limit = null) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  let filteredProducts = productsData.filter(product => {
    // Filtro por categoría
    if (currentFilter !== "all") {
      if (currentFilter === "exclusive") {
        if (!product.isExclusive) return false;
      } else if (product.category !== currentFilter) {
        return false;
      }
    }
    
    // Filtro por búsqueda
    if (currentSearchQuery.trim() !== "") {
      const query = currentSearchQuery.toLowerCase().trim();
      const matchTitle = product.title.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchCat = product.category.toLowerCase().includes(query);
      if (!matchTitle && !matchDesc && !matchCat) return false;
    }
    
    return true;
  });
  
  // Si hay límite (ej. Home con 4 destacados), recortamos
  if (limit && limit > 0) {
    filteredProducts = filteredProducts.slice(0, limit);
  }
  
  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 70px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-shoe-prints" style="font-size: 3.5rem; margin-bottom: 18px; color: var(--accent-crimson);"></i>
        <h3>No se encontraron productos coincidentes</h3>
        <p>Intenta con otras palabras clave o explora todas nuestras categorías.</p>
      </div>
    `;
    return;
  }
  
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    // Generar chips de tallas visibles
    const sizesHtml = product.sizes.slice(0, 4).map(size => `<span class="size-chip">${size}</span>`).join("") + 
                      (product.sizes.length > 4 ? `<span class="size-chip">+${product.sizes.length - 4}</span>` : "");
    
    const whatsappLink = buildWhatsAppUrl(`Hola! Me interesa el producto *${product.title}* (${CONFIG.currencySymbol}${product.price}). ¿Hay disponibilidad inmediata?`);
    
    card.innerHTML = `
      <div class="product-image">
        <span class="product-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <button class="quick-view-btn" onclick="openQuickView(${product.id})">
          <i class="fa-solid fa-eye"></i> Ver Tallas & Detalle
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category === 'sneakers' ? '👟 Sneakers' : '👕 Ropa & Accesorios'}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-sizes">
          ${sizesHtml}
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${CONFIG.currencySymbol}${product.price}
            ${product.oldPrice ? `<span class="old-price">${CONFIG.currencySymbol}${product.oldPrice}</span>` : ''}
          </div>
          <a href="${whatsappLink}" target="_blank" class="btn-whatsapp-sm" title="Pedir este producto por WhatsApp">
            <i class="fa-brands fa-whatsapp"></i> Pedir
          </a>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

/**
 * Configurar listeners para botones de filtros, buscador, menú hamburguesa y modales
 */
function setupEventListeners() {
  // Botones de filtro de categoría
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProducts();
    });
  });
  
  // Input de búsqueda (en catalogo.html)
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderProducts();
    });
  }

  // Menú Hamburguesa para móviles y tablets
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileMenuBtn.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });
  }

  // Cerrar Modal de Producto
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOverlay = document.getElementById("quick-view-modal");
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", closeQuickView);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeQuickView();
    });
  }

  // Botón "Comprar ahora por WhatsApp" dentro del modal
  const modalWhatsappBtn = document.getElementById("modal-whatsapp-btn");
  if (modalWhatsappBtn) {
    modalWhatsappBtn.addEventListener("click", () => {
      if (!selectedProduct) return;
      
      let message = `Hola! Vengo de la tienda en línea *${CONFIG.brandName}* y quiero realizar un pedido:\n\n`;
      message += `📌 *Producto:* ${selectedProduct.title}\n`;
      message += `💰 *Precio:* ${CONFIG.currencySymbol}${selectedProduct.price}\n`;
      if (selectedSize) {
        message += `📏 *Talla Seleccionada:* ${selectedSize}\n`;
      } else {
        message += `📏 *Talla:* (Por confirmar con asesor en el chat)\n`;
      }
      message += `\n¿Cuáles son los métodos de pago disponibles y tiempo de envío?`;
      
      const url = buildWhatsAppUrl(message);
      window.open(url, "_blank");
    });
  }
}

/**
 * Abrir Modal de Vista Previa y seleccionar talla
 */
function openQuickView(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  selectedProduct = product;
  selectedSize = product.sizes[0] || null;
  
  const modal = document.getElementById("quick-view-modal");
  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-category").textContent = product.category === 'sneakers' ? 'SNEAKERS // 100% ORIGINAL' : 'STREETWEAR // CALIDAD PREMIUM';
  document.getElementById("modal-title").textContent = product.title;
  document.getElementById("modal-price").textContent = `${CONFIG.currencySymbol}${product.price}`;
  document.getElementById("modal-description").textContent = product.description;
  
  // Renderizar opciones de talla
  const sizesContainer = document.getElementById("modal-sizes");
  sizesContainer.innerHTML = "";
  product.sizes.forEach((size, index) => {
    const sizeBtn = document.createElement("button");
    sizeBtn.className = `size-btn ${index === 0 ? 'selected' : ''}`;
    sizeBtn.textContent = size;
    sizeBtn.addEventListener("click", () => {
      sizesContainer.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
      sizeBtn.classList.add("selected");
      selectedSize = size;
    });
    sizesContainer.appendChild(sizeBtn);
  });
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * Cerrar Modal
 */
function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Efecto de sombra al hacer scroll en el header
 */
function setupHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/**
 * Generador de URL hacia WhatsApp
 */
function buildWhatsAppUrl(messageText) {
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
}

/**
 * Manejador del Formulario de Contacto (en contacto.html)
 */
function handleContactSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value.trim();
  const message = document.getElementById("message").value.trim();
  
  let waMessage = `Hola! Mi nombre es *${name}* (Contacto: ${phone}).\n\n`;
  if (interest) {
    waMessage += `🎯 *Interesado en:* ${interest}\n\n`;
  }
  waMessage += `💬 *Consulta/Mensaje:* ${message}`;
  
  const url = buildWhatsAppUrl(waMessage);
  window.open(url, "_blank");
}
