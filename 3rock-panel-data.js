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
    {date:"17 Jun 2026", authority:"Cayman DITC", headline:"CRS and ES updates: the DITC Portal will close to CRS XML submissions in early August 2026 for the move to XML Schema v3.0 (the 31 July 2026 filing deadline is unchanged), and the DITC will stop sending ES courtesy reminder emails from ESN Year 2025.", url:"https://www.ditc.ky/wp-content/uploads/Common-Reporting-Standard-and-Economic-Substance-Updates.pdf"},
    {date:"31 Mar 2026", authority:"Cayman DITC", headline:"CRS Participating and Reportable Jurisdictions lists gazetted, and the 2026 reporting deadlines confirmed for the 2025 year: notification 30 April, CRS/FATCA reporting 31 July, CRS Compliance Form 15 September.", url:"https://www.ditc.ky/press/crs-jurisdictions-lists-and-2026-reporting-deadlines/"},
    {date:"25 Mar 2026", authority:"Cayman DITC", headline:"CARF registration deadline extended: Cayman RCASPs now have until 31 January 2027 to register the required information on the DITC Portal, pending portal functionality becoming available.", url:"https://www.ditc.ky/wp-content/uploads/Deadline_Extended_for_Registration_Under_Crypto-Asset_Reporting_Framework.pdf"},
    {date:"21 Jan 2026", authority:"Cayman DITC", headline:"Amended CRS deadline extension: the deadline to register a PPoC in the Islands and the date an entity became an FI is extended to 31 January 2027 for all Cayman FIs.", url:"https://www.ditc.ky/wp-content/uploads/Deadline_Extension_PPoC_information_under_the_Amended_CRS.pdf"},
    {date:"8 Dec 2025", authority:"Cayman DITC", headline:"CARF and the Amended CRS take effect in the Cayman Islands from 1 January 2026, with first reporting in 2027 for the 2026 year. RCASPs come into scope and new product types fall within CRS.", url:"https://www.ditc.ky/wp-content/uploads/CARF_and_Amended_CRS_Take_Effect_in-the_Cayman_Islands_from_1_January_2026.pdf"}
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
