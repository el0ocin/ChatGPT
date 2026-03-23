function makePlaceholderImage(label, fill) {
  const safeLabel = label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="22" fill="${fill}" />
      <circle cx="48" cy="56" r="18" fill="rgba(255,255,255,0.28)" />
      <path d="M18 124 L58 82 L92 112 L118 90 L142 124 Z" fill="rgba(255,255,255,0.34)" />
      <text x="16" y="144" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700">${safeLabel}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createGallery(label, fills) {
  return fills.map(function mapFill(fill, index) {
    return makePlaceholderImage(label + " " + (index + 1), fill);
  });
}

const dashboardSeed = {
  assumptions: [
    "This first pass uses seeded sample data because the repo was empty and no marketplace import or API contract exists yet.",
    "Clicks and inquiries are treated as manually entered totals for each listing until Facebook Marketplace and KSL sync logic is added.",
    "Images are supported as URL arrays. The current thumbnails are generated placeholders so the gallery slots are visible right away."
  ],
  listings: [
    {
      id: "fb-1",
      marketplace: "Facebook Marketplace",
      status: "listed",
      itemName: "Vintage Desk Lamp",
      category: "Home",
      subcategory: "Lighting",
      condition: "Good",
      quickSalePrice: 42,
      maxProfitPrice: 65,
      title: "Mid-century brass desk lamp with adjustable neck",
      description: "Cleaned and tested. Works well with a warm Edison bulb and has only minor wear on the base.",
      clicks: 147,
      inquiries: 11,
      images: createGallery("Lamp", ["#C85F45", "#2C8C83", "#C6A05F"])
    },
    {
      id: "fb-2",
      marketplace: "Facebook Marketplace",
      status: "sold",
      itemName: "Patio Dining Set",
      category: "Furniture",
      subcategory: "Outdoor",
      condition: "Very Good",
      quickSalePrice: 180,
      maxProfitPrice: 260,
      title: "4-seat patio dining set with tempered glass table",
      description: "Includes four stackable chairs and weather-resistant cushions. Stored under cover during winter.",
      clicks: 233,
      inquiries: 19,
      images: createGallery("Patio", ["#698A62", "#C6A05F"])
    },
    {
      id: "fb-3",
      marketplace: "Facebook Marketplace",
      status: "uncompleted",
      itemName: "Sony Mirrorless Camera",
      category: "Electronics",
      subcategory: "Cameras",
      condition: "Excellent",
      quickSalePrice: 410,
      maxProfitPrice: 525,
      title: "Sony a6000 mirrorless camera body and strap",
      description: "Draft not published yet. Needs lens details and shutter count added before posting.",
      clicks: 0,
      inquiries: 0,
      images: createGallery("Sony", ["#2C8C83", "#5C6570", "#C85F45"])
    },
    {
      id: "fb-4",
      marketplace: "Facebook Marketplace",
      status: "listed",
      itemName: "Leather Bar Stools",
      category: "Furniture",
      subcategory: "Seating",
      condition: "Good",
      quickSalePrice: 95,
      maxProfitPrice: 145,
      title: "Pair of brown leather swivel bar stools",
      description: "Sturdy metal base, smooth swivel, and light scuffing on the seat backs.",
      clicks: 92,
      inquiries: 6,
      images: createGallery("Stool", ["#7B9B72", "#C85F45"])
    },
    {
      id: "ksl-1",
      marketplace: "KSL",
      status: "listed",
      itemName: "Trek Mountain Bike",
      category: "Sporting Goods",
      subcategory: "Bikes",
      condition: "Very Good",
      quickSalePrice: 275,
      maxProfitPrice: 360,
      title: "Trek 29er mountain bike, tuned and trail ready",
      description: "Recent tune-up, hydraulic brakes, and newer tires. Fits rider around 5'9\" to 6'1\".",
      clicks: 168,
      inquiries: 14,
      images: createGallery("Bike", ["#2C8C83", "#698A62", "#C6A05F"])
    },
    {
      id: "ksl-2",
      marketplace: "KSL",
      status: "sold",
      itemName: "Solid Wood Dresser",
      category: "Furniture",
      subcategory: "Bedroom",
      condition: "Fair",
      quickSalePrice: 120,
      maxProfitPrice: 170,
      title: "Solid wood 6-drawer dresser with brass pulls",
      description: "Some surface wear on the top but the drawers are smooth and the frame is sturdy.",
      clicks: 125,
      inquiries: 9,
      images: createGallery("Dresser", ["#C6A05F", "#C85F45"])
    },
    {
      id: "ksl-3",
      marketplace: "KSL",
      status: "uncompleted",
      itemName: "Burton Snowboard",
      category: "Sporting Goods",
      subcategory: "Snow Sports",
      condition: "Good",
      quickSalePrice: 150,
      maxProfitPrice: 230,
      title: "Burton all-mountain snowboard with bindings",
      description: "Draft saved. Needs binding size, board length, and edge-condition notes before listing.",
      clicks: 0,
      inquiries: 0,
      images: createGallery("Board", ["#5C6570", "#2C8C83", "#C85F45"])
    },
    {
      id: "ksl-4",
      marketplace: "KSL",
      status: "listed",
      itemName: "Sectional Sofa",
      category: "Furniture",
      subcategory: "Living Room",
      condition: "Good",
      quickSalePrice: 340,
      maxProfitPrice: 480,
      title: "Gray sectional sofa with reversible chaise",
      description: "Pet-free home. Comfortable and clean with one small fabric pull on the back corner.",
      clicks: 201,
      inquiries: 17,
      images: createGallery("Sofa", ["#7B9B72", "#C6A05F", "#2C8C83"])
    }
  ],
  history: {
    "Facebook Marketplace": [
      { week: "Feb 23", clicks: 88, inquiries: 9, listed: 1, sold: 0, uncompleted: 2 },
      { week: "Mar 2", clicks: 132, inquiries: 12, listed: 2, sold: 0, uncompleted: 2 },
      { week: "Mar 9", clicks: 195, inquiries: 17, listed: 2, sold: 1, uncompleted: 1 },
      { week: "Mar 16", clicks: 237, inquiries: 20, listed: 2, sold: 1, uncompleted: 1 }
    ],
    KSL: [
      { week: "Feb 23", clicks: 71, inquiries: 6, listed: 1, sold: 0, uncompleted: 2 },
      { week: "Mar 2", clicks: 118, inquiries: 10, listed: 2, sold: 0, uncompleted: 2 },
      { week: "Mar 9", clicks: 176, inquiries: 14, listed: 2, sold: 1, uncompleted: 1 },
      { week: "Mar 16", clicks: 229, inquiries: 18, listed: 2, sold: 1, uncompleted: 1 }
    ]
  }
};

