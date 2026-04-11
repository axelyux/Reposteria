// ============================================
// SISTEMA DE GESTIÓN DE REPOSTERÍA
// Aplicación JavaScript Completa
// ============================================

// ============================================
// DATOS INICIALES - Ingredientes con precios México
// ============================================

const initialIngredients = [
    { name: 'Leche', unit: 'litro', price: 24.50 },
    { name: 'Leche condensada', unit: 'lata', price: 28.00 },
    { name: 'Leche evaporada', unit: 'lata', price: 22.00 },
    { name: 'Crema para batir', unit: 'litro', price: 45.00 },
    { name: 'Crema ácida', unit: 'litro', price: 38.00 },
    { name: 'Mantequilla', unit: 'kg', price: 95.00 },
    { name: 'Aceite vegetal', unit: 'litro', price: 35.00 },
    { name: 'Manteca vegetal', unit: 'kg', price: 55.00 },
    { name: 'Agua', unit: 'litro', price: 0.50 },
    { name: 'Esencia de vainilla líquida', unit: 'ml', price: 0.15 },
    { name: 'Limones', unit: 'pieza', price: 3.00 },
    { name: 'Ralladura de naranja', unit: 'pieza', price: 5.00 },
    { name: 'Canela', unit: 'kg', price: 180.00 },
    { name: 'Harina de trigo', unit: 'kg', price: 28.00 },
    { name: 'Fécula de maíz', unit: 'kg', price: 32.00 },
    { name: 'Polvo para hornear', unit: 'paquete', price: 18.00 },
    { name: 'Bicarbonato de sodio', unit: 'paquete', price: 15.00 },
    { name: 'Levadura en polvo', unit: 'paquete', price: 12.00 },
    { name: 'Grenetina', unit: 'sobre', price: 8.00 },
    { name: 'Huevos', unit: 'pieza', price: 4.50 },
    { name: 'Queso crema', unit: 'kg', price: 85.00 },
    { name: 'Yogur', unit: 'litro', price: 32.00 },
    { name: 'Azúcar blanca', unit: 'kg', price: 22.00 },
    { name: 'Azúcar morena', unit: 'kg', price: 28.00 },
    { name: 'Azúcar glass', unit: 'kg', price: 35.00 },
    { name: 'Azúcar mascabado', unit: 'kg', price: 30.00 },
    { name: 'Nueces', unit: 'kg', price: 220.00 },
    { name: 'Almendras', unit: 'kg', price: 280.00 },
    { name: 'Cacahuates', unit: 'kg', price: 95.00 },
    { name: 'Coco rallado', unit: 'kg', price: 75.00 },
    { name: 'Chocolate en barra', unit: 'tabla', price: 35.00 },
    { name: 'Cacao en polvo', unit: 'kg', price: 120.00 },
    { name: 'Mermeladas', unit: 'frasco', price: 45.00 },
    { name: 'Mantequilla de maní', unit: 'frasco', price: 65.00 },
    { name: 'Leche en polvo', unit: 'kg', price: 85.00 },
    { name: 'Cajeta', unit: 'frasco', price: 55.00 },
    { name: 'Nutella', unit: 'frasco', price: 85.00 },
    { name: 'Crema de cacahuate', unit: 'frasco', price: 65.00 },
    { name: 'Crema Veneciana', unit: 'frasco', price: 45.00 },
    { name: 'Fresas', unit: 'kg', price: 85.00 },
    { name: 'Durazno', unit: 'kg', price: 65.00 },
    { name: 'Piña', unit: 'pieza', price: 35.00 },
    { name: 'Mango', unit: 'kg', price: 55.00 },
    { name: 'Manzana', unit: 'kg', price: 45.00 },
    { name: 'Plátano', unit: 'kg', price: 28.00 },
    { name: 'Malvaviscos', unit: 'paquete', price: 25.00 },
    { name: 'Frutas deshidratadas', unit: 'kg', price: 150.00 },
    { name: 'Galletas Marías', unit: 'paquete', price: 18.00 },
    { name: 'Galletas Oreo', unit: 'paquete', price: 22.00 },
    { name: 'Pan de caja', unit: 'paquete', price: 35.00 },
    { name: 'Colorantes alimentarios', unit: 'frasco', price: 35.00 },
    { name: 'Sprinkles', unit: 'paquete', price: 28.00 },
    { name: 'Granillo', unit: 'kg', price: 45.00 },
    { name: 'Chispas de colores', unit: 'paquete', price: 32.00 }
];

// Postres disponibles
const desserts = [
    'Pay de queso tortuga (base Oreo)',
    'Pay de queso fresa (base galleta María)',
    'Pastisetas',
    'Carlota de limón',
    'Carlota de fresa',
    'Carlota de durazno',
    'Roles de canela',
    'Pizza dulce',
    'Donas',
    'Pasteles diseño sencillo',
    'Brownies',
    'Gelatina de mosaico',
    'Pastel en vaso'
];

