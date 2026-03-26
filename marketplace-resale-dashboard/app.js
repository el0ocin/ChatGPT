const PHOTO_FILES = {
  "camping-cots-2x": [
    "IMG_8193.jpg",
    "IMG_8194.jpg",
    "IMG_8195.JPG",
    "IMG_8196.jpg",
    "IMG_8197.jpg",
    "IMG_8198.jpg",
    "IMG_8199.jpg",
    "IMG_8200.jpg",
    "IMG_8201.jpg"
  ],
  "chain-cleaner-kit": ["IMG_9049.jpg"],
  "clorox-toilet-cleaner-2-pack": ["IMG_9084.jpg", "IMG_9085.jpg"],
  "coffee-enema-kit": ["IMG_8750.jpg", "IMG_8751.JPG", "IMG_8752.JPG", "IMG_8753.JPG"],
  "contact-solution": ["IMG_9099.JPG", "IMG_9100.JPG", "IMG_9101.JPG"],
  "cuisinart-ice-100-ice-cream-maker": [
    "IMG_9144.jpg",
    "IMG_9146.jpg",
    "IMG_9147.jpg",
    "IMG_9152.jpg",
    "IMG_9164.PNG"
  ],
  "democracy-floral-shirt-l": ["IMG_7940.JPG", "IMG_7941.jpg", "IMG_7942.JPG"],
  "dog-calming-collar-pack": [
    "IMG_9102.jpg",
    "IMG_9107.jpg",
    "IMG_9109.jpg",
    "IMG_9110.jpg",
    "IMG_9111.jpg"
  ],
  "dog-grooming-arm": ["IMG_8734.jpg"],
  "dog-training-collar": ["IMG_8756.jpg", "IMG_8757.jpg"],
  "dr-pen-microneedling": [
    "IMG_9089.jpg",
    "IMG_9090.jpg",
    "IMG_9091.jpg",
    "IMG_9093.jpg",
    "IMG_9095.jpg",
    "IMG_9096.jpg",
    "IMG_9097.jpg",
    "IMG_9098.jpg"
  ],
  "gel-relief-socks-sm": [
    "IMG_4820.jpg",
    "IMG_4822.jpg",
    "IMG_7739.jpg",
    "IMG_7741.jpg",
    "IMG_7887.jpg"
  ],
  "inversion-table": ["IMG_7849.JPG", "IMG_9176.PNG"],
  "k2-skis-poles-177cm": [
    "IMG_8181.jpg",
    "IMG_8182.jpg",
    "IMG_8183.JPG",
    "IMG_8184.JPG",
    "IMG_8185.JPG",
    "IMG_8187.JPG",
    "IMG_8190.jpg",
    "IMG_8191.JPG"
  ],
  "kiss-lashes": ["IMG_9118.jpg", "IMG_9119.jpg"],
  "mens-rings-set": ["IMG_8746.jpg", "IMG_8749.JPG"],
  "mini-spy-camera": ["IMG_8741.jpg", "IMG_8742.jpg"],
  "mirror-self-cut": ["IMG_8754.jpg", "IMG_8755.jpg"],
  "plump-cream-4x-bundle": [
    "IMG_9112.JPG",
    "IMG_9113.JPG",
    "IMG_9114.JPG",
    "IMG_9116.jpg",
    "IMG_9117.jpg"
  ],
  "samsung-watch-charger-2-pack": ["IMG_8743.jpg", "IMG_8744.jpg"],
  "trek-marlin-5-bike": [
    "file_1773819002295.jpg",
    "file_1773819011245.jpg",
    "file_1773819021018.jpg",
    "file_1773819028432.jpg",
    "file_1773819035761.jpg",
    "file_1773819057297.jpg",
    "IMG_8982.JPG",
    "IMG_8983.JPG",
    "IMG_8984.JPG",
    "IMG_8985.JPG",
    "IMG_8986.JPG",
    "IMG_8987.PNG",
    "IMG_8988.PNG",
    "IMG_8989.PNG",
    "IMG_8990.PNG",
    "IMG_8991.PNG",
    "IMG_8992.PNG",
    "IMG_8993.PNG",
    "IMG_8994.PNG",
    "IMG_8995.PNG",
    "IMG_9022.jpg",
    "IMG_9023.jpg",
    "IMG_9024.jpg",
    "IMG_9026.jpg",
    "IMG_9028.jpg",
    "IMG_9031.jpg",
    "IMG_9033.jpg",
    "IMG_9035.jpg",
    "IMG_9041.jpg",
    "IMG_9043.jpg",
    "IMG_9046.jpg",
    "IMG_9048.jpg"
  ],
  "under-armour-leggings-xl": [
    "IMG_7915.jpg",
    "IMG_7917.jpg",
    "IMG_7918.JPG",
    "IMG_7919.JPG",
    "IMG_7920.JPG",
    "IMG_7921.JPG"
  ]
};

