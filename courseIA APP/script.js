const foodItems = [
  { id: 1, icon: "🍅", name: "Tomates", quantity: "3 pièces", status: "à consommer aujourd'hui", category: "Fruits/Légumes" },
  { id: 2, icon: "🍗", name: "Poulet", quantity: "300 g", status: "ouvert depuis 2 jours", category: "Protéines" },
  { id: 3, icon: "🍚", name: "Riz", quantity: "1 kg", status: "placard", category: "Féculents" },
  { id: 4, icon: "🥚", name: "Œufs", quantity: "6", status: "OK", category: "Protéines" },
  { id: 5, icon: "🥒", name: "Courgettes", quantity: "2", status: "bientôt", category: "Fruits/Légumes" },
  { id: 6, icon: "🥛", name: "Yaourt nature", quantity: "4", status: "bientôt", category: "Produits frais" }
];

const plan = [
  { day: "Lundi", lunch: meal("Omelette tomates", "18 min", "2,10 €", "anti-gaspillage"), dinner: meal("Poulet riz légumes", "25 min", "3,80 €", "équilibré") },
  { day: "Mardi", lunch: meal("Salade de pâtes", "15 min", "2,40 €", "économique"), dinner: meal("Chili économique", "30 min", "2,70 €", "économique") },
  { day: "Mercredi", lunch: meal("Wrap poulet", "12 min", "2,90 €", "protéiné"), dinner: meal("Soupe courgettes", "25 min", "1,90 €", "anti-gaspillage") },
  { day: "Jeudi", lunch: meal("Riz sauté aux œufs", "20 min", "2,20 €", "économique"), dinner: meal("Pâtes tomate basilic", "18 min", "1,80 €", "économique") },
  { day: "Vendredi", lunch: meal("Bowl protéiné", "22 min", "3,40 €", "protéiné"), dinner: meal("Gratin légumes", "35 min", "2,60 €", "équilibré") },
  { day: "Samedi", lunch: meal("Salade complète", "15 min", "2,80 €", "équilibré"), dinner: meal("Curry pois chiches", "28 min", "2,10 €", "économique") },
  { day: "Dimanche", lunch: meal("Poulet rôti simplifié", "45 min", "4,20 €", "équilibré"), dinner: meal("Restes optimisés", "15 min", "1,40 €", "anti-gaspillage") }
];

const replacementMeals = [
  meal("Galettes de lentilles", "25 min", "2,20 €", "protéiné"),
  meal("Poêlée riz courgettes", "18 min", "1,70 €", "anti-gaspillage"),
  meal("Tortilla pommes de terre", "30 min", "2,00 €", "économique"),
  meal("Pâtes pois chiches tomate", "20 min", "1,95 €", "économique"),
  meal("Salade œufs riz", "14 min", "2,35 €", "protéiné")
];

const shoppingData = [
  {
    category: "Fruits et légumes",
    items: [
      item("Carottes", "1 kg", 1.8),
      item("Salade", "1 pièce", 1.2),
      item("Oignons", "500 g", 1.5)
    ]
  },
  {
    category: "Protéines",
    items: [
      item("Œufs", "déjà disponible", 0, true),
      item("Poulet", "déjà disponible", 0, true),
      item("Pois chiches", "1 boîte", 1.1)
    ]
  },
  {
    category: "Féculents",
    items: [
      item("Pâtes", "500 g", 1.2),
      item("Riz", "déjà disponible", 0, true)
    ]
  },
  {
    category: "Produits frais",
    items: [
      item("Fromage blanc", "500 g", 2.2),
      item("Mozzarella", "1 boule", 1.6)
    ]
  },
  {
    category: "Épicerie",
    items: [
      item("Tomates concassées", "2 boîtes", 2.4),
      item("Épices chili", "1 sachet", 1.3),
      item("Lait de coco", "1 boîte", 1.9)
    ]
  }
];

