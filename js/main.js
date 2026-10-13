// Map each <div> id to the Vega-Lite spec it should show
const charts = {
  "#vis-waffle":        "specs/01_waffle.vg.json",
  "#vis-heatmap":       "specs/02_heatmap_disorders.vg.json",
  "#vis-diverging":     "specs/03_diverging_k10.vg.json",
  "#vis-trend":         "specs/04_line_trend.vg.json",
  "#vis-choropleth":    "specs/05_choropleth_states.vg.json",
  "#vis-dumbbell":      "specs/06_dumbbell_help_gap.vg.json",
  "#vis-pyramid":       "specs/07_pyramid_mbs_age_sex.vg.json",
  "#vis-heatmap-years": "specs/08_heatmap_mbs_years.vg.json",
  "#vis-symbol":        "specs/09_symbol_map_mbs.vg.json",
  "#vis-tiles":         "specs/10_tilemap_sparklines.vg.json"
};

// vegaEmbed loads each spec file and draws the chart in its <div>
for (const [el, spec] of Object.entries(charts)) {
  vegaEmbed(el, spec).catch(console.error);
}