// ============================================
// GESTIÓN DE LOCALSTORAGE
// ============================================

const Storage = {
    // Guardar datos
    save: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error al guardar:', error);
            return false;
        }
    },

    // Cargar datos
    load: (key, defaultValue = null) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('Error al cargar:', error);
            return defaultValue;
        }
    },

    // Eliminar datos
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error al eliminar:', error);
            return false;
        }
    }
};

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

let appState = {
    ingredients: [],
    recipes: [],
    inventory: {},
    settings: {
        globalMargin: 50,
        currency: 'MXN',
        taxRate: 16,
        lowStockAlert: 5
    },
    currentQuoter: {
        dessert: '',
        recipe: '',
        ingredients: []
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================

function initializeApp() {
    // Inicializar iconos Lucide
    lucide.createIcons();
    
    // Cargar datos de LocalStorage o usar valores iniciales
    appState.ingredients = Storage.load('ingredients', initialIngredients);
    appState.recipes = Storage.load('recipes', []);
    appState.inventory = Storage.load('inventory', {});
    appState.settings = Storage.load('settings', appState.settings);

    // Inicializar inventario si está vacío
    if (Object.keys(appState.inventory).length === 0) {
        appState.ingredients.forEach(ing => {
            appState.inventory[ing.name] = { quantity: 10, unit: ing.unit };
        });
        Storage.save('inventory', appState.inventory);
    }

    // Configurar interfaz
    setupNavigation();
    setupEventListeners();
    populateDessertSelect();
    loadSettings();
    updateDateDisplay();
    
    // Cargar dashboard inicial
    updateDashboard();
    renderIngredientsTable();
    renderInventoryTable();
    renderRecipesTable();
    
    console.log('Aplicación inicializada correctamente');
}

// ============================================
// NAVEGACIÓN
// ============================================

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const sectionTitle = document.getElementById('sectionTitle');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remover clase active de todos los items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Agregar clase active al item clickeado
            item.classList.add('active');
            
            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove('active'));
            
            // Mostrar sección correspondiente
            const sectionId = item.dataset.section;
            document.getElementById(sectionId).classList.add('active');
            
            // Actualizar título
            const titles = {
                dashboard: 'Dashboard',
                quoter: 'Cotizador de Postres',
                recipes: 'Recetas',
                ingredients: 'Ingredientes y Precios',
                inventory: 'Inventario',
                statistics: 'Estadísticas',
                settings: 'Configuración'
            };
            sectionTitle.textContent = titles[sectionId];
            
            // Actualizar datos según la sección
            if (sectionId === 'dashboard') {
                updateDashboard();
            } else if (sectionId === 'statistics') {
                updateStatistics();
            }
        });
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Sidebar helpers
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Mobile menu button (logo in header)
    document.getElementById('sidebarToggle').addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Close sidebar when clicking overlay
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

    // Close button inside sidebar (mobile)
    const sidebarCloseBtn = document.getElementById('sidebarClose');
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }

    // Close sidebar on nav item click (only on mobile)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    // On resize: if going back to desktop, reset sidebar state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Close modal when clicking outside
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            closeModal();
        }
    });

    // Cotizador
    document.getElementById('quoterDessert').addEventListener('change', handleDessertChange);
    document.getElementById('quoterRecipe').addEventListener('change', handleRecipeChange);
    document.getElementById('openAddIngredientModalBtn').addEventListener('click', showQuoterAddIngredientModal);
    document.getElementById('calculateBtn').addEventListener('click', calculateQuoter);
    document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);
    document.getElementById('saveRecipeBtn').addEventListener('click', saveCurrentQuoterAsRecipe);

    // Recetas
    document.getElementById('addRecipeBtn').addEventListener('click', showAddRecipeModal);

    // Ingredientes
    document.getElementById('addIngredientBtn').addEventListener('click', showAddIngredientModal);

    // Inventario
    document.getElementById('updateInventoryBtn').addEventListener('click', showUpdateInventoryModal);

    // Configuración
    document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
    document.getElementById('resetDataBtn').addEventListener('click', resetAllData);

    // Modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });
}

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

function formatCurrency(amount) {
    const currency = appState.settings.currency;
    const symbols = { MXN: '$', USD: 'US$', EUR: '€' };
    return `${symbols[currency] || '$'}${amount.toFixed(2)}`;
}

function updateDateDisplay() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('dateDisplay').textContent = now.toLocaleDateString('es-ES', options);
}

// ============================================
// DASHBOARD
// ============================================

