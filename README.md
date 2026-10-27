# FIT3179 DV2: Mental Health in Australia

This is my Data Visualisation 2 project for FIT3179. It's a visualisation on mental health in Australia: how common mental disorders are, who's most affected, how things have changed over time, and whether people are actually getting help.

built with Vega-Lite and hosted on GitHub Pages.

**Author:** Mithra

## The story

The page is split into seven sections:

1. **How common is it?** Almost half of all Australians will have a mental disorder at some point.
2. **Who is affected?** Young people, and young women most of all.
3. **Over time:** more Australians report a mental health condition than ever.
4. **Where in Australia?** Different states perform worse on different measures.
5. **Getting help:** less than half of people with a disorder see a professional.
6. **Services across the country:** access to Medicare mental health care is uneven.
7. **What it means:** three key takeaways.



**Advanced idioms (9):** waffle, treemap, heatmap, choropleth, population pyramid, connected dot plot, proportional symbol map, bump chart, bivariate choropleth.

**Maps (3):** choropleth, bivariate choropleth and proportional symbol map, all using an equal-area projection centred on Australia.

## Interaction

- Radio buttons on the disorder heatmap to switch between everyone, females and males
- A drop-down on the state map to switch between three indicators
- Hover tooltips on every chart
- Hover highlighting on the line chart

## Data sources

- ABS, *National Study of Mental Health and Wellbeing, 2020–2022*
- ABS, *National Health Survey, 2022*
- AIHW, *Medicare mental health services 2024–25* (state, age/sex and SA4 tables)
- Harris et al. (2025), *Australian and New Zealand Journal of Psychiatry* 59(9), 810–823, which re-analyses the NSMHW data on who people saw for help
- ABS ASGS 2021 SA4 boundaries, and state boundaries from [tonywr71/GeoJson-Data](https://github.com/tonywr71/GeoJson-Data)

`data/SOURCES.md` lists the exact table behind every number, and `scripts/build_data.py` rebuilds the CSV files from the copied numbers.


## Files

```
index.html            the page
css/style.css         all the styling (colours, fonts, layout)
js/main.js            shared chart theme + loads each spec into the page
specs/                one Vega-Lite / Vega spec per chart
data/                 CSV + GeoJSON files, and SOURCES.md
img/                  illustrations used on the page
scripts/build_data.py rebuilds the CSV files
CODE_GUIDE.md         my notes explaining every spec, block by block
```

## Design choices

- **Colours:** mostly blues, with one warm orange (`#e07a5f`) used only to highlight things, like the states with higher distress but lower service use.
- **Fonts:** Bree Serif for headings, Lato for body text, and Source Sans 3 inside the charts.
- **Layout:** sections alternate between white and light blue so it's easy to tell where each part of the story starts.

## AI Aknowledgement
I used AI assistance to help draft the visual design (fonts, colour, etc) and to get feedback on the layout of my visualisation. All data comes from the sources listed above and hasn't been changed apart from cleaning it up into CSV files