const recipes = [
  recipe("Poulet riz légumes", "🍗", "25 min", "3,80 €", ["équilibré", "protéiné"], ["Poulet", "Riz", "Courgettes", "Tomates"], ["Cuire le riz.", "Faire dorer le poulet.", "Ajouter les légumes et assaisonner.", "Servir chaud."]),
  recipe("Omelette tomates", "🍳", "18 min", "2,10 €", ["économique", "anti-gaspillage"], ["Œufs", "Tomates", "Basilic"], ["Battre les œufs.", "Couper les tomates.", "Cuire à feu doux.", "Ajouter le basilic."]),
  recipe("Chili économique", "🌶️", "30 min", "2,70 €", ["économique", "protéiné"], ["Pois chiches", "Tomates", "Oignons", "Épices"], ["Faire revenir les oignons.", "Ajouter tomates et pois chiches.", "Mijoter 20 minutes.", "Ajuster les épices."]),
  recipe("Salade de pâtes", "🥗", "15 min", "2,40 €", ["économique"], ["Pâtes", "Salade", "Tomates"], ["Cuire les pâtes.", "Refroidir sous l'eau.", "Mélanger avec les légumes.", "Assaisonner."]),
  recipe("Curry pois chiches", "🍛", "28 min", "2,10 €", ["économique", "protéiné"], ["Pois chiches", "Lait de coco", "Riz", "Épices"], ["Faire chauffer les épices.", "Ajouter pois chiches et lait de coco.", "Mijoter.", "Servir avec le riz."]),
  recipe("Bowl protéiné", "🥙", "22 min", "3,40 €", ["protéiné"], ["Riz", "Œufs", "Légumes", "Fromage blanc"], ["Préparer la base de riz.", "Cuire les œufs.", "Ajouter les légumes.", "Napper de sauce légère."]),
  recipe("Soupe courgettes", "🥣", "25 min", "1,90 €", ["anti-gaspillage", "économique"], ["Courgettes", "Oignons", "Fromage blanc"], ["Faire revenir les oignons.", "Ajouter les courgettes.", "Couvrir d'eau.", "Mixer avec le fromage blanc."]),
  recipe("Pâtes tomate basilic", "🍝", "18 min", "1,80 €", ["économique"], ["Pâtes", "Tomates", "Basilic"], ["Cuire les pâtes.", "Préparer une sauce tomate.", "Mélanger.", "Ajouter le basilic."])
];

const budgetSegments = [
  { label: "Légumes", value: 9, color: "#33a66a" },
  { label: "Protéines", value: 12, color: "#f49a38" },
  { label: "Féculents", value: 6, color: "#6b9ee8" },
  { label: "Frais", value: 7, color: "#c77dff" },
  { label: "Épicerie", value: 4, color: "#f2c94c" }
];

let activeFilter = "Tous";
let toastTimer;
let navigationBound = false;

function meal(name, time, price, badge) {
  return { name, time, price, badge };
}

function item(name, quantity, price, available = false) {
  return { name, quantity, price, available, checked: false };
}

