# Notion Setup

Use Notion as the backend operating system for the service.

Do not try to make Notion the product yet.

## Import order
1. [clients.csv](C:/Users/el0ci/OneDrive/Documents/ChatGPT/marketplace-listing-sprint/templates/notion/clients.csv)
2. [items.csv](C:/Users/el0ci/OneDrive/Documents/ChatGPT/marketplace-listing-sprint/templates/notion/items.csv)
3. [jobs.csv](C:/Users/el0ci/OneDrive/Documents/ChatGPT/marketplace-listing-sprint/templates/notion/jobs.csv)
4. [proof-results.csv](C:/Users/el0ci/OneDrive/Documents/ChatGPT/marketplace-listing-sprint/templates/notion/proof-results.csv)

## Database purposes
- `Clients`: who you work with and how they prefer to sell
- `Items`: each item being listed
- `Jobs`: each delivery job and where it sits in the pipeline
- `Proof / Results`: proof of wins, pricing changes, and sale outcomes

## Recommended property types after import
### Clients
- `Client Name`: title
- `Email`: email
- `Phone`: phone
- `City / Region`: text
- `Preferred Pickup Style`: select
- `Default Landmark`: text
- `Default Platforms`: multi-select
- `Access Method`: select
- `Lead Source`: select
- `Status`: select
- `Notes`: text

### Items
- `Item Name`: title
- `Client Name`: relation to `Clients`
- `City / Region`: text
- `Pickup Landmark`: text
- `Category`: select
- `Urgency`: select
- `Floor Price`: number
- `Target Strategy`: select
- `Platforms`: multi-select
- `Photo Folder Link`: URL
- `Condition`: select
- `Item Notes`: text
- `Status`: select
- `Posted Date`: date
- `Sold Date`: date
- `List Price`: number
- `Sold Price`: number
- `Outcome Notes`: text

### Jobs
- `Job Name`: title
- `Client Name`: relation to `Clients`
- `Item Name`: relation to `Items`
- `Stage`: select
- `Priority`: select
- `Assigned To`: person or text
- `Intake Received`: checkbox
- `Copy Drafted`: checkbox
- `Client Access Received`: checkbox
- `Posted`: checkbox
- `Follow-up Sent`: checkbox
- `Status`: select
- `Listing URLs`: URL or text
- `Notes`: text

### Proof / Results
- `Case Study Name`: title
- `Client Name`: relation to `Clients`
- `Item Name`: relation to `Items`
- `Category`: select
- `Platforms Used`: multi-select
- `Initial State`: text
- `What Changed`: text
- `Posted Date`: date
- `Sold Date`: date
- `Time to Sale (Hours)`: number
- `Original List Price`: number
- `Revised List Price`: number
- `Final Sold Price`: number
- `Outcome Summary`: text
- `Proof Link`: URL

## Select values to pre-create
### Preferred Pickup Style
- porch pickup
- driveway pickup
- public meetup

### Access Method
- temporary credentials
- live co-posting
- copy only

### Client Status
- lead
- active
- inactive
- referred

### Urgency
- must sell fast
- moderate
- willing to wait

### Target Strategy
- quick sale
- max profit

### Item Status
- intake received
- draft ready
- awaiting access
- posted
- repricing
- sold
- archived

### Job Stage
- intake received
- item triaged
- copy drafted
- client access received
- posted
- follow-up sent
- sold
- stale
- repriced

### Job Status
- active
- blocked
- complete

## Recommended views
### Items
- `Needs Triage`: status = intake received
- `Ready To Post`: status = draft ready or awaiting access
- `Live Listings`: status = posted or repricing
- `Sold`: status = sold

### Jobs
- `Today`: stage is not sold and status = active
- `Awaiting Access`: client access received = unchecked
- `Posted This Week`: posted = checked and posted date is this week

### Proof / Results
- `Wins`: sold date is not empty
- `Fast Sales`: time to sale under 48 hours
- `Best Case Studies`: manually curated later

## Optional formulas to add later
- `Days to Sale`: `dateBetween(prop("Sold Date"), prop("Posted Date"), "days")`
- `Gross Spread`: `prop("Final Sold Price") - prop("Original List Price")`

Keep the formula layer light until you have real data.