function updateDashboard() {
    // Calcular estadísticas
    const recipes = appState.recipes;
    const totalRecipes = recipes.length;
    
    let totalCost = 0;
    let totalSellPrice = 0;
    
    recipes.forEach(recipe => {
        const cost = calculateRecipeCost(recipe);
        totalCost += cost;
        const sellPrice = calculateSellPrice(cost);
        totalSellPrice += sellPrice;
    });
    
    const avgCost = totalRecipes > 0 ? totalCost / totalRecipes : 0;
    const avgPrice = totalRecipes > 0 ? totalSellPrice / totalRecipes : 0;
    const avgProfit = avgPrice - avgCost;
    
    // Actualizar tarjetas
    document.getElementById('avgCost').textContent = formatCurrency(avgCost);
    document.getElementById('avgPrice').textContent = formatCurrency(avgPrice);
    document.getElementById('avgProfit').textContent = formatCurrency(avgProfit);
    document.getElementById('totalRecipes').textContent = totalRecipes;
    
    // Actualizar gráficas
    updateDashboardCharts(recipes);
}

function updateDashboardCharts(recipes) {
    // Gráfica de distribución de costos
    const costData = recipes.map(r => calculateRecipeCost(r));
    const labels = recipes.map(r => r.name);
    
    createChart('costDistributionChart', 'doughnut', {
        labels: labels.length > 0 ? labels : ['Sin datos'],
        datasets: [{
            data: costData.length > 0 ? costData : [1],
            backgroundColor: [
                '#A67C5B', '#D9B79B', '#C4A484', '#D4A574', '#8B5E3C',
                '#E8D5C4', '#C9B8A8', '#B8A080', '#A68B68', '#9A8476'
            ]
        }]
    }, {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    });
    
    // Gráfica de ingredientes más caros
    const sortedIngredients = [...appState.ingredients].sort((a, b) => b.price - a.price).slice(0, 10);
    createChart('expensiveIngredientsChart', 'bar', {
        labels: sortedIngredients.map(i => i.name),
        datasets: [{
            label: 'Precio Unitario',
            data: sortedIngredients.map(i => i.price),
            backgroundColor: '#A67C5B'
        }]
    }, {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        }
    });
    
    // Gráfica de ganancia por postre
    const profitData = recipes.map(r => {
        const cost = calculateRecipeCost(r);
        return calculateSellPrice(cost) - cost;
    });
    
    createChart('profitByDessertChart', 'bar', {
        labels: labels.length > 0 ? labels : ['Sin datos'],
        datasets: [{
            label: 'Ganancia',
            data: profitData.length > 0 ? profitData : [0],
            backgroundColor: '#C4A484'
        }]
    }, {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    });
}

// ============================================
// COTIZADOR
// ============================================

function populateDessertSelect() {
    const select = document.getElementById('quoterDessert');
    select.innerHTML = '<option value="">-- Seleccionar --</option>';
    desserts.forEach(dessert => {
        const option = document.createElement('option');
        option.value = dessert;
        option.textContent = dessert;
        select.appendChild(option);
    });
}

function handleDessertChange() {
    const dessert = document.getElementById('quoterDessert').value;
    appState.currentQuoter.dessert = dessert;
    
    // Filtrar recetas por postre
    const recipeSelect = document.getElementById('quoterRecipe');
    recipeSelect.innerHTML = '<option value="">-- Seleccionar receta --</option>';
    
    const filteredRecipes = appState.recipes.filter(r => r.dessert === dessert);
    filteredRecipes.forEach(recipe => {
        const option = document.createElement('option');
        option.value = recipe.id;
        option.textContent = recipe.name;
        recipeSelect.appendChild(option);
    });
    
    // Limpiar tabla si no hay receta seleccionada
    if (!dessert) {
        appState.currentQuoter.ingredients = [];
        renderQuoterTable();
    }
}

function handleRecipeChange() {
    const recipeId = document.getElementById('quoterRecipe').value;
    if (!recipeId) return;
    
    const recipe = appState.recipes.find(r => r.id === recipeId);
    if (recipe) {
        appState.currentQuoter.recipe = recipeId;
        appState.currentQuoter.ingredients = JSON.parse(JSON.stringify(recipe.ingredients));
        renderQuoterTable();
    }
}