const state = {
  marketplace: "All",
  status: "All",
  search: ""
};

const marketplaceOptions = ["All", "Facebook Marketplace", "KSL"];
const statusOptions = ["All", "uncompleted", "listed", "sold"];

function cloneSeed(data) {
  return JSON.parse(JSON.stringify(data));
}

function loadDashboardData() {
  return Promise.resolve(cloneSeed(dashboardSeed));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function toTitleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function filterListings(data) {
  const search = state.search.trim().toLowerCase();

  return data.listings.filter(function matchesFilters(listing) {
    const matchesMarketplace =
      state.marketplace === "All" || listing.marketplace === state.marketplace;
    const matchesStatus = state.status === "All" || listing.status === state.status;
    const matchesSearch =
      search.length === 0 ||
      [
        listing.itemName,
        listing.title,
        listing.description,
        listing.category,
        listing.subcategory
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);

    return matchesMarketplace && matchesStatus && matchesSearch;
  });
}

function summarizeListings(listings) {
  return listings.reduce(
    function summarize(summary, listing) {
      summary.total += 1;
      summary[listing.status] += 1;
      summary.clicks += listing.clicks;
      summary.inquiries += listing.inquiries;
      summary.quickSaleValue += listing.quickSalePrice;
      summary.maxProfitValue += listing.maxProfitPrice;
      return summary;
    },
    {
      total: 0,
      uncompleted: 0,
      listed: 0,
      sold: 0,
      clicks: 0,
      inquiries: 0,
      quickSaleValue: 0,
      maxProfitValue: 0
    }
  );
}

function summarizeMarketplace(data, marketplace) {
  const listings = data.listings.filter(function isMarketplace(listing) {
    return listing.marketplace === marketplace;
  });

  return summarizeListings(listings);
}

function buildHistorySeries(data) {
  const selectedMarketplaces =
    state.marketplace === "All"
      ? ["Facebook Marketplace", "KSL"]
      : [state.marketplace];

  const buckets = new Map();

  selectedMarketplaces.forEach(function collect(marketplace) {
    data.history[marketplace].forEach(function merge(entry) {
      const current = buckets.get(entry.week) || {
        week: entry.week,
        clicks: 0,
        inquiries: 0,
        listed: 0,
        sold: 0,
        uncompleted: 0
      };

      current.clicks += entry.clicks;
      current.inquiries += entry.inquiries;
      current.listed += entry.listed;
      current.sold += entry.sold;
      current.uncompleted += entry.uncompleted;

      buckets.set(entry.week, current);
    });
  });

  return Array.from(buckets.values());
}

function buildPricingData(data) {
  const selectedMarketplaces =
    state.marketplace === "All"
      ? ["Facebook Marketplace", "KSL"]
      : [state.marketplace];

  return selectedMarketplaces.map(function mapMarketplace(marketplace) {
    const listings = data.listings.filter(function matches(listing) {
      if (listing.marketplace !== marketplace) {
        return false;
      }

      return state.status === "All" || listing.status === state.status;
    });

    const totals = listings.reduce(
      function reducePricing(accumulator, listing) {
        accumulator.quick += listing.quickSalePrice;
        accumulator.max += listing.maxProfitPrice;
        return accumulator;
      },
      { quick: 0, max: 0 }
    );

    return {
      marketplace: marketplace,
      quick: listings.length ? Math.round(totals.quick / listings.length) : 0,
      max: listings.length ? Math.round(totals.max / listings.length) : 0,
      count: listings.length
    };
  });
}

function renderAssumptions(data) {
  const assumptionsList = document.getElementById("assumptionsList");

  assumptionsList.innerHTML = data.assumptions
    .map(function mapAssumption(item) {
      return "<li>" + escapeHtml(item) + "</li>";
    })
    .join("");
}

function buildFilterChips(options, activeValue, type) {
  return options
    .map(function mapOption(option) {
      const label = type === "status" && option !== "All" ? toTitleCase(option) : option;
      const activeClass = option === activeValue ? " is-active" : "";
      return (
        '<button class="filter-chip' +
        activeClass +
        '" type="button" data-filter-type="' +
        type +
        '" data-value="' +
        escapeHtml(option) +
        '">' +
        escapeHtml(label) +
        "</button>"
      );
    })
    .join("");
}

function renderToolbar() {
  const toolbar = document.getElementById("toolbar");

  toolbar.innerHTML =
    '<div class="toolbar-group">' +
    '<span class="toolbar-label">Marketplace</span>' +
    '<div class="chip-row">' +
    buildFilterChips(marketplaceOptions, state.marketplace, "marketplace") +
    "</div>" +
    "</div>" +
    '<div class="toolbar-group">' +
    '<span class="toolbar-label">Status</span>' +
    '<div class="chip-row">' +
    buildFilterChips(statusOptions, state.status, "status") +
    "</div>" +
    "</div>" +
    '<div class="toolbar-group">' +
    '<span class="toolbar-label">Search</span>' +
    '<div class="search-shell">' +
    '<input id="listingSearch" class="search-input" type="search" placeholder="Search items, titles, descriptions..." value="' +
    escapeHtml(state.search) +
    '" />' +
    '<button id="resetFilters" class="reset-button" type="button">Reset</button>' +
    "</div>" +
    "</div>";
}

function renderKpis(summary) {
  const kpiGrid = document.getElementById("kpiGrid");
  const cards = [
    { label: "Tracked items", value: formatNumber(summary.total), note: "Listings matching the current filters.", pill: "accent", pillLabel: "Total" },
    { label: "Listed", value: formatNumber(summary.listed), note: "Active listings ready to sell.", pill: "teal", pillLabel: "Live" },
    { label: "Uncompleted", value: formatNumber(summary.uncompleted), note: "Drafts that still need final details.", pill: "gold", pillLabel: "Drafts" },
    { label: "Sold", value: formatNumber(summary.sold), note: "Listings already converted into sales.", pill: "accent", pillLabel: "Closed" },
    { label: "Clicks", value: formatNumber(summary.clicks), note: "Total marketplace views across the filtered set.", pill: "teal", pillLabel: "Traffic" },
    { label: "Inquiries", value: formatNumber(summary.inquiries), note: "Buyer messages and contact intent.", pill: "gold", pillLabel: "Leads" },
    { label: "Quick-sale value", value: formatCurrency(summary.quickSaleValue), note: "Combined low-friction pricing target.", pill: "gold", pillLabel: "Fast cash" },
    { label: "Max-profit value", value: formatCurrency(summary.maxProfitValue), note: "Combined upside if listings hold for stronger buyers.", pill: "teal", pillLabel: "Stretch" }
  ];

  kpiGrid.innerHTML = cards
    .map(function mapCard(card) {
      return (
        '<article class="kpi-card">' +
        '<div class="kpi-topline">' +
        "<span>" +
        card.label +
        "</span>" +
        '<span class="pill ' +
        card.pill +
        '">' +
        card.pillLabel +
        "</span>" +
        "</div>" +
        '<div class="kpi-value">' +
        card.value +
        "</div>" +
        '<p class="kpi-note">' +
        card.note +
        "</p>" +
        "</article>"
      );
    })
    .join("");
}

function renderMarketplaceBoards(data) {
  const container = document.getElementById("marketplaceBoards");
  const marketplaceCards = ["Facebook Marketplace", "KSL"]
    .map(function mapMarketplace(marketplace) {
      const summary = summarizeMarketplace(data, marketplace);
      const total = Math.max(summary.total, 1);
      const activeClass = state.marketplace === marketplace ? " is-active" : "";

      return (
        '<article class="marketplace-card' +
        activeClass +
        '">' +
        '<div class="marketplace-top">' +
        "<div>" +
        '<span class="section-tag">Marketplace system</span>' +
        '<div class="marketplace-name">' +
        escapeHtml(marketplace) +
        "</div>" +
        '<p class="marketplace-copy">Status tracking, pricing, and buyer engagement for this marketplace.</p>' +
        "</div>" +
        '<span class="pill ' +
        (marketplace === "Facebook Marketplace" ? "accent" : "teal") +
        '">' +
        formatNumber(summary.total) +
        " items" +
        "</span>" +
        "</div>" +
        '<div class="mini-metrics">' +
        '<div class="mini-metric"><span class="mini-label">Listed</span><span class="mini-value">' +
        formatNumber(summary.listed) +
        "</span></div>" +
        '<div class="mini-metric"><span class="mini-label">Uncompleted</span><span class="mini-value">' +
        formatNumber(summary.uncompleted) +
        "</span></div>" +
        '<div class="mini-metric"><span class="mini-label">Sold</span><span class="mini-value">' +
        formatNumber(summary.sold) +
        "</span></div>" +
        '<div class="mini-metric"><span class="mini-label">Inquiries</span><span class="mini-value">' +
        formatNumber(summary.inquiries) +
        "</span></div>" +
        "</div>" +
        '<div class="status-stack">' +
        '<div class="status-track">' +
        '<span class="status-bar uncompleted" style="width:' +
        (summary.uncompleted / total) * 100 +
        '%"></span>' +
        '<span class="status-bar listed" style="width:' +
        (summary.listed / total) * 100 +
        '%"></span>' +
        '<span class="status-bar sold" style="width:' +
        (summary.sold / total) * 100 +
        '%"></span>' +
        "</div>" +
        '<div class="status-legend">' +
        '<span class="status-label"><span class="status-dot uncompleted"></span>' +
        summary.uncompleted +
        " draft</span>" +
        '<span class="status-label"><span class="status-dot listed"></span>' +
        summary.listed +
        " live</span>" +
        '<span class="status-label"><span class="status-dot sold"></span>' +
        summary.sold +
        " sold</span>" +
        "</div>" +
        "</div>" +
        "</article>"
      );
    })
    .join("");

  container.innerHTML =
    '<div class="chart-head">' +
    "<div>" +
    '<span class="section-tag">Marketplace boards</span>' +
    "<h3>Side-by-side resale systems</h3>" +
    '<p class="chart-copy">Both marketplaces stay visible so you can compare workflow balance and demand.</p>' +
    "</div>" +
    "</div>" +
    '<div class="marketplace-board-grid">' +
    marketplaceCards +
    "</div>";
}

function renderEngagementChart(data) {
  const container = document.getElementById("engagementChart");
  const series = buildHistorySeries(data);
  const maxValue = series.reduce(function findMax(max, item) {
    return Math.max(max, item.clicks, item.inquiries);
  }, 1);

  const bars = series
    .map(function mapEntry(entry) {
      const clicksHeight = Math.max((entry.clicks / maxValue) * 100, 8);
      const inquiriesHeight = Math.max((entry.inquiries / maxValue) * 100, 8);

      return (
        '<div class="bar-group">' +
        '<div class="bar-stack">' +
        '<div class="metric-bar clicks" style="height:' +
        clicksHeight +
        '%"><span class="metric-value">' +
        entry.clicks +
        "</span></div>" +
        '<div class="metric-bar inquiries" style="height:' +
        inquiriesHeight +
        '%"><span class="metric-value">' +
        entry.inquiries +
        "</span></div>" +
        "</div>" +
        '<div class="axis-label">' +
        escapeHtml(entry.week) +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  container.innerHTML =
    '<div class="chart-head">' +
    "<div>" +
    '<span class="section-tag">Demand trend</span>' +
    "<h3>Weekly clicks and inquiries</h3>" +
    '<p class="chart-copy">Based on the current marketplace filter. Replace the seed history with real week-over-week metrics later.</p>' +
    "</div>" +
    '<div class="chart-number">' +
    formatNumber(series.reduce(function sum(total, entry) { return total + entry.clicks; }, 0)) +
    "</div>" +
    "</div>" +
    '<div class="bar-chart">' +
    bars +
    "</div>" +
    '<div class="chart-legend">' +
    '<span><span class="legend-swatch clicks"></span>Clicks</span>' +
    '<span><span class="legend-swatch inquiries"></span>Inquiries</span>' +
    "</div>";
}

function renderPricingBreakdown(data) {
  const container = document.getElementById("pricingBreakdown");
  const pricingData = buildPricingData(data);
  const maxValue = pricingData.reduce(function findMax(max, item) {
    return Math.max(max, item.quick, item.max);
  }, 1);

  const rows = pricingData
    .map(function mapRow(item) {
      return (
        '<div class="pricing-row">' +
        '<div class="row-label">' +
        escapeHtml(item.marketplace) +
        " · " +
        item.count +
        " items" +
        "</div>" +
        '<div class="pricing-bars">' +
        '<div class="pricing-bar-shell">' +
        '<span class="bar-label">Quick sale</span>' +
        '<div class="pricing-bar-track"><div class="pricing-bar-fill quick" style="width:' +
        (item.quick / maxValue) * 100 +
        '%"></div></div>' +
        '<strong>' +
        formatCurrency(item.quick) +
        "</strong>" +
        "</div>" +
        '<div class="pricing-bar-shell">' +
        '<span class="bar-label">Max profit</span>' +
        '<div class="pricing-bar-track"><div class="pricing-bar-fill max" style="width:' +
        (item.max / maxValue) * 100 +
        '%"></div></div>' +
        '<strong>' +
        formatCurrency(item.max) +
        "</strong>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  container.innerHTML =
    '<div class="chart-head">' +
    "<div>" +
    '<span class="section-tag">Pricing breakdown</span>' +
    "<h3>Average pricing by marketplace</h3>" +
    '<p class="chart-copy">Quick-sale and max-profit targets make it easier to spot where price strategy is drifting.</p>' +
    "</div>" +
    "</div>" +
    '<div class="pricing-list">' +
    rows +
    "</div>";
}

function renderTableSummary(listings, summary) {
  const container = document.getElementById("tableSummary");

  container.innerHTML =
    '<span class="table-chip">Showing <strong>' +
    formatNumber(listings.length) +
    "</strong> rows</span>" +
    '<span class="table-chip">Marketplace: <strong>' +
    escapeHtml(state.marketplace) +
    "</strong></span>" +
    '<span class="table-chip">Status: <strong>' +
    escapeHtml(state.status === "All" ? "All" : toTitleCase(state.status)) +
    "</strong></span>" +
    '<span class="table-chip">Clicks: <strong>' +
    formatNumber(summary.clicks) +
    "</strong></span>" +
    '<span class="table-chip">Inquiries: <strong>' +
    formatNumber(summary.inquiries) +
    "</strong></span>";
}

function renderListingsTable(listings) {
  const listingsBody = document.getElementById("listingsBody");

  if (!listings.length) {
    listingsBody.innerHTML =
      '<tr><td colspan="13"><div class="empty-state">No listings match the current filters.</div></td></tr>';
    return;
  }

  listingsBody.innerHTML = listings
    .map(function mapListing(listing) {
      const gallery = listing.images.length
        ? '<div class="gallery">' +
          listing.images
            .slice(0, 3)
            .map(function mapImage(image, index) {
              return (
                '<img class="gallery-thumb" src="' +
                escapeHtml(image) +
                '" alt="' +
                escapeHtml(listing.itemName) +
                " photo " +
                (index + 1) +
                '" />'
              );
            })
            .join("") +
          "</div>"
        : '<div class="gallery-empty">No img</div>';

      return (
        "<tr>" +
        "<td>" +
        escapeHtml(listing.marketplace) +
        "</td>" +
        '<td><span class="status-pill ' +
        listing.status +
        '">' +
        escapeHtml(listing.status) +
        "</span></td>" +
        '<td class="item-cell"><div class="item-name">' +
        escapeHtml(listing.itemName) +
        "</div></td>" +
        "<td>" +
        escapeHtml(listing.category) +
        "</td>" +
        "<td>" +
        escapeHtml(listing.subcategory) +
        "</td>" +
        "<td>" +
        escapeHtml(listing.condition) +
        "</td>" +
        "<td>" +
        formatCurrency(listing.quickSalePrice) +
        "</td>" +
        "<td>" +
        formatCurrency(listing.maxProfitPrice) +
        "</td>" +
        '<td class="title-cell">' +
        escapeHtml(listing.title) +
        "</td>" +
        '<td class="description-cell">' +
        escapeHtml(listing.description) +
        "</td>" +
        "<td>" +
        gallery +
        "</td>" +
        "<td>" +
        formatNumber(listing.clicks) +
        "</td>" +
        "<td>" +
        formatNumber(listing.inquiries) +
        "</td>" +
        "</tr>"
      );
    })
    .join("");
}

function renderDashboard(data) {
  const filteredListings = filterListings(data);
  const summary = summarizeListings(filteredListings);

  renderAssumptions(data);
  renderToolbar();
  renderKpis(summary);
  renderMarketplaceBoards(data);
  renderEngagementChart(data);
  renderPricingBreakdown(data);
  renderTableSummary(filteredListings, summary);
  renderListingsTable(filteredListings);
}

function attachToolbarEvents(data) {
  const toolbar = document.getElementById("toolbar");

  toolbar.addEventListener("click", function handleToolbarClick(event) {
    const filterButton = event.target.closest("[data-filter-type]");

    if (filterButton) {
      state[filterButton.dataset.filterType] = filterButton.dataset.value;
      renderDashboard(data);
      return;
    }

    if (event.target.id === "resetFilters") {
      state.marketplace = "All";
      state.status = "All";
      state.search = "";
      renderDashboard(data);
    }
  });

  toolbar.addEventListener("input", function handleToolbarInput(event) {
    if (event.target.id === "listingSearch") {
      state.search = event.target.value;
      renderDashboard(data);
    }
  });
}

function initDashboard() {
  loadDashboardData().then(function onDataLoaded(data) {
    renderDashboard(data);
    attachToolbarEvents(data);
  });
}

document.addEventListener("DOMContentLoaded", initDashboard);
