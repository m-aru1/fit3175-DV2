// Shared look for every chart: fonts and colours match the page.
// Keeping it here means each spec only describes its data, marks and encodings.
const theme = {
  font: "Source Sans 3",
  background: null,                       // transparent, so the page colour shows through
  view: { stroke: null },                 // no border around each plot
  axis: {
    labelFontSize: 12, titleFontSize: 13, titleFontWeight: 600,
    labelColor: "#5a6b82", titleColor: "#13213a",
    gridColor: "#e6ecf3", domainColor: "#c3d1df", tickColor: "#c3d1df"
  },
  legend: { labelFontSize: 12, titleFontSize: 12, titleFontWeight: 600, labelColor: "#5a6b82", titleColor: "#13213a" },
  header: { labelColor: "#13213a" },
  title: { fontSize: 14, color: "#13213a" }
};

// Options for every chart
const opts = {
  config: theme,
  renderer: "svg",                        // sharp text at any zoom
  actions: { export: true, source: false, compiled: false, editor: true }
};

// Which spec file goes into which <div>, in story order
const charts = {
  "#vis-waffle":        "specs/01_waffle.vg.json",
  "#vis-treemap":       "specs/06_treemap_disorders.vg.json",
  "#vis-heatmap":       "specs/02_heatmap_disorders.vg.json",
  "#vis-diverging":     "specs/03_diverging_k10.vg.json",
  "#vis-trend":         "specs/04_line_trend.vg.json",
  "#vis-choropleth":    "specs/05_choropleth_states.vg.json",
  "#vis-pyramid":       "specs/08_pyramid_mbs_age_sex.vg.json",
  "#vis-heatmap-years": "specs/09_heatmap_mbs_years.vg.json",
  "#vis-dumbbell":      "specs/07_dumbbell_change_age.vg.json",
  "#vis-bivariate":     "specs/14_bivariate_map.vg.json",
  "#vis-symbol":        "specs/11_symbol_map_mbs.vg.json",
  "#vis-bump":          "specs/13_bump_states.vg.json"
};

// vegaEmbed fetches each spec, compiles it and draws it in its <div>
for (const [el, spec] of Object.entries(charts)) {
  vegaEmbed(el, spec, opts).catch(err => console.error(spec, err));
}