const MARKETPLACE_ORDER = ["Unlisted", "Facebook Marketplace", "KSL"];
const marketplaceOptions = ["All"].concat(MARKETPLACE_ORDER);
const statusOptions = ["All", "uncompleted", "listed", "sold"];

const physicalInventory = [
  {
    physicalItemId: "trek-marlin-5-bike",
    marketplaces: ["Facebook Marketplace", "KSL"],
    itemName: "Trek Marlin 5 Bike",
    category: "Outdoor",
    subcategory: "Bikes",
    condition: "Good",
    accessories: "chain cleaner",
    quickSalePrice: 480,
    maxProfitPrice: null,
    title: "Trek Marlin 5 mountain bike with chain cleaner",
    notes: "Already listed and getting strong interest.",
    photoSlug: "trek-marlin-5-bike"
  },
  {
    physicalItemId: "cuisinart-ice-100-ice-cream-maker",
    marketplaces: ["Unlisted"],
    itemName: "Cuisinart ICE-100 Ice Cream Maker",
    category: "Kitchen",
    subcategory: "Appliances",
    condition: "Good",
    accessories: "paddles, containers, and box",
    quickSalePrice: 200,
    maxProfitPrice: null,
    title: "Cuisinart ICE-100 compressor ice cream maker",
    notes: "Compressor model.",
    photoSlug: "cuisinart-ice-100-ice-cream-maker"
  },
  {
    physicalItemId: "k2-skis-poles-177cm",
    marketplaces: ["Unlisted"],
    itemName: "K2 Skis + Poles (177cm)",
    category: "Outdoor",
    subcategory: "Snow Sports",
    condition: "Good",
    accessories: "bindings and poles",
    quickSalePrice: 150,
    maxProfitPrice: null,
    title: "K2 skis with bindings and poles - 177 cm",
    notes: "Beginner setup.",
    photoSlug: "k2-skis-poles-177cm"
  },
  {
    physicalItemId: "camping-cots-2x",
    marketplaces: ["Unlisted"],
    itemName: "Camping Cots (2x)",
    category: "Outdoor",
    subcategory: "Camping",
    condition: "Like New",
    accessories: "carry bags (one sealed)",
    quickSalePrice: 100,
    maxProfitPrice: null,
    title: "Set of 2 camping cots with carry bags",
    notes: "Bundle preferred.",
    photoSlug: "camping-cots-2x"
  },
  {
    physicalItemId: "ilavie-espresso-machine",
    marketplaces: ["Unlisted"],
    itemName: "Ilavie Espresso Machine",
    category: "Kitchen",
    subcategory: "Coffee",
    condition: "Like New",
    accessories: "full set and manual",
    quickSalePrice: 80,
    maxProfitPrice: null,
    title: "Ilavie espresso machine with full set",
    notes: "Tested working.",
    photoSlug: null
  },
  {
    physicalItemId: "dr-pen-microneedling",
    marketplaces: ["Unlisted"],
    itemName: "Dr. Pen Microneedling",
    category: "Beauty",
    subcategory: "Skincare Tools",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 90,
    maxProfitPrice: null,
    title: "Dr. Pen microneedling kit sealed new",
    notes: "High demand.",
    photoSlug: "dr-pen-microneedling"
  },
  {
    physicalItemId: "dog-grooming-arm",
    marketplaces: ["Unlisted"],
    itemName: "Dog Grooming Arm",
    category: "Pet",
    subcategory: "Grooming",
    condition: "New",
    accessories: "complete set",
    quickSalePrice: 70,
    maxProfitPrice: null,
    title: "Dog grooming arm complete set new",
    notes: "Niche item but strong resale potential.",
    photoSlug: "dog-grooming-arm"
  },
  {
    physicalItemId: "dog-training-collar",
    marketplaces: ["Unlisted"],
    itemName: "Dog Training Collar",
    category: "Pet",
    subcategory: "Training",
    condition: "New",
    accessories: "full kit",
    quickSalePrice: 40,
    maxProfitPrice: null,
    title: "Rechargeable dog training collar full kit",
    notes: "Rechargeable.",
    photoSlug: "dog-training-collar"
  },
  {
    physicalItemId: "inversion-table",
    marketplaces: ["Unlisted"],
    itemName: "Inversion Table",
    category: "Fitness",
    subcategory: "Recovery",
    condition: "Good",
    accessories: "assembled",
    quickSalePrice: 60,
    maxProfitPrice: null,
    title: "Inversion table assembled and ready for pickup",
    notes: "Bulky item.",
    photoSlug: "inversion-table"
  },
  {
    physicalItemId: "mirror-self-cut",
    marketplaces: ["Unlisted"],
    itemName: "Mirror (self-cut)",
    category: "Personal Care",
    subcategory: "Mirror",
    condition: "Like New",
    accessories: "",
    quickSalePrice: 25,
    maxProfitPrice: null,
    title: "Self-cut mirror ready for an easy flip",
    notes: "Easy flip.",
    photoSlug: "mirror-self-cut"
  },
  {
    physicalItemId: "under-armour-leggings-xl",
    marketplaces: ["Unlisted"],
    itemName: "Under Armour Leggings (XL)",
    category: "Clothing",
    subcategory: "Activewear",
    condition: "New with Tags",
    accessories: "tags attached",
    quickSalePrice: 25,
    maxProfitPrice: null,
    title: "Under Armour leggings XL new with tags",
    notes: "Brand helps.",
    photoSlug: "under-armour-leggings-xl"
  },
  {
    physicalItemId: "samsung-watch-charger-2-pack",
    marketplaces: ["Unlisted"],
    itemName: "Samsung Watch Charger (2-pack)",
    category: "Electronics",
    subcategory: "Wearables",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 20,
    maxProfitPrice: null,
    title: "Samsung watch wireless chargers 2-pack sealed",
    notes: "Competitive pricing category.",
    photoSlug: "samsung-watch-charger-2-pack"
  },
  {
    physicalItemId: "dog-calming-collar-pack",
    marketplaces: ["Unlisted"],
    itemName: "Dog Calming Collar Pack",
    category: "Pet",
    subcategory: "Wellness",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 20,
    maxProfitPrice: null,
    title: "Dog calming collar multi-pack sealed",
    notes: "Multi-pack.",
    photoSlug: "dog-calming-collar-pack"
  },
  {
    physicalItemId: "coffee-enema-kit",
    marketplaces: ["Unlisted"],
    itemName: "Coffee Enema Kit",
    category: "Health",
    subcategory: "Wellness",
    condition: "New",
    accessories: "full kit",
    quickSalePrice: 25,
    maxProfitPrice: null,
    title: "Coffee enema kit full set new in box",
    notes: "Porch pickup helpful.",
    photoSlug: "coffee-enema-kit"
  },
  {
    physicalItemId: "mens-rings-set",
    marketplaces: ["Unlisted"],
    itemName: "Men's Rings Set",
    category: "Accessories",
    subcategory: "Jewelry",
    condition: "New",
    accessories: "multiple styles",
    quickSalePrice: 20,
    maxProfitPrice: null,
    title: "Men's rings set with multiple styles",
    notes: "Bundle value.",
    photoSlug: "mens-rings-set"
  },
  {
    physicalItemId: "gel-relief-socks-sm",
    marketplaces: ["Unlisted"],
    itemName: "Gel Relief Socks (S/M)",
    category: "Health",
    subcategory: "Recovery",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 20,
    maxProfitPrice: null,
    title: "Gel relief socks size S/M sealed",
    notes: "Pain relief.",
    photoSlug: "gel-relief-socks-sm"
  },
  {
    physicalItemId: "mini-spy-camera",
    marketplaces: ["Unlisted"],
    itemName: "Mini Spy Camera",
    category: "Electronics",
    subcategory: "Cameras",
    condition: "Like New",
    accessories: "all parts",
    quickSalePrice: 15,
    maxProfitPrice: null,
    title: "Mini spy camera tested with all parts",
    notes: "Tested working.",
    photoSlug: "mini-spy-camera"
  },
  {
    physicalItemId: "chain-cleaner-kit",
    marketplaces: ["Unlisted"],
    itemName: "Chain Cleaner Kit",
    category: "Outdoor",
    subcategory: "Bike Maintenance",
    condition: "New",
    accessories: "full kit",
    quickSalePrice: 15,
    maxProfitPrice: null,
    title: "Bike chain cleaner kit new",
    notes: "Can bundle with the bike.",
    photoSlug: "chain-cleaner-kit"
  },
  {
    physicalItemId: "monteau-crop-top-xl",
    marketplaces: ["Unlisted"],
    itemName: "Monteau Crop Top (XL)",
    category: "Clothing",
    subcategory: "Tops",
    condition: "Good",
    accessories: "",
    quickSalePrice: 12,
    maxProfitPrice: null,
    title: "Monteau crop top XL",
    notes: "Runs small.",
    photoSlug: null
  },
  {
    physicalItemId: "plump-cream-4x-bundle",
    marketplaces: ["Unlisted"],
    itemName: "Plump Cream (4x bundle)",
    category: "Beauty",
    subcategory: "Skincare",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 20,
    maxProfitPrice: null,
    title: "Plump cream 4-pack bundle sealed",
    notes: "Unknown brand.",
    photoSlug: "plump-cream-4x-bundle"
  },
  {
    physicalItemId: "contact-solution",
    marketplaces: ["Unlisted"],
    itemName: "Contact Solution",
    category: "Health",
    subcategory: "Eye Care",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 8,
    maxProfitPrice: null,
    title: "Contact solution sealed",
    notes: "Useful add-on item.",
    photoSlug: "contact-solution"
  },
  {
    physicalItemId: "kiss-lashes",
    marketplaces: ["Unlisted"],
    itemName: "KISS Lashes",
    category: "Beauty",
    subcategory: "Cosmetics",
    condition: "New",
    accessories: "boxed",
    quickSalePrice: 10,
    maxProfitPrice: null,
    title: "KISS lashes boxed bundle",
    notes: "Useful add-on item.",
    photoSlug: "kiss-lashes"
  },
  {
    physicalItemId: "clorox-toilet-cleaner-2-pack",
    marketplaces: ["Unlisted"],
    itemName: "Clorox Toilet Cleaner (2-pack)",
    category: "Household",
    subcategory: "Cleaning",
    condition: "New",
    accessories: "sealed",
    quickSalePrice: 10,
    maxProfitPrice: null,
    title: "Clorox toilet cleaner 2-pack sealed",
    notes: "Low priority.",
    photoSlug: "clorox-toilet-cleaner-2-pack"
  },
  {
    physicalItemId: "democracy-floral-shirt-l",
    marketplaces: ["Unlisted"],
    itemName: "Democracy Floral Shirt (L)",
    category: "Clothing",
    subcategory: "Tops",
    condition: "Good",
    accessories: "",
    quickSalePrice: 15,
    maxProfitPrice: null,
    title: "Democracy floral shirt size L",
    notes: "Casual wear.",
    photoSlug: "democracy-floral-shirt-l"
  }
];