function recipe(name, icon, time, price, badges, ingredients, steps) {
  return { name, icon, time, price, badges, ingredients, steps, level: "Facile", portions: 1 };
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function bindIfExists(selector, eventName, handler) {
  const element = qs(selector);
  if (element) {
    element.addEventListener(eventName, handler);
  }
}

function navigate(pageId) {
  const target = qs(`#${pageId}`);
  if (!target) return;

  qsa(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  qsa("[data-page]").forEach(item => item.classList.toggle("active", item.dataset.page === pageId));
  const mobileMoreButton = qs("#mobile-more-btn");
  const mobileMoreMenu = qs("#mobile-more-menu");
  if (mobileMoreButton) {
    mobileMoreButton.classList.toggle("active", ["budget", "profile", "premium"].includes(pageId));
  }
  if (mobileMoreMenu) {
    mobileMoreMenu.classList.add("hidden");
  }
  const pageTitle = qs("#page-title");
  if (pageTitle) {
    pageTitle.textContent = target.dataset.title || "SmartCourses AI";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageId === "budget") {
    setTimeout(drawBudgetChart, 80);
  }
}

function bindNavigation() {
  if (navigationBound) return;
  navigationBound = true;

  document.addEventListener("click", event => {
    const regenerateButton = event.target.closest("#regenerate-plan");
    if (regenerateButton) {
      event.preventDefault();
      regenerateWeek();
      return;
    }

    const replaceButton = event.target.closest(".random-replace");
    if (replaceButton) {
      event.preventDefault();
      replaceRandomMeal();
      return;
    }

    const moreButton = event.target.closest("#mobile-more-btn");
    if (moreButton) {
      event.preventDefault();
      const mobileMoreMenu = qs("#mobile-more-menu");
      if (mobileMoreMenu) {
        mobileMoreMenu.classList.toggle("hidden");
      }
      return;
    }

    const pageButton = event.target.closest("[data-page]");
    if (pageButton) {
      event.preventDefault();
      navigate(pageButton.dataset.page);
    }
  });
}

function renderFoods() {
  const search = qs("#fridge-search").value.trim().toLowerCase();
  const grid = qs("#food-grid");
  const filtered = foodItems.filter(food => {
    const matchesSearch = `${food.name} ${food.quantity} ${food.status} ${food.category}`.toLowerCase().includes(search);
    const urgent = ["à consommer aujourd'hui", "ouvert depuis 2 jours", "bientôt"].includes(food.status);
    const matchesFilter = activeFilter === "Tous" || food.category === activeFilter || (activeFilter === "À consommer vite" && urgent);
    return matchesSearch && matchesFilter;
  });

  grid.innerHTML = filtered.map(food => `
    <article class="food-card" data-id="${food.id}">
      <div class="food-main">
        <span class="food-icon">${food.icon}</span>
        <div>
          <h3>${food.name}</h3>
          <p class="muted">${food.quantity} — ${food.category}</p>
          <span class="food-status">${food.status}</span>
        </div>
      </div>
      <div class="food-actions">
        <button type="button" data-edit-food="${food.id}">Modifier</button>
        <button type="button" data-delete-food="${food.id}">Supprimer</button>
      </div>
    </article>
  `).join("");
}

function renderPlan() {
  const planningGrid = qs("#planning-grid");
  if (!planningGrid) return;

  planningGrid.innerHTML = plan.map((day, dayIndex) => `
    <article class="day-card">
      <h3>${day.day}</h3>
      ${renderMealSlot("Midi", day.lunch, dayIndex, "lunch")}
      ${renderMealSlot("Soir", day.dinner, dayIndex, "dinner")}
    </article>
  `).join("");
}

function renderMealSlot(label, mealData, dayIndex, key) {
  return `
    <div class="meal-slot" data-day="${dayIndex}" data-slot="${key}">
      <span class="eyebrow">${label}</span>
      <strong>${mealData.name}</strong>
      <div class="meal-meta">
        <span>${mealData.time}</span>
        <span>${mealData.price}</span>
      </div>
      <span class="badge">${mealData.badge}</span>
      <button class="secondary-button recipe-open" data-recipe="${mealData.name}" type="button">Voir recette</button>
    </div>
  `;
}

function renderShoppingList() {
  qs("#shopping-list").innerHTML = shoppingData.map(group => `
    <article class="shopping-category">
      <h3>${group.category}</h3>
      ${group.items.map(product => `
        <label class="shopping-item ${product.checked ? "done" : ""}">
          <input type="checkbox" ${product.checked ? "checked" : ""} data-product="${product.name}">
          <span>
            <strong class="item-name">${product.name}</strong>
            <span class="muted"> — ${product.quantity}</span>
            ${product.available ? '<span class="availability">déjà dans le frigo</span>' : ""}
          </span>
          <span class="shopping-price">${product.available ? "0 €" : formatEuro(product.price)}</span>
        </label>
      `).join("")}
    </article>
  `).join("");
  updateShoppingSummary();
}

function renderRecipes() {
  qs("#recipes-grid").innerHTML = recipes.map(data => `
    <article class="recipe-card">
      <div class="recipe-visual">${data.icon}</div>
      <div class="recipe-body">
        <h3>${data.name}</h3>
        <div class="recipe-facts">
          <span>${data.time}</span>
          <span>${data.price} / personne</span>
          <span>${data.level}</span>
        </div>
        <div class="recipe-badges">
          ${data.badges.map(badge => `<span class="badge">${badge}</span>`).join("")}
        </div>
        <button class="secondary-button recipe-open" data-recipe="${data.name}" type="button">Voir recette</button>
      </div>
    </article>
  `).join("");
}

function updateShoppingSummary() {
  const allItems = shoppingData.flatMap(group => group.items);
  const total = allItems.filter(product => !product.available && !product.checked).reduce((sum, product) => sum + product.price, 0);
  const availableCount = allItems.filter(product => product.available).length;

  qs("#shopping-total").textContent = formatEuro(total);
  qs("#shopping-left").textContent = formatEuro(50 - total);
  qs("#available-count").textContent = availableCount;
}

function formatEuro(value) {
  return `${value.toFixed(2).replace(".", ",").replace(",00", "")} €`;
}

function iconForFood(name) {
  const lower = name.toLowerCase();
  if (lower.includes("tomate")) return "🍅";
  if (lower.includes("poulet")) return "🍗";
  if (lower.includes("riz")) return "🍚";
  if (lower.includes("œuf") || lower.includes("oeuf")) return "🥚";
  if (lower.includes("yaourt") || lower.includes("lait")) return "🥛";
  if (lower.includes("pâte") || lower.includes("pate")) return "🍝";
  if (lower.includes("salade")) return "🥗";
  return "🥬";
}

function addFood(event) {
  event.preventDefault();
  const food = {
    id: Date.now(),
    icon: iconForFood(qs("#food-name").value),
    name: qs("#food-name").value.trim(),
    quantity: qs("#food-quantity").value.trim(),
    category: qs("#food-category").value,
    status: qs("#food-urgency").value
  };

  if (!food.name || !food.quantity) return;

  foodItems.unshift(food);
  event.currentTarget.reset();
  event.currentTarget.classList.add("hidden");
  activeFilter = "Tous";
  qsa(".filter-pill").forEach(button => button.classList.toggle("active", button.dataset.filter === "Tous"));
  renderFoods();
  showToast(`${food.name} ajouté à Mon frigo.`);
}

function replaceRandomMeal(showMessage = true) {
  const dayIndex = Math.floor(Math.random() * plan.length);
  const slot = Math.random() > 0.5 ? "lunch" : "dinner";
  const replacement = replacementMeals[Math.floor(Math.random() * replacementMeals.length)];
  plan[dayIndex][slot] = { ...replacement };
  renderPlan();

  const updated = qs(`.meal-slot[data-day="${dayIndex}"][data-slot="${slot}"]`);
  if (updated) updated.classList.add("slot-updated");
  if (showMessage) {
    showToast(`${plan[dayIndex].day} ${slot === "lunch" ? "midi" : "soir"} remplacé par ${replacement.name}.`);
  }
}

function regenerateWeek() {
  replaceRandomMeal(false);
  setTimeout(() => {
    replaceRandomMeal(false);
    showToast("Semaine régénérée avec le budget actuel.");
  }, 180);
}

function openRecipeModal(recipeName) {
  const data = recipes.find(entry => entry.name === recipeName) || createMealRecipe(recipeName);
  qs("#recipe-detail").innerHTML = `
    <div class="recipe-detail-hero">
      <span class="recipe-detail-emoji">${data.icon}</span>
      <div>
        <p class="eyebrow">Recette</p>
        <h2 id="recipe-modal-title">${data.name}</h2>
        <div class="recipe-facts">
          <span>${data.time}</span>
          <span>${data.price} estimés</span>
          <span>${data.portions} portion</span>
          <span>${data.level}</span>
        </div>
      </div>
    </div>
    <div class="detail-columns">
      <section>
        <h3>Ingrédients</h3>
        <ul class="advice-list">
          ${data.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
      </section>
      <section>
        <h3>Étapes</h3>
        <ol>
          ${data.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
       
      </section>
    </div>
  `;
  qs("#recipe-modal").classList.remove("hidden");
}

function createMealRecipe(recipeName) {
  return {
    name: recipeName,
    icon: iconForRecipe(recipeName),
    time: "25 min",
    price: "2,80 €",
    badges: ["repas planifié"],
    ingredients: ["Base féculent", "Source de protéines", "Légumes de saison", "Assaisonnement simple"],
    steps: ["Préparer les ingrédients.", "Cuire la base du repas.", "Ajouter les légumes et la protéine.", "Assaisonner puis servir."],
    level: "Facile",
    portions: 1
  };
}

function iconForRecipe(recipeName) {
  const lower = recipeName.toLowerCase();
  if (lower.includes("poulet") || lower.includes("wrap")) return "🍗";
  if (lower.includes("omelette") || lower.includes("œuf") || lower.includes("oeuf")) return "🍳";
  if (lower.includes("salade") || lower.includes("bowl")) return "🥗";
  if (lower.includes("pâte") || lower.includes("pate")) return "🍝";
  if (lower.includes("soupe")) return "🥣";
  if (lower.includes("curry") || lower.includes("chili")) return "🍛";
  if (lower.includes("riz")) return "🍚";
  return "🍽️";
}

function closeRecipeModal() {
  qs("#recipe-modal").classList.add("hidden");
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function drawBudgetChart() {
  const canvas = qs("#budget-chart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const max = Math.max(...budgetSegments.map(segment => segment.value));
  const barWidth = 58;
  const gap = 38;
  const startX = 44;
  const baseY = height - 48;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#17211c";
  ctx.font = "700 16px Inter, sans-serif";
  ctx.fillText("Répartition en euros", 20, 28);

  budgetSegments.forEach((segment, index) => {
    const x = startX + index * (barWidth + gap);
    const barHeight = Math.round((segment.value / max) * 150);
    ctx.fillStyle = "#eef5ef";
    ctx.fillRect(x, baseY - 150, barWidth, 150);
    ctx.fillStyle = segment.color;
    ctx.fillRect(x, baseY - barHeight, barWidth, barHeight);
    ctx.fillStyle = "#17211c";
    ctx.font = "800 14px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${segment.value} €`, x + barWidth / 2, baseY - barHeight - 10);
    ctx.fillStyle = "#66746d";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.fillText(segment.label, x + barWidth / 2, baseY + 24);
  });

  ctx.textAlign = "left";
}

function bindEvents() {
  qs("#open-food-form").addEventListener("click", () => {
    qs("#food-form").classList.toggle("hidden");
  });

  qs("#food-form").addEventListener("submit", addFood);
  qs("#fridge-search").addEventListener("input", renderFoods);

  qsa(".filter-pill").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      qsa(".filter-pill").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderFoods();
    });
  });

  qs("#food-grid").addEventListener("click", event => {
    const deleteButton = event.target.closest("[data-delete-food]");
    const editButton = event.target.closest("[data-edit-food]");

    if (deleteButton) {
      const id = Number(deleteButton.dataset.deleteFood);
      const index = foodItems.findIndex(food => food.id === id);
      if (index > -1) {
        const [removed] = foodItems.splice(index, 1);
        renderFoods();
        showToast(`${removed.name} supprimé du frigo.`);
      }
    }

    if (editButton) {
      showToast("Modification simulée pour ce prototype.");
    }
  });

  bindIfExists("#budget-mode", "click", () => showToast("Planning adapté pour rester sous 50 €."));

  qsa(".toggle-button").forEach(button => {
    button.addEventListener("click", () => {
      qsa(".toggle-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const modeLabels = {
        economique: "Mode économique activé.",
        sportif: "Mode sportif activé.",
        "bien-etre": "Mode bien-être activé."
      };
      showToast(modeLabels[button.dataset.mode] || "Mode activé.");
    });
  });

  qs("#shopping-list").addEventListener("change", event => {
    const checkbox = event.target.closest("input[type='checkbox']");
    if (!checkbox) return;
    const product = shoppingData.flatMap(group => group.items).find(entry => entry.name === checkbox.dataset.product);
    if (product) product.checked = checkbox.checked;
    checkbox.closest(".shopping-item").classList.toggle("done", checkbox.checked);
    updateShoppingSummary();
  });

  qs("#check-all").addEventListener("click", () => {
    shoppingData.flatMap(group => group.items).forEach(product => product.checked = true);
    renderShoppingList();
    showToast("Tous les produits ont été cochés.");
  });

  qs("#export-list").addEventListener("click", () => showToast("Export simulé : liste prête à partager."));
  qs("#sort-list").addEventListener("click", () => showToast("Liste déjà triée par rayon."));
  qs("#reduce-budget").addEventListener("click", () => showToast("3 alternatives économiques proposées."));

  document.addEventListener("click", event => {
    if (!event.target.closest("#mobile-more-menu") && !event.target.closest("#mobile-more-btn")) {
      const mobileMoreMenu = qs("#mobile-more-menu");
      if (mobileMoreMenu) {
        mobileMoreMenu.classList.add("hidden");
      }
    }

    const recipeButton = event.target.closest(".recipe-open");
    if (recipeButton) openRecipeModal(recipeButton.dataset.recipe);

    if (event.target.closest(".add-to-plan")) {
      closeRecipeModal();
      showToast("Recette ajoutée au planning.");
    }
  });

  qs(".modal-close").addEventListener("click", closeRecipeModal);
  qs("#recipe-modal").addEventListener("click", event => {
    if (event.target.id === "recipe-modal") closeRecipeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeRecipeModal();
  });

  bindIfExists("#notify-btn", "click", () => showToast("3 produits sont à consommer rapidement."));
  bindIfExists("#save-profile", "click", () => showToast("Profil sauvegardé pour ce prototype."));

  qsa("input[name='goals']").forEach(option => {
    option.addEventListener("change", () => {
      updateGoalSummary();
      const goalDropdown = qs("#goal-dropdown");
      if (goalDropdown) {
        goalDropdown.open = false;
      }
    });
  });

  bindIfExists("#back-top", "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", () => {
    qs("#back-top").classList.toggle("show", window.scrollY > 420);
  });
}

function updateGoalSummary() {
  const goalSummary = qs("#goal-summary");
  if (!goalSummary) return;

  const selectedGoal = qs("input[name='goals']:checked");
  goalSummary.textContent = selectedGoal ? selectedGoal.value : "Choisir un objectif";
}

function init() {
  bindNavigation();
  renderFoods();
  renderPlan();
  renderShoppingList();
  renderRecipes();
  drawBudgetChart();
  updateGoalSummary();
  bindEvents();
}

init();
