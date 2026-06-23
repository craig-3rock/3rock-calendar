/* ============================================================================
   3Rock Reporting Calendar — DATA FILE
   ----------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU EDIT TO MAINTAIN OR SCALE THE CALENDAR.
   The widget reads everything below and builds itself (including the filter
   buttons) automatically. You never touch the widget file again.

   Three sections to edit:
     1. sources       — who you cite, with the date you last verified them
     2. jurisdictions — the list of places (drives the jurisdiction filter)
     3. deadlines     — the actual entries

   GOLDEN RULE: never add a deadline without (a) confirming it on the
   competent authority's own site and (b) recording that under "sources"
   with today's date. See the maintenance guide for the sourcing protocol.

   Data verified 23 June 2026.
   ========================================================================== */

window.TR_CALENDAR_DATA = {

  meta: {
    lastReviewed: "23 June 2026"
  },

  /* --------------------------------------------------------------------------
     1. SOURCES  —  id: { name, url, verified }
     Reference an id from a deadline's "source" field. The "verified" date is
     stamped on every card that uses this source, so update it when you re-check.
     -------------------------------------------------------------------------- */
  sources: {
    ditc:   { name: "Cayman DITC",        url: "https://www.ditc.ky",          verified: "23 Jun 2026" },
    bviita: { name: "BVI ITA (BVIFARS)",  url: "https://bviita.vg/bvifars/",   verified: "23 Jun 2026" }
    /* TO ADD A SOURCE, copy a line above. Example:
       bahamas: { name: "Bahamas Competent Authority", url: "https://taxreporting.finance.gov.bs", verified: "1 Jul 2026" }
    */
  },

  /* --------------------------------------------------------------------------
     2. JURISDICTIONS  —  id: "Display label"
     The order here is the order the filter buttons appear in.
     Add a line and a new filter button appears automatically.
     -------------------------------------------------------------------------- */
  jurisdictions: {
    cayman: "Cayman",
    bvi:    "BVI"
    /* TO ADD A JURISDICTION, add a line, e.g.:  bahamas: "Bahamas"
       Then add that jurisdiction's deadlines below using  jur: "bahamas". */
  },

  /* --------------------------------------------------------------------------
     3. DEADLINES
     Each entry:
       jur      (required)  — a jurisdiction id from the list above
       regime   (required)  — e.g. "CRS", "FATCA", "CARF", "CbC", or "FATCA / CRS"
                              (the regime filter is built from these automatically;
                               separate multiple regimes with " / ")
       source   (required)  — a source id from the sources list above
       title    (required)  — short name of the deadline
       applies  (required)  — one line on who it applies to

       DATE — choose ONE of:
         annual: true, mon: 7, day: 31     -> recurs every year (mon = 1..12)
         annual: false, y: 2026, mon: 7, day: 31  -> a one-off / changed-rule date
         verify: true (no date)            -> shown flagged "verify with CA"

       OPTIONAL:
         note: "..."        — amber note line (use for rule changes / caveats)
         tagChanged: true   — shows a "Changes 2027" badge
         tagNew: true       — shows a "New from 2027" badge
     -------------------------------------------------------------------------- */
  deadlines: [

    /* ---------- CAYMAN ---------- */
    { jur:"cayman", regime:"FATCA / CRS", source:"ditc", annual:true, mon:4, day:30,
      title:"FATCA & CRS registration (TIA enrolment)",
      applies:"FIs that became reporting FIs in the prior year (transitional). New FIs from 2026 register by 31 Jan of the following year." },

    { jur:"cayman", regime:"FATCA / CRS", source:"ditc", annual:false, y:2026, mon:7, day:31,
      title:"FATCA & CRS annual reporting — 2025 reporting year",
      applies:"All Cayman reporting FIs. Submit returns via the DITC Portal." },

    { jur:"cayman", regime:"CRS", source:"ditc", annual:false, y:2026, mon:9, day:15,
      title:"CRS Compliance Form — 2025 reporting year",
      applies:"All Cayman reporting FIs.",
      note:"From the 2026 reporting year (filed 2027) this moves to 30 June.",
      tagChanged:true },

    { jur:"cayman", regime:"CRS / CARF", source:"ditc", annual:false, y:2027, mon:1, day:31,
      title:"Cayman-resident PPOC & registration items in place",
      applies:"Existing reporting FIs — transitional deadline to record a Cayman-resident Principal Point of Contact and certain registration items." },

    { jur:"cayman", regime:"CRS", source:"ditc", annual:false, y:2027, mon:6, day:30,
      title:"CRS Return & CRS Compliance Form — 2026 reporting year",
      applies:"All Cayman reporting FIs. New consolidated CRS deadline.",
      note:"NEW from 2027: CRS Return and Compliance Form both move forward to 30 June (was 31 July / 15 Sept).",
      tagNew:true },

    { jur:"cayman", regime:"FATCA", source:"ditc", annual:false, y:2027, mon:7, day:31,
      title:"FATCA annual reporting — 2026 reporting year",
      applies:"All Cayman reporting FIs. FATCA stays at 31 July (no change)." },

    /* ---------- BVI ---------- */
    { jur:"bvi", regime:"CRS", source:"bviita", annual:true, mon:4, day:30,
      title:"CRS enrolment / notification",
      applies:"New reporting FIs — enrol and notify via BVIFARS." },

    { jur:"bvi", regime:"FATCA", source:"bviita", annual:true, mon:5, day:31,
      title:"FATCA annual reporting",
      applies:"All BVI reporting FIs — submit via BVIFARS." },

    { jur:"bvi", regime:"CRS", source:"bviita", annual:true, mon:5, day:31,
      title:"CRS annual reporting",
      applies:"All BVI reporting FIs — submit via BVIFARS. NIL returns required where there are no reportable accounts." },

    { jur:"bvi", regime:"FATCA / CRS", source:"bviita", annual:true, mon:6, day:1,
      title:"BVIFARS annual fee — US$185 per entity",
      applies:"All entities enrolled for FATCA, CRS or CbC. Required to maintain portal access." },

    { jur:"bvi", regime:"CRS", source:"bviita", annual:true, mon:9, day:30,
      title:"CRS Additional Information Form (RFI / NRFI)",
      applies:"All BVI FIs — due within nine months of the financial period end (30 Sept for a 31 Dec year-end)." },

    { jur:"bvi", regime:"FATCA", source:"bviita", verify:true,
      title:"FATCA enrolment / notification",
      applies:"New reporting FIs.",
      note:"Date not yet confirmed against the BVI ITA directly — verify with the competent authority before relying on it." }

    /* ============================================================
       TO ADD A NEW JURISDICTION (example: Bahamas)
       1. Add to "jurisdictions" above:   bahamas: "Bahamas"
       2. Add to "sources" above:         bahamas: { name:"Bahamas Competent Authority", url:"https://taxreporting.finance.gov.bs", verified:"<date you checked>" }
       3. Add deadline entries here, e.g.:
          { jur:"bahamas", regime:"FATCA / CRS", source:"bahamas", annual:true, mon:9, day:30,
            title:"FATCA & CRS reporting", applies:"All Bahamas reporting FIs via the AEOI portal." }
       The "Bahamas" filter button appears on its own. No widget changes needed.
       ============================================================ */
  ]
};