const state = {
  marketplace: "All",
  status: "All",
  search: ""
};

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function buildImagePaths(photoSlug) {
  if (!photoSlug || !PHOTO_FILES[photoSlug]) {
    return [];
  }

  return PHOTO_FILES[photoSlug].map(function mapFile(fileName) {
    return "./assets/photos/" + photoSlug + "/" + fileName;
  });
}

function ensureSentence(value) {
  if (!value) {
    return "";
  }

  return /[.!?]$/.test(value) ? value : value + ".";
}

function buildListingDescription(item) {
  const parts = ["Condition: " + item.condition + "."];

  if (item.accessories) {
    parts.push("Includes " + item.accessories + ".");
  }

  if (item.notes) {
    parts.push(ensureSentence(item.notes));
  }

  return parts.join(" ");
}

function marketplaceIdSuffix(marketplace) {
  return marketplace.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function createListingRow(item, marketplace) {
  const imagePaths = buildImagePaths(item.photoSlug);

  return {
    id: item.physicalItemId + "-" + marketplaceIdSuffix(marketplace),
    physicalItemId: item.physicalItemId,
    marketplace: marketplace,
    status: marketplace === "Unlisted" ? "uncompleted" : "listed",
    itemName: item.itemName,
    category: item.category,
    subcategory: item.subcategory || "-",
    condition: item.condition,
    quickSalePrice: item.quickSalePrice,
    maxProfitPrice: item.maxProfitPrice,
    title: item.title,
    description: buildListingDescription(item),
    clicks: 0,
    inquiries: 0,
    imagePaths: imagePaths,
    photoStatus: imagePaths.length ? "imported" : "missing",
    notes: item.notes,
    accessories: item.accessories
  };
}

function buildDashboardData() {
  const listings = physicalInventory.flatMap(function mapItem(item) {
    return item.marketplaces.map(function mapMarketplace(marketplace) {
      return createListingRow(item, marketplace);
    });
  });

  const photoReadyCount = physicalInventory.filter(function hasPhotos(item) {
    return buildImagePaths(item.photoSlug).length > 0;
  }).length;

  const missingPhotos = physicalInventory
    .filter(function withoutPhotos(item) {
      return buildImagePaths(item.photoSlug).length === 0;
    })
    .map(function mapItem(item) {
      return item.itemName;
    });

  return {
    assumptions: [
      physicalInventory.length +
        " physical items are loaded from your current sell list, with the Trek bike mirrored as two live marketplace rows.",
      photoReadyCount +
        " items have imported photo sets in the repo. Missing photos: " +
        missingPhotos.join(" and ") +
        ".",
      "Quick-sale price is your current floor, while max-profit estimates and engagement counts are still pending."
    ],
    listings: listings
  };
}

function loadDashboardData() {
  return Promise.resolve(cloneData(buildDashboardData()));
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

function getFilterState(overrides) {
  return Object.assign({}, state, overrides || {});
}

function filterListings(data, overrides) {
  const filterState = getFilterState(overrides);
  const search = filterState.search.trim().toLowerCase();

  return data.listings.filter(function matchesFilters(listing) {
    const matchesMarketplace =
      filterState.marketplace === "All" || listing.marketplace === filterState.marketplace;
    const matchesStatus = filterState.status === "All" || listing.status === filterState.status;
    const matchesSearch =
      search.length === 0 ||
      [
        listing.itemName,
        listing.title,
        listing.description,
        listing.category,
        listing.subcategory,
        listing.notes,
        listing.accessories
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);

    return matchesMarketplace && matchesStatus && matchesSearch;
  });
}

function getUniqueItems(listings) {
  const uniqueMap = new Map();

  listings.forEach(function collect(listing) {
    if (!uniqueMap.has(listing.physicalItemId)) {
      uniqueMap.set(listing.physicalItemId, listing);
    }
  });

  return Array.from(uniqueMap.values());
}

function summarizeListings(listings) {
  const uniqueItems = getUniqueItems(listings);
  const uncompletedItems = new Set();

  const rowSummary = listings.reduce(
    function summarize(summary, listing) {
      summary.listingRows += 1;
      summary[listing.status + "Rows"] += 1;
      summary.clicks += listing.clicks;
      summary.inquiries += listing.inquiries;

      if (listing.status === "uncompleted") {
        uncompletedItems.add(listing.physicalItemId);
      }

      return summary;
    },
    {
      listingRows: 0,
      uncompletedRows: 0,
      listedRows: 0,
      soldRows: 0,
      clicks: 0,
      inquiries: 0
    }
  );

  const uniqueSummary = uniqueItems.reduce(
    function summarize(summary, item) {
      summary.trackedItems += 1;
      summary.quickSaleTotal += item.quickSalePrice;
      summary.categories.add(item.category);

      if (item.maxProfitPrice == null) {
        summary.maxProfitPending += 1;
      } else {
        summary.maxProfitKnown += 1;
      }

      if (item.photoStatus === "imported") {
        summary.photoImported += 1;
      } else {
        summary.photoMissing += 1;
      }

      return summary;
    },
    {
      trackedItems: 0,
      quickSaleTotal: 0,
      maxProfitPending: 0,
      maxProfitKnown: 0,
      photoImported: 0,
      photoMissing: 0,
      categories: new Set()
    }
  );

  return {
    listingRows: rowSummary.listingRows,
    trackedItems: uniqueSummary.trackedItems,
    uncompletedRows: rowSummary.uncompletedRows,
    uncompletedItems: uncompletedItems.size,
    listedRows: rowSummary.listedRows,
    soldRows: rowSummary.soldRows,
    clicks: rowSummary.clicks,
    inquiries: rowSummary.inquiries,
    photoImported: uniqueSummary.photoImported,
    photoMissing: uniqueSummary.photoMissing,
    quickSaleTotal: uniqueSummary.quickSaleTotal,
    quickSaleAverage: uniqueSummary.trackedItems
      ? Math.round(uniqueSummary.quickSaleTotal / uniqueSummary.trackedItems)
      : 0,
    maxProfitPending: uniqueSummary.maxProfitPending,
    maxProfitKnown: uniqueSummary.maxProfitKnown,
    categoryCount: uniqueSummary.categories.size
  };
}

function buildCategoryData(listings) {
  const uniqueItems = getUniqueItems(listings);
  const categoryMap = new Map();

  uniqueItems.forEach(function collect(item) {
    const current = categoryMap.get(item.category) || {
      category: item.category,
      count: 0,
      photoImported: 0,
      quickSaleTotal: 0
    };

    current.count += 1;
    current.quickSaleTotal += item.quickSalePrice;

    if (item.photoStatus === "imported") {
      current.photoImported += 1;
    }

    categoryMap.set(item.category, current);
  });

  return Array.from(categoryMap.values())
    .map(function finalize(category) {
      return Object.assign({}, category, {
        quickSaleAverage: Math.round(category.quickSaleTotal / category.count)
      });
    })
    .sort(function compare(left, right) {
      if (right.count !== left.count) {
        return right.count - left.count;
      }

      return left.category.localeCompare(right.category);
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
    {
      label: "Tracked items",
      value: formatNumber(summary.trackedItems),
      note: "Unique physical items in the current view.",
      pill: "accent",
      pillLabel: "Inventory"
    },
    {
      label: "Live listing rows",
      value: formatNumber(summary.listedRows),
      note: "Rows already live on Facebook Marketplace or KSL.",
      pill: "teal",
      pillLabel: "Live"
    },
    {
      label: "Draft queue",
      value: formatNumber(summary.uncompletedItems),
      note: "Unique items still sitting in the Unlisted prep queue.",
      pill: "gold",
      pillLabel: "Queue"
    },
    {
      label: "Photos imported",
      value: formatNumber(summary.photoImported),
      note: "Unique items with repo-stored photo sets ready to render.",
      pill: "teal",
      pillLabel: "Assets"
    },
    {
      label: "Photos missing",
      value: formatNumber(summary.photoMissing),
      note: "Items still waiting on photo uploads.",
      pill: "gold",
      pillLabel: "Needed"
    },
    {
      label: "Quick-sale floor total",
      value: summary.trackedItems ? formatCurrency(summary.quickSaleTotal) : "--",
      note: "Combined floor pricing across unique items.",
      pill: "accent",
      pillLabel: "Pricing"
    },
    {
      label: "Quick-sale floor avg",
      value: summary.trackedItems ? formatCurrency(summary.quickSaleAverage) : "--",
      note: "Average quick-sale target per unique item.",
      pill: "teal",
      pillLabel: "Average"
    },
    {
      label: "Max-profit estimates",
      value: summary.trackedItems ? "Pending" : "--",
      note: summary.trackedItems
        ? formatNumber(summary.maxProfitPending) + " items still need ceiling pricing."
        : "No items match the current filters.",
      pill: "gold",
      pillLabel: "Next step"
    }
  ];

  kpiGrid.innerHTML = cards
    .map(function mapCard(card) {
      return (
        '<article class="kpi-card">' +
        '<div class="kpi-topline">' +
        "<span>" +
        escapeHtml(card.label) +
        "</span>" +
        '<span class="pill ' +
        card.pill +
        '">' +
        escapeHtml(card.pillLabel) +
        "</span>" +
        "</div>" +
        '<div class="kpi-value">' +
        escapeHtml(card.value) +
        "</div>" +
        '<p class="kpi-note">' +
        escapeHtml(card.note) +
        "</p>" +
        "</article>"
      );
    })
    .join("");
}

function renderMarketplaceBoards(boardRows) {
  const container = document.getElementById("marketplaceBoards");
  const marketplaceCards = MARKETPLACE_ORDER.map(function mapMarketplace(marketplace) {
    const rows = boardRows.filter(function matches(listing) {
      return listing.marketplace === marketplace;
    });
    const summary = summarizeListings(rows);
    const totalRows = Math.max(summary.listingRows, 1);
    const activeClass = state.marketplace === marketplace ? " is-active" : "";
    const cardPill = marketplace === "Unlisted" ? "gold" : marketplace === "KSL" ? "teal" : "accent";
    const description =
      marketplace === "Unlisted"
        ? "Draft-ready items that still need to be posted."
        : "Live listing rows and photos already prepared for this marketplace.";

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
      '<p class="marketplace-copy">' +
      escapeHtml(description) +
      "</p>" +
      "</div>" +
      '<span class="pill ' +
      cardPill +
      '">' +
      formatNumber(summary.listingRows) +
      " rows" +
      "</span>" +
      "</div>" +
      '<div class="mini-metrics">' +
      '<div class="mini-metric"><span class="mini-label">Unique items</span><span class="mini-value">' +
      formatNumber(summary.trackedItems) +
      "</span></div>" +
      '<div class="mini-metric"><span class="mini-label">Listed rows</span><span class="mini-value">' +
      formatNumber(summary.listedRows) +
      "</span></div>" +
      '<div class="mini-metric"><span class="mini-label">Draft rows</span><span class="mini-value">' +
      formatNumber(summary.uncompletedRows) +
      "</span></div>" +
      '<div class="mini-metric"><span class="mini-label">Photos ready</span><span class="mini-value">' +
      formatNumber(summary.photoImported) +
      "</span></div>" +
      "</div>" +
      '<div class="status-stack">' +
      '<div class="status-track">' +
      '<span class="status-bar uncompleted" style="width:' +
      (summary.uncompletedRows / totalRows) * 100 +
      '%"></span>' +
      '<span class="status-bar listed" style="width:' +
      (summary.listedRows / totalRows) * 100 +
      '%"></span>' +
      '<span class="status-bar sold" style="width:' +
      (summary.soldRows / totalRows) * 100 +
      '%"></span>' +
      "</div>" +
      '<div class="status-legend">' +
      '<span class="status-label"><span class="status-dot uncompleted"></span>' +
      summary.uncompletedRows +
      " draft rows</span>" +
      '<span class="status-label"><span class="status-dot listed"></span>' +
      summary.listedRows +
      " live rows</span>" +
      '<span class="status-label"><span class="status-dot sold"></span>' +
      summary.soldRows +
      " sold rows</span>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }).join("");

  container.innerHTML =
    '<div class="chart-head">' +
    "<div>" +
    '<span class="section-tag">Marketplace boards</span>' +
    "<h3>Prep queue and live marketplace coverage</h3>" +
    '<p class="chart-copy">Unlisted holds the draft queue, while Facebook Marketplace and KSL reflect the live Trek rows.</p>' +
    "</div>" +
    "</div>" +
    '<div class="marketplace-board-grid">' +
    marketplaceCards +
    "</div>";
}

function renderCategoryBreakdown(listings) {
  const container = document.getElementById("engagementChart");
  const categoryData = buildCategoryData(listings);

  if (!categoryData.length) {
    container.innerHTML =
      '<div class="chart-head"><div><span class="section-tag">Category coverage</span><h3>Unique items by category</h3></div></div>' +
      '<div class="empty-state">No category data matches the current filters.</div>';
    return;
  }

  const maxCount = categoryData.reduce(function findMax(max, item) {
    return Math.max(max, item.count);
  }, 1);
  const maxPhotoCount = categoryData.reduce(function findMax(max, item) {
    return Math.max(max, item.photoImported);
  }, 1);

  const rows = categoryData
    .map(function mapRow(item) {
      return (
        '<div class="pricing-row">' +
        '<div class="row-label">' +
        escapeHtml(item.category) +
        "</div>" +
        '<div class="pricing-bars">' +
        '<div class="pricing-bar-shell">' +
        '<span class="bar-label">Items</span>' +
        '<div class="pricing-bar-track"><div class="pricing-bar-fill category" style="width:' +
        (item.count / maxCount) * 100 +
        '%"></div></div>' +
        '<strong>' +
        formatNumber(item.count) +
        "</strong>" +
        "</div>" +
        '<div class="pricing-bar-shell">' +
        '<span class="bar-label">Photos ready</span>' +
        '<div class="pricing-bar-track"><div class="pricing-bar-fill photo" style="width:' +
        (item.photoImported / maxPhotoCount) * 100 +
        '%"></div></div>' +
        '<strong>' +
        formatNumber(item.photoImported) +
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
    '<span class="section-tag">Category coverage</span>' +
    "<h3>Unique items by category</h3>" +
    '<p class="chart-copy">Current inventory mix based on unique physical items in the active filters.</p>' +
    "</div>" +
    '<div class="chart-number">' +
    formatNumber(categoryData.length) +
    "</div>" +
    "</div>" +
    '<div class="pricing-list">' +
    rows +
    "</div>";
}

function renderPricingBreakdown(listings) {
  const container = document.getElementById("pricingBreakdown");
  const categoryData = buildCategoryData(listings).sort(function compare(left, right) {
    if (right.quickSaleTotal !== left.quickSaleTotal) {
      return right.quickSaleTotal - left.quickSaleTotal;
    }

    return left.category.localeCompare(right.category);
  });

  if (!categoryData.length) {
    container.innerHTML =
      '<div class="chart-head"><div><span class="section-tag">Quick-sale pricing</span><h3>Quick-sale floor by category</h3></div></div>' +
      '<div class="empty-state">No pricing data matches the current filters.</div>';
    return;
  }

  const maxTotal = categoryData.reduce(function findMax(max, item) {
    return Math.max(max, item.quickSaleTotal);
  }, 1);
  const maxAverage = categoryData.reduce(function findMax(max, item) {
    return Math.max(max, item.quickSaleAverage);
  }, 1);
  const summary = summarizeListings(listings);

  const rows = categoryData
    .map(function mapRow(item) {
      return (
        '<div class="pricing-row">' +
        '<div class="row-label">' +
        escapeHtml(item.category) +
        " - " +
        item.count +
        " items" +
        "</div>" +
        '<div class="pricing-bars">' +
        '<div class="pricing-bar-shell">' +
        '<span class="bar-label">Quick-sale total</span>' +
        '<div class="pricing-bar-track"><div class="pricing-bar-fill quick" style="width:' +
        (item.quickSaleTotal / maxTotal) * 100 +
        '%"></div></div>' +
        '<strong>' +
        formatCurrency(item.quickSaleTotal) +
        "</strong>" +
        "</div>" +
        '<div class="pricing-bar-shell">' +
        '<span class="bar-label">Average quick</span>' +
        '<div class="pricing-bar-track"><div class="pricing-bar-fill average" style="width:' +
        (item.quickSaleAverage / maxAverage) * 100 +
        '%"></div></div>' +
        '<strong>' +
        formatCurrency(item.quickSaleAverage) +
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
    '<span class="section-tag">Quick-sale pricing</span>' +
    "<h3>Quick-sale floor by category</h3>" +
    '<p class="chart-copy">Totals and averages use unique physical items only, so the Trek listing is not double-counted.</p>' +
    "</div>" +
    '<div class="chart-number">' +
    formatCurrency(summary.quickSaleTotal) +
    "</div>" +
    "</div>" +
    '<div class="pricing-list">' +
    rows +
    "</div>";
}

function renderTableSummary(listings, summary) {
  const container = document.getElementById("tableSummary");
  container.innerHTML =
    '<span class="table-chip">Rows <strong>' +
    formatNumber(summary.listingRows) +
    "</strong></span>" +
    '<span class="table-chip">Unique items <strong>' +
    formatNumber(summary.trackedItems) +
    "</strong></span>" +
    '<span class="table-chip">Marketplace <strong>' +
    escapeHtml(state.marketplace) +
    "</strong></span>" +
    '<span class="table-chip">Status <strong>' +
    escapeHtml(state.status === "All" ? "All" : toTitleCase(state.status)) +
    "</strong></span>" +
    '<span class="table-chip">Photos ready <strong>' +
    formatNumber(summary.photoImported) +
    "</strong></span>" +
    '<span class="table-chip">Quick-sale floor <strong>' +
    (summary.trackedItems ? formatCurrency(summary.quickSaleTotal) : "--") +
    "</strong></span>" +
    '<span class="table-chip">Clicks <strong>' +
    formatNumber(summary.clicks) +
    "</strong></span>" +
    '<span class="table-chip">Inquiries <strong>' +
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
      const visibleImages = listing.imagePaths.slice(0, 3);
      const gallery = listing.imagePaths.length
        ? '<div class="gallery">' +
          visibleImages
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
          (listing.imagePaths.length > visibleImages.length
            ? '<span class="gallery-more">+' +
              formatNumber(listing.imagePaths.length - visibleImages.length) +
              "</span>"
            : "") +
          "</div>"
        : '<div class="gallery-empty">Pending</div>';

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
        (listing.maxProfitPrice == null
          ? '<span class="pending-value">Pending</span>'
          : formatCurrency(listing.maxProfitPrice)) +
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
  const boardListings = filterListings(data, { marketplace: "All" });
  const summary = summarizeListings(filteredListings);

  renderAssumptions(data);
  renderToolbar();
  renderKpis(summary);
  renderMarketplaceBoards(boardListings);
  renderCategoryBreakdown(filteredListings);
  renderPricingBreakdown(filteredListings);
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