function showQuoterAddIngredientModal() {
    const modalBody = document.getElementById('modalBody');
    
    const ingredientsOptions = appState.ingredients.map(ing => 
        `<option value="${ing.name}">${ing.name} (${ing.unit}) - ${formatCurrency(ing.price)}</option>`
    ).join('');
    
    modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 15px;">
                <button type="button" class="btn btn-secondary" id="selectExistingTab" style="flex: 1;">Seleccionar Existente</button>
                <button type="button" class="btn btn-secondary" id="createNewTab" style="flex: 1; background: #e0e0e0;">Crear Nuevo</button>
            </div>
            
            <div id="selectExistingSection">
                <div class="form-group">
                    <label>Seleccionar Ingrediente</label>
                    <select id="quoterIngredientSelect" class="form-select">
                        <option value="">-- Seleccionar --</option>
                        ${ingredientsOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label>Cantidad</label>
                    <input type="number" id="quoterIngredientQuantity" class="form-input" placeholder="0.00" step="0.01" min="0">
                </div>
                <button type="button" class="btn btn-primary" onclick="addExistingIngredientToQuoter()">Agregar</button>
            </div>
            
            <div id="createNewSection" style="display: none;">
                <div class="form-group">
                    <label>Nombre del Ingrediente</label>
                    <input type="text" id="newQuoterIngredientName" class="form-input" placeholder="Nombre">
                </div>
                <div class="form-group">
                    <label>Unidad</label>
                    <select id="newQuoterIngredientUnit" class="form-select">
                        <option value="kg">kg</option>
                        <option value="gramos">gramos</option>
                        <option value="litros">litros</option>
                        <option value="ml">ml</option>
                        <option value="pieza">pieza</option>
                        <option value="paquete">paquete</option>
                        <option value="lata">lata</option>
                        <option value="frasco">frasco</option>
                        <option value="sobre">sobre</option>
                        <option value="tabla">tabla</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Precio Unitario</label>
                    <input type="number" id="newQuoterIngredientPrice" class="form-input" placeholder="0.00" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label>Cantidad a Usar</label>
                    <input type="number" id="newQuoterIngredientQuantity" class="form-input" placeholder="0.00" step="0.01" min="0">
                </div>
                <button type="button" class="btn btn-primary" onclick="createAndAddIngredientToQuoter()">Crear y Agregar</button>
            </div>
        </div>
    `;
    
    document.getElementById('modalTitle').textContent = 'Agregar Ingrediente';
    document.getElementById('modal').classList.add('show');
    
    // Reinitialize Lucide icons in modal
    lucide.createIcons();
    
    // Setup tab switching
    document.getElementById('selectExistingTab').addEventListener('click', () => {
        document.getElementById('selectExistingSection').style.display = 'block';
        document.getElementById('createNewSection').style.display = 'none';
        document.getElementById('selectExistingTab').style.background = '';
        document.getElementById('createNewTab').style.background = '#e0e0e0';
    });
    
    document.getElementById('createNewTab').addEventListener('click', () => {
        document.getElementById('selectExistingSection').style.display = 'none';
        document.getElementById('createNewSection').style.display = 'block';
        document.getElementById('selectExistingTab').style.background = '#e0e0e0';
        document.getElementById('createNewTab').style.background = '';
    });
}

function addExistingIngredientToQuoter() {
    const ingredientName = document.getElementById('quoterIngredientSelect').value;
    const quantity = parseFloat(document.getElementById('quoterIngredientQuantity').value);
    
    if (!ingredientName || !quantity || quantity <= 0) {
        alert('Por favor seleccione un ingrediente e ingrese una cantidad válida');
        return;
    }
    
    const ingredient = appState.ingredients.find(i => i.name === ingredientName);
    if (!ingredient) return;
    
    appState.currentQuoter.ingredients.push({
        name: ingredientName,
        quantity: quantity,
        unit: ingredient.unit,
        price: ingredient.price
    });
    
    renderQuoterTable();
    closeModal();
}

function createAndAddIngredientToQuoter() {
    const name = document.getElementById('newQuoterIngredientName').value;
    const unit = document.getElementById('newQuoterIngredientUnit').value;
    const price = parseFloat(document.getElementById('newQuoterIngredientPrice').value);
    const quantity = parseFloat(document.getElementById('newQuoterIngredientQuantity').value);
    
    if (!name || !price || !quantity || price <= 0 || quantity <= 0) {
        alert('Por favor complete todos los campos con valores válidos');
        return;
    }
    
    // Check if ingredient already exists
    const existingIngredient = appState.ingredients.find(i => i.name.toLowerCase() === name.toLowerCase());
    
    if (existingIngredient) {
        if (!confirm(`El ingrediente "${name}" ya existe. ¿Desea usar el existente?`)) {
            return;
        }
        
        // Use existing ingredient
        appState.currentQuoter.ingredients.push({
            name: existingIngredient.name,
            quantity: quantity,
            unit: existingIngredient.unit,
            price: existingIngredient.price
        });
    } else {
        // Create new ingredient
        const newIngredient = { name, unit, price };
        appState.ingredients.push(newIngredient);
        appState.inventory[name] = { quantity: 10, unit: unit };
        
        Storage.save('ingredients', appState.ingredients);
        Storage.save('inventory', appState.inventory);
        
        appState.currentQuoter.ingredients.push({
            name: name,
            quantity: quantity,
            unit: unit,
            price: price
        });
        
        renderIngredientsTable();
        renderInventoryTable();
    }
    
    renderQuoterTable();
    closeModal();
}

function removeIngredientFromQuoter(index) {
    appState.currentQuoter.ingredients.splice(index, 1);
    renderQuoterTable();
}

function updateIngredientQuantity(index, newQuantity) {
    appState.currentQuoter.ingredients[index].quantity = parseFloat(newQuantity) || 0;
}

function renderQuoterTable() {
    const tbody = document.getElementById('quoterTableBody');
    tbody.innerHTML = '';
    
    appState.currentQuoter.ingredients.forEach((ing, index) => {
        const cost = ing.quantity * ing.price;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ing.name}</td>
            <td>
                <input type="number" class="quantity-input" value="${ing.quantity}" 
                       onchange="updateIngredientQuantity(${index}, this.value)" min="0" step="0.01">
            </td>
            <td>${ing.unit}</td>
            <td>${formatCurrency(ing.price)}</td>
            <td>${formatCurrency(cost)}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removeIngredientFromQuoter(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function calculateQuoter() {
    const totalCost = appState.currentQuoter.ingredients.reduce((sum, ing) => sum + (ing.quantity * ing.price), 0);
    const margin = appState.settings.globalMargin;
    const suggestedPrice = calculateSellPrice(totalCost);
    
    document.getElementById('totalCost').textContent = formatCurrency(totalCost);
    document.getElementById('profitMargin').textContent = `${margin}%`;
    document.getElementById('suggestedPrice').textContent = formatCurrency(suggestedPrice);
}

function saveCurrentQuoterAsRecipe() {
    if (!appState.currentQuoter.dessert || appState.currentQuoter.ingredients.length === 0) {
        alert('Por favor selecciona un postre y agrega ingredientes');
        return;
    }
    
    const recipeName = prompt('Nombre de la receta:');
    if (!recipeName) return;
    
    const recipe = {
        id: Date.now().toString(),
        name: recipeName,
        dessert: appState.currentQuoter.dessert,
        ingredients: JSON.parse(JSON.stringify(appState.currentQuoter.ingredients))
    };
    
    appState.recipes.push(recipe);
    Storage.save('recipes', appState.recipes);
    
    alert('Receta guardada exitosamente');
    renderRecipesTable();
    updateDashboard();
}

// ============================================
// RECETAS
// ============================================

function renderRecipesTable() {
    const tbody = document.getElementById('recipesTableBody');
    tbody.innerHTML = '';
    
    appState.recipes.forEach(recipe => {
        const cost = calculateRecipeCost(recipe);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recipe.name}</td>
            <td>${recipe.dessert}</td>
            <td>${recipe.ingredients.length} ingredientes</td>
            <td>${formatCurrency(cost)}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="loadRecipeToQuoter('${recipe.id}')">Usar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteRecipe('${recipe.id}')">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showAddRecipeModal() {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="form-group">
            <label>Nombre de la Receta</label>
            <input type="text" id="newRecipeName" class="form-input" placeholder="Ej: Pay de queso clásico">
        </div>
        <div class="form-group">
            <label>Postre</label>
            <select id="newRecipeDessert" class="form-select">
                ${desserts.map(d => `<option value="${d}">${d}</option>`).join('')}
            </select>
        </div>
        <button class="btn btn-primary" onclick="createNewRecipe()">Crear Receta</button>
    `;
    
    document.getElementById('modalTitle').textContent = 'Nueva Receta';
    document.getElementById('modal').classList.add('show');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

function createNewRecipe() {
    const name = document.getElementById('newRecipeName').value;
    const dessert = document.getElementById('newRecipeDessert').value;
    
    if (!name) {
        alert('Por favor ingresa un nombre para la receta');
        return;
    }
    
    const recipe = {
        id: Date.now().toString(),
        name: name,
        dessert: dessert,
        ingredients: []
    };
    
    appState.recipes.push(recipe);
    Storage.save('recipes', appState.recipes);
    
    closeModal();
    renderRecipesTable();
    updateDashboard();
    
    // Cargar la receta en el cotizador para agregar ingredientes
    document.getElementById('quoterDessert').value = dessert;
    handleDessertChange();
    document.getElementById('quoterRecipe').value = recipe.id;
    handleRecipeChange();
    
    alert('Receta creada. Ahora agrega ingredientes desde el cotizador.');
}

function loadRecipeToQuoter(recipeId) {
    const recipe = appState.recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    document.getElementById('quoterDessert').value = recipe.dessert;
    handleDessertChange();
    document.getElementById('quoterRecipe').value = recipe.id;
    handleRecipeChange();
    
    // Navegar al cotizador
    document.querySelector('[data-section="quoter"]').click();
}

function deleteRecipe(recipeId) {
    if (!confirm('¿Estás seguro de eliminar esta receta?')) return;
    
    appState.recipes = appState.recipes.filter(r => r.id !== recipeId);
    Storage.save('recipes', appState.recipes);
    renderRecipesTable();
    updateDashboard();
}

function calculateRecipeCost(recipe) {
    return recipe.ingredients.reduce((sum, ing) => sum + (ing.quantity * ing.price), 0);
}

function calculateSellPrice(cost) {
    const margin = appState.settings.globalMargin / 100;
    const tax = appState.settings.taxRate / 100;
    const priceWithMargin = cost / (1 - margin);
    return priceWithMargin * (1 + tax);
}

// ============================================
// INGREDIENTES
// ============================================

function renderIngredientsTable() {
    const tbody = document.getElementById('ingredientsTableBody');
    tbody.innerHTML = '';
    
    appState.ingredients.forEach((ing, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ing.name}</td>
            <td>${ing.unit}</td>
            <td>${formatCurrency(ing.price)}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editIngredient(${index})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteIngredient(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showAddIngredientModal() {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="form-group">
            <label>Nombre del Ingrediente</label>
            <input type="text" id="newIngredientName" class="form-input" placeholder="Ej: Chocolate blanco">
        </div>
        <div class="form-group">
            <label>Unidad Base</label>
            <select id="newIngredientUnit" class="form-select">
                <option value="kg">kg</option>
                <option value="gramos">gramos</option>
                <option value="litros">litros</option>
                <option value="ml">ml</option>
                <option value="pieza">pieza</option>
                <option value="paquete">paquete</option>
                <option value="lata">lata</option>
                <option value="frasco">frasco</option>
                <option value="sobre">sobre</option>
                <option value="tabla">tabla</option>
            </select>
        </div>
        <div class="form-group">
            <label>Precio Unitario</label>
            <input type="number" id="newIngredientPrice" class="form-input" placeholder="0.00" step="0.01" min="0">
        </div>
        <button class="btn btn-primary" onclick="addNewIngredient()">Agregar</button>
    `;
    
    document.getElementById('modalTitle').textContent = 'Nuevo Ingrediente';
    document.getElementById('modal').classList.add('show');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

function addNewIngredient() {
    const name = document.getElementById('newIngredientName').value;
    const unit = document.getElementById('newIngredientUnit').value;
    const price = parseFloat(document.getElementById('newIngredientPrice').value);
    
    if (!name || !price) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    appState.ingredients.push({ name, unit, price });
    appState.inventory[name] = { quantity: 10, unit: unit };
    
    Storage.save('ingredients', appState.ingredients);
    Storage.save('inventory', appState.inventory);
    
    closeModal();
    renderIngredientsTable();
    renderInventoryTable();
    populateIngredientSelect();
}

function editIngredient(index) {
    const ing = appState.ingredients[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="form-group">
            <label>Nombre del Ingrediente</label>
            <input type="text" id="editIngredientName" class="form-input" value="${ing.name}">
        </div>
        <div class="form-group">
            <label>Unidad Base</label>
            <select id="editIngredientUnit" class="form-select">
                <option value="kg" ${ing.unit === 'kg' ? 'selected' : ''}>kg</option>
                <option value="gramos" ${ing.unit === 'gramos' ? 'selected' : ''}>gramos</option>
                <option value="litros" ${ing.unit === 'litros' ? 'selected' : ''}>litros</option>
                <option value="ml" ${ing.unit === 'ml' ? 'selected' : ''}>ml</option>
                <option value="pieza" ${ing.unit === 'pieza' ? 'selected' : ''}>pieza</option>
                <option value="paquete" ${ing.unit === 'paquete' ? 'selected' : ''}>paquete</option>
                <option value="lata" ${ing.unit === 'lata' ? 'selected' : ''}>lata</option>
                <option value="frasco" ${ing.unit === 'frasco' ? 'selected' : ''}>frasco</option>
                <option value="sobre" ${ing.unit === 'sobre' ? 'selected' : ''}>sobre</option>
                <option value="tabla" ${ing.unit === 'tabla' ? 'selected' : ''}>tabla</option>
            </select>
        </div>
        <div class="form-group">
            <label>Precio Unitario</label>
            <input type="number" id="editIngredientPrice" class="form-input" value="${ing.price}" step="0.01" min="0">
        </div>
        <button class="btn btn-primary" onclick="updateIngredient(${index})">Actualizar</button>
    `;
    
    document.getElementById('modalTitle').textContent = 'Editar Ingrediente';
    document.getElementById('modal').classList.add('show');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

function updateIngredient(index) {
    const name = document.getElementById('editIngredientName').value;
    const unit = document.getElementById('editIngredientUnit').value;
    const price = parseFloat(document.getElementById('editIngredientPrice').value);
    
    if (!name || !price) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    const oldName = appState.ingredients[index].name;
    appState.ingredients[index] = { name, unit, price };
    
    // Actualizar inventario si cambió el nombre
    if (oldName !== name) {
        appState.inventory[name] = appState.inventory[oldName];
        delete appState.inventory[oldName];
        appState.inventory[name].unit = unit;
    }
    
    Storage.save('ingredients', appState.ingredients);
    Storage.save('inventory', appState.inventory);
    
    closeModal();
    renderIngredientsTable();
    renderInventoryTable();
    populateIngredientSelect();
    updateDashboard();
}

function deleteIngredient(index) {
    const ing = appState.ingredients[index];
    if (!confirm(`¿Estás seguro de eliminar ${ing.name}?`)) return;
    
    appState.ingredients.splice(index, 1);
    delete appState.inventory[ing.name];
    
    Storage.save('ingredients', appState.ingredients);
    Storage.save('inventory', appState.inventory);
    
    renderIngredientsTable();
    renderInventoryTable();
    populateIngredientSelect();
}

// ============================================
// INVENTARIO
// ============================================

function renderInventoryTable() {
    const tbody = document.getElementById('inventoryTableBody');
    tbody.innerHTML = '';
    
    const lowStockThreshold = appState.settings.lowStockAlert;
    
    Object.keys(appState.inventory).forEach(name => {
        const item = appState.inventory[name];
        const isLowStock = item.quantity <= lowStockThreshold;
        const statusClass = isLowStock ? 'danger' : 'success';
        const statusText = isLowStock ? 'Bajo' : 'OK';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editInventoryItem('${name}')">Editar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showUpdateInventoryModal() {
    const modalBody = document.getElementById('modalBody');
    let ingredientsHtml = '';
    
    Object.keys(appState.inventory).forEach(name => {
        const item = appState.inventory[name];
        ingredientsHtml += `
            <div class="form-group" style="border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 10px;">
                <label>${name}</label>
                <input type="number" class="form-input inventory-quantity-input" 
                       data-ingredient="${name}" value="${item.quantity}" min="0" step="0.1">
            </div>
        `;
    });
    
    modalBody.innerHTML = `
        <div style="max-height: 400px; overflow-y: auto;">
            ${ingredientsHtml}
        </div>
        <button class="btn btn-primary" onclick="updateAllInventory()">Actualizar Todo</button>
    `;
    
    document.getElementById('modalTitle').textContent = 'Actualizar Inventario';
    document.getElementById('modal').classList.add('show');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

function updateAllInventory() {
    const inputs = document.querySelectorAll('.inventory-quantity-input');
    inputs.forEach(input => {
        const name = input.dataset.ingredient;
        const quantity = parseFloat(input.value) || 0;
        appState.inventory[name].quantity = quantity;
    });
    
    Storage.save('inventory', appState.inventory);
    closeModal();
    renderInventoryTable();
}

function editInventoryItem(name) {
    const item = appState.inventory[name];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="form-group">
            <label>${name}</label>
            <input type="number" id="editInventoryQuantity" class="form-input" value="${item.quantity}" min="0" step="0.1">
        </div>
        <button class="btn btn-primary" onclick="updateInventoryItem('${name}')">Actualizar</button>
    `;
    
    document.getElementById('modalTitle').textContent = 'Editar Inventario';
    document.getElementById('modal').classList.add('show');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

function updateInventoryItem(name) {
    const quantity = parseFloat(document.getElementById('editInventoryQuantity').value) || 0;
    appState.inventory[name].quantity = quantity;
    
    Storage.save('inventory', appState.inventory);
    closeModal();
    renderInventoryTable();
}

// ============================================
// ESTADÍSTICAS
// ============================================

function updateStatistics() {
    const recipes = appState.recipes;
    
    // Gráfica de costo por postre
    const dessertGroups = {};
    recipes.forEach(recipe => {
        if (!dessertGroups[recipe.dessert]) {
            dessertGroups[recipe.dessert] = [];
        }
        dessertGroups[recipe.dessert].push(calculateRecipeCost(recipe));
    });
    
    const avgCostByDessert = Object.keys(dessertGroups).map(dessert => ({
        dessert,
        avgCost: dessertGroups[dessert].reduce((a, b) => a + b, 0) / dessertGroups[dessert].length
    }));
    
    createChart('costByDessertChart', 'bar', {
        labels: avgCostByDessert.map(d => d.dessert),
        datasets: [{
            label: 'Costo Promedio',
            data: avgCostByDessert.map(d => d.avgCost),
            backgroundColor: '#D9B79B'
        }]
    }, {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    });

    // Gráfica de ingredientes más usados
    const ingredientUsage = {};
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ing => {
            if (!ingredientUsage[ing.name]) {
                ingredientUsage[ing.name] = 0;
            }
            ingredientUsage[ing.name]++;
        });
    });

    const sortedUsage = Object.entries(ingredientUsage)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    createChart('mostUsedIngredientsChart', 'bar', {
        labels: sortedUsage.map(i => i[0]),
        datasets: [{
            label: 'Veces usado',
            data: sortedUsage.map(i => i[1]),
            backgroundColor: '#8B5E3C'
        }]
    }, {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        }
    });

    // Gráfica de ganancia estimada total
    const profitData = recipes.map(r => {
        const cost = calculateRecipeCost(r);
        return calculateSellPrice(cost) - cost;
    });

    createChart('totalProfitChart', 'line', {
        labels: recipes.map(r => r.name),
        datasets: [{
            label: 'Ganancia Estimada',
            data: profitData,
            borderColor: '#A67C5B',
            backgroundColor: 'rgba(166, 124, 91, 0.15)',
            fill: true,
            tension: 0.4
        }]
    }, {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    });
}

// ============================================
// CONFIGURACIÓN
// ============================================

function loadSettings() {
    document.getElementById('globalMargin').value = appState.settings.globalMargin;
    document.getElementById('currency').value = appState.settings.currency;
    document.getElementById('taxRate').value = appState.settings.taxRate;
    document.getElementById('lowStockAlert').value = appState.settings.lowStockAlert;
}

function saveSettings() {
    appState.settings.globalMargin = parseFloat(document.getElementById('globalMargin').value) || 50;
    appState.settings.currency = document.getElementById('currency').value;
    appState.settings.taxRate = parseFloat(document.getElementById('taxRate').value) || 16;
    appState.settings.lowStockAlert = parseFloat(document.getElementById('lowStockAlert').value) || 5;
    
    Storage.save('settings', appState.settings);
    
    alert('Configuración guardada exitosamente');
    updateDashboard();
    renderInventoryTable();
}

function resetAllData() {
    if (!confirm('¿Estás seguro de restaurar todos los datos a los valores iniciales? Esta acción no se puede deshacer.')) {
        return;
    }
    
    Storage.remove('ingredients');
    Storage.remove('recipes');
    Storage.remove('inventory');
    Storage.remove('settings');
    
    location.reload();
}

// ============================================
// EXPORTACIÓN PDF
// ============================================

function exportToPDF() {
    if (appState.currentQuoter.ingredients.length === 0) {
        alert('No hay ingredientes para exportar');
        return;
    }
    
    calculateQuoter();
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Colores
    const primaryColor = [233, 30, 99];
    
    // Título
    doc.setFontSize(20);
    doc.setTextColor(...primaryColor);
    doc.text('Cotización de Postre', 14, 20);
    
    // Información del postre
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Postre: ${appState.currentQuoter.dessert || 'No especificado'}`, 14, 35);
    
    const recipeName = appState.currentQuoter.recipe ? 
        appState.recipes.find(r => r.id === appState.currentQuoter.recipe)?.name : 'Personalizada';
    doc.text(`Receta: ${recipeName}`, 14, 42);
    
    // Fecha
    const now = new Date();
    doc.text(`Fecha: ${now.toLocaleDateString('es-ES')}`, 14, 49);
    
    // Tabla de ingredientes
    const tableData = appState.currentQuoter.ingredients.map(ing => [
        ing.name,
        ing.quantity.toString(),
        ing.unit,
        formatCurrency(ing.price),
        formatCurrency(ing.quantity * ing.price)
    ]);
    
    const totalCost = appState.currentQuoter.ingredients.reduce((sum, ing) => sum + (ing.quantity * ing.price), 0);
    const suggestedPrice = calculateSellPrice(totalCost);
    
    tableData.push([
        '',
        '',
        '',
        'TOTAL',
        formatCurrency(totalCost)
    ]);
    
    doc.autoTable({
        startY: 55,
        head: [['Ingrediente', 'Cantidad', 'Unidad', 'Precio Unitario', 'Costo']],
        body: tableData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryColor
        },
        footStyles: {
            fillColor: [200, 200, 200],
            fontStyle: 'bold'
        }
    });
    
    // Resumen
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('Resumen', 14, finalY);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Costo Total: ${formatCurrency(totalCost)}`, 14, finalY + 10);
    doc.text(`Margen de Ganancia: ${appState.settings.globalMargin}%`, 14, finalY + 17);
    doc.text(`Impuestos: ${appState.settings.taxRate}%`, 14, finalY + 24);
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(`Precio Sugerido: ${formatCurrency(suggestedPrice)}`, 14, finalY + 34);
    
    // Guardar PDF
    const fileName = `cotizacion_${appState.currentQuoter.dessert.replace(/\s+/g, '_')}_${now.getTime()}.pdf`;
    doc.save(fileName);
}

// ============================================
// MODAL
// ============================================

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// ============================================
// GRÁFICAS
// ============================================

const charts = {};

function createChart(canvasId, type, data, options) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // Destruir gráfica existente si hay una
    if (charts[canvasId]) {
        charts[canvasId].destroy();
    }

    const ctx = canvas.getContext('2d');
    charts[canvasId] = new Chart(ctx, {
        type: type,
        data: data,
        options: {
            ...options,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                ...options.plugins,
                legend: {
                    ...options.plugins?.legend,
                    display: window.innerWidth > 480,
                    position: window.innerWidth > 768 ? (options.plugins?.legend?.position || 'right') : 'bottom'
                }
            }
        }
    });
}

// ============================================
// INICIALIZAR APLICACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', initializeApp);
