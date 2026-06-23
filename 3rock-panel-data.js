/* ==================================================================
   3Rock Consulting Partners — RESOURCES PANEL DATA
   ------------------------------------------------------------------
   This is the ONLY file you edit to update the panel's
   "Regulatory Updates" and "Key Documents" tabs.
   (The "Abbreviations" tab is separate — its full content lives on
   your Not-Linked Squarespace glossary page, not here.)

   It works exactly like your calendar data file:
     1. Edit this file on GitHub (same repo as the calendar).
     2. Commit the change.
     3. If you want it live immediately, purge the cache at
        https://www.jsdelivr.com/tools/purge  (otherwise ~12h).

   THE THREE RULES (same as always):
     • Copy an existing line rather than typing a new one from scratch.
     • Keep every quote mark, and the comma at the end of each line.
     • Web addresses must start with https://
================================================================== */

window.TR_PANEL_DATA = {

  /* ================= REGULATORY UPDATES =================
     Newest first. Keep these about what CHANGED or was ANNOUNCED —
     not recurring deadlines (those belong in the calendar).
     Fields:
       date      — any text: a date ("12 Jun 2026") or a phrase ("From 2026 reporting year")
       authority — the issuing body, shown as a small badge (e.g. "Cayman DITC")
       headline  — the update text
       url       — optional link. Leave as "" for no link. Can point to a
                   competent-authority advisory OR one of your own blog posts.
                   If filled, a "Read more →" link appears on that entry.        */
  updates: [
    {date:"1 Jan 2026", authority:"OECD / DITC", headline:"CRS 2.0 amendments and the Crypto-Asset Reporting Framework (CARF) take effect for the 2026 reporting year.", url:"https://www.ditc.ky"},
    {date:"From 2026 reporting year", authority:"Cayman DITC", headline:"The CRS Return and CRS Compliance Form deadlines both move to 30 June (filed 2027 onward); the FATCA reporting deadline remains 31 July.", url:"https://www.ditc.ky"}

    /* --- to add an update, copy the line above, paste it as a new line
       at the TOP (newest first), change the values, and add a comma after
       the line that is now above it. Example of a no-link entry:
    ,{date:"15 Aug 2026", authority:"BVI ITA", headline:"Your headline here.", url:""}
    */
  ],

  /* ================= KEY DOCUMENTS =================
     Fields:
       type  — "link" for an external website, OR "download" for a file you host
       title — the bold name on the card
       desc  — the short line underneath
       url   — the destination (full https:// address, or your hosted file)        */
  documents: [
    {type:"link", title:"Cayman DITC", desc:"Official portal, industry advisories and updates.", url:"https://www.ditc.ky"},
    {type:"link", title:"BVI ITA — BVIFARS", desc:"BVI International Tax Authority reporting portal.", url:"https://bviita.vg"},
    {type:"link", title:"OECD — Automatic Exchange of Information", desc:"CRS standard, schema and implementation guidance. (Verify link before publishing.)", url:"https://www.oecd.org/tax/automatic-exchange/"},
    {type:"download", title:"[Example] CRS reporting checklist", desc:"Replace with a guide you host. Delete this entry if not needed yet.", url:"#"}

    /* --- to add a document, copy a line above, paste it as a new line,
       change the values, and add a comma after the line now above it. --- */
  ]

};
